import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { soilRecommendations, locationRecommendations, seasonRecommendations, soilTypes } from "@/data/recommendations";
import { translateCropName, translateStateName } from "@/data/dataTranslations";
import {
  translateSoilType, translateSoilDescription, translateRegionName,
  translateRegionClimate, translateSeasonName, translateSeasonMonths,
  translateReason, translateTips,
} from "@/data/recommendationsTranslations";
import { Layers, MapPin, Sun } from "lucide-react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { AnimatedLabel } from "@/components/AnimatedLabel";

export default function Recommendations() {
  const { t, lang } = useLanguage();
  const [tab, setTab] = useState<"soil" | "location" | "season">("soil");
  const [selectedSoil, setSelectedSoil] = useState(soilTypes[0]);
  const [selectedRegion, setSelectedRegion] = useState(locationRecommendations[0].region);

  const currentMonth = new Date().getMonth();
  const defaultSeason = currentMonth >= 5 && currentMonth <= 9 ? "Kharif" : currentMonth >= 10 || currentMonth <= 2 ? "Rabi" : "Zaid";
  const [selectedSeason, setSelectedSeason] = useState(defaultSeason);

  const soilData = soilRecommendations.find(s => s.soilType === selectedSoil);
  const locationData = locationRecommendations.find(l => l.region === selectedRegion);
  const seasonData = seasonRecommendations.find(s => s.season === selectedSeason);

  const tabs = [
    { id: "soil" as const, label: t.recommendations.soilBased, icon: Layers },
    { id: "location" as const, label: t.recommendations.locationBased, icon: MapPin },
    { id: "season" as const, label: t.recommendations.seasonBased, icon: Sun },
  ];

  // Build a composite key for translation lookup to avoid ID conflicts
  const getReasonKey = (section: string, id: string) => {
    // For IDs that conflict (s1-s4), use section prefix
    if (section === "soil" && id.startsWith("s")) return `soil-${id}`;
    if (section === "location" && id.startsWith("s")) return `loc-${id}`;
    return id;
  };

  const RecCard = ({ r, i, section }: { r: Recommendation; i: number; section: string }) => {
    const tKey = getReasonKey(section, r.id);
    const translatedReason = translateReason(tKey, lang, r.reason);
    const translatedTips = translateTips(tKey, lang, r.tips);

    return (
      <motion.div 
        key={r.id} 
        initial={{ opacity: 0, y: 20, rotate: -2 }} 
        animate={{ opacity: 1, y: 0, rotate: 0 }} 
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: i * 0.08 }} 
        whileHover={{ y: -8, scale: 1.02, rotate: 1 }}
        className="glass-card p-5"
      >
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.08 + 0.1 }}
        >
          <h3 className="font-display font-bold text-foreground text-lg mb-1 flex items-center gap-2">
            <motion.span
              animate={{ y: [0, -5, 0], rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="inline-block"
            >
              🌱
            </motion.span>
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: i * 0.1 }}
            >
              {translateCropName(r.crop, lang)}
            </motion.span>
          </h3>
        </motion.div>
        <motion.p 
          className="text-sm text-muted-foreground mb-3 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.08 + 0.15 }}
        >
          {translatedReason}
        </motion.p>
        <motion.div 
          className="bg-secondary/50 rounded-xl p-3 mb-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 400, delay: i * 0.08 + 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.h4 
            className="text-xs font-semibold text-primary mb-1 flex items-center gap-1"
            animate={{ y: [0, -2, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1 }}
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
            >
              💡
            </motion.span>
            {t.recommendations.expertTips}
          </motion.h4>
          <ul className="text-xs text-foreground space-y-1">
            {translatedTips.map((tip: string, tipIdx: number) => (
              <motion.li 
                key={tip}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 + 0.25 + tipIdx * 0.05 }}
              >
                • {tip}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.p 
          className="text-[10px] text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.08 + 0.3 }}
        >
          {t.recommendations.source}: {r.expertSource}
        </motion.p>
      </motion.div>
    );
  };

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-6 max-w-3xl">
        <motion.h1 
          className="text-3xl font-display font-bold text-foreground mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <motion.span
            animate={{ y: [0, -6, 0], rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="inline-block"
          >
            💡
          </motion.span>{" "}
          {t.recommendations.title}
        </motion.h1>
        <div className="flex gap-2 mb-6">
          {tabs.map((tb, i) => (
            <motion.button 
              key={tb.id} 
              onClick={() => setTab(tb.id)}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 400, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${tab === tb.id ? "text-primary-foreground" : "text-secondary-foreground hover:bg-muted"}`}
            >
              <motion.span 
                className="relative z-10 flex items-center gap-2"
                animate={tab === tb.id ? { y: [0, -3, 0] } : {}}
                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              >
                <motion.span
                  animate={tab === tb.id ? { rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] } : {}}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <tb.icon size={16}/>
                </motion.span>
                {tb.label}
              </motion.span>
              {tab === tb.id && <motion.div layoutId="rec-tab" className="absolute inset-0 bg-primary rounded-xl" transition={{ type: "spring", stiffness: 400, damping: 30 }} />}
            </motion.button>
          ))}
        </div>

        {tab === "soil" && (
          <motion.div key="soil" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 300 }}>
            <div className="flex gap-2 overflow-x-auto pb-3 mb-4">
              {soilTypes.map((s, i) => (
                <motion.button 
                  key={s} 
                  onClick={() => setSelectedSoil(s)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, delay: i * 0.05 }}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative whitespace-nowrap px-3 py-1.5 rounded-xl text-sm transition-all ${selectedSoil === s ? "text-primary-foreground font-medium" : "text-secondary-foreground hover:bg-muted"}`}
                >
                  <motion.span 
                    className="relative z-10"
                    animate={selectedSoil === s ? { y: [0, -3, 0] } : {}}
                    transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                  >
                    {translateSoilType(s, lang)}
                  </motion.span>
                  {selectedSoil === s && <motion.div layoutId="soil-pill" className="absolute inset-0 bg-primary rounded-xl" transition={{ type: "spring", stiffness: 400, damping: 30 }} />}
                </motion.button>
              ))}
            </div>
            {soilData && (
              <div>
                <motion.p 
                  className="text-sm text-muted-foreground mb-4 leading-relaxed"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {translateSoilDescription(soilData.soilType, lang) || soilData.description}
                </motion.p>
                <div className="space-y-4">{soilData.recommendations.map((r, i) => <RecCard key={r.id} r={r} i={i} section="soil" />)}</div>
              </div>
            )}
          </motion.div>
        )}

        {tab === "location" && (
          <motion.div key="location" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 300 }}>
            <div className="flex gap-2 overflow-x-auto pb-3 mb-4">
              {locationRecommendations.map((l, i) => (
                <motion.button 
                  key={l.region} 
                  onClick={() => setSelectedRegion(l.region)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, delay: i * 0.05 }}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative whitespace-nowrap px-3 py-1.5 rounded-xl text-sm transition-all ${selectedRegion === l.region ? "text-primary-foreground font-medium" : "text-secondary-foreground hover:bg-muted"}`}
                >
                  <motion.span 
                    className="relative z-10 flex items-center gap-1"
                    animate={selectedRegion === l.region ? { y: [0, -3, 0] } : {}}
                    transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                  >
                    <motion.span
                      animate={selectedRegion === l.region ? { scale: [1, 1.3, 1] } : {}}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      📍
                    </motion.span>
                    {translateRegionName(l.region, lang)}
                  </motion.span>
                  {selectedRegion === l.region && <motion.div layoutId="loc-pill" className="absolute inset-0 bg-primary rounded-xl" transition={{ type: "spring", stiffness: 400, damping: 30 }} />}
                </motion.button>
              ))}
            </div>
            {locationData && (
              <div>
                <motion.p 
                  className="text-sm text-muted-foreground mb-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <motion.span animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="inline-block">🌤️</motion.span>{" "}
                  {t.recommendations.climate}: {translateRegionClimate(locationData.climate, lang)}
                </motion.p>
                <motion.p 
                  className="text-xs text-muted-foreground mb-4"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {t.recommendations.states}: {locationData.states.map(s => translateStateName(s, lang)).join(", ")}
                </motion.p>
                <div className="space-y-4">{locationData.recommendations.map((r, i) => <RecCard key={r.id} r={r} i={i} section="location" />)}</div>
              </div>
            )}
          </motion.div>
        )}

        {tab === "season" && (
          <motion.div key="season" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 300 }}>
            <div className="flex gap-2 mb-4">
              {seasonRecommendations.map((s, i) => (
                <motion.button 
                  key={s.season} 
                  onClick={() => setSelectedSeason(s.season)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, delay: i * 0.08 }}
                  whileHover={{ y: -6, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all ${s.season === selectedSeason ? "text-primary-foreground" : "text-secondary-foreground hover:bg-muted"}`}
                >
                  <motion.span 
                    className="relative z-10 flex items-center gap-1"
                    animate={s.season === selectedSeason ? { y: [0, -4, 0] } : {}}
                    transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                  >
                    <motion.span
                      animate={s.season === selectedSeason ? { rotate: [0, 15, -15, 0] } : {}}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      ☀️
                    </motion.span>
                    {translateSeasonName(s.season, lang)} ({translateSeasonMonths(s.months, lang)})
                  </motion.span>
                  {s.season === selectedSeason && <motion.div layoutId="season-pill" className="absolute inset-0 bg-primary rounded-xl" transition={{ type: "spring", stiffness: 400, damping: 30 }} />}
                </motion.button>
              ))}
            </div>
            {seasonData && (
              <div className="space-y-4">
                <motion.p 
                  className="text-sm text-primary font-semibold"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -3, 0] }}
                  transition={{ y: { repeat: 2, duration: 0.3 } }}
                >
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="inline-block"
                  >
                    📅
                  </motion.span>{" "}
                  {t.recommendations.currentSeason}: {translateSeasonName(seasonData.season, lang)} — {translateSeasonMonths(seasonData.months, lang)}
                </motion.p>
                {seasonData.recommendations.map((r, i) => <RecCard key={r.id} r={r} i={i} section="season" />)}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </PageTransition>
  );
}
