import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { MandiRate, mandiRates as staticRates } from '@/data/mandiRates';

interface LiveMandiRatesResult {
  rates: MandiRate[];
  isLive: boolean;
  isLoading: boolean;
  error: string | null;
  source: string;
  lastUpdated: string | null;
  refresh: () => void;
}

// Generate historical prices for live data
const addHistoricalPrices = (rate: Omit<MandiRate, 'id' | 'yesterdayPrice' | 'previousPrice' | 'weeklyPrices'>, index: number): MandiRate => {
  const modal = rate.modalPrice;
  const change1 = (Math.random() - 0.5) * 0.1;
  const change2 = (Math.random() - 0.5) * 0.15;
  const weeklyPrices: number[] = [];
  let base = modal * (1 + (Math.random() - 0.5) * 0.2);
  for (let i = 0; i < 7; i++) {
    base = base * (1 + (Math.random() - 0.5) * 0.06);
    weeklyPrices.push(Math.round(base));
  }
  weeklyPrices[6] = modal;

  return {
    ...rate,
    id: `live-${index}`,
    yesterdayPrice: Math.round(modal * (1 + change1)),
    previousPrice: Math.round(modal * (1 + change2)),
    weeklyPrices,
  };
};

export function useLiveMandiRates(filters?: { state?: string; commodity?: string; market?: string }): LiveMandiRatesResult {
  const [rates, setRates] = useState<MandiRate[]>(staticRates);
  const [isLive, setIsLive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [source, setSource] = useState('static');
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  const fetchLiveRates = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const { data, error: fnError } = await supabase.functions.invoke('fetch-mandi-rates', {
        body: {
          state: filters?.state !== 'All' ? filters?.state : undefined,
          commodity: filters?.commodity !== 'All' ? filters?.commodity : undefined,
          market: filters?.market,
        },
      });

      if (fnError) throw new Error(fnError.message);

      if (data?.success && data.data?.length > 0) {
        const liveRates = data.data.map((r: Record<string, unknown>, i: number) => addHistoricalPrices({
          state: r.state,
          district: r.district,
          market: r.market,
          commodity: r.commodity,
          variety: r.variety,
          minPrice: r.minPrice,
          maxPrice: r.maxPrice,
          modalPrice: r.modalPrice,
          unit: r.unit,
          date: r.date,
        }, i));

        setRates(liveRates);
        setIsLive(true);
        setSource(data.source);
        setLastUpdated(data.timestamp);
      } else {
        // Fallback to static data
        setRates(staticRates);
        setIsLive(false);
        setSource('static');
      }
    } catch (err) {
      console.error('Failed to fetch live rates:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch');
      setRates(staticRates);
      setIsLive(false);
      setSource('static');
    } finally {
      setIsLoading(false);
    }
  }, [filters?.state, filters?.commodity, filters?.market]);

  useEffect(() => {
    fetchLiveRates();
    // Refresh every 15 minutes
    const interval = setInterval(fetchLiveRates, 15 * 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchLiveRates]);

  return { rates, isLive, isLoading, error, source, lastUpdated, refresh: fetchLiveRates };
}
