import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export const COMMODITY_CATEGORIES: Record<string, string[]> = {
  "All": [],
  "Vegetables": [
    "Potato", "Tomato", "Onion", "Brinjal", "Cabbage", "Cauliflower", "Capsicum",
    "Bitter gourd", "Bottle gourd", "Pumpkin", "Radish", "Carrot", "Beetroot",
    "Spinach", "Bhindi", "Green Chilli", "Cucumber", "Ridgeguard", "Knool Khol",
    "Drumstick", "Ash Gourd", "Snake Gourd", "Cluster beans", "Cowpea",
    "Okra", "Lettuce", "Taro", "Sweet Potato", "Green Peas",
    "Raddish", "Ridgeguard(Tori)", "Bhindi(Ladies Finger)", "Onion Green",
    "Cowpea(Veg)", "Thondekai", "Green Avare(W)", "Elephant Yam",
    "Yam(Ratalu)", "Elephant Yam(Suran)/Amorphophallus",
  ],
  "Fruits": [
    "Apple", "Banana", "Mango", "Grapes", "Orange", "Papaya", "Pomegranate",
    "Guava", "Watermelon", "Pineapple", "Lemon", "Litchi", "Sapota",
    "Strawberry", "Dragon Fruit", "Jackfruit", "Amla", "Coconut",
    "Banana - Green", "Mango(Raw-Ripe)", "Tender Coconut", "Amla(Nelli Kai)",
  ],
  "Cereals & Grains": [
    "Rice", "Wheat", "Maize", "Bajra", "Jowar", "Ragi", "Barley", "Oats",
    "Foxtail Millet", "Barnyard Millet", "Kodo Millet", "Proso Millet",
    "Paddy(Dhan)(Basmati)", "Paddy(Dhan)(Common)",
  ],
  "Pulses & Legumes": [
    "Chickpea", "Moong", "Urad", "Lentil", "Pigeon Pea", "Rajma",
    "Field Pea", "Horse Gram", "Cowpea", "Moth Bean",
    "Bengal Gram(Gram)(Whole)", "Green Gram (Moong)(Whole)",
    "Black Gram (Urd Beans)(Whole)", "Arhar (Tur/Red Gram)(Whole)",
    "Masoor Dal", "Lentil (Masur)(Whole)",
  ],
  "Spices": [
    "Chilli", "Turmeric", "Ginger", "Garlic", "Coriander", "Cumin",
    "Black Pepper", "Cardamom", "Cinnamon", "Clove", "Fennel", "Fenugreek",
    "Saffron", "Vanilla", "Dry Chillies", "Coriander(Leaves)",
    "Coriander Seed", "Turmeric(Bulb)",
  ],
  "Oilseeds": [
    "Groundnut", "Mustard", "Soybean", "Sunflower", "Sesame", "Linseed",
    "Castor", "Niger", "Safflower", "Copra", "Gingelly Oil",
    "Groundnut pods (raw)", "Mustard Oil",
  ],
  "Cash Crops": [
    "Cotton", "Sugarcane", "Jute", "Tobacco", "Rubber", "Coffee", "Tea",
    "Arecanut", "Cashew", "Cocoa", "Oil Palm", "Betel Vine",
    "Cotton(Kapas)", "Sugar", "Jaggery", "Gur",
  ],
};

interface CommodityCategoryChipsProps {
  selected: string;
  onSelect: (category: string) => void;
}

export function CommodityCategoryChips({ selected, onSelect }: CommodityCategoryChipsProps) {
  const { t } = useLanguage();
  
  const getCategoryLabel = (cat: string) => {
    const categoryMap: Record<string, string> = {
      "All": t.mandi.all,
      "Vegetables": `🥬 ${t.mandi.vegetables}`,
      "Fruits": `🍎 ${t.mandi.fruits}`,
      "Cereals & Grains": `🌾 ${t.mandi.cerealsGrains}`,
      "Pulses & Legumes": `🫘 ${t.mandi.pulsesLegumes}`,
      "Spices": `🌶️ ${t.mandi.spices}`,
      "Oilseeds": `🥜 ${t.mandi.oilseeds}`,
      "Cash Crops": `💵 ${t.mandi.cashCrops}`,
    };
    return categoryMap[cat] || cat;
  };
  
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {Object.keys(COMMODITY_CATEGORIES).map((cat, i) => (
        <motion.button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`
            whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium border transition-all shrink-0
            ${selected === cat
              ? "bg-primary text-primary-foreground border-primary shadow-sm"
              : "bg-secondary/60 text-muted-foreground border-border/50 hover:border-primary/30 hover:bg-secondary"
            }
          `}
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: i * 0.03, type: "spring", stiffness: 400, damping: 15 }}
          whileHover={{ y: -2, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {getCategoryLabel(cat)}
        </motion.button>
      ))}
    </div>
  );
}
