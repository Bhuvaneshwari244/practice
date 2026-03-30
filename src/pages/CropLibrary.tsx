import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { crops, cropCategories, Crop } from "@/data/crops";
import { translateCropName, translateCategory } from "@/data/dataTranslations";
import { Search, ArrowLeft, ExternalLink } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { AnimatedLabel } from "@/components/AnimatedLabel";

export default function CropLibrary() {
  const { t, lang } = useLanguage();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<Crop | null>(null);

  const getCropFallbackImage = (name: string, category: string) => {
    const paletteByCategory: Record<string, { bg1: string; bg2: string; accent: string }> = {
      Cereals: { bg1: "#4b5d3f", bg2: "#8ea46b", accent: "#f2d06b" },
      Pulses: { bg1: "#3f5d4b", bg2: "#70a18b", accent: "#f0e2a0" },
      Oilseeds: { bg1: "#5d523f", bg2: "#a29066", accent: "#f5ce5a" },
      Vegetables: { bg1: "#2f5f3c", bg2: "#63ad77", accent: "#d9f07f" },
      Fruits: { bg1: "#5e4a2f", bg2: "#b48447", accent: "#ffd28a" },
      Spices: { bg1: "#5d3f2f", bg2: "#a96f4d", accent: "#ffd099" },
      Commercial: { bg1: "#444b5f", bg2: "#6a7598", accent: "#cbd5ff" },
      Plantation: { bg1: "#2f4e5d", bg2: "#4f8aa3", accent: "#b7ecff" },
    };
    const palette = paletteByCategory[category] ?? { bg1: "#3f4e5d", bg2: "#6b88a3", accent: "#dce9f5" };
    const safeName = name.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const safeCategory = category.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${palette.bg1}"/><stop offset="100%" stop-color="${palette.bg2}"/></linearGradient></defs><rect width="1200" height="700" fill="url(#g)"/><path d="M0 560 C180 500, 360 620, 560 560 C780 490, 950 620, 1200 540 L1200 700 L0 700 Z" fill="${palette.accent}" opacity="0.35"/><text x="60" y="580" fill="white" font-family="system-ui" font-size="64" font-weight="700">${safeName}</text><text x="60" y="635" fill="white" opacity="0.9" font-family="system-ui" font-size="34">${safeCategory}</text></svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  };

  const resolveCropImage = (image: string, name: string, cropCategory: string) => {
    if (!image || image.includes("source.unsplash.com")) return getCropFallbackImage(name, cropCategory);
    return image;
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, cropName: string, cropCategory: string) => {
    const img = e.currentTarget;
    const retryStep = Number(img.dataset.retryStep ?? "0");
    if (retryStep === 0) { img.dataset.retryStep = "1"; img.src = getCropFallbackImage(cropName, cropCategory); return; }
    img.src = "/placeholder.svg";
  };

  const filtered = crops.filter(c =>
    (category === "All" || c.category === category) &&
    (c.name.toLowerCase().includes(search.toLowerCase()) || c.scientificName.toLowerCase().includes(search.toLowerCase()) || translateCropName(c.name, lang).toLowerCase().includes(search.toLowerCase()))
  );

  if (selected) {
    const translatedName = translateCropName(selected.name, lang);
    return (
      <PageTransition>
        <div className="container mx-auto px-4 py-6 max-w-3xl">
          <motion.button onClick={() => setSelected(null)} className="flex items-center gap-2 text-primary mb-4 hover:gap-3 transition-all"
            whileTap={{ scale: 0.97 }}>
            <ArrowLeft size={18}/>{t.common.back}
          </motion.button>
          <motion.img
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            src={resolveCropImage(selected.image, selected.name, selected.category)}
            alt={translatedName}
            className="w-full h-56 object-cover rounded-2xl mb-5 shadow-lg"
            referrerPolicy="no-referrer"
            onError={e => handleImageError(e, selected.name, selected.category)}
          />
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-display font-bold text-foreground">{translatedName}</motion.h1>
          <p className="text-muted-foreground italic mb-4">{selected.scientificName}</p>
          <p className="text-secondary-foreground mb-6 leading-relaxed">{selected.description}</p>
          <div className="grid gap-4">
            {[
              { label: t.crops.season, value: selected.season },
              { label: t.crops.soil, value: selected.soilType },
              { label: t.crops.irrigation, value: selected.irrigation },
              { label: t.crops.fertilizer, value: selected.fertilizerSchedule },
            ].map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="glass-card p-4">
                <AnimatedLabel as="h3" variant="slide" delay={i * 0.08} className="text-sm font-semibold text-primary mb-1">
                  {item.label}
                </AnimatedLabel>
                <AnimatedLabel as="p" variant="fade" delay={i * 0.08 + 0.05} className="text-foreground text-sm">
                  {item.value}
                </AnimatedLabel>
              </motion.div>
            ))}
            <div className="glass-card p-4">
              <h3 className="text-sm font-semibold text-primary mb-2">{t.crops.pests}</h3>
              <div className="flex flex-wrap gap-2">{selected.pests.map(p => <span key={p} className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-xl">{p}</span>)}</div>
            </div>
            <div className="glass-card p-4">
              <h3 className="text-sm font-semibold text-primary mb-2">{t.crops.bestPractices}</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-foreground">{selected.bestPractices.map(b => <li key={b}>{b}</li>)}</ul>
            </div>
            {selected.cultivationTips && selected.cultivationTips.length > 0 && (
              <div className="glass-card p-4">
                <h3 className="text-sm font-semibold text-primary mb-2">💡 {t.crops.cultivationTips}</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-foreground">{selected.cultivationTips.map((tip, idx) => <li key={idx}>{tip}</li>)}</ul>
              </div>
            )}
            {selected.requiredTools && selected.requiredTools.length > 0 && (
              <div className="glass-card p-4">
                <h3 className="text-sm font-semibold text-primary mb-2">🛠️ {t.crops.requiredTools}</h3>
                <div className="flex flex-wrap gap-2">{selected.requiredTools.map((tool, idx) => <span key={idx} className="bg-primary/10 text-primary text-xs px-3 py-1.5 rounded-xl font-medium">{tool}</span>)}</div>
              </div>
            )}
          </div>
          <motion.a whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
            href={buildWhatsAppLink(`I need info about ${selected.name}`)} target="_blank" rel="noopener noreferrer"
            className="mt-6 flex items-center justify-center gap-2 bg-success hover:bg-success/90 text-success-foreground px-6 py-3 rounded-2xl w-full transition-colors font-semibold">
            <ExternalLink size={18}/> {t.crops.askOnWhatsApp} — {translatedName}
          </motion.a>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-display font-bold text-foreground mb-6">
          🌾 {t.crops.title}
        </h1>
        <div className="relative mb-4">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder={t.crops.search}
            className="w-full bg-secondary text-foreground pl-10 pr-4 py-3 rounded-2xl border border-border/50 focus:ring-2 focus:ring-primary outline-none transition-all" />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-hide">
          {cropCategories.map((cat, i) => (
            <button 
              key={cat} 
              onClick={() => setCategory(cat)}
              className={`relative whitespace-nowrap px-4 py-2 rounded-xl text-sm transition-all ${category === cat ? "text-primary-foreground font-medium" : "text-secondary-foreground hover:bg-muted"}`}
            >
              <span className="relative z-10">
                {translateCategory(cat, lang)}
              </span>
              {category === cat && (
                <motion.div layoutId="crop-cat" className="absolute inset-0 bg-primary rounded-xl" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
              )}
            </button>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          <span className="font-bold text-primary">
            {filtered.length}
          </span>{" "}
          {t.crops.cropsFound}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((crop, i) => (
            <motion.button
              key={crop.id}
              onClick={() => setSelected(crop)}
              className="glass-card-hover overflow-hidden text-left"
              initial={{ opacity: 0, y: 20, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: Math.min(i * 0.04, 0.4) }}
              whileHover={{ y: -10, scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img 
                src={resolveCropImage(crop.image, crop.name, crop.category)} 
                alt={translateCropName(crop.name, lang)} 
                className="w-full h-36 object-cover" 
                referrerPolicy="no-referrer" 
                onError={e => handleImageError(e, crop.name, crop.category)}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="p-3">
                <motion.h3 
                  className="font-semibold text-foreground text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: Math.min(i * 0.04, 0.4) + 0.1 }}
                >
                  {translateCropName(crop.name, lang)}
                </motion.h3>
                <motion.p 
                  className="text-xs text-muted-foreground italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: Math.min(i * 0.04, 0.4) + 0.15 }}
                >
                  {crop.scientificName}
                </motion.p>
                <motion.span 
                  className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-lg mt-1.5 inline-block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ delay: Math.min(i * 0.04, 0.4) + 0.2, type: "spring", stiffness: 400 }}
                >
                  {translateCategory(crop.category, lang)}
                </motion.span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
