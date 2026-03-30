export interface Recommendation {
  id: string;
  crop: string;
  reason: string;
  tips: string[];
  expertSource: string;
}

export interface SoilRecommendation {
  soilType: string;
  description: string;
  recommendations: Recommendation[];
}

export interface LocationRecommendation {
  region: string;
  states: string[];
  climate: string;
  recommendations: Recommendation[];
}

export interface SeasonRecommendation {
  season: string;
  months: string;
  recommendations: Recommendation[];
}

export const soilTypes = ["Red Soil", "Black Soil", "Alluvial Soil", "Laterite Soil", "Sandy Soil", "Clay Soil", "Loamy Soil", "Saline Soil", "Peaty Soil", "Forest Soil"];

export const soilRecommendations: SoilRecommendation[] = [
  { soilType: "Red Soil", description: "Found in Deccan Plateau, Karnataka, Tamil Nadu, Andhra Pradesh", recommendations: [
    { id: "r1", crop: "Groundnut", reason: "Thrives in well-drained red sandy soils with good aeration", tips: ["Apply gypsum at pegging stage", "Use Rhizobium inoculant", "Maintain soil pH 5.5-7.0"], expertSource: "ICAR-DGR, Junagadh" },
    { id: "r2", crop: "Ragi (Finger Millet)", reason: "Traditional crop of red soil regions in South India", tips: ["Transplant method gives higher yield", "Apply FYM 10t/ha", "Intercrop with pulses"], expertSource: "UAS Bangalore" },
    { id: "r3", crop: "Pigeon Pea", reason: "Deep root system suits red soil structure", tips: ["Use wilt-resistant varieties", "Intercrop with sorghum", "IPM for pod borer"], expertSource: "ICRISAT Hyderabad" },
    { id: "r4", crop: "Cashew", reason: "Tolerates laterite and red soils of coastal regions", tips: ["Plant during monsoon onset", "Pruning for canopy management", "High-density planting possible"], expertSource: "ICAR-DCR, Puttur" },
  ]},
  { soilType: "Black Soil", description: "Found in Maharashtra, Gujarat, MP, Karnataka (Deccan trap region)", recommendations: [
    { id: "b1", crop: "Cotton", reason: "Black soil's moisture retention is ideal for cotton", tips: ["Bt cotton with refuge crop", "Spacing 90x60cm for hybrids", "IPM for bollworm"], expertSource: "CICR Nagpur" },
    { id: "b2", crop: "Soybean", reason: "Deep black soils of Vidarbha and Malwa ideal for soybean", tips: ["Sow within first week of monsoon", "Seed treatment with Rhizobium+PSB", "Avoid waterlogging"], expertSource: "ICAR-IISR Indore" },
    { id: "b3", crop: "Sugarcane", reason: "Deep moisture-holding capacity of black soil suits sugarcane", tips: ["Settle transplanting technique", "Trash mulching", "Drip irrigation for water saving"], expertSource: "VSI Pune" },
    { id: "b4", crop: "Chickpea", reason: "Residual moisture in black soil after Kharif season is ideal", tips: ["No-till sowing after soybean", "Seed treatment with Trichoderma", "1-2 light irrigations only"], expertSource: "IIPR Kanpur" },
  ]},
  { soilType: "Alluvial Soil", description: "Indo-Gangetic plains, river deltas — most fertile", recommendations: [
    { id: "a1", crop: "Rice", reason: "River delta alluvial soils are naturally suited for paddy", tips: ["SRI method for water saving", "Zinc application at transplanting", "Leaf color chart for N management"], expertSource: "IRRI / ICAR-NRRI" },
    { id: "a2", crop: "Wheat", reason: "Alluvial plains of Punjab, Haryana, UP are wheat belt", tips: ["Sow by mid-November", "Zero-till for timely sowing", "5-6 irrigations at critical stages"], expertSource: "ICAR-IIWBR Karnal" },
    { id: "a3", crop: "Potato", reason: "Sandy alluvial soils of UP and West Bengal ideal for tuber crops", tips: ["Use certified seed tubers", "Earthing up at 30 & 45 days", "Ridge planting improves tuber quality"], expertSource: "CPRI Shimla" },
    { id: "a4", crop: "Banana", reason: "Rich alluvial soils with good drainage support banana plantations", tips: ["Tissue culture plants preferred", "Desuckering regularly", "Bunch cover with blue bag"], expertSource: "NRC Banana, Trichy" },
  ]},
  { soilType: "Laterite Soil", description: "Western Ghats, Kerala, Karnataka, Goa — acidic and leached", recommendations: [
    { id: "l1", crop: "Rubber", reason: "Kerala's laterite soils are traditional rubber-growing region", tips: ["Tapping starts at 7 years", "Alternate-day tapping", "RRII recommended clones"], expertSource: "RRII Kottayam" },
    { id: "l2", crop: "Coconut", reason: "Coastal laterite soils support excellent coconut palms", tips: ["Basin management essential", "Intercrop with pineapple/banana", "Organic manure + chemical fertilizer"], expertSource: "CPCRI Kasaragod" },
    { id: "l3", crop: "Arecanut", reason: "Red laterite soils of Karnataka and Kerala ideal", tips: ["Spacing 2.7m x 2.7m", "Intercrop with pepper/cocoa", "Regular irrigation essential"], expertSource: "CPCRI Kasaragod" },
  ]},
  { soilType: "Sandy Soil", description: "Rajasthan, parts of Gujarat and Haryana — low water retention", recommendations: [
    { id: "s1", crop: "Bajra (Pearl Millet)", reason: "Most drought-tolerant cereal, thrives in sandy soils", tips: ["Early sowing at monsoon onset", "Seed treatment with metalaxyl", "Short-duration varieties preferred"], expertSource: "ICAR-AICPMIP" },
    { id: "s2", crop: "Cumin", reason: "Sandy soils of Rajasthan produce best quality cumin", tips: ["November sowing ideal", "Very sensitive to excess moisture", "Light irrigation only"], expertSource: "NRCSS Ajmer" },
    { id: "s3", crop: "Watermelon", reason: "Sandy river bed soils perfect for watermelon cultivation", tips: ["Mulching essential", "Drip irrigation for water saving", "Pollination management important"], expertSource: "IIVR Varanasi" },
  ]},
  { soilType: "Clay Soil", description: "Heavy soils with high water-holding capacity", recommendations: [
    { id: "c1", crop: "Rice", reason: "Clay soils retain water ideal for flooded paddy", tips: ["Puddling improves water retention", "Transplanting method preferred", "Apply green manure before puddling"], expertSource: "ICAR-NRRI" },
    { id: "c2", crop: "Jute", reason: "Heavy clay loam soils of Bengal delta suit jute", tips: ["Sow March-April", "Retting in clean water", "120-150 days duration"], expertSource: "ICAR-CRIJAF" },
  ]},
  { soilType: "Loamy Soil", description: "Best balanced soil — ideal for most crops", recommendations: [
    { id: "lo1", crop: "Maize", reason: "Loamy soils with good drainage are ideal for maize", tips: ["Spacing 60x20cm", "Earthing up at knee-high stage", "Critical irrigation at tasseling"], expertSource: "ICAR-IIMR" },
    { id: "lo2", crop: "Tomato", reason: "Well-drained loamy soils give best tomato yields", tips: ["Staking essential", "Drip+mulch for water efficiency", "IPM for fruit borer"], expertSource: "ICAR-IIVR" },
    { id: "lo3", crop: "Onion", reason: "Light loamy soils produce better bulb development", tips: ["Transplant 6-8 week seedlings", "Sulphur application for pungency", "Stop irrigation before harvest"], expertSource: "DOGR Pune" },
  ]},
  { soilType: "Saline Soil", description: "Coastal and arid regions with high salt content", recommendations: [
    { id: "sa1", crop: "Barley", reason: "Most salt-tolerant cereal crop", tips: ["Gypsum application for sodic soils", "Leaching irrigation before sowing", "Salt-tolerant varieties available"], expertSource: "CSSRI Karnal" },
    { id: "sa2", crop: "Coconut", reason: "Tolerates coastal saline conditions well", tips: ["Proper drainage essential", "Husk burial in pit for moisture", "Apply muriate of potash"], expertSource: "CPCRI" },
  ]},
  { soilType: "Peaty Soil", description: "Kerala backwaters, Sundarbans — high organic matter", recommendations: [
    { id: "p1", crop: "Rice", reason: "Traditional crop of waterlogged peaty areas", tips: ["Floating rice varieties in deep water", "Organic farming natural fit", "Unique aroma varieties possible"], expertSource: "KAU Thrissur" },
  ]},
  { soilType: "Forest Soil", description: "Hilly and forested regions, rich in humus", recommendations: [
    { id: "f1", crop: "Tea", reason: "Acidic forest soils of Assam and Darjeeling ideal for tea", tips: ["pH 4.5-5.5 required", "Shade tree management", "Pluck two leaves and a bud"], expertSource: "TRA Tocklai" },
    { id: "f2", crop: "Coffee", reason: "Western Ghats forest soils perfect for shade-grown coffee", tips: ["Arabica at higher altitudes", "Shade under silver oak", "Organic methods increasingly popular"], expertSource: "CCRI Chikmagalur" },
    { id: "f3", crop: "Cardamom", reason: "Forest floor conditions replicated for cardamom", tips: ["600-1500m altitude essential", "Under forest canopy", "Sprinkler irrigation for humidity"], expertSource: "IISR Calicut" },
  ]},
];

export const locationRecommendations: LocationRecommendation[] = [
  { region: "North India Plains", states: ["Punjab", "Haryana", "UP", "Delhi", "Uttarakhand"], climate: "Hot summers, cold winters, irrigated", recommendations: [
    { id: "n1", crop: "Wheat (Rabi) + Rice (Kharif)", reason: "Traditional wheat-rice rotation of Indo-Gangetic plains", tips: ["Zero-till wheat after rice", "Laser land leveling for water saving", "Happy Seeder for residue management"], expertSource: "PAU Ludhiana" },
    { id: "n2", crop: "Sugarcane", reason: "UP is largest sugarcane producer in India", tips: ["Spring planting in February", "Settling transplanting saves seed", "Trash mulching for moisture conservation"], expertSource: "IISR Lucknow" },
    { id: "n3", crop: "Potato", reason: "UP leads in potato production with alluvial soils", tips: ["October planting ideal", "Use certified seed", "Cold storage for seed"], expertSource: "CPRI Shimla" },
    { id: "n4", crop: "Mustard", reason: "Rajasthan-Haryana belt is mustard production hub", tips: ["October sowing", "Sulphur application essential", "Bee pollination improves yield"], expertSource: "DRMR Bharatpur" },
  ]},
  { region: "Western India", states: ["Gujarat", "Rajasthan", "Maharashtra"], climate: "Semi-arid to arid, variable rainfall", recommendations: [
    { id: "w1", crop: "Cotton", reason: "Gujarat and Maharashtra are top cotton producers", tips: ["Bt cotton with refuge", "IPM for bollworm", "Drip irrigation for water saving"], expertSource: "CICR Nagpur" },
    { id: "w2", crop: "Groundnut", reason: "Gujarat contributes 40% of India's groundnut", tips: ["Gypsum at pegging essential", "Kharif and summer crops", "Post-harvest aflatoxin management"], expertSource: "ICAR-DGR" },
    { id: "w3", crop: "Cumin & Coriander", reason: "Rajasthan-Gujarat spice belt", tips: ["November sowing", "Light irrigation only", "Export quality production"], expertSource: "NRCSS Ajmer" },
  ]},
  { region: "South India", states: ["Karnataka", "Tamil Nadu", "Kerala", "Andhra Pradesh", "Telangana"], climate: "Tropical, both monsoons, diverse agro-climatic zones", recommendations: [
    { id: "s1", crop: "Rice", reason: "Cauvery, Krishna, Godavari deltas are rice bowls", tips: ["SRI method for water saving", "Short-duration varieties", "Alternate wetting and drying"], expertSource: "TNAU Coimbatore" },
    { id: "s2", crop: "Coconut & Arecanut", reason: "Kerala-Karnataka coast is plantation hub", tips: ["Intercropping for income diversification", "Organic coconut premium market", "Value addition: virgin coconut oil"], expertSource: "CPCRI" },
    { id: "s3", crop: "Chilli & Turmeric", reason: "Guntur chilli and Erode turmeric are world-famous", tips: ["Drip + mulch for efficiency", "Quality processing for export", "IPM for thrips and mites"], expertSource: "ICAR-IISR" },
    { id: "s4", crop: "Coffee", reason: "Karnataka produces 71% of India's coffee", tips: ["Shade management critical", "Organic premium available", "Value addition through roasting"], expertSource: "CCRI" },
  ]},
  { region: "East India", states: ["West Bengal", "Bihar", "Odisha", "Jharkhand"], climate: "High rainfall, alluvial and red soils", recommendations: [
    { id: "e1", crop: "Rice", reason: "Traditional rice-growing region with high rainfall", tips: ["Submergence-tolerant varieties (Swarna-Sub1)", "Diversify with pulses in rabi", "Fish-rice integration"], expertSource: "ICAR-NRRI" },
    { id: "e2", crop: "Jute", reason: "West Bengal produces 75% of India's jute", tips: ["March-April sowing", "Proper retting for fiber quality", "Diversification with mesta"], expertSource: "ICAR-CRIJAF" },
    { id: "e3", crop: "Potato", reason: "West Bengal is 2nd largest potato producer", tips: ["November planting", "TPS technology for seed", "Cold storage management"], expertSource: "BCKV Kalyani" },
  ]},
  { region: "Northeast India", states: ["Assam", "Meghalaya", "Manipur", "Nagaland", "Tripura", "Mizoram", "Arunachal Pradesh", "Sikkim"], climate: "Heavy rainfall, hilly terrain, organic by default", recommendations: [
    { id: "ne1", crop: "Tea", reason: "Assam is world's largest tea-growing region", tips: ["CTC processing for domestic market", "Orthodox for export premium", "Shade tree management"], expertSource: "TRA Tocklai" },
    { id: "ne2", crop: "Large Cardamom", reason: "Sikkim produces 90% of India's large cardamom", tips: ["Shade under Alnus trees", "Altitude 800-2000m", "Organic certification for premium"], expertSource: "ICAR-NRC Orchids" },
    { id: "ne3", crop: "Turmeric & Ginger", reason: "Meghalaya and Mizoram produce excellent quality", tips: ["Lakadong turmeric of Meghalaya has highest curcumin", "Organic production natural", "Value addition through processing"], expertSource: "ICAR-NEH Region" },
  ]},
  { region: "Hilly Regions", states: ["Himachal Pradesh", "Jammu & Kashmir", "Uttarakhand"], climate: "Temperate, cold winters, suitable for temperate fruits", recommendations: [
    { id: "h1", crop: "Apple", reason: "J&K and HP are India's apple basket", tips: ["High-density planting with M9 rootstock", "Integrated nutrient management", "CA storage for longevity"], expertSource: "SKUAST Srinagar" },
    { id: "h2", crop: "Off-season Vegetables", reason: "Hill areas supply vegetables when plains are hot", tips: ["Capsicum, tomato, peas in summer", "Polyhouse cultivation profitable", "Direct marketing to plains cities"], expertSource: "Dr. YSP UHF Solan" },
  ]},
];

export const seasonRecommendations: SeasonRecommendation[] = [
  { season: "Kharif", months: "June - October (Monsoon)", recommendations: [
    { id: "k1", crop: "Rice", reason: "Primary Kharif staple needing standing water from monsoon rains", tips: ["Transplant within June-July", "SRI method saves 40% water", "Apply zinc sulphate at transplanting"], expertSource: "ICAR-NRRI Cuttack" },
    { id: "k2", crop: "Maize", reason: "Quick-growing Kharif cereal with high fodder value", tips: ["Sow at monsoon onset", "Fall armyworm management critical", "Earthing up at knee-high stage"], expertSource: "ICAR-IIMR" },
    { id: "k3", crop: "Soybean", reason: "Major Kharif oilseed crop of central India", tips: ["Sow in first week of monsoon", "Seed treatment with Rhizobium", "Weed management in first 30 days critical"], expertSource: "ICAR-IISR Indore" },
    { id: "k4", crop: "Cotton", reason: "Primary Kharif cash crop of Deccan region", tips: ["May-June sowing", "Bt cotton with non-Bt refuge border", "Picking starts from October"], expertSource: "CICR Nagpur" },
  ]},
  { season: "Rabi", months: "November - March (Winter)", recommendations: [
    { id: "rb1", crop: "Wheat", reason: "Most important Rabi cereal of north India", tips: ["Sow by mid-November for best yield", "First irrigation at 21 days (CRI)", "Zero-till saves time and cost"], expertSource: "ICAR-IIWBR Karnal" },
    { id: "rb2", crop: "Chickpea", reason: "Major Rabi pulse utilizing residual moisture", tips: ["No-till after Kharif crops", "Seed treatment with Trichoderma", "Pheromone traps for pod borer"], expertSource: "IIPR Kanpur" },
    { id: "rb3", crop: "Mustard", reason: "Primary Rabi oilseed of Rajasthan belt", tips: ["October sowing optimal", "Aphid management at flowering", "Sulphur application boosts oil content"], expertSource: "DRMR Bharatpur" },
    { id: "rb4", crop: "Potato", reason: "Important Rabi vegetable of UP and West Bengal", tips: ["October planting", "Seed treatment for scab prevention", "Dehaulming 10 days before harvest"], expertSource: "CPRI Shimla" },
  ]},
  { season: "Zaid", months: "March - June (Summer)", recommendations: [
    { id: "z1", crop: "Watermelon", reason: "High-value summer fruit with quick returns", tips: ["River bed cultivation popular", "Mulching for moisture conservation", "Drip irrigation essential"], expertSource: "ICAR-IIVR Varanasi" },
    { id: "z2", crop: "Moong (Green Gram)", reason: "Short-duration summer pulse (60-65 days)", tips: ["February-March sowing", "Light irrigations needed", "Yellow mosaic-resistant varieties essential"], expertSource: "IIPR Kanpur" },
    { id: "z3", crop: "Cucumber", reason: "Quick-growing summer vegetable with good market demand", tips: ["Polyhouse cultivation extends season", "Parthenocarpic varieties for greenhouse", "Harvest daily at tender stage"], expertSource: "ICAR-IIVR" },
  ]},
];
