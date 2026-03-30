const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

interface MandiRateResponse {
  state: string;
  district: string;
  market: string;
  commodity: string;
  variety: string;
  minPrice: number;
  maxPrice: number;
  modalPrice: number;
  unit: string;
  date: string;
}

interface DataGovRecord {
  state?: string;
  State?: string;
  district?: string;
  District?: string;
  market?: string;
  Market?: string;
  commodity?: string;
  Commodity?: string;
  variety?: string;
  Variety?: string;
  min_price?: string;
  Min_Price?: string;
  max_price?: string;
  Max_Price?: string;
  modal_price?: string;
  Modal_Price?: string;
  modal?: string;
  arrival_date?: string;
  Arrival_Date?: string;
}

interface EnamDataItem {
  state?: string;
  State?: string;
  state_name?: string;
  district?: string;
  District?: string;
  district_name?: string;
  market?: string;
  Market?: string;
  market_name?: string;
  apmc?: string;
  commodity?: string;
  Commodity?: string;
  commodity_name?: string;
  variety?: string;
  Variety?: string;
  variety_name?: string;
  min_price?: string;
  minPrice?: string;
  Min_Price?: string;
  max_price?: string;
  maxPrice?: string;
  Max_Price?: string;
  modal_price?: string;
  modalPrice?: string;
  Modal_Price?: string;
  unit?: string;
  arrival_date?: string;
  date?: string;
}

function parseDataGovRecords(records: DataGovRecord[]): MandiRateResponse[] {
  const results: MandiRateResponse[] = [];
  for (const r of records) {
    const modalPrice = parseFloat(r.modal_price || r.Modal_Price || r.modal || '0');
    if (modalPrice <= 0) continue;
    results.push({
      state: r.state || r.State || '',
      district: r.district || r.District || '',
      market: r.market || r.Market || '',
      commodity: r.commodity || r.Commodity || '',
      variety: r.variety || r.Variety || 'Local',
      minPrice: parseFloat(r.min_price || r.Min_Price || '0'),
      maxPrice: parseFloat(r.max_price || r.Max_Price || '0'),
      modalPrice,
      unit: 'Quintal',
      date: r.arrival_date || r.Arrival_Date || new Date().toISOString().split('T')[0],
    });
  }
  return results;
}

function parseEnamData(data: EnamDataItem[]): MandiRateResponse[] {
  const results: MandiRateResponse[] = [];
  if (!data || !Array.isArray(data)) return results;
  for (const item of data) {
    const modalPrice = parseFloat(item.modal_price || item.modalPrice || item.Modal_Price || '0');
    if (modalPrice <= 0) continue;
    results.push({
      state: item.state || item.State || item.state_name || '',
      district: item.district || item.District || item.district_name || '',
      market: item.market || item.Market || item.market_name || item.apmc || '',
      commodity: item.commodity || item.Commodity || item.commodity_name || '',
      variety: item.variety || item.Variety || item.variety_name || 'Local',
      minPrice: parseFloat(item.min_price || item.minPrice || item.Min_Price || '0'),
      maxPrice: parseFloat(item.max_price || item.maxPrice || item.Max_Price || '0'),
      modalPrice,
      unit: item.unit || 'Quintal',
      date: item.arrival_date || item.date || new Date().toISOString().split('T')[0],
    });
  }
  return results;
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json().catch(() => ({}));
    const { state, commodity, market } = body as { state?: string; commodity?: string; market?: string };

    let results: MandiRateResponse[] = [];
    let source = 'none';

    // Attempt 1: data.gov.in API (primary, uses API key)
    const apiKey = Deno.env.get('DATA_GOV_API_KEY');
    if (apiKey) {
      try {
        console.log('Attempting data.gov.in API...');
        // Resource ID for daily commodity prices
        const resourceId = '9ef84268-d588-465a-a308-a864a43d0070';
        const params = new URLSearchParams({
          'api-key': apiKey,
          format: 'json',
          limit: '500',
        });
        if (state && state !== 'All') params.append('filters[state]', state);
        if (commodity && commodity !== 'All') params.append('filters[commodity]', commodity);

        const url = `https://api.data.gov.in/resource/${resourceId}?${params.toString()}`;
        const resp = await fetch(url, {
          headers: { 'Accept': 'application/json' },
        });

        if (resp.ok) {
          const json = await resp.json();
          const records = json.records || json.data || [];
          if (Array.isArray(records) && records.length > 0) {
            results = parseDataGovRecords(records);
            source = 'data.gov.in';
            console.log(`data.gov.in returned ${results.length} records`);
          }
        } else {
          console.log('data.gov.in responded with status:', resp.status);
        }
      } catch (e) {
        console.log('data.gov.in attempt failed:', e instanceof Error ? e.message : e);
      }
    }

    // Attempt 2: eNAM API fallback
    if (results.length === 0) {
      try {
        console.log('Attempting eNAM API...');
        const today = new Date().toISOString().split('T')[0];
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
        const formData = new URLSearchParams();
        formData.append('language', 'en');
        formData.append('stateName', state || '');
        formData.append('apmcName', '');
        formData.append('commodityName', commodity || '');
        formData.append('fromDate', yesterday);
        formData.append('toDate', today);

        const enamResponse = await fetch('https://enam.gov.in/web/Ajax/trade_data_list', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            'Accept': 'application/json, text/html, */*',
            'Referer': 'https://enam.gov.in/web/dashboard/trade-data',
          },
          body: formData.toString(),
        });

        if (enamResponse.ok) {
          const responseText = await enamResponse.text();
          if (responseText.startsWith('[') || responseText.startsWith('{')) {
            const jsonData = JSON.parse(responseText);
            const parsed = parseEnamData(Array.isArray(jsonData) ? jsonData : jsonData.data || jsonData.records || []);
            if (parsed.length > 0) {
              results = parsed;
              source = 'enam';
              console.log(`eNAM returned ${results.length} records`);
            }
          }
        }
      } catch (e) {
        console.log('eNAM attempt failed:', e instanceof Error ? e.message : e);
      }
    }

    // Apply filters
    if (results.length > 0) {
      if (state && state !== 'All') results = results.filter(r => r.state.toLowerCase().includes(state.toLowerCase()));
      if (commodity && commodity !== 'All') results = results.filter(r => r.commodity.toLowerCase().includes(commodity.toLowerCase()));
      if (market) results = results.filter(r => r.market.toLowerCase().includes(market.toLowerCase()));
    }

    console.log(`Returning ${results.length} results from source: ${source}`);

    return new Response(
      JSON.stringify({ success: true, data: results, source, count: results.length, timestamp: new Date().toISOString() }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error fetching mandi rates:', error);
    return new Response(
      JSON.stringify({ success: false, error: error instanceof Error ? error.message : 'Failed to fetch mandi rates', data: [], source: 'error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
