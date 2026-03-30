import { useState, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { states, MandiRate } from "@/data/mandiRates";
import { translateCropName, translateStateName, translatePlaceName } from "@/data/dataTranslations";
import { Search, MapPin, ChevronDown, ChevronUp, TrendingUp, TrendingDown, Minus, BarChart3, Eye, EyeOff, AlertTriangle, Bell, RefreshCw, Wifi, WifiOff, ArrowUpDown, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { Sparkline } from "@/components/ui/sparkline";
import { AnimatedLabel } from "@/components/AnimatedLabel";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { useLiveMandiRates } from "@/hooks/useLiveMandiRates";
import { CommodityCategoryChips, COMMODITY_CATEGORIES } from "@/components/mandi/CommodityCategoryChips";
import { StateGroupHeader } from "@/components/mandi/StateGroupHeader";

interface MarketGroup {
  market: string;
  district: string;
  state: string;
  lat?: number;
  lng?: number;
  items: MandiRate[];
}

// Price Alert Badge Component
const PriceAlertBadge = ({ current, previous, threshold = 10 }: { current: number; previous?: number; threshold?: number }) => {
  if (!previous) return null;
  const percentChange = ((current - previous) / previous) * 100;
  const absChange = Math.abs(percentChange);
  
  if (absChange < threshold) return null;
  
  const isUp = percentChange > 0;
  const isSevere = absChange >= 15;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className={`
        inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold
        ${isUp 
          ? isSevere 
            ? "bg-success/20 text-success border border-success/30" 
            : "bg-accent/20 text-accent border border-accent/30"
          : isSevere 
            ? "bg-destructive/20 text-destructive border border-destructive/30" 
            : "bg-warning/20 text-warning border border-warning/30"
        }
      `}
    >
      {isSevere && <AlertTriangle size={10} className="animate-pulse" />}
      {isUp ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
      <span>{isUp ? "+" : ""}{percentChange.toFixed(1)}%</span>
    </motion.div>
  );
};

const PriceChange = ({ current, previous, label, delay = 0 }: { current: number; previous?: number; label: string; delay?: number }) => {
  if (!previous) return null;
  const diff = current - previous;
  const percent = ((diff / previous) * 100).toFixed(1);
  const isUp = diff > 0;
  const isDown = diff < 0;
  
  return (
    <motion.div 
      className="flex items-center gap-1 text-[10px]"
      initial={{ opacity: 0, x: -5 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay }}
    >
      <span className="text-muted-foreground">{label}:</span>
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, delay: delay + 0.1 }}
      >
        {isUp && <TrendingUp size={10} className="text-accent" />}
        {isDown && <TrendingDown size={10} className="text-destructive" />}
        {!isUp && !isDown && <Minus size={10} className="text-muted-foreground" />}
      </motion.span>
      <motion.span 
        className={isUp ? "text-accent font-medium" : isDown ? "text-destructive font-medium" : "text-muted-foreground"}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: delay + 0.15 }}
      >
        {isUp ? "+" : ""}{percent}%
      </motion.span>
    </motion.div>
  );
};

export default function MandiRates() {
  const { t, lang } = useLanguage();
  const { toast } = useToast();
  const [search, setSearch] = useState("");
  const [stateFilter, setStateFilter] = useState("All");
  const [commodityFilter, setCommodityFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [districtFilter, setDistrictFilter] = useState("All");
  const [nearbyResults, setNearbyResults] = useState<MandiRate[]>([]);
  const [showNearby, setShowNearby] = useState(false);
  const [expandedMarkets, setExpandedMarkets] = useState<Set<string>>(new Set());
  const [showCharts, setShowCharts] = useState(true);
  const [showAlertsOnly, setShowAlertsOnly] = useState(false);
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc">("default");
  const [groupByState, setGroupByState] = useState(false);
  const [expandedStates, setExpandedStates] = useState<Set<string>>(new Set());

  const { rates: allRates, isLive, isLoading, source, lastUpdated, refresh } = useLiveMandiRates();

  // Count significant price changes (>10%)
  const alertCount = useMemo(() => {
    return allRates.filter(r => {
      if (!r.yesterdayPrice) return false;
      const percentChange = Math.abs((r.modalPrice - r.yesterdayPrice) / r.yesterdayPrice * 100);
      return percentChange >= 10;
    }).length;
  }, [allRates]);

  // Derive districts from selected state
  const districts = useMemo(() => {
    if (stateFilter === "All") return [];
    return ["All", ...Array.from(new Set(allRates.filter(r => r.state === stateFilter).map(r => r.district))).sort()];
  }, [allRates, stateFilter]);

  const commodities: string[] = ["All", ...Array.from(new Set(allRates.map(r => r.commodity))).sort()];

  const filtered = useMemo(() => {
    const categoryKeywords = categoryFilter !== "All" ? COMMODITY_CATEGORIES[categoryFilter] || [] : [];
    
    let result = allRates.filter(r => {
      const matchState = stateFilter === "All" || r.state === stateFilter;
      const matchDistrict = districtFilter === "All" || r.district === districtFilter;
      const matchCommodity = commodityFilter === "All" || r.commodity === commodityFilter;
      const matchCategory = categoryFilter === "All" || categoryKeywords.some(kw => 
        r.commodity.toLowerCase().includes(kw.toLowerCase()) || kw.toLowerCase().includes(r.commodity.toLowerCase())
      );
      const matchSearch = search === "" || 
        r.market.toLowerCase().includes(search.toLowerCase()) || 
        r.district.toLowerCase().includes(search.toLowerCase()) || 
        r.state.toLowerCase().includes(search.toLowerCase()) || 
        r.commodity.toLowerCase().includes(search.toLowerCase());
      
      if (showAlertsOnly) {
        if (!r.yesterdayPrice) return false;
        const percentChange = Math.abs((r.modalPrice - r.yesterdayPrice) / r.yesterdayPrice * 100);
        return matchState && matchDistrict && matchCommodity && matchCategory && matchSearch && percentChange >= 10;
      }
      return matchState && matchDistrict && matchCommodity && matchCategory && matchSearch;
    });

    // Sort
    if (sortBy === "price-asc") result = [...result].sort((a, b) => a.modalPrice - b.modalPrice);
    if (sortBy === "price-desc") result = [...result].sort((a, b) => b.modalPrice - a.modalPrice);

    return result;
  }, [allRates, stateFilter, districtFilter, commodityFilter, categoryFilter, search, showAlertsOnly, sortBy]);

  const findNearby = () => {
    if (!navigator.geolocation) return alert("Geolocation not supported");
    navigator.geolocation.getCurrentPosition(pos => {
      const { latitude, longitude } = pos.coords;
      const withDist = allRates.filter(r => r.lat && r.lng).map(r => ({
        ...r,
        dist: Math.sqrt(Math.pow((r.lat! - latitude) * 111, 2) + Math.pow((r.lng! - longitude) * 111 * Math.cos(latitude * Math.PI / 180), 2))
      })).sort((a, b) => a.dist - b.dist);
      setNearbyResults(withDist.slice(0, 40));
      setShowNearby(true);
    }, () => alert("Location access denied. Please enable location."));
  };

  const displayData = showNearby ? nearbyResults : filtered;

  const grouped = useMemo(() => {
    const map = new Map<string, MarketGroup>();
    displayData.forEach(r => {
      const key = `${r.market}-${r.district}-${r.state}`;
      if (!map.has(key)) {
        map.set(key, { market: r.market, district: r.district, state: r.state, lat: r.lat, lng: r.lng, items: [] });
      }
      map.get(key)!.items.push(r);
    });
    return Array.from(map.values());
  }, [displayData]);

  // State-wise grouping
  const stateGroups = useMemo(() => {
    if (!groupByState) return null;
    const map = new Map<string, MarketGroup[]>();
    grouped.forEach(g => {
      if (!map.has(g.state)) map.set(g.state, []);
      map.get(g.state)!.push(g);
    });
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [grouped, groupByState]);

  const toggleState = (state: string) => {
    setExpandedStates(prev => {
      const next = new Set(prev);
      if (next.has(state)) {
        next.delete(state);
      } else {
        next.add(state);
      }
      return next;
    });
  };

  const toggleMarket = (key: string) => {
    setExpandedMarkets(prev => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };
  const renderMarketCard = (group: MarketGroup, i: number) => {
    const key = `${group.market}-${group.district}-${group.state}`;
    const isExpanded = expandedMarkets.has(key);
    const hasMultiple = group.items.length > 1;
    const previewItems = isExpanded ? group.items : group.items.slice(0, 1);

    return (
      <motion.div key={key} className="glass-card overflow-hidden"
        initial={{ opacity: 0, y: 20, scale: 0.97 }} 
        animate={{ opacity: 1, y: 0, scale: 1 }} 
        transition={{ type: "spring", stiffness: 350, damping: 15, delay: Math.min(i * 0.05, 0.4) }}
        whileHover={{ y: -4, scale: 1.005 }}
      >
        <div
          className={`flex justify-between items-center p-5 pb-3 ${hasMultiple ? "cursor-pointer" : ""}`}
          onClick={() => hasMultiple && toggleMarket(key)}
        >
          <div>
            <h3 className="font-display font-semibold text-foreground text-lg">
              🏪 {translatePlaceName(group.market, lang)}
            </h3>
            <p className="text-sm text-muted-foreground">
              {translatePlaceName(group.district, lang)}, {translateStateName(group.state, lang)}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-accent/15 text-accent text-xs px-2.5 py-1 rounded-xl font-medium">
              {group.items.length} {group.items.length === 1 ? t.mandi.crop : t.mandi.crops}
            </span>
            {hasMultiple && (
              isExpanded ? <ChevronUp size={18} className="text-muted-foreground" /> : <ChevronDown size={18} className="text-muted-foreground" />
            )}
          </div>
        </div>

        <div className="px-5 pb-4 space-y-3">
          <AnimatePresence initial={false}>
            {previewItems.map((r, rIndex) => (
              <motion.div key={r.id}
                initial={{ opacity: 0, height: 0 }} 
                animate={{ opacity: 1, height: "auto" }} 
                exit={{ opacity: 0, height: 0 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className="bg-secondary/40 rounded-xl p-4">
                <div className="flex justify-between items-start mb-2 gap-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-foreground text-sm">
                      🌾 {translateCropName(r.commodity, lang)}
                    </span>
                    <PriceAlertBadge current={r.modalPrice} previous={r.yesterdayPrice} threshold={10} />
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {r.variety} • Per {r.unit}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="bg-background/50 rounded-lg p-2 text-center">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{t.mandi.minPrice}</p>
                    <p className="text-sm font-bold text-foreground mt-0.5">₹{r.minPrice.toLocaleString()}</p>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-2 text-center border border-primary/20">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{t.mandi.modalPrice}</p>
                    <p className="text-sm font-bold text-primary mt-0.5">₹{r.modalPrice.toLocaleString()}</p>
                  </div>
                  <div className="bg-background/50 rounded-lg p-2 text-center">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{t.mandi.maxPrice}</p>
                    <p className="text-sm font-bold text-foreground mt-0.5">₹{r.maxPrice.toLocaleString()}</p>
                  </div>
                </div>
                
                {showCharts && r.weeklyPrices && r.weeklyPrices.length > 0 && (
                  <div className="bg-background/30 rounded-lg p-3 border border-border/30 mb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 size={12} className="text-muted-foreground" />
                      <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                        {t.mandi.weeklyTrend || "7-Day Price Trend"}
                      </span>
                    </div>
                    <Sparkline data={r.weeklyPrices} height={50} />
                    <div className="flex justify-between mt-1">
                      <span className="text-[9px] text-muted-foreground">{t.mandi.weekAgo || "7 days ago"}</span>
                      <span className="text-[9px] text-muted-foreground">{t.mandi.today || "Today"}</span>
                    </div>
                  </div>
                )}
                
                <div className="bg-background/30 rounded-lg p-2.5 border border-border/30">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-3">
                      {r.yesterdayPrice && (
                        <div className="text-[10px]">
                          <span className="text-muted-foreground">{t.mandi.yesterday || "Yesterday"}:</span>
                          <span className="font-medium text-foreground ml-1">₹{r.yesterdayPrice.toLocaleString()}</span>
                        </div>
                      )}
                      {r.previousPrice && (
                        <div className="text-[10px]">
                          <span className="text-muted-foreground">{t.mandi.before || "Before"}:</span>
                          <span className="font-medium text-foreground ml-1">₹{r.previousPrice.toLocaleString()}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <PriceChange current={r.modalPrice} previous={r.yesterdayPrice} label={t.mandi.vsYesterday || "vs Yesterday"} delay={0} />
                      <PriceChange current={r.modalPrice} previous={r.previousPrice} label={t.mandi.vsBefore || "vs Before"} delay={0.1} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {hasMultiple && !isExpanded && (
            <button onClick={() => toggleMarket(key)} className="w-full text-center text-xs text-primary font-medium py-1 hover:underline">
              + {group.items.length - 1} {t.mandi.tapExpand}
            </button>
          )}
        </div>
        <div className="px-5 pb-3">
          <p className="text-[10px] text-muted-foreground">{group.items[0].date}</p>
        </div>
      </motion.div>
    );
  };

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-6">
        <motion.h1 
          className="text-3xl font-display font-bold text-foreground mb-6"
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          animate={{ opacity: 1, y: [0, -8, 0], scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 400, 
            damping: 10,
            y: { repeat: 2, duration: 0.4 }
          }}
        >
          {t.mandi.title}
        </motion.h1>
        {/* Live Status Indicator */}
        <div className="flex items-center gap-3 mb-4">
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${isLive ? 'bg-success/15 text-success border border-success/30' : 'bg-muted text-muted-foreground border border-border/50'}`}>
            {isLive ? <Wifi size={12} /> : <WifiOff size={12} />}
            {isLive ? `Live • ${source}` : isLoading ? 'Fetching live data...' : 'Static Data'}
          </div>
          {lastUpdated && (
            <span className="text-[10px] text-muted-foreground">
              Updated: {new Date(lastUpdated).toLocaleTimeString()}
            </span>
          )}
          <motion.button
            onClick={refresh}
            disabled={isLoading}
            className="p-1.5 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground transition-colors"
            whileTap={{ scale: 0.9 }}
            animate={isLoading ? { rotate: 360 } : {}}
            transition={isLoading ? { repeat: Infinity, duration: 1, ease: 'linear' } : {}}
          >
            <RefreshCw size={14} />
          </motion.button>
        </div>
        <motion.div
          className="flex flex-col md:flex-row gap-3 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.1 }}
        >
          <div className="relative flex-1">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: [1, 1.3, 1], rotate: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 500, 
                damping: 12, 
                delay: 0.2,
                scale: { repeat: 1, duration: 0.3 }
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2"
            >
              <Search size={18} className="text-muted-foreground" />
            </motion.div>
            <motion.input 
              value={search} 
              onChange={e => { setSearch(e.target.value); setShowNearby(false); }} 
              placeholder={t.mandi.search}
              className="w-full bg-secondary text-foreground pl-10 pr-4 py-3 rounded-2xl border border-border/50 outline-none focus:ring-2 focus:ring-primary transition-all"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.15 }}
              whileFocus={{ scale: 1.02 }}
            />
          </div>
          <motion.button 
            whileTap={{ scale: 0.9 }} 
            whileHover={{ scale: 1.08, y: -5 }}
            onClick={findNearby} 
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-3 rounded-2xl font-semibold transition-colors"
            initial={{ opacity: 0, x: 30, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 12, delay: 0.2 }}
          >
            <motion.span
              animate={{ y: [0, -8, 0, -5, 0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <MapPin size={18}/>
            </motion.span>
            <motion.span
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
            >
              {t.mandi.nearby}
            </motion.span>
          </motion.button>
        </motion.div>
        {/* Category Quick Filters */}
        <div className="mb-4">
          <CommodityCategoryChips selected={categoryFilter} onSelect={(cat) => { setCategoryFilter(cat); setCommodityFilter("All"); setShowNearby(false); }} />
        </div>

        <div className="flex gap-3 mb-4 flex-wrap items-center">
          <motion.select 
            value={stateFilter} 
            onChange={e => { setStateFilter(e.target.value); setDistrictFilter("All"); setShowNearby(false); }}
            className="bg-secondary text-secondary-foreground text-sm rounded-xl px-3 py-2.5 border border-border/50 cursor-pointer"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.1 }}
          >
            <option value="All">{t.mandi.state}: {t.mandi.all}</option>
            {states.map(s => <option key={s} value={s}>{translateStateName(s, lang)}</option>)}
          </motion.select>

          {/* District filter */}
          {stateFilter !== "All" && districts.length > 1 && (
            <motion.select
              value={districtFilter}
              onChange={e => { setDistrictFilter(e.target.value); setShowNearby(false); }}
              className="bg-secondary text-secondary-foreground text-sm rounded-xl px-3 py-2.5 border border-border/50 cursor-pointer"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              {districts.map(d => <option key={d} value={d}>{d === "All" ? `District: ${t.mandi.all}` : translatePlaceName(d, lang)}</option>)}
            </motion.select>
          )}

          <motion.select 
            value={commodityFilter} 
            onChange={e => { setCommodityFilter(e.target.value); setShowNearby(false); }}
            className="bg-secondary text-secondary-foreground text-sm rounded-xl px-3 py-2.5 border border-border/50 cursor-pointer"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.15 }}
          >
            {commodities.map(c => <option key={c} value={c}>{c === "All" ? `${t.mandi.commodity}: ${t.mandi.all}` : translateCropName(c, lang)}</option>)}
          </motion.select>

          {/* Sort */}
          <motion.select
            value={sortBy}
            onChange={e => setSortBy(e.target.value as 'default' | 'price-asc' | 'price-desc')}
            className="bg-secondary text-secondary-foreground text-sm rounded-xl px-3 py-2.5 border border-border/50 cursor-pointer"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.2 }}
          >
            <option value="default">{t.mandi.sortDefault}</option>
            <option value="price-asc">{t.mandi.sortPriceLow}</option>
            <option value="price-desc">{t.mandi.sortPriceHigh}</option>
          </motion.select>
          
          {/* Toggle Controls */}
          <div className="flex items-center gap-3 ml-auto flex-wrap">
            {/* Group by State */}
            <motion.button
              onClick={() => {
                setGroupByState(!groupByState);
                if (!groupByState) setExpandedStates(new Set(Array.from(new Set(displayData.map(r => r.state)))));
              }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-medium transition-all ${groupByState ? "bg-primary/15 border-primary/30 text-primary" : "bg-secondary/60 border-border/50 text-muted-foreground hover:border-primary/30"}`}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.25 }}
            >
              <Layers size={13} />
              {t.mandi.byState}
            </motion.button>

            {/* Chart Toggle */}
            <div className="flex items-center gap-2 bg-secondary/60 px-3 py-2 rounded-xl border border-border/50">
              {showCharts ? <Eye size={13} className="text-primary" /> : <EyeOff size={13} className="text-muted-foreground" />}
              <span className="text-xs text-muted-foreground">{t.mandi.showCharts || "Charts"}</span>
              <Switch checked={showCharts} onCheckedChange={setShowCharts} className="scale-75" />
            </div>
            
            {/* Alerts */}
            <motion.button
              onClick={() => {
                setShowAlertsOnly(!showAlertsOnly);
                if (!showAlertsOnly && alertCount > 0) {
                  toast({ title: t.mandi.alertsEnabled || "Price Alerts Enabled", description: `${alertCount} ${t.mandi.significantChanges || "commodities with significant price changes (>10%)"}` });
                }
              }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-medium transition-all ${showAlertsOnly ? "bg-warning/20 border-warning/50 text-warning" : "bg-secondary/60 border-border/50 text-muted-foreground hover:border-warning/30"}`}
              whileTap={{ scale: 0.95 }}
            >
              <Bell size={13} className={showAlertsOnly ? "animate-pulse" : ""} />
              {t.mandi.priceAlerts || "Alerts"}
              {alertCount > 0 && (
                <span className="bg-warning text-warning-foreground text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[16px] text-center">{alertCount}</span>
              )}
            </motion.button>
          </div>
        </div>
        
        {showNearby && (
          <motion.p 
            className="text-sm text-primary mb-3 font-medium"
            initial={{ opacity: 0, x: -20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1, y: [0, -5, 0] }}
            transition={{ 
              type: "spring", 
              stiffness: 400,
              y: { repeat: 2, duration: 0.3 }
            }}
          >
            <motion.span
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
              className="inline-block"
            >
              📍
            </motion.span>
            {" "}{t.mandi.showingNearby} ({grouped.length})
          </motion.p>
        )}
        {showAlertsOnly && (
          <motion.p 
            className="text-sm text-warning mb-3 font-medium flex items-center gap-2"
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.span
              animate={{ y: [0, -8, 0, -5, 0], rotate: [0, -10, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <AlertTriangle size={14} />
            </motion.span>
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
            >
              {t.mandi.showingAlerts || "Showing only commodities with >10% price change"}
            </motion.span>
          </motion.p>
        )}
        <motion.p 
          className="text-sm text-muted-foreground mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, -4, 0] }}
          transition={{ delay: 0.5, y: { repeat: 1, duration: 0.3, delay: 0.55 } }}
        >
          <motion.span
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="inline-block font-semibold text-foreground"
          >
            {grouped.length}
          </motion.span>
          {" "}{t.mandi.markets} • {" "}
          <motion.span
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
            className="inline-block font-semibold text-foreground"
          >
            {displayData.length}
          </motion.span>
          {" "}{t.mandi.rates}
        </motion.p>
        {/* Market Cards - with optional state grouping */}
        {groupByState && stateGroups ? (
          <div className="space-y-4">
            {stateGroups.map(([stateName, markets], si) => {
              const isStateExpanded = expandedStates.has(stateName);
              const totalRates = markets.reduce((sum, m) => sum + m.items.length, 0);
              return (
                <div key={stateName} className="space-y-2">
                  <StateGroupHeader
                    state={translateStateName(stateName, lang)}
                    marketCount={markets.length}
                    rateCount={totalRates}
                    isExpanded={isStateExpanded}
                    onToggle={() => toggleState(stateName)}
                    index={si}
                  />
                  <AnimatePresence initial={false}>
                    {isStateExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="space-y-3 pl-2 border-l-2 border-primary/10 ml-2"
                      >
                        {markets.map((group, i) => renderMarketCard(group, i))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="space-y-3">
            {grouped.map((group, i) => renderMarketCard(group, i))}
          </div>
        )}
      </div>
    </PageTransition>
  );
}