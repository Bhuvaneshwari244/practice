import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, MapPin, Thermometer, Droplets, Clock, AlertCircle, CheckCircle, Leaf, Sprout, Scissors, Truck, Package, Target, Zap, Shield, Play, BookOpen, Timer, CheckSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import PageTransition from "@/components/PageTransition";

interface CropCalendarData {
  crop: string;
  category: string;
  seasons: {
    kharif?: SeasonData;
    rabi?: SeasonData;
    zaid?: SeasonData;
  };
  temperature: string;
  rainfall: string;
  soilType: string[];
  tips: string[];
  roadmap: FarmingRoadmap[];
}

interface SeasonData {
  sowing: string;
  harvesting: string;
  duration: string;
  regions: string[];
}

interface FarmingRoadmap {
  stage: string;
  timeframe: string;
  activities: string[];
  icon: string;
  color: string;
  completed?: boolean;
  currentStage?: boolean;
  startDate?: string;
  completedDate?: string;
}

const cropCalendarData: CropCalendarData[] = [
  {
    crop: "Rice",
    category: "Cereals",
    seasons: {
      kharif: {
        sowing: "June - July",
        harvesting: "October - November",
        duration: "120-150 days",
        regions: ["All India", "High rainfall areas"]
      },
      rabi: {
        sowing: "November - December",
        harvesting: "April - May",
        duration: "120-140 days",
        regions: ["South India", "Irrigated areas"]
      }
    },
    temperature: "20-35°C",
    rainfall: "1000-2000mm",
    soilType: ["Clay", "Loamy"],
    tips: ["Ensure proper water management", "Use certified seeds", "Apply organic manure"],
    roadmap: [
      {
        stage: "Pre-Sowing Preparation",
        timeframe: "15-20 days before sowing",
        activities: [
          "Field selection and soil testing",
          "Deep plowing (20-25 cm depth)",
          "Apply farmyard manure (10-12 tons/hectare)",
          "Prepare nursery beds for seedlings",
          "Seed selection and treatment with fungicide",
          "Level the field and prepare bunds"
        ],
        icon: "🚜",
        color: "bg-amber-100 text-amber-800"
      },
      {
        stage: "Nursery & Seed Bed",
        timeframe: "25-30 days",
        activities: [
          "Sow seeds in nursery (40-50 kg/hectare)",
          "Maintain 2-3 cm water level in nursery",
          "Apply urea (20 kg/hectare) after 15 days",
          "Monitor for pests and diseases",
          "Prepare main field for transplanting"
        ],
        icon: "🌱",
        color: "bg-green-100 text-green-800"
      },
      {
        stage: "Transplanting",
        timeframe: "Day 25-30",
        activities: [
          "Transplant 25-30 day old seedlings",
          "Maintain spacing: 20cm x 15cm",
          "Plant 2-3 seedlings per hill",
          "Ensure proper water level (2-5 cm)",
          "Apply starter fertilizer if needed"
        ],
        icon: "🌾",
        color: "bg-blue-100 text-blue-800"
      },
      {
        stage: "Vegetative Growth",
        timeframe: "Day 30-65",
        activities: [
          "Maintain continuous water level",
          "First weeding after 20-25 days",
          "Apply nitrogen fertilizer (split doses)",
          "Monitor for stem borer and leaf folder",
          "Second weeding if required"
        ],
        icon: "🌿",
        color: "bg-emerald-100 text-emerald-800"
      },
      {
        stage: "Reproductive Phase",
        timeframe: "Day 65-95",
        activities: [
          "Panicle initiation stage care",
          "Apply potassium and phosphorus",
          "Maintain adequate water supply",
          "Monitor for brown plant hopper",
          "Apply micronutrients if deficient"
        ],
        icon: "🌸",
        color: "bg-pink-100 text-pink-800"
      },
      {
        stage: "Grain Filling",
        timeframe: "Day 95-120",
        activities: [
          "Reduce water level gradually",
          "Monitor grain development",
          "Protect from birds and rodents",
          "Apply final dose of fertilizer",
          "Watch for grain discoloration"
        ],
        icon: "🌾",
        color: "bg-yellow-100 text-yellow-800"
      },
      {
        stage: "Harvesting",
        timeframe: "Day 120-150",
        activities: [
          "Drain field 10-15 days before harvest",
          "Check grain maturity (80% golden)",
          "Harvest at proper moisture (20-25%)",
          "Cut crop leaving 15cm stubble",
          "Bundle and dry in field"
        ],
        icon: "✂️",
        color: "bg-orange-100 text-orange-800"
      },
      {
        stage: "Post-Harvest",
        timeframe: "After harvesting",
        activities: [
          "Threshing and winnowing",
          "Dry grains to 14% moisture",
          "Clean and grade the produce",
          "Store in proper containers",
          "Prepare field for next crop"
        ],
        icon: "📦",
        color: "bg-purple-100 text-purple-800"
      }
    ]
  },
  {
    crop: "Wheat",
    category: "Cereals",
    seasons: {
      rabi: {
        sowing: "November - December",
        harvesting: "March - April",
        duration: "120-150 days",
        regions: ["North India", "Central India"]
      }
    },
    temperature: "15-25°C",
    rainfall: "300-1000mm",
    soilType: ["Loamy", "Clay loam"],
    tips: ["Timely sowing is crucial", "Proper seed treatment", "Balanced fertilization"],
    roadmap: [
      {
        stage: "Land Preparation",
        timeframe: "15 days before sowing",
        activities: [
          "Deep plowing after monsoon",
          "Apply farmyard manure (8-10 tons/hectare)",
          "Prepare fine seedbed",
          "Level the field properly",
          "Install irrigation system"
        ],
        icon: "🚜",
        color: "bg-amber-100 text-amber-800"
      },
      {
        stage: "Sowing",
        timeframe: "Day 0-5",
        activities: [
          "Seed treatment with fungicide",
          "Sow at 2-3 cm depth",
          "Maintain row spacing 20-23 cm",
          "Seed rate: 100-125 kg/hectare",
          "Apply basal fertilizer"
        ],
        icon: "🌱",
        color: "bg-green-100 text-green-800"
      },
      {
        stage: "Germination & Early Growth",
        timeframe: "Day 5-30",
        activities: [
          "Ensure adequate moisture",
          "First irrigation after 20-25 days",
          "Monitor for pest attacks",
          "Apply first nitrogen dose",
          "Weed management"
        ],
        icon: "🌿",
        color: "bg-emerald-100 text-emerald-800"
      },
      {
        stage: "Tillering Stage",
        timeframe: "Day 30-60",
        activities: [
          "Second irrigation at tillering",
          "Apply second nitrogen dose",
          "Monitor for aphids and termites",
          "Spray for rust if needed",
          "Maintain proper plant population"
        ],
        icon: "🌾",
        color: "bg-blue-100 text-blue-800"
      },
      {
        stage: "Flowering & Grain Formation",
        timeframe: "Day 60-100",
        activities: [
          "Critical irrigation at flowering",
          "Apply final fertilizer dose",
          "Monitor for diseases",
          "Protect from birds",
          "Ensure adequate nutrition"
        ],
        icon: "🌸",
        color: "bg-pink-100 text-pink-800"
      },
      {
        stage: "Maturity & Harvesting",
        timeframe: "Day 100-120",
        activities: [
          "Stop irrigation 10 days before harvest",
          "Check grain moisture (20-25%)",
          "Harvest when grains are hard",
          "Cut at proper height",
          "Bundle and dry"
        ],
        icon: "✂️",
        color: "bg-orange-100 text-orange-800"
      },
      {
        stage: "Post-Harvest",
        timeframe: "After harvesting",
        activities: [
          "Threshing and cleaning",
          "Dry to 12% moisture",
          "Grade and store properly",
          "Market at right time",
          "Prepare for next crop"
        ],
        icon: "📦",
        color: "bg-purple-100 text-purple-800"
      }
    ]
  },
  {
    crop: "Maize",
    category: "Cereals",
    seasons: {
      kharif: {
        sowing: "June - July",
        harvesting: "September - October",
        duration: "80-120 days",
        regions: ["All India"]
      },
      rabi: {
        sowing: "November - December",
        harvesting: "March - April",
        duration: "90-110 days",
        regions: ["South India", "Irrigated areas"]
      },
      zaid: {
        sowing: "February - March",
        harvesting: "May - June",
        duration: "80-100 days",
        regions: ["Irrigated areas"]
      }
    },
    temperature: "21-27°C",
    rainfall: "500-1200mm",
    soilType: ["Well-drained", "Fertile"],
    tips: ["Good drainage essential", "Hybrid varieties recommended", "Pest monitoring important"],
    roadmap: [
      {
        stage: "Field Preparation",
        timeframe: "10-15 days before sowing",
        activities: [
          "Deep plowing and harrowing",
          "Apply organic manure",
          "Prepare ridges and furrows",
          "Ensure proper drainage",
          "Soil testing and pH adjustment"
        ],
        icon: "🚜",
        color: "bg-amber-100 text-amber-800"
      },
      {
        stage: "Sowing",
        timeframe: "Day 0-3",
        activities: [
          "Seed treatment with fungicide",
          "Plant at 3-4 cm depth",
          "Spacing: 60cm x 20cm",
          "Seed rate: 20-25 kg/hectare",
          "Apply starter fertilizer"
        ],
        icon: "🌱",
        color: "bg-green-100 text-green-800"
      },
      {
        stage: "Germination & Early Growth",
        timeframe: "Day 3-25",
        activities: [
          "Ensure adequate moisture",
          "First irrigation if needed",
          "Gap filling within 10 days",
          "Monitor for cutworm",
          "Apply herbicide for weeds"
        ],
        icon: "🌿",
        color: "bg-emerald-100 text-emerald-800"
      },
      {
        stage: "Vegetative Growth",
        timeframe: "Day 25-50",
        activities: [
          "First earthing up",
          "Apply nitrogen fertilizer",
          "Irrigation at knee-high stage",
          "Monitor for stem borer",
          "Weed management"
        ],
        icon: "🌾",
        color: "bg-blue-100 text-blue-800"
      },
      {
        stage: "Tasseling & Silking",
        timeframe: "Day 50-70",
        activities: [
          "Critical irrigation period",
          "Second earthing up",
          "Monitor for fall armyworm",
          "Ensure proper pollination",
          "Apply micronutrients"
        ],
        icon: "🌸",
        color: "bg-pink-100 text-pink-800"
      },
      {
        stage: "Grain Filling",
        timeframe: "Day 70-90",
        activities: [
          "Maintain soil moisture",
          "Protect from birds",
          "Monitor grain development",
          "Apply final fertilizer",
          "Disease management"
        ],
        icon: "🌽",
        color: "bg-yellow-100 text-yellow-800"
      },
      {
        stage: "Harvesting",
        timeframe: "Day 90-110",
        activities: [
          "Check grain moisture (20-25%)",
          "Harvest when husks are dry",
          "Manual or mechanical harvesting",
          "Proper drying in field",
          "Bundle and transport"
        ],
        icon: "✂️",
        color: "bg-orange-100 text-orange-800"
      },
      {
        stage: "Post-Harvest",
        timeframe: "After harvesting",
        activities: [
          "Shelling and cleaning",
          "Dry to 14% moisture",
          "Grade by size and quality",
          "Store in dry place",
          "Market preparation"
        ],
        icon: "📦",
        color: "bg-purple-100 text-purple-800"
      }
    ]
  },
  {
    crop: "Cotton",
    category: "Cash Crops",
    seasons: {
      kharif: {
        sowing: "April - June",
        harvesting: "October - January",
        duration: "180-200 days",
        regions: ["Gujarat", "Maharashtra", "Telangana", "Punjab"]
      }
    },
    temperature: "21-30°C",
    rainfall: "500-1000mm",
    soilType: ["Black cotton soil", "Well-drained"],
    tips: ["Deep plowing recommended", "Bt cotton varieties", "Integrated pest management"],
    roadmap: [
      {
        stage: "Pre-Sowing",
        timeframe: "20 days before sowing",
        activities: ["Deep plowing", "Apply FYM", "Prepare ridges", "Seed treatment"],
        icon: "🚜",
        color: "bg-amber-100 text-amber-800"
      },
      {
        stage: "Sowing",
        timeframe: "Day 0-5",
        activities: ["Plant Bt cotton seeds", "Maintain spacing", "Apply basal fertilizer"],
        icon: "🌱",
        color: "bg-green-100 text-green-800"
      },
      {
        stage: "Vegetative Growth",
        timeframe: "Day 5-60",
        activities: ["Regular irrigation", "Weed management", "Pest monitoring"],
        icon: "🌿",
        color: "bg-emerald-100 text-emerald-800"
      },
      {
        stage: "Flowering",
        timeframe: "Day 60-120",
        activities: ["Critical irrigation", "Bollworm management", "Nutrient application"],
        icon: "🌸",
        color: "bg-pink-100 text-pink-800"
      },
      {
        stage: "Boll Development",
        timeframe: "Day 120-160",
        activities: ["Monitor boll formation", "Pest control", "Water management"],
        icon: "🌾",
        color: "bg-blue-100 text-blue-800"
      },
      {
        stage: "Harvesting",
        timeframe: "Day 160-200",
        activities: ["Multiple pickings", "Quality maintenance", "Proper storage"],
        icon: "✂️",
        color: "bg-orange-100 text-orange-800"
      }
    ]
  },
  {
    crop: "Sugarcane",
    category: "Cash Crops",
    seasons: {
      kharif: {
        sowing: "February - April",
        harvesting: "December - March (next year)",
        duration: "300-365 days",
        regions: ["Uttar Pradesh", "Maharashtra", "Karnataka"]
      }
    },
    temperature: "20-30°C",
    rainfall: "1000-1500mm",
    soilType: ["Deep fertile", "Well-drained"],
    tips: ["High water requirement", "Regular earthing up", "Proper spacing important"],
    roadmap: [
      {
        stage: "Land Preparation",
        timeframe: "30 days before planting",
        activities: ["Deep plowing", "Apply organic manure", "Prepare furrows", "Drainage system"],
        icon: "🚜",
        color: "bg-amber-100 text-amber-800"
      },
      {
        stage: "Planting",
        timeframe: "Day 0-15",
        activities: ["Plant setts in furrows", "Cover with soil", "Apply fertilizer", "Irrigation"],
        icon: "🌱",
        color: "bg-green-100 text-green-800"
      },
      {
        stage: "Germination & Tillering",
        timeframe: "Day 15-90",
        activities: ["Regular irrigation", "Gap filling", "First earthing up", "Weed control"],
        icon: "🌿",
        color: "bg-emerald-100 text-emerald-800"
      },
      {
        stage: "Grand Growth",
        timeframe: "Day 90-240",
        activities: ["Heavy irrigation", "Multiple earthing up", "Fertilizer application", "Pest management"],
        icon: "🌾",
        color: "bg-blue-100 text-blue-800"
      },
      {
        stage: "Maturity",
        timeframe: "Day 240-300",
        activities: ["Reduce irrigation", "Monitor sugar content", "Prepare for harvest"],
        icon: "🌸",
        color: "bg-pink-100 text-pink-800"
      },
      {
        stage: "Harvesting",
        timeframe: "Day 300-365",
        activities: ["Cut at ground level", "Transport to mill", "Ratoon management"],
        icon: "✂️",
        color: "bg-orange-100 text-orange-800"
      }
    ]
  },
  {
    crop: "Tomato",
    category: "Vegetables",
    seasons: {
      kharif: {
        sowing: "June - July",
        harvesting: "September - November",
        duration: "90-120 days",
        regions: ["Hill stations", "Cooler regions"]
      },
      rabi: {
        sowing: "October - November",
        harvesting: "January - March",
        duration: "90-120 days",
        regions: ["Plains", "All India"]
      },
      zaid: {
        sowing: "January - February",
        harvesting: "April - May",
        duration: "90-110 days",
        regions: ["Irrigated areas"]
      }
    },
    temperature: "18-27°C",
    rainfall: "600-1200mm",
    soilType: ["Well-drained", "Rich in organic matter"],
    tips: ["Staking required", "Regular pruning", "Disease management crucial"],
    roadmap: [
      {
        stage: "Nursery Preparation",
        timeframe: "25-30 days before transplanting",
        activities: ["Prepare seedbed", "Sow seeds", "Maintain nursery", "Seedling care"],
        icon: "🌱",
        color: "bg-green-100 text-green-800"
      },
      {
        stage: "Transplanting",
        timeframe: "Day 0-5",
        activities: ["Transplant seedlings", "Maintain spacing", "Initial watering", "Mulching"],
        icon: "🌿",
        color: "bg-emerald-100 text-emerald-800"
      },
      {
        stage: "Vegetative Growth",
        timeframe: "Day 5-40",
        activities: ["Regular irrigation", "Staking", "Pruning", "Fertilizer application"],
        icon: "🌾",
        color: "bg-blue-100 text-blue-800"
      },
      {
        stage: "Flowering & Fruiting",
        timeframe: "Day 40-70",
        activities: ["Flower care", "Fruit setting", "Disease management", "Nutrient management"],
        icon: "🌸",
        color: "bg-pink-100 text-pink-800"
      },
      {
        stage: "Harvesting",
        timeframe: "Day 70-120",
        activities: ["Multiple harvests", "Proper picking", "Grading", "Marketing"],
        icon: "🍅",
        color: "bg-red-100 text-red-800"
      }
    ]
  },
  {
    crop: "Onion",
    category: "Vegetables",
    seasons: {
      kharif: {
        sowing: "June - July",
        harvesting: "October - November",
        duration: "120-150 days",
        regions: ["Maharashtra", "Karnataka", "Gujarat"]
      },
      rabi: {
        sowing: "November - December",
        harvesting: "March - April",
        duration: "120-140 days",
        regions: ["All India"]
      }
    },
    temperature: "15-25°C",
    rainfall: "650-750mm",
    soilType: ["Well-drained", "Sandy loam"],
    tips: ["Proper curing important", "Avoid waterlogging", "Balanced nutrition"],
    roadmap: [
      {
        stage: "Nursery",
        timeframe: "45-50 days before transplanting",
        activities: ["Prepare nursery bed", "Sow seeds", "Nursery management", "Seedling preparation"],
        icon: "🌱",
        color: "bg-green-100 text-green-800"
      },
      {
        stage: "Transplanting",
        timeframe: "Day 0-7",
        activities: ["Transplant seedlings", "Proper spacing", "Initial irrigation", "Mulching"],
        icon: "🌿",
        color: "bg-emerald-100 text-emerald-800"
      },
      {
        stage: "Bulb Formation",
        timeframe: "Day 7-90",
        activities: ["Regular irrigation", "Weed management", "Fertilizer application", "Pest control"],
        icon: "🧅",
        color: "bg-purple-100 text-purple-800"
      },
      {
        stage: "Maturity",
        timeframe: "Day 90-120",
        activities: ["Stop irrigation", "Monitor bulb development", "Prepare for harvest"],
        icon: "🌾",
        color: "bg-yellow-100 text-yellow-800"
      },
      {
        stage: "Harvesting & Curing",
        timeframe: "Day 120-140",
        activities: ["Harvest mature bulbs", "Proper curing", "Grading", "Storage"],
        icon: "✂️",
        color: "bg-orange-100 text-orange-800"
      }
    ]
  },
  {
    crop: "Potato",
    category: "Vegetables",
    seasons: {
      rabi: {
        sowing: "October - December",
        harvesting: "February - April",
        duration: "90-120 days",
        regions: ["North India", "Hills"]
      }
    },
    temperature: "15-20°C",
    rainfall: "500-700mm",
    soilType: ["Sandy loam", "Well-drained"],
    tips: ["Earthing up essential", "Certified seed potatoes", "Late blight management"],
    roadmap: [
      {
        stage: "Land Preparation",
        timeframe: "15 days before planting",
        activities: ["Deep plowing", "Apply organic manure", "Prepare ridges", "Seed preparation"],
        icon: "🚜",
        color: "bg-amber-100 text-amber-800"
      },
      {
        stage: "Planting",
        timeframe: "Day 0-5",
        activities: ["Plant seed potatoes", "Maintain spacing", "Cover with soil", "Initial irrigation"],
        icon: "🌱",
        color: "bg-green-100 text-green-800"
      },
      {
        stage: "Emergence & Growth",
        timeframe: "Day 5-40",
        activities: ["Monitor emergence", "First earthing up", "Weed management", "Irrigation"],
        icon: "🌿",
        color: "bg-emerald-100 text-emerald-800"
      },
      {
        stage: "Tuber Formation",
        timeframe: "Day 40-70",
        activities: ["Second earthing up", "Regular irrigation", "Fertilizer application", "Disease control"],
        icon: "🥔",
        color: "bg-brown-100 text-brown-800"
      },
      {
        stage: "Tuber Bulking",
        timeframe: "Day 70-90",
        activities: ["Maintain soil moisture", "Monitor tuber development", "Late blight management"],
        icon: "🌾",
        color: "bg-blue-100 text-blue-800"
      },
      {
        stage: "Harvesting",
        timeframe: "Day 90-120",
        activities: ["Stop irrigation", "Harvest mature tubers", "Proper handling", "Storage preparation"],
        icon: "✂️",
        color: "bg-orange-100 text-orange-800"
      }
    ]
  },
  {
    crop: "Soybean",
    category: "Pulses",
    seasons: {
      kharif: {
        sowing: "June - July",
        harvesting: "September - October",
        duration: "90-120 days",
        regions: ["Madhya Pradesh", "Maharashtra", "Rajasthan", "Gujarat"]
      }
    },
    temperature: "20-30°C",
    rainfall: "600-1000mm",
    soilType: ["Well-drained", "Black cotton soil"],
    tips: ["Rhizobium inoculation essential", "Avoid waterlogging", "Proper plant population"],
    roadmap: [
      {
        stage: "Pre-Sowing",
        timeframe: "15 days before sowing",
        activities: [
          "Deep summer plowing",
          "Apply farmyard manure (5-6 tons/hectare)",
          "Seed treatment with Rhizobium culture",
          "Prepare field with proper drainage",
          "Soil testing for pH and nutrients"
        ],
        icon: "🚜",
        color: "bg-amber-100 text-amber-800"
      },
      {
        stage: "Sowing",
        timeframe: "Day 0-3",
        activities: [
          "Sow at 3-4 cm depth",
          "Row spacing: 30-45 cm",
          "Seed rate: 75-80 kg/hectare",
          "Apply phosphorus fertilizer",
          "Ensure proper seed-soil contact"
        ],
        icon: "🌱",
        color: "bg-green-100 text-green-800"
      },
      {
        stage: "Germination & Early Growth",
        timeframe: "Day 3-25",
        activities: [
          "Monitor germination percentage",
          "First irrigation if needed",
          "Weed management (pre-emergence)",
          "Gap filling within 10 days",
          "Monitor for cutworm damage"
        ],
        icon: "🌿",
        color: "bg-emerald-100 text-emerald-800"
      },
      {
        stage: "Vegetative Growth",
        timeframe: "Day 25-45",
        activities: [
          "First hoeing and weeding",
          "Monitor for stem fly",
          "Apply nitrogen if deficient",
          "Ensure adequate moisture",
          "Pest monitoring (defoliators)"
        ],
        icon: "🌾",
        color: "bg-blue-100 text-blue-800"
      },
      {
        stage: "Flowering",
        timeframe: "Day 45-65",
        activities: [
          "Critical water requirement period",
          "Monitor for pod borer",
          "Apply micronutrients if needed",
          "Ensure good pollination",
          "Disease management (rust, blight)"
        ],
        icon: "🌸",
        color: "bg-pink-100 text-pink-800"
      },
      {
        stage: "Pod Development",
        timeframe: "Day 65-85",
        activities: [
          "Maintain soil moisture",
          "Monitor pod filling",
          "Pest management (pod borer)",
          "Apply foliar nutrition",
          "Prepare for harvest"
        ],
        icon: "🫘",
        color: "bg-yellow-100 text-yellow-800"
      },
      {
        stage: "Harvesting",
        timeframe: "Day 85-110",
        activities: [
          "Harvest when pods are dry",
          "Cut plants at ground level",
          "Bundle and dry in field",
          "Thresh when moisture is 12-14%",
          "Clean and grade beans"
        ],
        icon: "✂️",
        color: "bg-orange-100 text-orange-800"
      },
      {
        stage: "Post-Harvest",
        timeframe: "After harvesting",
        activities: [
          "Dry to 9-10% moisture",
          "Store in moisture-proof containers",
          "Grade by size and quality",
          "Market preparation",
          "Utilize crop residue"
        ],
        icon: "📦",
        color: "bg-purple-100 text-purple-800"
      }
    ]
  },
  {
    crop: "Groundnut",
    category: "Oilseeds",
    seasons: {
      kharif: {
        sowing: "June - July",
        harvesting: "October - November",
        duration: "100-130 days",
        regions: ["Gujarat", "Andhra Pradesh", "Tamil Nadu", "Karnataka"]
      },
      rabi: {
        sowing: "November - December",
        harvesting: "March - April",
        duration: "110-120 days",
        regions: ["Andhra Pradesh", "Tamil Nadu"]
      }
    },
    temperature: "20-30°C",
    rainfall: "500-1250mm",
    soilType: ["Sandy loam", "Red soil"],
    tips: ["Calcium application important", "Proper earthing up", "Harvest at right maturity"],
    roadmap: [
      {
        stage: "Land Preparation",
        timeframe: "20 days before sowing",
        activities: [
          "Deep plowing (20-25 cm)",
          "Apply lime if soil is acidic",
          "Apply farmyard manure (10 tons/hectare)",
          "Prepare ridges and furrows",
          "Ensure good drainage"
        ],
        icon: "🚜",
        color: "bg-amber-100 text-amber-800"
      },
      {
        stage: "Sowing",
        timeframe: "Day 0-5",
        activities: [
          "Seed treatment with fungicide",
          "Sow at 3-4 cm depth",
          "Spacing: 30cm x 10cm",
          "Seed rate: 100-120 kg/hectare",
          "Apply basal fertilizer"
        ],
        icon: "🌱",
        color: "bg-green-100 text-green-800"
      },
      {
        stage: "Germination & Growth",
        timeframe: "Day 5-30",
        activities: [
          "Ensure adequate moisture",
          "First weeding after 15 days",
          "Monitor for thrips damage",
          "Gap filling if needed",
          "Apply herbicide if required"
        ],
        icon: "🌿",
        color: "bg-emerald-100 text-emerald-800"
      },
      {
        stage: "Flowering & Pegging",
        timeframe: "Day 30-60",
        activities: [
          "First earthing up at 30 days",
          "Apply gypsum (400-500 kg/hectare)",
          "Monitor for leaf spot diseases",
          "Ensure adequate calcium supply",
          "Pest management (jassids, aphids)"
        ],
        icon: "🌸",
        color: "bg-pink-100 text-pink-800"
      },
      {
        stage: "Pod Development",
        timeframe: "Day 60-90",
        activities: [
          "Second earthing up",
          "Maintain soil moisture",
          "Monitor pod development",
          "Disease management (rust, tikka)",
          "Apply micronutrients"
        ],
        icon: "🥜",
        color: "bg-brown-100 text-brown-800"
      },
      {
        stage: "Pod Filling",
        timeframe: "Day 90-110",
        activities: [
          "Critical irrigation period",
          "Monitor for pod maturity",
          "Protect from birds and rodents",
          "Reduce irrigation gradually",
          "Prepare for harvest"
        ],
        icon: "🌾",
        color: "bg-yellow-100 text-yellow-800"
      },
      {
        stage: "Harvesting",
        timeframe: "Day 110-130",
        activities: [
          "Harvest when leaves turn yellow",
          "Dig carefully to avoid pod damage",
          "Shake off soil gently",
          "Dry in shade for 2-3 days",
          "Separate pods from plants"
        ],
        icon: "✂️",
        color: "bg-orange-100 text-orange-800"
      },
      {
        stage: "Post-Harvest",
        timeframe: "After harvesting",
        activities: [
          "Dry pods to 8-10% moisture",
          "Grade by size and quality",
          "Store in gunny bags",
          "Market at appropriate time",
          "Process oil if needed"
        ],
        icon: "📦",
        color: "bg-purple-100 text-purple-800"
      }
    ]
  }
];

const states = [
  "All India", "Andhra Pradesh", "Assam", "Bihar", "Gujarat", "Haryana", 
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Odisha", 
  "Punjab", "Rajasthan", "Tamil Nadu", "Telangana", "Uttar Pradesh", "West Bengal"
];

interface RoadmapStage {
  stage: string;
  duration: string;
  activities: string[];
  completed?: boolean;
  currentStage?: boolean;
  startDate?: string | null;
  completedDate?: string | null;
}

interface TrackingData {
  startDate: string;
  currentStageIndex: number;
  completedStages: number[];
  roadmap: RoadmapStage[];
}

interface TrackingDataMap {
  [key: string]: TrackingData;
}

export default function CropCalendar() {
  const { t } = useLanguage();
  
  const categories = [
    t.common.all, 
    t.cropCalendar.cereals, 
    t.cropCalendar.pulses, 
    t.cropCalendar.vegetables, 
    t.cropCalendar.fruits, 
    t.cropCalendar.cashCrops, 
    t.cropCalendar.oilseeds, 
    t.cropCalendar.spices
  ];

  const getSeasonName = (seasonKey: string) => {
    switch(seasonKey) {
      case 'kharif': return t.cropCalendar.kharif;
      case 'rabi': return t.cropCalendar.rabi;
      case 'zaid': return t.cropCalendar.zaid;
      default: return seasonKey;
    }
  };
  const [selectedState, setSelectedState] = useState("All India");
  const [selectedCategory, setSelectedCategory] = useState(0); // Use index instead of string
  const [viewMode, setViewMode] = useState<"default" | "live">("default");
  const [selectedCropForTracking, setSelectedCropForTracking] = useState<string | null>(null);
  const [selectedCropForRoadmap, setSelectedCropForRoadmap] = useState<string | null>(null);
  const [trackingData, setTrackingData] = useState<TrackingDataMap>({});
  const [currentMonth] = useState(new Date().getMonth() + 1);

  const getCurrentSeason = () => {
    if (currentMonth >= 6 && currentMonth <= 9) return "kharif";
    if (currentMonth >= 10 || currentMonth <= 3) return "rabi";
    return "zaid";
  };

  const isCurrentSeason = (season: string) => {
    return season === getCurrentSeason();
  };

  const filteredCrops = cropCalendarData.filter(crop => {
    const categoryMatch = selectedCategory === 0 || crop.category === ["Cereals", "Pulses", "Vegetables", "Fruits", "Cash Crops", "Oilseeds", "Spices"][selectedCategory - 1];
    const stateMatch = selectedState === "All India" || 
      Object.values(crop.seasons).some(season => 
        season?.regions.includes(selectedState) || season?.regions.includes("All India")
      );
    return categoryMatch && stateMatch;
  });

  const getSeasonColor = (season: string) => {
    switch (season) {
      case "kharif": return "bg-green-100 text-green-800";
      case "rabi": return "bg-blue-100 text-blue-800";
      case "zaid": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getSeasonIcon = (season: string) => {
    switch (season) {
      case "kharif": return <Droplets size={16} />;
      case "rabi": return <Thermometer size={16} />;
      case "zaid": return <Clock size={16} />;
      default: return <Calendar size={16} />;
    }
  };

  const initializeLiveTracking = (cropName: string, startDate?: string) => {
    setSelectedCropForTracking(cropName);
    setViewMode("live");
    
    const actualStartDate = startDate || new Date().toISOString().split('T')[0];
    
    // Initialize tracking data if not exists
    if (!trackingData[cropName]) {
      const crop = cropCalendarData.find(c => c.crop === cropName);
      if (crop) {
        const initialData = {
          startDate: actualStartDate,
          currentStageIndex: 0,
          completedStages: [],
          roadmap: crop.roadmap.map((stage, index) => ({
            ...stage,
            completed: false,
            currentStage: index === 0,
            startDate: index === 0 ? actualStartDate : null,
            completedDate: null
          }))
        };
        setTrackingData(prev => ({
          ...prev,
          [cropName]: initialData,
          selectedCrop: null // Clear temporary selection
        }));
      }
    }
  };

  const markStageComplete = (cropName: string, stageIndex: number) => {
    setTrackingData(prev => {
      const cropData = { ...prev[cropName] };
      const updatedRoadmap = [...cropData.roadmap];
      
      // Mark current stage as completed
      updatedRoadmap[stageIndex] = {
        ...updatedRoadmap[stageIndex],
        completed: true,
        currentStage: false,
        completedDate: new Date().toISOString().split('T')[0]
      };
      
      // Move to next stage if exists
      if (stageIndex + 1 < updatedRoadmap.length) {
        updatedRoadmap[stageIndex + 1] = {
          ...updatedRoadmap[stageIndex + 1],
          currentStage: true,
          startDate: new Date().toISOString().split('T')[0]
        };
        cropData.currentStageIndex = stageIndex + 1;
      }
      
      cropData.roadmap = updatedRoadmap;
      cropData.completedStages = [...cropData.completedStages, stageIndex];
      
      return {
        ...prev,
        [cropName]: cropData
      };
    });
  };

  const resetTracking = (cropName: string) => {
    setTrackingData(prev => {
      const newData = { ...prev };
      delete newData[cropName];
      return newData;
    });
    setSelectedCropForTracking(null);
    setViewMode("default");
  };

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gradient mb-4 flex items-center justify-center gap-3">
            <Calendar className="text-primary" size={40} />
            {t.cropCalendar.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.cropCalendar.subtitle}
          </p>
        </div>

        {/* Mode Selection */}
        <div className="flex justify-center mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-1 shadow-md border border-gray-200 dark:border-gray-700">
            <div className="flex gap-1">
              <Button
                variant={viewMode === "default" ? "default" : "ghost"}
                onClick={() => {
                  setViewMode("default");
                  setSelectedCropForTracking(null);
                }}
                className="flex items-center gap-2"
              >
                <BookOpen size={16} />
                {t.cropCalendar.defaultRoadmap}
              </Button>
              <Button
                variant={viewMode === "live" ? "default" : "ghost"}
                onClick={() => setViewMode("live")}
                className="flex items-center gap-2"
              >
                <Play size={16} />
                {t.cropCalendar.liveTracking}
              </Button>
            </div>
          </div>
        </div>

        {/* Live Tracking Mode - Crop Selection */}
        {viewMode === "live" && !selectedCropForTracking && (
          <Card className="mb-6 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
                <Timer className="text-blue-600 dark:text-blue-400" size={20} />
                {t.cropCalendar.startLiveTracking}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-blue-600 dark:text-blue-300 mb-4">
                  Track your actual farming progress in real-time. Select your crop and start date to begin monitoring your cultivation journey.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-blue-800 dark:text-blue-200">{t.cropCalendar.selectYourCrop}</label>
                    <Select onValueChange={(cropName) => {
                      const startDate = (document.getElementById('start-date') as HTMLInputElement)?.value;
                      if (startDate) {
                        initializeLiveTracking(cropName, startDate);
                      } else {
                        // Store selected crop temporarily
                        setTrackingData(prev => ({
                          ...prev,
                          selectedCrop: cropName
                        }));
                      }
                    }}>
                      <SelectTrigger className="bg-white dark:bg-gray-800">
                        <SelectValue placeholder={t.cropCalendar.chooseYourCrop} />
                      </SelectTrigger>
                      <SelectContent>
                        {cropCalendarData.map(crop => (
                          <SelectItem key={crop.crop} value={crop.crop}>
                            <div className="flex items-center gap-2">
                              <Leaf size={16} />
                              {crop.crop} ({crop.category})
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-blue-800 dark:text-blue-200">{t.cropCalendar.cultivationStartDate}</label>
                    <input
                      id="start-date"
                      type="date"
                      className="w-full p-2 border border-blue-200 dark:border-blue-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                      max={new Date().toISOString().split('T')[0]}
                      onChange={(e) => {
                        const selectedCrop = trackingData.selectedCrop;
                        if (selectedCrop && e.target.value) {
                          initializeLiveTracking(selectedCrop, e.target.value);
                        }
                      }}
                    />
                  </div>
                </div>
                
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                  <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">💡 {t.cropCalendar.howLiveTrackingWorks}</h4>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• {t.cropCalendar.trackEachStage}</li>
                    <li>• {t.cropCalendar.markStagesComplete}</li>
                    <li>• {t.cropCalendar.getSolutions}</li>
                    <li>• {t.cropCalendar.monitorProgress}</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Live Tracking Mode - Single Crop Display */}
        {viewMode === "live" && selectedCropForTracking && trackingData[selectedCropForTracking] && (
          <div className="space-y-6">
            {/* Crop Header with Progress */}
            <Card className="border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center">
                      <Leaf className="text-primary" size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{selectedCropForTracking}</h2>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {t.cropCalendar.started}: {new Date(trackingData[selectedCropForTracking].startDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">
                      {Math.round((trackingData[selectedCropForTracking].completedStages.length / cropCalendarData.find(c => c.crop === selectedCropForTracking)!.roadmap.length) * 100)}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{t.cropCalendar.complete}</div>
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-4">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-500"
                    style={{ 
                      width: `${(trackingData[selectedCropForTracking].completedStages.length / cropCalendarData.find(c => c.crop === selectedCropForTracking)!.roadmap.length) * 100}%` 
                    }}
                  ></div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">
                    {trackingData[selectedCropForTracking].completedStages.length} of {cropCalendarData.find(c => c.crop === selectedCropForTracking)!.roadmap.length} {t.cropCalendar.stages} {t.cropCalendar.completed.toLowerCase()}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => resetTracking(selectedCropForTracking)}
                    className="text-red-600 dark:text-red-400 border-red-200 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-950"
                  >
                    {t.cropCalendar.resetTracking}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Live Tracking Roadmap */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target size={20} className="text-primary" />
                  Live Farming Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {trackingData[selectedCropForTracking].roadmap.map((stage: RoadmapStage, stageIndex: number) => (
                    <div key={stageIndex} className="relative">
                      {/* Timeline connector */}
                      {stageIndex < trackingData[selectedCropForTracking].roadmap.length - 1 && (
                        <div className={`absolute left-6 top-20 w-0.5 h-12 ${
                          stage.completed ? 'bg-green-400' : stage.currentStage ? 'bg-blue-400' : 'bg-gray-300 dark:bg-gray-600'
                        }`}></div>
                      )}
                      
                      <div className="flex gap-4">
                        {/* Stage Icon with Status */}
                        <div className="flex-shrink-0 relative">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold border-3 shadow-lg transition-all duration-300 ${
                            stage.completed 
                              ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 border-green-400'
                              : stage.currentStage
                                ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 border-blue-400 animate-pulse'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-gray-300 dark:border-gray-600'
                          }`}>
                            {stage.completed ? (
                              <CheckCircle size={24} className="text-green-600 dark:text-green-400" />
                            ) : (
                              stage.icon
                            )}
                          </div>
                          
                          {/* Status Indicator */}
                          {stage.currentStage && (
                            <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
                          )}
                        </div>
                        
                        {/* Stage Content */}
                        <div className={`flex-1 border-2 rounded-lg p-4 transition-all duration-300 ${
                          stage.completed
                            ? 'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800 shadow-md'
                            : stage.currentStage
                              ? 'bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 shadow-lg'
                              : 'bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700'
                        }`}>
                          {/* Stage Header */}
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <h3 className={`text-lg font-bold ${
                                stage.completed ? 'text-green-800 dark:text-green-200' : stage.currentStage ? 'text-blue-800 dark:text-blue-200' : 'text-gray-600 dark:text-gray-400'
                              }`}>
                                {stage.stage}
                              </h3>
                              
                              {/* Status Labels */}
                              {stage.completed && (
                                <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 border-green-300 dark:border-green-700 font-semibold">
                                  ✅ {t.cropCalendar.completed}
                                </Badge>
                              )}
                              {stage.currentStage && !stage.completed && (
                                <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-700 font-semibold animate-pulse">
                                  🔄 {t.cropCalendar.inProgress}
                                </Badge>
                              )}
                              {!stage.completed && !stage.currentStage && (
                                <Badge variant="outline" className="text-gray-500 dark:text-gray-400 border-gray-300 dark:border-gray-600">
                                  ⏳ {t.cropCalendar.pending}
                                </Badge>
                              )}
                            </div>
                            
                            <Badge variant="outline" className="text-xs">
                              {stage.timeframe}
                            </Badge>
                          </div>
                          
                          {/* Dates */}
                          <div className="flex gap-4 mb-3 text-sm">
                            {stage.startDate && (
                              <div className="flex items-center gap-1">
                                <Calendar size={14} className="text-blue-500 dark:text-blue-400" />
                                <span className="text-blue-700 dark:text-blue-300">Started: {new Date(stage.startDate).toLocaleDateString()}</span>
                              </div>
                            )}
                            {stage.completedDate && (
                              <div className="flex items-center gap-1">
                                <CheckCircle size={14} className="text-green-500 dark:text-green-400" />
                                <span className="text-green-700 dark:text-green-300">Completed: {new Date(stage.completedDate).toLocaleDateString()}</span>
                              </div>
                            )}
                          </div>
                          
                          {/* Activities */}
                          <div className="space-y-2 mb-4">
                            {stage.activities.map((activity: string, activityIndex: number) => (
                              <div key={activityIndex} className={`flex items-start gap-2 text-sm ${
                                stage.completed ? 'text-green-700 dark:text-green-300' : stage.currentStage ? 'text-blue-700 dark:text-blue-300' : 'text-gray-600 dark:text-gray-400'
                              }`}>
                                <CheckCircle size={14} className={`mt-0.5 flex-shrink-0 ${
                                  stage.completed ? 'text-green-500 dark:text-green-400' : stage.currentStage ? 'text-blue-500 dark:text-blue-400' : 'text-gray-400 dark:text-gray-500'
                                }`} />
                                <span>{activity}</span>
                              </div>
                            ))}
                          </div>
                          
                          {/* Action Buttons */}
                          <div className="flex gap-2">
                            {stage.currentStage && !stage.completed && (
                              <>
                                <Button
                                  onClick={() => markStageComplete(selectedCropForTracking, stageIndex)}
                                  className="bg-green-600 hover:bg-green-700 text-white font-semibold"
                                >
                                  <CheckSquare size={16} className="mr-2" />
                                  {t.cropCalendar.markComplete}
                                </Button>
                                <Button
                                  variant="outline"
                                  onClick={() => {
                                    // Show problem solving modal/section
                                    setTrackingData(prev => ({
                                      ...prev,
                                      showProblemSolver: { crop: selectedCropForTracking, stage: stageIndex }
                                    }));
                                  }}
                                  className="border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-300 hover:bg-orange-50 dark:hover:bg-orange-950"
                                >
                                  <AlertCircle size={16} className="mr-2" />
                                  {t.cropCalendar.needHelp}
                                </Button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Problem Solver Modal */}
            {trackingData.showProblemSolver && (
              <Card className="border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-800 dark:text-orange-200">
                    <AlertCircle size={20} />
                    {t.cropCalendar.problemSolver} - {trackingData[selectedCropForTracking].roadmap[trackingData.showProblemSolver.stage].stage}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-orange-700 dark:text-orange-300">
                      {t.cropCalendar.havingIssues}
                    </p>
                    
                    <div className="grid gap-3">
                      <div className="bg-white dark:bg-gray-800 p-3 rounded border border-orange-200 dark:border-orange-800">
                        <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">🐛 {t.cropCalendar.pestProblems}</h4>
                        <p className="text-sm text-orange-700 dark:text-orange-300">{t.cropCalendar.pestSolution}</p>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-800 p-3 rounded border border-orange-200 dark:border-orange-800">
                        <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">🌧️ {t.cropCalendar.weatherIssues}</h4>
                        <p className="text-sm text-orange-700 dark:text-orange-300">{t.cropCalendar.weatherSolution}</p>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-800 p-3 rounded border border-orange-200 dark:border-orange-800">
                        <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">🌱 {t.cropCalendar.poorGrowth}</h4>
                        <p className="text-sm text-orange-700 dark:text-orange-300">{t.cropCalendar.poorGrowthSolution}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button
                        onClick={() => {
                          // Mark as resolved and continue
                          markStageComplete(selectedCropForTracking, trackingData.showProblemSolver.stage);
                          setTrackingData(prev => ({
                            ...prev,
                            showProblemSolver: null
                          }));
                        }}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        {t.cropCalendar.problemSolved}
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setTrackingData(prev => ({
                            ...prev,
                            showProblemSolver: null
                          }));
                        }}
                      >
                        {t.cropCalendar.close}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Current Season Alert */}
        <Card className="mb-6 border-primary/20 bg-primary/5 dark:bg-primary/10">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${getSeasonColor(getCurrentSeason())}`}>
                {getSeasonIcon(getCurrentSeason())}
              </div>
              <div>
                <h3 className="font-semibold text-primary">
                  Current Season: {getCurrentSeason().charAt(0).toUpperCase() + getCurrentSeason().slice(1)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {getCurrentSeason() === "kharif" && "Monsoon season (June-September) - Focus on rain-fed crops"}
                  {getCurrentSeason() === "rabi" && "Winter season (October-March) - Focus on irrigated crops"}
                  {getCurrentSeason() === "zaid" && "Summer season (April-May) - Focus on irrigated crops with high water availability"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2">{t.cropCalendar.selectState}</label>
            <Select value={selectedState} onValueChange={setSelectedState}>
              <SelectTrigger>
                <SelectValue placeholder="Choose state" />
              </SelectTrigger>
              <SelectContent>
                {states.map(state => (
                  <SelectItem key={state} value={state}>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {state}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2">{t.cropCalendar.cropCategory}</label>
            <Select value={selectedCategory.toString()} onValueChange={(value) => setSelectedCategory(parseInt(value))}>
              <SelectTrigger>
                <SelectValue placeholder="Choose category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category, index) => (
                  <SelectItem key={index} value={index.toString()}>
                    <div className="flex items-center gap-2">
                      <Leaf size={16} />
                      {category}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Crop Calendar Grid - Only show in Default Mode */}
        {viewMode === "default" && (
          <div className="grid gap-6">
            {filteredCrops.map((crop, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Leaf className="text-primary" size={20} />
                    </div>
                    {crop.crop}
                  </CardTitle>
                  <Badge variant="secondary">{crop.category}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                {/* Seasons */}
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {Object.entries(crop.seasons).map(([seasonName, seasonData]) => (
                    <div 
                      key={seasonName}
                      className={`p-4 rounded-lg border-2 ${
                        isCurrentSeason(seasonName) 
                          ? 'border-primary bg-primary/5' 
                          : 'border-border bg-card'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div className={`p-1.5 rounded-full ${getSeasonColor(seasonName)}`}>
                          {getSeasonIcon(seasonName)}
                        </div>
                        <h4 className="font-semibold capitalize">{getSeasonName(seasonName)}</h4>
                        {isCurrentSeason(seasonName) && (
                          <Badge variant="default" className="text-xs">{t.cropCalendar.currentSeason}</Badge>
                        )}
                      </div>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium text-green-600">Sowing:</span> {seasonData.sowing}
                        </div>
                        <div>
                          <span className="font-medium text-orange-600">Harvesting:</span> {seasonData.harvesting}
                        </div>
                        <div>
                          <span className="font-medium text-blue-600">Duration:</span> {seasonData.duration}
                        </div>
                        <div>
                          <span className="font-medium text-purple-600">Regions:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {seasonData.regions.map((region, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {region}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Growing Conditions */}
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center gap-2 p-3 bg-red-50 rounded-lg">
                    <Thermometer className="text-red-600" size={20} />
                    <div>
                      <div className="font-medium text-red-800">{t.cropCalendar.temperature}</div>
                      <div className="text-sm text-red-600">{crop.temperature}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                    <Droplets className="text-blue-600" size={20} />
                    <div>
                      <div className="font-medium text-blue-800">{t.cropCalendar.rainfall}</div>
                      <div className="text-sm text-blue-600">{crop.rainfall}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-amber-50 rounded-lg">
                    <MapPin className="text-amber-600" size={20} />
                    <div>
                      <div className="font-medium text-amber-800">{t.cropCalendar.soilType}</div>
                      <div className="text-sm text-amber-600">{crop.soilType.join(", ")}</div>
                    </div>
                  </div>
                </div>

                {/* Tips */}
                <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg mb-4">
                  <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
                    <CheckCircle size={16} />
                    {t.cropCalendar.farmingTips}
                  </h5>
                  <ul className="space-y-1">
                    {crop.tips.map((tip, i) => (
                      <li key={i} className="text-sm text-green-700 dark:text-green-300 flex items-start gap-2">
                        <span className="text-green-500 dark:text-green-400 mt-1">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedCropForRoadmap(crop.crop);
                    }}
                    className="flex-1 flex items-center gap-2"
                  >
                    <BookOpen size={16} />
                    {t.cropCalendar.viewCompleteRoadmap}
                  </Button>
                  <Button
                    onClick={() => {
                      setViewMode("live");
                      // Will show crop selection interface
                    }}
                    className="flex-1 flex items-center gap-2"
                  >
                    <Play size={16} />
                    {t.cropCalendar.startLiveTracking}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          </div>
        )}

        {/* Default Mode - Detailed Roadmap Display */}
        {viewMode === "default" && selectedCropForRoadmap && (
          <Card className="mt-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Target size={20} className="text-primary" />
                  {selectedCropForRoadmap} - {t.cropCalendar.completeRoadmap}
                </CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedCropForRoadmap(null)}
                >
                  {t.cropCalendar.close}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cropCalendarData.find(c => c.crop === selectedCropForRoadmap)?.roadmap.map((stage, stageIndex) => (
                  <div key={stageIndex} className="relative">
                    {/* Timeline connector */}
                    {stageIndex < cropCalendarData.find(c => c.crop === selectedCropForRoadmap)!.roadmap.length - 1 && (
                      <div className="absolute left-6 top-16 w-0.5 h-8 bg-gray-300 dark:bg-gray-600"></div>
                    )}
                    
                    <div className="flex gap-4">
                      {/* Stage Icon */}
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full ${stage.color} flex items-center justify-center text-lg font-bold border-2 border-white dark:border-gray-800 shadow-md`}>
                        {stage.icon}
                      </div>
                      
                      {/* Stage Content */}
                      <div className="flex-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <h6 className="font-semibold text-gray-800 dark:text-gray-200">{stage.stage}</h6>
                          <Badge variant="outline" className="text-xs">
                            {stage.timeframe}
                          </Badge>
                        </div>
                        
                        <div className="grid gap-2">
                          {stage.activities.map((activity, activityIndex) => (
                            <div key={activityIndex} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <CheckCircle size={14} className="text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
                              <span>{activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {viewMode === "default" && filteredCrops.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <AlertCircle className="mx-auto text-muted-foreground mb-4" size={48} />
              <h3 className="text-lg font-semibold mb-2">{t.cropCalendar.noCropsFound}</h3>
              <p className="text-muted-foreground">
                {t.cropCalendar.adjustFilters}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </PageTransition>
  );
}