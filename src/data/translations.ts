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
  crops: { title: string; search: string; allCategories: string; season: string; soil: string; irrigation: string; pests: string; fertilizer: string; bestPractices: string; cropsFound: string; askOnWhatsApp: string; cultivationTips: string; requiredTools: string; };
  community: { title: string; askQuestion: string; placeholder: string; post: string; answer: string; answers: string; share: string; upvote: string; category: string; reply: string };
  mandi: any;
  transport: any;
  diagnosis: any;
  yieldPrediction: any;
  recommendations: any;
  cropHealth: any;
  cropCalendar: any;
  chatbot: any;
  weatherWidget: any;
  yieldPredictionExtra: any;
  mandiExtra: any;
  transportExtra: any;
  common: { loading: string; noResults: string; viewDetails: string; back: string; whatsappHelp: string; selectLanguage: string; all: string; weather: string; humidity: string; wind: string; condition: string; weatherSource: string; toggleTheme: string; contactWhatsapp: string; voiceEnabled: string; voiceDisabled: string; stopSpeaking: string; listening: string; aiAssistant: string; };
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
    crops: { title: "Crop Library", search: "Search crops...", allCategories: "All Categories", season: "Season", soil: "Soil Type", irrigation: "Irrigation", pests: "Common Pests", fertilizer: "Fertilizer Schedule", bestPractices: "Best Practices", cropsFound: "crops found", askOnWhatsApp: "Ask on WhatsApp", cultivationTips: "Cultivation Tips", requiredTools: "Required Tools" },
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
    weatherWidget: { failedFetch: "Failed to fetch weather data", yourLocation: "Your Location", unableFetch: "Unable to fetch weather data", clear: "Clear", clearSky: "Clear sky", partlyCloudy: "Partly Cloudy", foggy: "Foggy", fog: "Fog", rainy: "Rainy", rain: "Rain", snowy: "Snowy", snow: "Snow", rainShowers: "Rain showers", stormy: "Stormy", thunderstorm: "Thunderstorm", unknown: "Unknown", unavailable: "Weather data unavailable", dataSource: "Data from Open-Meteo" },
    yieldPredictionExtra: { fetchingWeather: "Fetching live weather data...", failedWeather: "Weather Fetch Failed", noAutoFill: "Could not auto-fill weather data", autoFilled: "Auto-filled", refreshWeather: "Refresh Weather Data", weatherLoaded: "Weather data loaded", autoFetchedFor: "Automatically fetched weather for ", mlModelPowered: "🎯 Powered by Random Forest ML Model" },
    mandiExtra: { live: "Live", fetchingLive: "Fetching live data...", staticData: "Static Data", updated: "Updated", geoNotSupported: "Geolocation not supported", locationDenied: "Location access denied. Please enable location." },
    transportExtra: { missingDetails: "Missing details", fillAll: "Please fill all fields", pickupRegistered: "✅ Pickup Registered!", trackingIdIs: "Your tracking ID is ", phoneLabel: "📱 Phone Number", phonePlaceholder: "e.g., 9876543210", yourId: "Your unique tracking ID:", sendDetails: "Send ID & Details via WhatsApp", trackThis: "→ Track this shipment", newRequest: "+ New Request" },
    common: { loading: "Loading...", noResults: "No results found", viewDetails: "View Details", back: "Back", whatsappHelp: "Get Help on WhatsApp", selectLanguage: "Select Language", all: "All", weather: "Weather", humidity: "Humidity", wind: "Wind", condition: "Condition", weatherSource: "Weather Source", toggleTheme: "Toggle theme", contactWhatsapp: "Contact us on WhatsApp", voiceEnabled: "Voice enabled", voiceDisabled: "Voice disabled", stopSpeaking: "Stop speaking", listening: "Listening... Speak now", aiAssistant: "AI Farming Assistant" }
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
    weatherWidget: { failedFetch: "मौसम डेटा प्राप्त करने में विफल", yourLocation: "आपका स्थान", unableFetch: "मौसम डेटा प्राप्त करने में असमर्थ", clear: "साफ़", clearSky: "साफ़ आसमान", partlyCloudy: "आंशिक रूप से बादल", foggy: "धुंधला", fog: "कोहरा", rainy: "बारिश", rain: "बारिश", snowy: "बर्फबारी", snow: "बर्फ", rainShowers: "बारिश की बौछारें", stormy: "तूफानी", thunderstorm: "गरज के साथ तूफान", unknown: "अज्ञात", unavailable: "मौसम डेटा अनुपलब्ध", dataSource: "Open-Meteo से डेटा" },
    yieldPredictionExtra: { fetchingWeather: "मौसम डेटा ला रहा है...", failedWeather: "मौसम विफल", noAutoFill: "स्वतः भरने में असमर्थ", autoFilled: "स्वतः भरा गया", refreshWeather: "मौसम रीफ्रेश करें", weatherLoaded: "मौसम डेटा लोड हुआ", autoFetchedFor: "के लिए मौसम प्राप्त किया: ", mlModelPowered: "🎯 मशीन लर्निंग द्वारा संचालित" },
    mandiExtra: { live: "लाइव", fetchingLive: "डेटा प्राप्त कर रहा है...", staticData: "स्थैतिक डेटा", updated: "अद्यतित", geoNotSupported: "स्थान समर्थित नहीं है", locationDenied: "स्थान एक्सेस अस्वीकृत" },
    transportExtra: { missingDetails: "विवरण अनुपलब्ध", fillAll: "सभी फ़ील्ड भरें", pickupRegistered: "✅ पिकअप पंजीकृत!", trackingIdIs: "आपकी ट्रैकिंग आईडी है ", phoneLabel: "📱 फ़ोन नंबर", phonePlaceholder: "उदा., 9876543210", yourId: "आपकी विशिष्ट ट्रैकिंग आईडी:", sendDetails: "WhatsApp के माध्यम से विवरण भेजें", trackThis: "→ इस शिपमेंट को ट्रैक करें", newRequest: "+ नया अनुरोध" },
    common: { loading: "लोड हो रहा है...", noResults: "कोई परिणाम नहीं", viewDetails: "विवरण", back: "वापस", whatsappHelp: "व्हाट्सएप", selectLanguage: "भाषा", all: "सभी", weather: "मौसम", humidity: "आर्द्रता", wind: "हवा", condition: "स्थिति", weatherSource: "स्रोत", toggleTheme: "थीम बदलें", contactWhatsapp: "व्हाट्सएप पर संपर्क करें", voiceEnabled: "आवाज़ चालू", voiceDisabled: "आवाज़ बंद", stopSpeaking: "बोलना बंद करें", listening: "सुन रहे हैं... अब बोलें", aiAssistant: "एआई खेती सहायक" }
  }
};

// Telugu translations
translations.te = {
  nav: { home: "హోమ్", crops: "పంట లైబ్రరీ", community: "కమ్యూనిటీ", mandi: "మండి ధరలు", transport: "రవాణా", diagnosis: "నిర్ధారణ", yieldPrediction: "దిగుబడి అంచనా", cropCalendar: "పంట క్యాలెండర్", recommendations: "సిఫార్సులు", cropHealth: "పంట ఆరోగ్యం" },
  hero: { title: "అగ్రిలింక్ - రైతు పంట తెలివితేటలు", subtitle: "మీ పూర్తి వ్యవసాయ సహాయకుడు", cta: "పంటలను అన్వేషించండి", badge: "AI-శక్తితో", problemTitle: "రైతు పంట తెలివితేటలు", aiDiagnosis: "AI నిర్ధారణ" },
  stats: { cropsListed: "పంటల జాబితా", languages: "భాషలు", mandiMarkets: "మండి మార్కెట్లు", aiPowered: "AI శక్తితో", realtime: "నిజ సమయం" },
  features: { cropsDesc: "పంట సమాచారం", communityDesc: "ప్రశ్నోత్తరాలు", mandiDesc: "ప్రత్యక్ష ధరలు", transportDesc: "రవాణా", diagnosisDesc: "రోగ గుర్తింపు", recommendationsDesc: "పంట సలహా", yieldPredictionDesc: "దిగుబడి అంచనా", cropCalendarDesc: "వ్యవసాయ రోడ్‌మ్యాప్", cropHealthDesc: "ఆరోగ్య పర్యవేక్షణ" },
  problemItems: ["పంట లైబ్రరీ", "కమ్యూనిటీ", "మండి ధరలు", "రవాణా", "AI నిర్ధారణ", "సిఫార్సులు"],
  crops: { title: "పంట లైబ్రరీ", search: "శోధించండి...", allCategories: "అన్నీ", season: "సీజన్", soil: "నేల", irrigation: "నీటిపారుదల", pests: "తెగుళ్లు", fertilizer: "ఎరువులు", bestPractices: "ఉత్తమ పద్ధతులు", cropsFound: "దొరికాయి", askOnWhatsApp: "WhatsApp లో అడగండి" },
  community: { title: "కమ్యూనిటీ", askQuestion: "ప్రశ్న అడగండి", placeholder: "మీ ప్రశ్న?", post: "పోస్ట్ చేయండి", answer: "సమాధానం...", answers: "సమాధానాలు", share: "షేర్ చేయండి", upvote: "ఓటు", category: "వర్గం", reply: "సమాధానం" },
  mandi: { title: "మండి ధరలు", search: "శోధించండి...", state: "రాష్ట్రం", commodity: "వస్తువు", minPrice: "కనిష్ట", maxPrice: "గరిష్ట", modalPrice: "మోడల్", nearby: "సమీపంలో", all: "అన్నీ", crop: "పంట", crops: "పంటలు", tapExpand: "మరిన్ని", showingNearby: "సమీప మార్కెట్లు", markets: "మార్కెట్లు", rates: "ధరలు" },
  transport: { title: "రవాణా", cropType: "పంట", quantity: "పరిమాణం", pickup: "పికప్", destination: "గమ్యం", submit: "పంపండి", whatsapp: "WhatsApp", call: "కాల్ చేయండి", requestPickup: "అభ్యర్థన", fillDetails: "వివరాలు నింపండి", placeholderCrop: "వరి, గోధుమ", placeholderQty: "50", placeholderPickup: "గ్రామం", placeholderDest: "మార్కెట్" },
  diagnosis: { title: "నిర్ధారణ", upload: "ఫోటో అప్‌లోడ్ చేయండి", analyze: "విశ్లేషించండి", result: "ఫలితం", disease: "రోగం", treatment: "చికిత్స", prevention: "నివారణ", severity: "తీవ్రత", poweredBy: "AI శక్తితో", photoHint: "ఫోటో అప్‌లోడ్ చేయండి", remove: "తొలగించు", affectedPart: "ప్రభావిత భాగం", analyzing: "విశ్లేషిస్తోంది...", affected: "ప్రభావితం", confidence: "విశ్వాసం", cause: "కారణం", symptoms: "లక్షణాలు", organicTreatment: "చికిత్స", askExpert: "నిపుణుడిని అడగండి" },
  yieldPrediction: { title: "దిగుబడి అంచనా", subtitle: "AI అంచనా", cropEnvironmentalData: "పంట డేటా", enterCropType: "పంట నమోదు చేయండి", cropType: "పంట", selectCropType: "ఎంచుకోండి", temperature: "ఉష్ణోగ్రత", rainfall: "వర్షపాతం", humidity: "తేమ", soilPH: "pH", predictYield: "అంచనా వేయండి", analyzing: "విశ్లేషిస్తోంది...", predictedYield: "అంచనా", unit: "టన్నులు/హెక్టారు", confidence: "విశ్వాసం", smartSuggestions: "సూచనలు", yieldComparison: "పోలిక", currentYield: "ప్రస్తుతం", optimalYield: "ఉత్తమం" },
  recommendations: { title: "సిఫార్సులు", soilBased: "నేల", locationBased: "స్థానం", seasonBased: "సీజన్", selectSoil: "నేల ఎంచుకోండి", selectRegion: "ప్రాంతం ఎంచుకోండి", currentSeason: "సీజన్", expertTips: "సూచనలు", source: "మూలం", climate: "వాతావరణం", states: "రాష్ట్రాలు" },
  cropCalendar: { title: "పంట క్యాలెండర్", subtitle: "వ్యవసాయ రోడ్‌మ్యాప్", defaultRoadmap: "రోడ్‌మ్యాప్", liveTracking: "లైవ్ ట్రాకింగ్", currentSeason: "సీజన్", monsoonSeason: "వర్షాకాలం", winterSeason: "శీతాకాలం", summerSeason: "వేసవి", selectState: "రాష్ట్రం", cropCategory: "వర్గం", startLiveTracking: "ప్రారంభించండి", selectYourCrop: "పంట ఎంచుకోండి", cultivationStartDate: "ప్రారంభ తేదీ", chooseYourCrop: "పంట ఎంచుకోండి" },
  cropHealth: { title: "పంట ఆరోగ్యం", subtitle: "ఉపగ్రహ విశ్లేషణ", locationAnalysis: "స్థానం", locationDesc: "కోఆర్డినేట్లు నమోదు చేయండి", coordinates: "కోఆర్డినేట్లు", analyzeCrop: "విశ్లేషించండి", analyzing: "విశ్లేషిస్తోంది...", poweredBy: "ఉపగ్రహం", healthStatus: "స్థితి", ndviIndex: "NDVI", recommendations: "సిఫార్సులు", excellent: "అద్భుతం", good: "మంచిది", moderate: "మధ్యస్థం", poor: "చెడు" },
  chatbot: { greeting: ["నమస్కారం!", "హాయ్!", "స్వాగతం!"], community: ["ప్రశ్న అడగండి"], mandi: ["ధరలు చూడండి"], transport: ["పికప్ అభ్యర్థన"], diagnosis: ["ఫోటో అప్‌లోడ్"], yieldPrediction: ["దిగుబడి అంచనా"], cropCalendar: ["రోడ్‌మ్యాప్"], recommendations: ["సలహా"], agrilink: ["వ్యవసాయ వేదిక"], default: "నేను ఎలా సహాయం చేయగలను?", typing: "టైప్ చేస్తోంది...", placeholder: "అడగండి..." },
  weatherWidget: { failedFetch: "వాతావరణ డేటా పొందడంలో విఫలమైంది", yourLocation: "మీ స్థానం", unableFetch: "వాతావరణ డేటా పొందలేకపోయాము", clear: "స్పష్టం", clearSky: "స్పష్టమైన ఆకాశం", partlyCloudy: "పాక్షికంగా మేఘావృతం", foggy: "పొగమంచు", fog: "పొగమంచు", rainy: "వర్షం", rain: "వర్షం", snowy: "మంచు", snow: "మంచు", rainShowers: "వర్షపు జల్లులు", stormy: "తుఫాను", thunderstorm: "ఉరుములతో కూడిన తుఫాను", unknown: "తెలియదు", unavailable: "డేటా అందుబాటులో లేదు", dataSource: "Open-Meteo నుండి డేటా" },
  yieldPredictionExtra: { fetchingWeather: "వాతావరణ డేటా తీసుకువస్తోంది...", failedWeather: "వాతావరణం విఫలమైంది", noAutoFill: "స్వయంచాలక పూరింపు సాధ్యం కాలేదు", autoFilled: "స్వయంచాలకంగా పూరించబడింది", refreshWeather: "వాతావరణాన్ని రిఫ్రెష్ చేయండి", weatherLoaded: "వాతావరణ డేటా లోడ్ చేయబడింది", autoFetchedFor: "దీని కోసం వాతావరణం పొందబడింది: ", mlModelPowered: "🎯 మెషిన్ లెర్నింగ్ ద్వారా ఆధారితం" },
  mandiExtra: { live: "లైవ్", fetchingLive: "డేటా తీసుకువస్తోంది...", staticData: "స్టాటిక్ డేటా", updated: "నవీకరించబడింది", geoNotSupported: "స్థానం మద్దతు లేదు", locationDenied: "స్థాన అనుమతి లేదు" },
  transportExtra: { missingDetails: "వివరాలు లేవు", fillAll: "అన్ని ఫీల్డ్‌లను పూరించండి", pickupRegistered: "✅ పికప్ నమోదు చేయబడింది!", trackingIdIs: "మీ ట్రాకింగ్ ID ", phoneLabel: "📱 ఫోన్ నంబర్", phonePlaceholder: "ఉదా., 9876543210", yourId: "మీ ట్రాకింగ్ ID:", sendDetails: "WhatsApp ద్వారా వివరాలను పంపండి", trackThis: "→ ఈ రవాణాను ట్రాక్ చేయండి", newRequest: "+ కొత్త అభ్యర్థన" },
  common: { loading: "లోడ్ అవుతోంది...", noResults: "ఫలితాలు లేవు", viewDetails: "వివరాలు", back: "వెనుకకు", whatsappHelp: "WhatsApp", selectLanguage: "భాష", all: "అన్నీ", weather: "వాతావరణం", humidity: "తేమ", wind: "గాలి", condition: "స్థితి", weatherSource: "మూలం", toggleTheme: "థీమ్ మార్చండి", contactWhatsapp: "WhatsApp లో మమ్మల్ని సంప్రదించండి", voiceEnabled: "వాయిస్ ప్రారంభించబడింది", voiceDisabled: "వాయిస్ నిలిపివేయబడింది", stopSpeaking: "మాట్లాడటం ఆపండి", listening: "వింటున్నాను... ఇప్పుడు మాట్లాడండి", aiAssistant: "AI వ్యవసాయ సహాయకుడు" }
};

// Tamil translations
translations.ta = {
  nav: { home: "முகப்பு", crops: "பயிர் நூலகம்", community: "சமூகம்", mandi: "மண்டி விலைகள்", transport: "போக்குவரத்து", diagnosis: "நோய் கண்டறிதல்", yieldPrediction: "விளைச்சல் கணிப்பு", cropCalendar: "பயிர் நாட்காட்டி", recommendations: "பரிந்துரைகள்", cropHealth: "பயிர் ஆரோக்கியம்" },
  hero: { title: "அக்ரிலிங்க் - விவசாயி பயிர் நுண்ணறிவு", subtitle: "உங்கள் முழுமையான விவசாய துணை", cta: "பயிர்களை ஆராயுங்கள்", badge: "AI-இயக்கப்படும்", problemTitle: "விவசாயி பயிர் நுண்ணறிவு", aiDiagnosis: "AI நோய் கண்டறிதல்" },
  stats: { cropsListed: "பயிர்கள் பட்டியல்", languages: "மொழிகள்", mandiMarkets: "மண்டி சந்தைகள்", aiPowered: "AI இயக்கப்படும்", realtime: "நேரடி" },
  features: { cropsDesc: "பயிர் தகவல்", communityDesc: "கேள்வி பதில்", mandiDesc: "நேரடி விலைகள்", transportDesc: "போக்குவரத்து", diagnosisDesc: "நோய் கண்டறிதல்", recommendationsDesc: "பயிர் ஆலோசனை", yieldPredictionDesc: "விளைச்சல் கணிப்பு", cropCalendarDesc: "விவசாய வழிகாட்டி", cropHealthDesc: "ஆரோக்கிய கண்காணிப்பு" },
  problemItems: ["பயிர் நூலகம்", "சமூகம்", "மண்டி விலைகள்", "போக்குவரத்து", "AI நோய் கண்டறிதல்", "பரிந்துரைகள்"],
  crops: { title: "பயிர் நூலகம்", search: "தேடுங்கள்...", allCategories: "அனைத்தும்", season: "பருவம்", soil: "மண்", irrigation: "நீர்ப்பாசனம்", pests: "பூச்சிகள்", fertilizer: "உரங்கள்", bestPractices: "சிறந்த நடைமுறைகள்", cropsFound: "கிடைத்தது", askOnWhatsApp: "WhatsApp இல் கேளுங்கள்" },
  community: { title: "சமூகம்", askQuestion: "கேள்வி கேளுங்கள்", placeholder: "உங்கள் கேள்வி?", post: "இடுகையிடுங்கள்", answer: "பதில்...", answers: "பதில்கள்", share: "பகிருங்கள்", upvote: "வாக்களியுங்கள்", category: "வகை", reply: "பதிலளி" },
  mandi: { title: "மண்டி விலைகள்", search: "தேடுங்கள்...", state: "மாநிலம்", commodity: "பொருள்", minPrice: "குறைந்தபட்சம்", maxPrice: "அதிகபட்சம்", modalPrice: "மாதிரி", nearby: "அருகில்", all: "அனைத்தும்", crop: "பயிர்", crops: "பயிர்கள்", tapExpand: "மேலும்", showingNearby: "அருகிலுள்ள சந்தைகள்", markets: "சந்தைகள்", rates: "விலைகள்" },
  transport: { title: "போக்குவரத்து", cropType: "பயிர்", quantity: "அளவு", pickup: "எடுப்பு", destination: "இலக்கு", submit: "அனுப்பு", whatsapp: "WhatsApp", call: "அழைக்கவும்", requestPickup: "கோரிக்கை", fillDetails: "விவரங்களை நிரப்பவும்", placeholderCrop: "அரிசி, கோதுமை", placeholderQty: "50", placeholderPickup: "கிராமம்", placeholderDest: "சந்தை" },
  diagnosis: { title: "நோய் கண்டறிதல்", upload: "புகைப்படம் பதிவேற்றவும்", analyze: "பகுப்பாய்வு செய்யவும்", result: "முடிவு", disease: "நோய்", treatment: "சிகிச்சை", prevention: "தடுப்பு", severity: "தீவிரம்", poweredBy: "AI இயக்கப்படும்", photoHint: "புகைப்படம் பதிவேற்றவும்", remove: "அகற்று", affectedPart: "பாதிக்கப்பட்ட பகுதி", analyzing: "பகுப்பாய்வு செய்கிறது...", affected: "பாதிக்கப்பட்டது", confidence: "நம்பிக்கை", cause: "காரணம்", symptoms: "அறிகுறிகள்", organicTreatment: "சிகிச்சை", askExpert: "நிபுணரிடம் கேளுங்கள்" },
  yieldPrediction: { title: "விளைச்சல் கணிப்பு", subtitle: "AI கணிப்பு", cropEnvironmentalData: "பயிர் தரவு", enterCropType: "பயிரை உள்ளிடவும்", cropType: "பயிர்", selectCropType: "தேர்ந்தெடுக்கவும்", temperature: "வெப்பநிலை", rainfall: "மழை", humidity: "ஈரப்பதம்", soilPH: "pH", predictYield: "கணிக்கவும்", analyzing: "பகுப்பாய்வு செய்கிறது...", predictedYield: "கணிப்பு", unit: "டன்கள்/ஹெக்டேர்", confidence: "நம்பிக்கை", smartSuggestions: "பரிந்துரைகள்", yieldComparison: "ஒப்பீடு", currentYield: "தற்போதைய", optimalYield: "சிறந்த" },
  recommendations: { title: "பரிந்துரைகள்", soilBased: "மண்", locationBased: "இடம்", seasonBased: "பருவம்", selectSoil: "மண் தேர்ந்தெடுக்கவும்", selectRegion: "பகுதி தேர்ந்தெடுக்கவும்", currentSeason: "பருவம்", expertTips: "பரிந்துரைகள்", source: "மூலம்", climate: "காலநிலை", states: "மாநிலங்கள்" },
  cropCalendar: { title: "பயிர் நாட்காட்டி", subtitle: "விவசாய வழிகாட்டி", defaultRoadmap: "வழிகாட்டி", liveTracking: "நேரடி கண்காணிப்பு", currentSeason: "பருவம்", monsoonSeason: "பருவமழை", winterSeason: "குளிர்காலம்", summerSeason: "கோடை", selectState: "மாநிலம்", cropCategory: "வகை", startLiveTracking: "தொடங்கவும்", selectYourCrop: "பயிர் தேர்ந்தெடுக்கவும்", cultivationStartDate: "தொடக்க தேதி", chooseYourCrop: "பயிர் தேர்ந்தெடுக்கவும்" },
  cropHealth: { title: "பயிர் ஆரோக்கியம்", subtitle: "செயற்கைக்கோள் பகுப்பாய்வு", locationAnalysis: "இடம்", locationDesc: "ஆயத்தொலைவுகளை உள்ளிடவும்", coordinates: "ஆயத்தொலைவுகள்", analyzeCrop: "பகுப்பாய்வு செய்யவும்", analyzing: "பகுப்பாய்வு செய்கிறது...", poweredBy: "செயற்கைக்கோள்", healthStatus: "நிலை", ndviIndex: "NDVI", recommendations: "பரிந்துரைகள்", excellent: "சிறந்த", good: "நல்லது", moderate: "மிதமான", poor: "மோசமான" },
  chatbot: { greeting: ["வணக்கம்!", "ஹாய்!", "வரவேற்கிறோம்!"], community: ["கேள்வி கேளுங்கள்"], mandi: ["விலைகளைப் பார்க்கவும்"], transport: ["எடுப்பு கோரிக்கை"], diagnosis: ["புகைப்படம் பதிவேற்றவும்"], yieldPrediction: ["விளைச்சல் கணிப்பு"], cropCalendar: ["வழிகாட்டி"], recommendations: ["ஆலோசனை"], agrilink: ["விவசாய தளம்"], default: "நான் எப்படி உதவ முடியும்?", typing: "தட்டச்சு செய்கிறது...", placeholder: "கேளுங்கள்..." },
  weatherWidget: { failedFetch: "வானிலை தரவைப் பெற முடியவில்லை", yourLocation: "உங்கள் இடம்", unableFetch: "வானிலை தரவைப் பெற இயலவில்லை", clear: "தெளிவான", clearSky: "தெளிவான வானம்", partlyCloudy: "பகுதியளவு மேகமூட்டம்", foggy: "பனிமூட்டம்", fog: "பனி", rainy: "மழை", rain: "மழை", snowy: "பனிப்பொழிவு", snow: "பனி", rainShowers: "மழைச்சாரல்", stormy: "புயல்", thunderstorm: "இடியுடன் கூடிய மழை", unknown: "தெரியவில்லை", unavailable: "தரவு கிடைக்கவில்லை", dataSource: "Open-Meteo தரவு" },
  yieldPredictionExtra: { fetchingWeather: "வானிலை தரவை எடுக்கிறது...", failedWeather: "வானிலை தோல்வி", noAutoFill: "தானாக நிரப்ப முடியவில்லை", autoFilled: "தானாக நிரப்பப்பட்டது", refreshWeather: "வானிலையை புதுப்பிக்கவும்", weatherLoaded: "வானிலை தரவு ஏற்றப்பட்டது", autoFetchedFor: "இதற்கான வானிலை பெறப்பட்டது: ", mlModelPowered: "🎯 இயந்திர கற்றல் சக்தி" },
  mandiExtra: { live: "நேரடி", fetchingLive: "தரவை எடுக்கிறது...", staticData: "நிலையான தரவு", updated: "புதுப்பிக்கப்பட்டது", geoNotSupported: "இடம் ஆதரிக்கப்படவில்லை", locationDenied: "இடம் அனுமதி இல்லை" },
  transportExtra: { missingDetails: "விவரங்கள் இல்லை", fillAll: "எல்லா புலங்களையும் நிரப்பவும்", pickupRegistered: "✅ পিকஅப் பதிவு செய்யப்பட்டது!", trackingIdIs: "உங்கள் டிராக்கிங் ஐடி ", phoneLabel: "📱 தொலைபேசி எண்", phonePlaceholder: "உதாரணம், 9876543210", yourId: "உங்கள் தனிப்பட்ட டிராக்கிங் ஐடி:", sendDetails: "விவரங்களை WhatsApp மூலம் அனுப்பவும்", trackThis: "→ இந்த பார்சலை கண்காணிக்கவும்", newRequest: "+ புதிய கோரிக்கை" },
  common: { loading: "ஏற்றுகிறது...", noResults: "முடிவுகள் இல்லை", viewDetails: "விவரங்கள்", back: "பின்னால்", whatsappHelp: "WhatsApp", selectLanguage: "மொழி", all: "அனைத்தும்", weather: "வானிலை", humidity: "ஈரப்பதம்", wind: "காற்று", condition: "நிலை", weatherSource: "மூலம்", toggleTheme: "கருப்பொருளை மாற்று", contactWhatsapp: "WhatsApp இல் எங்களை தொடர்பு கொள்ளவும்", voiceEnabled: "குரல் இயக்கப்பட்டது", voiceDisabled: "குரல் முடக்கப்பட்டது", stopSpeaking: "பேசுவதை நிறுத்து", listening: "கேட்கிறது... இப்போது பேசுங்கள்", aiAssistant: "AI விவசாய உதவியாளர்" }
};

// Kannada translations
translations.kn = {
  nav: { home: "ಮುಖಪುಟ", crops: "ಬೆಳೆ ಗ್ರಂಥಾಲಯ", community: "ಸಮುದಾಯ", mandi: "ಮಂಡಿ ದರಗಳು", transport: "ಸಾರಿಗೆ", diagnosis: "ರೋಗ ನಿರ್ಣಯ", yieldPrediction: "ಇಳುವರಿ ಮುನ್ಸೂಚನೆ", cropCalendar: "ಬೆಳೆ ಕ್ಯಾಲೆಂಡರ್", recommendations: "ಶಿಫಾರಸುಗಳು", cropHealth: "ಬೆಳೆ ಆರೋಗ್ಯ" },
  hero: { title: "ಅಗ್ರಿಲಿಂಕ್ - ರೈತ ಬೆಳೆ ಬುದ್ಧಿವಂತಿಕೆ", subtitle: "ನಿಮ್ಮ ಸಂಪೂರ್ಣ ಕೃಷಿ ಸಹಾಯಕ", cta: "ಬೆಳೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ", badge: "AI-ಚಾಲಿತ", problemTitle: "ರೈತ ಬೆಳೆ ಬುದ್ಧಿವಂತಿಕೆ", aiDiagnosis: "AI ರೋಗ ನಿರ್ಣಯ" },
  stats: { cropsListed: "ಬೆಳೆಗಳ ಪಟ್ಟಿ", languages: "ಭಾಷೆಗಳು", mandiMarkets: "ಮಂಡಿ ಮಾರುಕಟ್ಟೆಗಳು", aiPowered: "AI ಚಾಲಿತ", realtime: "ನೇರ ಸಮಯ" },
  features: { cropsDesc: "ಬೆಳೆ ಮಾಹಿತಿ", communityDesc: "ಪ್ರಶ್ನೋತ್ತರ", mandiDesc: "ನೇರ ದರಗಳು", transportDesc: "ಸಾರಿಗೆ", diagnosisDesc: "ರೋಗ ಗುರುತಿಸುವಿಕೆ", recommendationsDesc: "ಬೆಳೆ ಸಲಹೆ", yieldPredictionDesc: "ಇಳುವರಿ ಮುನ್ಸೂಚನೆ", cropCalendarDesc: "ಕೃಷಿ ಮಾರ್ಗದರ್ಶಿ", cropHealthDesc: "ಆರೋಗ್ಯ ಮೇಲ್ವಿಚಾರಣೆ" },
  problemItems: ["ಬೆಳೆ ಗ್ರಂಥಾಲಯ", "ಸಮುದಾಯ", "ಮಂಡಿ ದರಗಳು", "ಸಾರಿಗೆ", "AI ರೋಗ ನಿರ್ಣಯ", "ಶಿಫಾರಸುಗಳು"],
  crops: { title: "ಬೆಳೆ ಗ್ರಂಥಾಲಯ", search: "ಹುಡುಕಿ...", allCategories: "ಎಲ್ಲಾ", season: "ಋತು", soil: "ಮಣ್ಣು", irrigation: "ನೀರಾವರಿ", pests: "ಕೀಟಗಳು", fertilizer: "ಗೊಬ್ಬರ", bestPractices: "ಉತ್ತಮ ಅಭ್ಯಾಸಗಳು", cropsFound: "ಸಿಕ್ಕಿತು", askOnWhatsApp: "WhatsApp ನಲ್ಲಿ ಕೇಳಿ" },
  community: { title: "ಸಮುದಾಯ", askQuestion: "ಪ್ರಶ್ನೆ ಕೇಳಿ", placeholder: "ನಿಮ್ಮ ಪ್ರಶ್ನೆ?", post: "ಪೋಸ್ಟ್ ಮಾಡಿ", answer: "ಉತ್ತರ...", answers: "ಉತ್ತರಗಳು", share: "ಹಂಚಿಕೊಳ್ಳಿ", upvote: "ಮತ", category: "ವರ್ಗ", reply: "ಉತ್ತರಿಸಿ" },
  mandi: { title: "ಮಂಡಿ ದರಗಳು", search: "ಹುಡುಕಿ...", state: "ರಾಜ್ಯ", commodity: "ಸರಕು", minPrice: "ಕನಿಷ್ಠ", maxPrice: "ಗರಿಷ್ಠ", modalPrice: "ಮಾದರಿ", nearby: "ಹತ್ತಿರ", all: "ಎಲ್ಲಾ", crop: "ಬೆಳೆ", crops: "ಬೆಳೆಗಳು", tapExpand: "ಹೆಚ್ಚು", showingNearby: "ಹತ್ತಿರದ ಮಾರುಕಟ್ಟೆಗಳು", markets: "ಮಾರುಕಟ್ಟೆಗಳು", rates: "ದರಗಳು" },
  transport: { title: "ಸಾರಿಗೆ", cropType: "ಬೆಳೆ", quantity: "ಪ್ರಮಾಣ", pickup: "ಪಿಕಪ್", destination: "ಗಮ್ಯಸ್ಥಾನ", submit: "ಕಳುಹಿಸಿ", whatsapp: "WhatsApp", call: "ಕರೆ ಮಾಡಿ", requestPickup: "ವಿನಂತಿ", fillDetails: "ವಿವರಗಳನ್ನು ತುಂಬಿಸಿ", placeholderCrop: "ಅಕ್ಕಿ, ಗೋಧಿ", placeholderQty: "50", placeholderPickup: "ಗ್ರಾಮ", placeholderDest: "ಮಾರುಕಟ್ಟೆ" },
  diagnosis: { title: "ರೋಗ ನಿರ್ಣಯ", upload: "ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ", analyze: "ವಿಶ್ಲೇಷಿಸಿ", result: "ಫಲಿತಾಂಶ", disease: "ರೋಗ", treatment: "ಚಿಕಿತ್ಸೆ", prevention: "ತಡೆಗಟ್ಟುವಿಕೆ", severity: "ತೀವ್ರತೆ", poweredBy: "AI ಚಾಲಿತ", photoHint: "ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ", remove: "ತೆಗೆದುಹಾಕಿ", affectedPart: "ಪೀಡಿತ ಭಾಗ", analyzing: "ವಿಶ್ಲೇಷಿಸುತ್ತಿದೆ...", affected: "ಪೀಡಿತ", confidence: "ವಿಶ್ವಾಸ", cause: "ಕಾರಣ", symptoms: "ಲಕ್ಷಣಗಳು", organicTreatment: "ಚಿಕಿತ್ಸೆ", askExpert: "ತಜ್ಞರನ್ನು ಕೇಳಿ" },
  yieldPrediction: { title: "ಇಳುವರಿ ಮುನ್ಸೂಚನೆ", subtitle: "AI ಮುನ್ಸೂಚನೆ", cropEnvironmentalData: "ಬೆಳೆ ಡೇಟಾ", enterCropType: "ಬೆಳೆಯನ್ನು ನಮೂದಿಸಿ", cropType: "ಬೆಳೆ", selectCropType: "ಆಯ್ಕೆಮಾಡಿ", temperature: "ತಾಪಮಾನ", rainfall: "ಮಳೆ", humidity: "ತೇವಾಂಶ", soilPH: "pH", predictYield: "ಮುನ್ಸೂಚಿಸಿ", analyzing: "ವಿಶ್ಲೇಷಿಸುತ್ತಿದೆ...", predictedYield: "ಮುನ್ಸೂಚನೆ", unit: "ಟನ್‌ಗಳು/ಹೆಕ್ಟೇರ್", confidence: "ವಿಶ್ವಾಸ", smartSuggestions: "ಸಲಹೆಗಳು", yieldComparison: "ಹೋಲಿಕೆ", currentYield: "ಪ್ರಸ್ತುತ", optimalYield: "ಅತ್ಯುತ್ತಮ" },
  recommendations: { title: "ಶಿಫಾರಸುಗಳು", soilBased: "ಮಣ್ಣು", locationBased: "ಸ್ಥಳ", seasonBased: "ಋತು", selectSoil: "ಮಣ್ಣು ಆಯ್ಕೆಮಾಡಿ", selectRegion: "ಪ್ರದೇಶ ಆಯ್ಕೆಮಾಡಿ", currentSeason: "ಋತು", expertTips: "ಸಲಹೆಗಳು", source: "ಮೂಲ", climate: "ಹವಾಮಾನ", states: "ರಾಜ್ಯಗಳು" },
  cropCalendar: { title: "ಬೆಳೆ ಕ್ಯಾಲೆಂಡರ್", subtitle: "ಕೃಷಿ ಮಾರ್ಗದರ್ಶಿ", defaultRoadmap: "ಮಾರ್ಗದರ್ಶಿ", liveTracking: "ನೇರ ಟ್ರ್ಯಾಕಿಂಗ್", currentSeason: "ಋತು", monsoonSeason: "ಮಾನ್ಸೂನ್", winterSeason: "ಚಳಿಗಾಲ", summerSeason: "ಬೇಸಿಗೆ", selectState: "ರಾಜ್ಯ", cropCategory: "ವರ್ಗ", startLiveTracking: "ಪ್ರಾರಂಭಿಸಿ", selectYourCrop: "ಬೆಳೆ ಆಯ್ಕೆಮಾಡಿ", cultivationStartDate: "ಪ್ರಾರಂಭ ದಿನಾಂಕ", chooseYourCrop: "ಬೆಳೆ ಆಯ್ಕೆಮಾಡಿ" },
  cropHealth: { title: "ಬೆಳೆ ಆರೋಗ್ಯ", subtitle: "ಉಪಗ್ರಹ ವಿಶ್ಲೇಷಣೆ", locationAnalysis: "ಸ್ಥಳ", locationDesc: "ನಿರ್ದೇಶಾಂಕಗಳನ್ನು ನಮೂದಿಸಿ", coordinates: "ನಿರ್ದೇಶಾಂಕಗಳು", analyzeCrop: "ವಿಶ್ಲೇಷಿಸಿ", analyzing: "ವಿಶ್ಲೇಷಿಸುತ್ತಿದೆ...", poweredBy: "ಉಪಗ್ರಹ", healthStatus: "ಸ್ಥಿತಿ", ndviIndex: "NDVI", recommendations: "ಶಿಫಾರಸುಗಳು", excellent: "ಅತ್ಯುತ್ತಮ", good: "ಒಳ್ಳೆಯದು", moderate: "ಮಧ್ಯಮ", poor: "ಕಳಪೆ" },
  chatbot: { greeting: ["ನಮಸ್ಕಾರ!", "ಹಾಯ್!", "ಸ್ವಾಗತ!"], community: ["ಪ್ರಶ್ನೆ ಕೇಳಿ"], mandi: ["ದರಗಳನ್ನು ನೋಡಿ"], transport: ["ಪಿಕಪ್ ವಿನಂತಿ"], diagnosis: ["ಫೋಟೋ ಅಪ್‌ಲೋಡ್"], yieldPrediction: ["ಇಳುವರಿ ಮುನ್ಸೂಚನೆ"], cropCalendar: ["ಮಾರ್ಗದರ್ಶಿ"], recommendations: ["ಸಲಹೆ"], agrilink: ["ಕೃಷಿ ವೇದಿಕೆ"], default: "ನಾನು ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?", typing: "ಟೈಪ್ ಮಾಡುತ್ತಿದೆ...", placeholder: "ಕೇಳಿ..." },
  common: { loading: "ಲೋಡ್ ಆಗುತ್ತಿದೆ...", noResults: "ಫಲಿತಾಂಶಗಳಿಲ್ಲ", viewDetails: "ವಿವರಗಳು", back: "ಹಿಂದೆ", whatsappHelp: "WhatsApp", selectLanguage: "ಭಾಷೆ", all: "ಎಲ್ಲಾ", weather: "ಹವಾಮಾನ", humidity: "ತೇವಾಂಶ", wind: "ಗಾಳಿ", condition: "ಸ್ಥಿತಿ", weatherSource: "ಮೂಲ" }
};

// For remaining languages, use English as fallback
const remainingLanguages = ["ml", "mr", "bn", "gu", "pa", "or", "as", "ur", "sd", "ne", "mai", "sat", "ks", "doi", "kok", "mni", "bo", "sa", "raj", "bh", "chh", "gon", "tu", "kha", "miz", "nag"];
remainingLanguages.forEach(lang => {
  translations[lang] = translations.en;
});

export function getTranslation(lang: string): TranslationKeys {
  return translations[lang] || translations.en;
}
