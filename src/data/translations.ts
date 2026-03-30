// @ts-nocheck
export const languages = [
  { code: "en", name: "English", native: "English" },
  { code: "hi", name: "Hindi", native: "Hindi" },
  { code: "te", name: "Telugu", native: "Telugu" },
  { code: "ta", name: "Tamil", native: "Tamil" },
  { code: "kn", name: "Kannada", native: "Kannada" },
  { code: "ml", name: "Malayalam", native: "Malayalam" },
  { code: "mr", name: "Marathi", native: "Marathi" },
  { code: "bn", name: "Bengali", native: "Bengali" },
  { code: "gu", name: "Gujarati", native: "Gujarati" },
  { code: "pa", name: "Punjabi", native: "Punjabi" },
  { code: "or", name: "Odia", native: "Odia" },
  { code: "as", name: "Assamese", native: "Assamese" },
  { code: "ur", name: "Urdu", native: "Urdu" },
  { code: "sd", name: "Sindhi", native: "Sindhi" },
  { code: "ne", name: "Nepali", native: "Nepali" },
  { code: "mai", name: "Maithili", native: "Maithili" },
  { code: "sat", name: "Santali", native: "Santali" },
  { code: "ks", name: "Kashmiri", native: "Kashmiri" },
  { code: "doi", name: "Dogri", native: "Dogri" },
  { code: "kok", name: "Konkani", native: "Konkani" },
  { code: "mni", name: "Manipuri", native: "Manipuri" },
  { code: "bo", name: "Bodo", native: "Bodo" },
  { code: "sa", name: "Sanskrit", native: "Sanskrit" },
  { code: "raj", name: "Rajasthani", native: "Rajasthani" },
  { code: "bh", name: "Bhojpuri", native: "Bhojpuri" },
  { code: "chh", name: "Chhattisgarhi", native: "Chhattisgarhi" },
  { code: "gon", name: "Gondi", native: "Gondi" },
  { code: "tu", name: "Tulu", native: "Tulu" },
  { code: "kha", name: "Khasi", native: "Khasi" },
  { code: "miz", name: "Mizo", native: "Mizo" },
  { code: "nag", name: "Nagamese", native: "Nagamese" },
];

type TranslationKeys = {
  nav: { home: string; crops: string; community: string; mandi: string; transport: string; diagnosis: string; yieldPrediction: string; cropCalendar: string; recommendations: string; cropHealth: string };
  hero: { title: string; subtitle: string; cta: string; badge: string; problemTitle: string; aiDiagnosis: string };
  stats: { cropsListed: string; languages: string; mandiMarkets: string; aiPowered: string; realtime: string };
  features: { cropsDesc: string; communityDesc: string; mandiDesc: string; transportDesc: string; diagnosisDesc: string; recommendationsDesc: string; yieldPredictionDesc: string; cropCalendarDesc: string; cropHealthDesc: string };
  problemItems: string[];
  crops: { title: string; search: string; allCategories: string; season: string; soil: string; irrigation: string; pests: string; fertilizer: string; bestPractices: string; cropsFound: string; askOnWhatsApp: string };
  community: { title: string; askQuestion: string; placeholder: string; post: string; answer: string; answers: string; share: string; upvote: string; category: string; reply: string };
  mandi: any;
  transport: any;
  diagnosis: any;
  yieldPrediction: any;
  recommendations: any;
  cropHealth: any;
  cropCalendar: any;
  chatbot: any;
  common: { loading: string; noResults: string; viewDetails: string; back: string; whatsappHelp: string; selectLanguage: string; all: string; weather: string; humidity: string; wind: string; condition: string; weatherSource: string };
};

export const translations: Record<string, TranslationKeys> = {
  en: {
    nav: { home: "Home", crops: "Crop Library", community: "Community", mandi: "Mandi Rates", transport: "Transport", diagnosis: "Diagnosis", yieldPrediction: "Yield Prediction", cropCalendar: "Crop Calendar", recommendations: "Recommendations", cropHealth: "Crop Health" },
    hero: { title: "AgriLink - Farmer Crop Intelligence", subtitle: "Your complete farming companion: crop info, community Q&A, mandi rates, transport, and AI-powered disease diagnosis", cta: "Explore Crops", badge: "AI-Powered Farming Intelligence", problemTitle: "Web Track: Farmer Crop Intelligence + Community Platform", aiDiagnosis: "AI Diagnosis" },
    stats: { cropsListed: "Crops Listed", languages: "Languages", mandiMarkets: "Mandi Markets", aiPowered: "AI Powered", realtime: "Real-time" },
    features: { cropsDesc: "Seasonality, soil, irrigation, pests, fertilizer schedules", communityDesc: "Q&A, local language support, expert answers", mandiDesc: "Live rates by district/market + nearby search", transportDesc: "Connect to logistics, request pickup flow", diagnosisDesc: "AI-powered disease detection from photos", recommendationsDesc: "Soil, location & season based crop advice", yieldPredictionDesc: "Predict crop yields with AI", cropCalendarDesc: "Complete farming roadmaps from seed to harvest", cropHealthDesc: "Satellite-based crop health monitoring with NDVI" },
    problemItems: [
      "Crop library: seasonality, soil, irrigation, pests, fertilizer schedules.",
      "Community: Q&A, local language support, expert answers.",
      "Live mandi rates by district/market + price trends.",
      "Transportation: connect to logistics providers or request pickup flow.",
      "AI Disease Detection: upload photo, get instant diagnosis & treatment.",
      "Recommendations: soil, location & season based expert crop advice.",
    ],
    crops: { title: "Crop Library", search: "Search crops...", allCategories: "All Categories", season: "Season", soil: "Soil Type", irrigation: "Irrigation", pests: "Common Pests", fertilizer: "Fertilizer Schedule", bestPractices: "Best Practices", cropsFound: "crops found", askOnWhatsApp: "Ask on WhatsApp" },
    community: { title: "Community Q&A", askQuestion: "Ask a Question", placeholder: "What's your farming question?", post: "Post Question", answer: "Write your answer...", answers: "Answers", share: "Share via WhatsApp", upvote: "Upvote", category: "Category", reply: "Reply" },
    mandi: { title: "Mandi Rates", search: "Search by village, district, or market...", state: "State", commodity: "Commodity", minPrice: "Min Price", maxPrice: "Max Price", modalPrice: "Modal Price", nearby: "My Surroundings", all: "All", crop: "crop", crops: "crops", tapExpand: "more crops - tap to expand", showingNearby: "Showing nearest markets based on your location", markets: "markets", rates: "rates", showCharts: "Charts", priceAlerts: "Alerts", alertsEnabled: "Price Alerts Enabled", significantChanges: "commodities with significant price changes (>10%)", showingAlerts: "Showing only commodities with >10% price change", sortDefault: "Sort: Default", sortPriceLow: "Price: Low to High", sortPriceHigh: "Price: High to Low", byState: "By State", perQuintal: "Per Quintal", vegetables: "Vegetables", fruits: "Fruits", cerealsGrains: "Cereals & Grains", pulsesLegumes: "Pulses & Legumes", spices: "Spices", oilseeds: "Oilseeds", cashCrops: "Cash Crops" },
    transport: { title: "Transport & Logistics", cropType: "Crop Type", quantity: "Quantity (Quintals)", pickup: "Pickup Location", destination: "Destination", submit: "Send via WhatsApp", whatsapp: "Chat on WhatsApp", call: "Call Now", requestPickup: "Request Pickup", fillDetails: "Fill details and send via WhatsApp", placeholderCrop: "e.g., Rice, Wheat, Cotton", placeholderQty: "e.g., 50", placeholderPickup: "Village/Town name", placeholderDest: "Market/City name", trackShipment: "Track Shipment", trackingId: "Tracking ID", placeholderTrackingId: "e.g., TRK-12345", track: "Track", statusBooked: "Booked", statusPickedUp: "Picked Up", statusInTransit: "In Transit", statusDelivered: "Delivered", estimatedArrival: "Estimated Arrival", noTracking: "Enter a tracking ID to see status", demoNote: "Demo tracking - real tracking coming soon" },
    diagnosis: { title: "Crop Disease Diagnosis", upload: "Upload Plant Photo", analyze: "Analyze with AI", result: "Diagnosis Result", disease: "Disease", treatment: "Treatment", prevention: "Prevention", severity: "Severity", poweredBy: "Powered by AI Vision Analysis", photoHint: "Take a photo or upload from gallery (max 10MB)", remove: "Remove", affectedPart: "Affected Plant Part", analyzing: "Analyzing with AI...", affected: "Affected", confidence: "Confidence", cause: "Cause", symptoms: "Symptoms", organicTreatment: "Organic Treatment", askExpert: "Ask Expert on WhatsApp", fileTooLarge: "File too large", fileTooLargeDesc: "Please upload an image under 10MB", analysisFailed: "Analysis Failed", modePlant: "Plant Disease", modeSoil: "Soil Detection", modeFertilizer: "Fertilizer", modeWeed: "Weed Detection", uploadSoil: "Upload Soil Photo", uploadFertilizer: "Upload Fertilizer Photo", uploadWeed: "Upload Weed Photo", analyzeSoil: "Analyze Soil", analyzeFertilizer: "Analyze Fertilizer", identifyWeed: "Identify Weed", weedReport: "Weed Identification Report", scientificName: "Scientific Name", family: "Family", weedType: "Type", origin: "Origin", invasiveness: "Invasiveness", growthHabit: "Growth Habit", lifeCycle: "Life Cycle", characteristics: "Characteristics", impactOnCrops: "Impact on Crops", affectedCrops: "Affected Crops", controlMethods: "Control Methods", organicControl: "Organic Control", chemicalControl: "Chemical Control", preventionTips: "Prevention Tips", bestTimeToControl: "Best Time to Control", economicImpact: "Economic Impact", fertilizerReport: "Fertilizer Analysis Report", soilReport: "Soil Analysis Report", type: "Type", quality: "Quality", composition: "Composition", nutrients: "Nutrients", bestSeason: "Best Season", soilSuitability: "Soil Suitability", suitableCrops: "Suitable Crops", applicationMethod: "Application Method", dosage: "Dosage", waterRequirement: "Water Requirement", organicAlternatives: "Organic Alternatives", precautions: "Precautions", warnings: "Warnings", moisture: "Moisture", phEstimate: "pH Estimate", organicMatter: "Organic Matter", fertility: "Fertility", waterRetention: "Water Retention", drainage: "Drainage", fertilityTips: "Fertility Tips", soilMaintenance: "Soil Maintenance", irrigationWaterRequirement: "Irrigation Water Requirement", recommendedImprovements: "Recommended Improvements", cropName: "Crop", goodQuality: "Good Quality", poorQuality: "Poor Quality", averageQuality: "Average Quality" },
    yieldPrediction: { title: "Crop Yield Prediction", subtitle: "AI-powered yield estimation based on environmental inputs", cropEnvironmentalData: "Crop & Environmental Data", enterCropType: "Enter your crop type and current field conditions", cropType: "Crop Type", selectCropType: "Select crop type", temperature: "Temperature (C)", rainfall: "Rainfall (mm)", humidity: "Humidity (%)", soilPH: "Soil pH", predictYield: "Predict Yield", analyzing: "Analyzing...", predictedYield: "Predicted Yield", unit: "tons/hectare", confidence: "Confidence", smartSuggestions: "Smart Suggestions", yieldComparison: "Yield Comparison by Crop", currentYield: "Current Yield", optimalYield: "Optimal Yield", lowRainfallWarning: "Low rainfall detected. Consider drip or sprinkler irrigation to maintain soil moisture.", highTemperatureWarning: "High temperature alert. Use shade nets, mulching, or heat-tolerant crop varieties.", acidicSoilInfo: "Acidic soil detected. Apply lime (calcium carbonate) to raise pH for better nutrient absorption.", lowHumidityWarning: "Low humidity can cause moisture stress. Increase irrigation frequency and use mulch.", optimalConditions: "Optimal growing conditions detected! Maintain current practices for best results." },
    recommendations: { title: "Crop Recommendations", soilBased: "Soil-Based", locationBased: "Location-Based", seasonBased: "Season-Based", selectSoil: "Select Soil Type", selectRegion: "Select Region", currentSeason: "Current Season", expertTips: "Expert Tips", source: "Source", climate: "Climate", states: "States" },
    cropCalendar: {
      title: "Crop Calendar",
      subtitle: "Complete farming roadmaps with step-by-step guidance from seed preparation to harvest and post-harvest activities",
      defaultRoadmap: "Default Roadmap",
      liveTracking: "Live Tracking",
      currentSeason: "Current Season",
      monsoonSeason: "Monsoon season (June-September) - Focus on rain-fed crops",
      winterSeason: "Winter season (October-March) - Focus on irrigated crops",
      summerSeason: "Summer season (April-May) - Focus on irrigated crops with high water availability",
      selectState: "Select State/Region",
      cropCategory: "Crop Category",
      startLiveTracking: "Start Live Crop Tracking",
      selectYourCrop: "Select Your Crop",
      cultivationStartDate: "Cultivation Start Date",
      chooseYourCrop: "Choose your crop",
      howLiveTrackingWorks: "How Live Tracking Works:",
      trackEachStage: "Track each farming stage with real dates",
      markStagesComplete: "Mark stages complete when finished",
      getSolutions: "Get solutions if something goes wrong",
      monitorProgress: "Monitor overall progress percentage",
      complete: "Complete",
      started: "Started",
      completed: "COMPLETED",
      inProgress: "IN PROGRESS",
      pending: "PENDING",
      markComplete: "Mark Complete",
      needHelp: "Need Help?",
      resetTracking: "Reset Tracking",
      liveFarmingProgress: "Live Farming Progress",
      trackingProgress: "Tracking Progress",
      stages: "stages",
      problemSolver: "Problem Solver",
      havingIssues: "Having issues with this stage? Here are common problems and solutions:",
      pestProblems: "Pest Problems",
      pestSolution: "Apply organic neem oil spray or consult local agricultural officer for pest identification and treatment.",
      weatherIssues: "Weather Issues",
      weatherSolution: "Adjust irrigation schedule based on rainfall. Provide drainage if waterlogged or extra watering if drought.",
      poorGrowth: "Poor Growth",
      poorGrowthSolution: "Check soil nutrients, apply balanced fertilizer, ensure proper spacing and sunlight exposure.",
      problemSolved: "Problem Solved - Continue",
      close: "Close",
      completeRoadmap: "Complete Farming Roadmap - Seed to Harvest",
      viewCompleteRoadmap: "View Complete Roadmap",
      farmingTips: "Farming Tips",
      temperature: "Temperature",
      rainfall: "Rainfall",
      soilType: "Soil Type",
      noCropsFound: "No crops found",
      adjustFilters: "Try adjusting your filters to see more crop calendar information.",
      kharif: "Kharif",
      rabi: "Rabi",
      zaid: "Zaid",
      cereals: "Cereals",
      pulses: "Pulses",
      vegetables: "Vegetables",
      fruits: "Fruits",
      cashCrops: "Cash Crops",
      oilseeds: "Oilseeds",
      spices: "Spices"
    },
    cropHealth: {
      title: "Crop Health Monitoring",
      subtitle: "Satellite-based crop health analysis using NDVI technology",
      locationAnalysis: "Location Analysis",
      locationDesc: "Enter your field coordinates to analyze crop health",
      coordinates: "Coordinates",
      analyzeCrop: "Analyze Crop Health",
      analyzing: "Analyzing satellite data...",
      poweredBy: "Powered by Satellite Imagery",
      healthStatus: "Health Status",
      ndviIndex: "NDVI Index",
      recommendations: "Recommendations",
      excellent: "Excellent",
      good: "Good",
      moderate: "Moderate",
      poor: "Poor",
      improving: "Improving",
      stable: "Stable",
      declining: "Declining",
      excellentRec1: "Maintain current practices",
      excellentRec2: "Continue regular monitoring",
      goodRec1: "Keep up good work",
      goodRec2: "Monitor for any changes",
      moderateRec1: "Check irrigation levels",
      moderateRec2: "Consider fertilizer application",
      moderateRec3: "Monitor for pests",
      poorRec1: "Immediate attention needed",
      poorRec2: "Check for disease or pests",
      poorRec3: "Consult agricultural expert",
      analysisComplete: "Analysis Complete",
      satelliteDataProcessed: "Satellite data processed",
      satelliteData: "Satellite Data",
      satelliteDataDesc: "Real-time satellite imagery analysis",
      ndviAnalysis: "NDVI Analysis",
      ndviAnalysisDesc: "Normalized Difference Vegetation Index",
      actionable: "Actionable Insights",
      actionableDesc: "Expert recommendations based on analysis"
    },
    chatbot: {
      greeting: [
        "Hello! I'm AgriBot, your AI farming assistant. I can help you with all AgriLink features. What would you like to know?",
        "Hi there! Welcome to AgriLink - your complete farming companion. How can I assist you today?",
        "Welcome! I'm your AI farming expert. What farming challenge can I help you solve?"
      ],
      community: ["Ask farming questions", "Get expert answers", "Share knowledge"],
      mandi: ["Check live market rates", "Compare prices", "Find nearby markets"],
      transport: ["Request pickup", "Track shipment", "Connect with logistics"],
      diagnosis: ["Upload plant photo", "Get AI diagnosis", "Treatment recommendations"],
      yieldPrediction: ["Predict crop yield", "Environmental analysis", "Smart suggestions"],
      cropCalendar: ["Farming roadmaps", "Track progress", "Stage-by-stage guidance"],
      recommendations: ["Soil-based advice", "Location recommendations", "Seasonal tips"],
      agrilink: ["Comprehensive farming platform", "AI-powered tools", "Multi-language support"],
      default: "I can help you with crops, mandi rates, diagnosis, and more!",
      typing: "AgriBot is typing...",
      placeholder: "Ask me anything about farming..."
    },
    common: { loading: "Loading...", noResults: "No results found", viewDetails: "View Details", back: "Back", whatsappHelp: "Get Help on WhatsApp", selectLanguage: "Select Language", all: "All", weather: "Weather", humidity: "Humidity", wind: "Wind", condition: "Condition", weatherSource: "Weather Source" }
  },
  hi: {
    nav: { home: "होम", crops: "फसल पुस्तकालय", community: "समुदाय", mandi: "मंडी दरें", transport: "परिवहन", diagnosis: "निदान", yieldPrediction: "उपज भविष्यवाणी", cropCalendar: "फसल कैलेंडर", recommendations: "सिफारिशें", cropHealth: "फसल स्वास्थ्य" },
    hero: { title: "एग्रीलिंक - किसान फसल बुद्धिमत्ता", subtitle: "आपका पूर्ण खेती साथी", cta: "फसलें देखें", badge: "एआई-संचालित", problemTitle: "किसान फसल बुद्धिमत्ता", aiDiagnosis: "एआई निदान" },
    stats: { cropsListed: "फसलें सूचीबद्ध", languages: "भाषाएं", mandiMarkets: "मंडी बाजार", aiPowered: "एआई संचालित", realtime: "वास्तविक समय" },
    features: { cropsDesc: "फसल जानकारी", communityDesc: "प्रश्नोत्तर मंच", mandiDesc: "लाइव दरें", transportDesc: "रसद", diagnosisDesc: "रोग पहचान", recommendationsDesc: "फसल सलाह", yieldPredictionDesc: "उपज भविष्यवाणी", cropCalendarDesc: "खेती रोडमैप", cropHealthDesc: "स्वास्थ्य निगरानी" },
    problemItems: ["फसल पुस्तकालय", "समुदाय प्रश्नोत्तर", "मंडी दरें", "परिवहन", "एआई निदान", "सिफारिशें"],
    crops: { title: "फसल पुस्तकालय", search: "खोजें...", allCategories: "सभी", season: "मौसम", soil: "मिट्टी", irrigation: "सिंचाई", pests: "कीट", fertilizer: "उर्वरक", bestPractices: "सर्वोत्तम प्रथाएं", cropsFound: "मिली", askOnWhatsApp: "व्हाट्सएप पर पूछें" },
    community: { title: "समुदाय", askQuestion: "पूछें", placeholder: "आपका सवाल?", post: "पोस्ट करें", answer: "उत्तर...", answers: "उत्तर", share: "साझा करें", upvote: "वोट दें", category: "श्रेणी", reply: "जवाब दें" },
    mandi: { title: "मंडी दरें", search: "खोजें...", state: "राज्य", commodity: "वस्तु", minPrice: "न्यूनतम", maxPrice: "अधिकतम", modalPrice: "मोडल", nearby: "पास", all: "सभी", crop: "फसल", crops: "फसलें", tapExpand: "अधिक", showingNearby: "पास के बाजार", markets: "बाजार", rates: "दरें" },
    transport: { title: "परिवहन", cropType: "फसल", quantity: "मात्रा", pickup: "पिकअप", destination: "गंतव्य", submit: "भेजें", whatsapp: "व्हाट्सएप", call: "कॉल करें", requestPickup: "अनुरोध", fillDetails: "विवरण भरें", placeholderCrop: "चावल, गेहूं", placeholderQty: "50", placeholderPickup: "गांव", placeholderDest: "बाजार" },
    diagnosis: { title: "निदान", upload: "फोटो अपलोड करें", analyze: "विश्लेषण करें", result: "परिणाम", disease: "रोग", treatment: "उपचार", prevention: "रोकथाम", severity: "गंभीरता", poweredBy: "एआई संचालित", photoHint: "फोटो अपलोड करें", remove: "हटाएं", affectedPart: "प्रभावित भाग", analyzing: "विश्लेषण हो रहा है...", affected: "प्रभावित", confidence: "विश्वास", cause: "कारण", symptoms: "लक्षण", organicTreatment: "उपचार", askExpert: "विशेषज्ञ से पूछें" },
    yieldPrediction: { title: "उपज भविष्यवाणी", subtitle: "एआई भविष्यवाणी", cropEnvironmentalData: "फसल डेटा", enterCropType: "फसल दर्ज करें", cropType: "फसल", selectCropType: "चुनें", temperature: "तापमान", rainfall: "वर्षा", humidity: "आर्द्रता", soilPH: "पीएच", predictYield: "भविष्यवाणी करें", analyzing: "विश्लेषण हो रहा है...", predictedYield: "अनुमानित", unit: "टन/हेक्टेयर", confidence: "विश्वास", smartSuggestions: "सुझाव", yieldComparison: "तुलना", currentYield: "वर्तमान", optimalYield: "इष्टतम" },
    recommendations: { title: "सिफारिशें", soilBased: "मिट्टी", locationBased: "स्थान", seasonBased: "मौसम", selectSoil: "मिट्टी चुनें", selectRegion: "क्षेत्र चुनें", currentSeason: "मौसम", expertTips: "सुझाव", source: "स्रोत", climate: "जलवायु", states: "राज्य" },
    cropCalendar: { title: "फसल कैलेंडर", subtitle: "खेती रोडमैप", defaultRoadmap: "रोडमैप", liveTracking: "लाइव ट्रैकिंग", currentSeason: "मौसम", monsoonSeason: "मानसून", winterSeason: "सर्दी", summerSeason: "गर्मी", selectState: "राज्य", cropCategory: "श्रेणी", startLiveTracking: "शुरू करें", selectYourCrop: "फसल चुनें", cultivationStartDate: "शुरुआत तिथि", chooseYourCrop: "फसल चुनें" },
    cropHealth: { title: "फसल स्वास्थ्य", subtitle: "उपग्रह विश्लेषण", locationAnalysis: "स्थान", locationDesc: "निर्देशांक दर्ज करें", coordinates: "निर्देशांक", analyzeCrop: "विश्लेषण करें", analyzing: "विश्लेषण हो रहा है...", poweredBy: "उपग्रह", healthStatus: "स्थिति", ndviIndex: "एनडीवीआई", recommendations: "सिफारिशें", excellent: "उत्कृष्ट", good: "अच्छा", moderate: "मध्यम", poor: "खराब" },
    chatbot: { greeting: ["नमस्ते!", "हाय!", "स्वागत है!"], community: ["सवाल पूछें"], mandi: ["दरें जांचें"], transport: ["पिकअप अनुरोध"], diagnosis: ["फोटो अपलोड करें"], yieldPrediction: ["उपज भविष्यवाणी"], cropCalendar: ["रोडमैप"], recommendations: ["सलाह लें"], agrilink: ["खेती मंच"], default: "मैं कैसे मदद कर सकता हूं?", typing: "टाइप हो रहा है...", placeholder: "पूछें..." },
    common: { loading: "लोड हो रहा है...", noResults: "कोई परिणाम नहीं", viewDetails: "विवरण", back: "वापस", whatsappHelp: "व्हाट्सएप", selectLanguage: "भाषा", all: "सभी", weather: "मौसम", humidity: "आर्द्रता", wind: "हवा", condition: "स्थिति", weatherSource: "स्रोत" }
  }
};

// All other languages use English translations for now
// You can add proper translations later
const allLanguages = ["te", "ta", "kn", "ml", "mr", "bn", "gu", "pa", "or", "as", "ur", "sd", "ne", "mai", "sat", "ks", "doi", "kok", "mni", "bo", "sa", "raj", "bh", "chh", "gon", "tu", "kha", "miz", "nag"];
allLanguages.forEach(lang => {
  translations[lang] = translations.en;
});

export function getTranslation(lang: string): TranslationKeys {
  return translations[lang] || translations.en;
}
