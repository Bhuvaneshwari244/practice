export interface MandiRate {
  id: string;
  state: string;
  district: string;
  market: string;
  commodity: string;
  variety: string;
  minPrice: number;
  maxPrice: number;
  modalPrice: number;
  yesterdayPrice?: number;
  previousPrice?: number;
  weeklyPrices?: number[];
  unit: string;
  date: string;
  lat?: number;
  lng?: number;
}

// Helper to generate realistic historical prices including weekly data
const generateHistoricalPrices = (modalPrice: number): { yesterdayPrice: number; previousPrice: number; weeklyPrices: number[] } => {
  const changePercent1 = (Math.random() - 0.5) * 0.1; // -5% to +5%
  const changePercent2 = (Math.random() - 0.5) * 0.15; // -7.5% to +7.5%
  
  // Generate 7 days of price history with realistic fluctuations
  const weeklyPrices: number[] = [];
  let basePrice = modalPrice * (1 + (Math.random() - 0.5) * 0.2); // Start with some variance
  for (let i = 0; i < 7; i++) {
    const dailyChange = (Math.random() - 0.5) * 0.06; // -3% to +3% daily
    basePrice = basePrice * (1 + dailyChange);
    weeklyPrices.push(Math.round(basePrice));
  }
  // Ensure today's price matches modal price
  weeklyPrices[6] = modalPrice;
  
  return {
    yesterdayPrice: Math.round(modalPrice * (1 + changePercent1)),
    previousPrice: Math.round(modalPrice * (1 + changePercent2)),
    weeklyPrices,
  };
};

export const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi", "Jammu & Kashmir"
];

const rawMandiRates: Omit<MandiRate, 'yesterdayPrice' | 'previousPrice'>[] = [
  // ANDHRA PRADESH
  { id: "ap1", state: "Andhra Pradesh", district: "Guntur", market: "Guntur", commodity: "Chilli", variety: "Teja", minPrice: 12000, maxPrice: 18000, modalPrice: 15000, unit: "Quintal", date: "2026-03-08", lat: 16.3067, lng: 80.4365 },
  { id: "ap2", state: "Andhra Pradesh", district: "Kurnool", market: "Kurnool", commodity: "Cotton", variety: "Hybrid", minPrice: 6500, maxPrice: 7200, modalPrice: 6800, unit: "Quintal", date: "2026-03-08", lat: 15.8281, lng: 78.0373 },
  { id: "ap3", state: "Andhra Pradesh", district: "Krishna", market: "Vijayawada", commodity: "Rice", variety: "BPT-5204", minPrice: 2200, maxPrice: 2800, modalPrice: 2500, unit: "Quintal", date: "2026-03-08", lat: 16.5062, lng: 80.6480 },
  { id: "ap4", state: "Andhra Pradesh", district: "Anantapur", market: "Anantapur", commodity: "Groundnut", variety: "TMV-2", minPrice: 5500, maxPrice: 6800, modalPrice: 6200, unit: "Quintal", date: "2026-03-08", lat: 14.6819, lng: 77.6006 },
  { id: "ap5", state: "Andhra Pradesh", district: "West Godavari", market: "Eluru", commodity: "Banana", variety: "Cavendish", minPrice: 800, maxPrice: 1500, modalPrice: 1100, unit: "Quintal", date: "2026-03-08", lat: 16.7107, lng: 81.0952 },
  { id: "ap6", state: "Andhra Pradesh", district: "East Godavari", market: "Kakinada", commodity: "Coconut", variety: "Tall", minPrice: 12000, maxPrice: 15000, modalPrice: 13500, unit: "1000 Nuts", date: "2026-03-08", lat: 16.9891, lng: 82.2475 },
  { id: "ap7", state: "Andhra Pradesh", district: "Chittoor", market: "Madanapalle", commodity: "Tomato", variety: "Local", minPrice: 800, maxPrice: 2500, modalPrice: 1500, unit: "Quintal", date: "2026-03-08", lat: 13.5500, lng: 78.5000 },
  { id: "ap8", state: "Andhra Pradesh", district: "Prakasam", market: "Ongole", commodity: "Chilli", variety: "Wonder Hot", minPrice: 11000, maxPrice: 16000, modalPrice: 13500, unit: "Quintal", date: "2026-03-08", lat: 15.5057, lng: 80.0499 },

  // ANDHRA PRADESH - Additional small markets
  { id: "ap9", state: "Andhra Pradesh", district: "Srikakulam", market: "Srikakulam", commodity: "Rice", variety: "Swarna", minPrice: 2000, maxPrice: 2600, modalPrice: 2300, unit: "Quintal", date: "2026-03-08", lat: 18.2949, lng: 83.8938 },
  { id: "ap10", state: "Andhra Pradesh", district: "Vizianagaram", market: "Vizianagaram", commodity: "Jaggery", variety: "Local", minPrice: 3500, maxPrice: 4500, modalPrice: 4000, unit: "Quintal", date: "2026-03-08", lat: 18.1066, lng: 83.3956 },
  { id: "ap11", state: "Andhra Pradesh", district: "Nellore", market: "Nellore", commodity: "Chilli", variety: "Guntur Sannam", minPrice: 11000, maxPrice: 17000, modalPrice: 14000, unit: "Quintal", date: "2026-03-08", lat: 14.4426, lng: 79.9865 },
  { id: "ap12", state: "Andhra Pradesh", district: "Kadapa", market: "Kadapa", commodity: "Groundnut", variety: "Bold", minPrice: 5200, maxPrice: 6500, modalPrice: 5800, unit: "Quintal", date: "2026-03-08", lat: 14.4674, lng: 78.8241 },
  { id: "ap13", state: "Andhra Pradesh", district: "Chittoor", market: "Tirupati", commodity: "Vegetables", variety: "Mixed", minPrice: 600, maxPrice: 2800, modalPrice: 1600, unit: "Quintal", date: "2026-03-08", lat: 13.6288, lng: 79.4192 },
  { id: "ap14", state: "Andhra Pradesh", district: "Visakhapatnam", market: "Visakhapatnam", commodity: "Cashew", variety: "Raw", minPrice: 10000, maxPrice: 14000, modalPrice: 12000, unit: "Quintal", date: "2026-03-08", lat: 17.6868, lng: 83.2185 },
  { id: "ap15", state: "Andhra Pradesh", district: "Guntur", market: "Narasaraopet", commodity: "Cotton", variety: "DCH-32", minPrice: 6200, maxPrice: 7000, modalPrice: 6600, unit: "Quintal", date: "2026-03-08", lat: 16.2346, lng: 80.0480 },
  { id: "ap16", state: "Andhra Pradesh", district: "Krishna", market: "Machilipatnam", commodity: "Rice", variety: "Sona Masuri", minPrice: 2300, maxPrice: 2900, modalPrice: 2600, unit: "Quintal", date: "2026-03-08", lat: 16.1875, lng: 81.1389 },

  // TELANGANA
  { id: "ts1", state: "Telangana", district: "Hyderabad", market: "Bowenpally", commodity: "Vegetables", variety: "Mixed", minPrice: 500, maxPrice: 3000, modalPrice: 1500, unit: "Quintal", date: "2026-03-08", lat: 17.4700, lng: 78.4800 },
  { id: "ts2", state: "Telangana", district: "Nizamabad", market: "Nizamabad", commodity: "Turmeric", variety: "Rajapuri", minPrice: 8000, maxPrice: 12000, modalPrice: 10000, unit: "Quintal", date: "2026-03-08", lat: 18.6725, lng: 78.0943 },
  { id: "ts3", state: "Telangana", district: "Warangal", market: "Warangal", commodity: "Cotton", variety: "Hybrid", minPrice: 6200, maxPrice: 7000, modalPrice: 6600, unit: "Quintal", date: "2026-03-08", lat: 17.9689, lng: 79.5941 },
  { id: "ts4", state: "Telangana", district: "Karimnagar", market: "Karimnagar", commodity: "Rice", variety: "HMT", minPrice: 2300, maxPrice: 2900, modalPrice: 2600, unit: "Quintal", date: "2026-03-08", lat: 18.4386, lng: 79.1288 },
  { id: "ts5", state: "Telangana", district: "Khammam", market: "Khammam", commodity: "Chilli", variety: "S4", minPrice: 10000, maxPrice: 15000, modalPrice: 12500, unit: "Quintal", date: "2026-03-08", lat: 17.2473, lng: 80.1514 },
  { id: "ts6", state: "Telangana", district: "Adilabad", market: "Adilabad", commodity: "Soybean", variety: "JS-335", minPrice: 4200, maxPrice: 5000, modalPrice: 4600, unit: "Quintal", date: "2026-03-08", lat: 19.6641, lng: 78.5320 },
  { id: "ts7", state: "Telangana", district: "Nalgonda", market: "Nalgonda", commodity: "Rice", variety: "BPT-5204", minPrice: 2100, maxPrice: 2700, modalPrice: 2400, unit: "Quintal", date: "2026-03-08", lat: 17.0583, lng: 79.2671 },
  { id: "ts8", state: "Telangana", district: "Medak", market: "Sangareddy", commodity: "Maize", variety: "Hybrid", minPrice: 1800, maxPrice: 2300, modalPrice: 2050, unit: "Quintal", date: "2026-03-08", lat: 17.6244, lng: 78.0868 },
  { id: "ts9", state: "Telangana", district: "Mahbubnagar", market: "Mahbubnagar", commodity: "Castor", variety: "DCH-177", minPrice: 5200, maxPrice: 6000, modalPrice: 5600, unit: "Quintal", date: "2026-03-08", lat: 16.7488, lng: 77.9854 },
  { id: "ts10", state: "Telangana", district: "Suryapet", market: "Suryapet", commodity: "Cotton", variety: "Hybrid", minPrice: 6000, maxPrice: 6900, modalPrice: 6450, unit: "Quintal", date: "2026-03-08", lat: 17.1400, lng: 79.6300 },
  { id: "ts11", state: "Telangana", district: "Siddipet", market: "Siddipet", commodity: "Turmeric", variety: "Local", minPrice: 7800, maxPrice: 11000, modalPrice: 9400, unit: "Quintal", date: "2026-03-08", lat: 18.1019, lng: 78.8520 },

  // TAMIL NADU
  { id: "tn1", state: "Tamil Nadu", district: "Coimbatore", market: "Coimbatore", commodity: "Coconut", variety: "Tall", minPrice: 13000, maxPrice: 16000, modalPrice: 14500, unit: "1000 Nuts", date: "2026-03-08", lat: 11.0168, lng: 76.9558 },
  { id: "tn2", state: "Tamil Nadu", district: "Salem", market: "Salem", commodity: "Turmeric", variety: "Erode Local", minPrice: 9000, maxPrice: 13000, modalPrice: 11000, unit: "Quintal", date: "2026-03-08", lat: 11.6643, lng: 78.1460 },
  { id: "tn3", state: "Tamil Nadu", district: "Madurai", market: "Madurai", commodity: "Banana", variety: "Poovan", minPrice: 700, maxPrice: 1200, modalPrice: 950, unit: "Quintal", date: "2026-03-08", lat: 9.9252, lng: 78.1198 },
  { id: "tn4", state: "Tamil Nadu", district: "Thanjavur", market: "Thanjavur", commodity: "Rice", variety: "Ponni", minPrice: 2400, maxPrice: 3000, modalPrice: 2700, unit: "Quintal", date: "2026-03-08", lat: 10.7870, lng: 79.1378 },
  { id: "tn5", state: "Tamil Nadu", district: "Dindigul", market: "Dindigul", commodity: "Garlic", variety: "Local", minPrice: 8000, maxPrice: 12000, modalPrice: 10000, unit: "Quintal", date: "2026-03-08", lat: 10.3673, lng: 77.9803 },
  { id: "tn6", state: "Tamil Nadu", district: "Erode", market: "Erode", commodity: "Turmeric", variety: "Erode Special", minPrice: 9500, maxPrice: 14000, modalPrice: 11800, unit: "Quintal", date: "2026-03-08", lat: 11.3410, lng: 77.7172 },
  { id: "tn7", state: "Tamil Nadu", district: "Tirunelveli", market: "Tirunelveli", commodity: "Banana", variety: "Nendran", minPrice: 900, maxPrice: 1600, modalPrice: 1250, unit: "Quintal", date: "2026-03-08", lat: 8.7139, lng: 77.7567 },
  { id: "tn8", state: "Tamil Nadu", district: "Theni", market: "Theni", commodity: "Cardamom", variety: "Small", minPrice: 95000, maxPrice: 140000, modalPrice: 118000, unit: "Quintal", date: "2026-03-08", lat: 10.0104, lng: 77.4768 },
  { id: "tn9", state: "Tamil Nadu", district: "Villupuram", market: "Villupuram", commodity: "Groundnut", variety: "TMV-7", minPrice: 5300, maxPrice: 6500, modalPrice: 5900, unit: "Quintal", date: "2026-03-08", lat: 11.9401, lng: 79.4861 },
  { id: "tn10", state: "Tamil Nadu", district: "Tirupur", market: "Tirupur", commodity: "Coconut", variety: "Hybrid", minPrice: 12500, maxPrice: 15500, modalPrice: 14000, unit: "1000 Nuts", date: "2026-03-08", lat: 11.1085, lng: 77.3411 },
  { id: "tn11", state: "Tamil Nadu", district: "Vellore", market: "Vellore", commodity: "Mango", variety: "Alphonso", minPrice: 4000, maxPrice: 8000, modalPrice: 6000, unit: "Quintal", date: "2026-03-08", lat: 12.9165, lng: 79.1325 },
  { id: "tn12", state: "Tamil Nadu", district: "Kanyakumari", market: "Nagercoil", commodity: "Rubber", variety: "RSS-4", minPrice: 16000, maxPrice: 18000, modalPrice: 17000, unit: "Quintal", date: "2026-03-08", lat: 8.1833, lng: 77.4119 },
  { id: "tn13", state: "Tamil Nadu", district: "Nagapattinam", market: "Nagapattinam", commodity: "Rice", variety: "ADT-36", minPrice: 2200, maxPrice: 2800, modalPrice: 2500, unit: "Quintal", date: "2026-03-08", lat: 10.7660, lng: 79.8424 },
  { id: "tn14", state: "Tamil Nadu", district: "Cuddalore", market: "Cuddalore", commodity: "Sugarcane", variety: "Co-86032", minPrice: 290, maxPrice: 340, modalPrice: 315, unit: "Quintal", date: "2026-03-08", lat: 11.7447, lng: 79.7689 },

  // KARNATAKA
  { id: "ka1", state: "Karnataka", district: "Bengaluru", market: "Yeshwanthpur", commodity: "Tomato", variety: "Hybrid", minPrice: 600, maxPrice: 2000, modalPrice: 1200, unit: "Quintal", date: "2026-03-08", lat: 13.0206, lng: 77.5352 },
  { id: "ka2", state: "Karnataka", district: "Hassan", market: "Hassan", commodity: "Arecanut", variety: "Local", minPrice: 42000, maxPrice: 52000, modalPrice: 47000, unit: "Quintal", date: "2026-03-08", lat: 13.0033, lng: 76.0961 },
  { id: "ka3", state: "Karnataka", district: "Dharwad", market: "Hubli", commodity: "Cotton", variety: "MCU-5", minPrice: 6000, maxPrice: 7000, modalPrice: 6500, unit: "Quintal", date: "2026-03-08", lat: 15.3647, lng: 75.1240 },
  { id: "ka4", state: "Karnataka", district: "Belgaum", market: "Belgaum", commodity: "Sugarcane", variety: "Co-86032", minPrice: 300, maxPrice: 350, modalPrice: 325, unit: "Quintal", date: "2026-03-08", lat: 15.8497, lng: 74.4977 },
  { id: "ka5", state: "Karnataka", district: "Shimoga", market: "Shimoga", commodity: "Rice", variety: "Sona Masuri", minPrice: 2500, maxPrice: 3200, modalPrice: 2850, unit: "Quintal", date: "2026-03-08", lat: 13.9299, lng: 75.5681 },
  { id: "ka6", state: "Karnataka", district: "Mysuru", market: "Mysuru", commodity: "Tobacco", variety: "FCV", minPrice: 13000, maxPrice: 18000, modalPrice: 15500, unit: "Quintal", date: "2026-03-08", lat: 12.2958, lng: 76.6394 },
  { id: "ka7", state: "Karnataka", district: "Raichur", market: "Raichur", commodity: "Rice", variety: "BPT-5204", minPrice: 2200, maxPrice: 2800, modalPrice: 2500, unit: "Quintal", date: "2026-03-08", lat: 16.2120, lng: 77.3439 },
  { id: "ka8", state: "Karnataka", district: "Davangere", market: "Davangere", commodity: "Maize", variety: "Hybrid", minPrice: 1900, maxPrice: 2400, modalPrice: 2150, unit: "Quintal", date: "2026-03-08", lat: 14.4644, lng: 75.9218 },
  { id: "ka9", state: "Karnataka", district: "Chikmagalur", market: "Chikmagalur", commodity: "Coffee", variety: "Arabica", minPrice: 20000, maxPrice: 30000, modalPrice: 25000, unit: "Quintal", date: "2026-03-08", lat: 13.3161, lng: 75.7720 },
  { id: "ka10", state: "Karnataka", district: "Kodagu", market: "Madikeri", commodity: "Coffee", variety: "Robusta", minPrice: 9500, maxPrice: 13000, modalPrice: 11200, unit: "Quintal", date: "2026-03-08", lat: 12.4244, lng: 75.7382 },
  { id: "ka11", state: "Karnataka", district: "Tumkur", market: "Tumkur", commodity: "Coconut", variety: "Tall", minPrice: 12000, maxPrice: 15000, modalPrice: 13500, unit: "1000 Nuts", date: "2026-03-08", lat: 13.3379, lng: 77.1173 },
  { id: "ka12", state: "Karnataka", district: "Mandya", market: "Mandya", commodity: "Sugarcane", variety: "Co-62175", minPrice: 280, maxPrice: 340, modalPrice: 310, unit: "Quintal", date: "2026-03-08", lat: 12.5218, lng: 76.8951 },
  { id: "ka13", state: "Karnataka", district: "Gulbarga", market: "Gulbarga", commodity: "Pigeon Pea", variety: "Tur", minPrice: 6000, maxPrice: 7500, modalPrice: 6750, unit: "Quintal", date: "2026-03-08", lat: 17.3297, lng: 76.8343 },
  { id: "ka14", state: "Karnataka", district: "Bellary", market: "Bellary", commodity: "Cotton", variety: "Hybrid", minPrice: 5800, maxPrice: 6800, modalPrice: 6300, unit: "Quintal", date: "2026-03-08", lat: 15.1394, lng: 76.9214 },
  { id: "ka15", state: "Karnataka", district: "Udupi", market: "Udupi", commodity: "Arecanut", variety: "Chali", minPrice: 40000, maxPrice: 50000, modalPrice: 45000, unit: "Quintal", date: "2026-03-08", lat: 13.3409, lng: 74.7421 },
  { id: "ka16", state: "Karnataka", district: "Bidar", market: "Bidar", commodity: "Soybean", variety: "JS-335", minPrice: 4100, maxPrice: 5100, modalPrice: 4600, unit: "Quintal", date: "2026-03-08", lat: 17.9104, lng: 77.5199 },

  // MAHARASHTRA
  { id: "mh1", state: "Maharashtra", district: "Nashik", market: "Lasalgaon", commodity: "Onion", variety: "Local Red", minPrice: 800, maxPrice: 2500, modalPrice: 1600, unit: "Quintal", date: "2026-03-08", lat: 20.1437, lng: 74.2375 },
  { id: "mh2", state: "Maharashtra", district: "Pune", market: "Pune", commodity: "Tomato", variety: "Hybrid", minPrice: 700, maxPrice: 2200, modalPrice: 1400, unit: "Quintal", date: "2026-03-08", lat: 18.5204, lng: 73.8567 },
  { id: "mh3", state: "Maharashtra", district: "Nagpur", market: "Nagpur", commodity: "Orange", variety: "Nagpur Mandarin", minPrice: 3000, maxPrice: 5000, modalPrice: 4000, unit: "Quintal", date: "2026-03-08", lat: 21.1458, lng: 79.0882 },
  { id: "mh4", state: "Maharashtra", district: "Solapur", market: "Solapur", commodity: "Pomegranate", variety: "Bhagwa", minPrice: 5000, maxPrice: 12000, modalPrice: 8000, unit: "Quintal", date: "2026-03-08", lat: 17.6599, lng: 75.9064 },
  { id: "mh5", state: "Maharashtra", district: "Sangli", market: "Sangli", commodity: "Turmeric", variety: "Sangli Local", minPrice: 8500, maxPrice: 11500, modalPrice: 10000, unit: "Quintal", date: "2026-03-08", lat: 16.8524, lng: 74.5815 },
  { id: "mh6", state: "Maharashtra", district: "Kolhapur", market: "Kolhapur", commodity: "Sugarcane", variety: "Co-86032", minPrice: 310, maxPrice: 360, modalPrice: 335, unit: "Quintal", date: "2026-03-08", lat: 16.7050, lng: 74.2433 },
  { id: "mh7", state: "Maharashtra", district: "Ahmednagar", market: "Ahmednagar", commodity: "Onion", variety: "White", minPrice: 900, maxPrice: 2600, modalPrice: 1750, unit: "Quintal", date: "2026-03-08", lat: 19.0948, lng: 74.7480 },
  { id: "mh8", state: "Maharashtra", district: "Jalgaon", market: "Jalgaon", commodity: "Banana", variety: "Grand Naine", minPrice: 700, maxPrice: 1400, modalPrice: 1050, unit: "Quintal", date: "2026-03-08", lat: 21.0077, lng: 75.5626 },
  { id: "mh9", state: "Maharashtra", district: "Aurangabad", market: "Aurangabad", commodity: "Cotton", variety: "Hybrid", minPrice: 6100, maxPrice: 7000, modalPrice: 6550, unit: "Quintal", date: "2026-03-08", lat: 19.8762, lng: 75.3433 },
  { id: "mh10", state: "Maharashtra", district: "Satara", market: "Satara", commodity: "Strawberry", variety: "Camarosa", minPrice: 8000, maxPrice: 15000, modalPrice: 11500, unit: "Quintal", date: "2026-03-08", lat: 17.6805, lng: 74.0183 },
  { id: "mh11", state: "Maharashtra", district: "Yavatmal", market: "Yavatmal", commodity: "Cotton", variety: "Desi", minPrice: 5800, maxPrice: 6700, modalPrice: 6250, unit: "Quintal", date: "2026-03-08", lat: 20.3899, lng: 78.1307 },
  { id: "mh12", state: "Maharashtra", district: "Ratnagiri", market: "Ratnagiri", commodity: "Mango", variety: "Alphonso", minPrice: 8000, maxPrice: 20000, modalPrice: 14000, unit: "Quintal", date: "2026-03-08", lat: 16.9902, lng: 73.3120 },
  { id: "mh13", state: "Maharashtra", district: "Nashik", market: "Nashik", commodity: "Grapes", variety: "Thompson Seedless", minPrice: 3000, maxPrice: 6000, modalPrice: 4500, unit: "Quintal", date: "2026-03-08", lat: 19.9975, lng: 73.7898 },
  { id: "mh14", state: "Maharashtra", district: "Latur", market: "Latur", commodity: "Soybean", variety: "JS-335", minPrice: 4000, maxPrice: 5200, modalPrice: 4600, unit: "Quintal", date: "2026-03-08", lat: 18.3968, lng: 76.5604 },
  { id: "mh15", state: "Maharashtra", district: "Wardha", market: "Wardha", commodity: "Orange", variety: "Local", minPrice: 2800, maxPrice: 4500, modalPrice: 3600, unit: "Quintal", date: "2026-03-08", lat: 20.7453, lng: 78.6022 },
  { id: "mh16", state: "Maharashtra", district: "Dhule", market: "Dhule", commodity: "Onion", variety: "Red", minPrice: 750, maxPrice: 2300, modalPrice: 1500, unit: "Quintal", date: "2026-03-08", lat: 20.9042, lng: 74.7749 },

  // GUJARAT
  { id: "gj1", state: "Gujarat", district: "Rajkot", market: "Rajkot", commodity: "Groundnut", variety: "GG-20", minPrice: 5800, maxPrice: 7000, modalPrice: 6400, unit: "Quintal", date: "2026-03-08", lat: 22.3039, lng: 70.8022 },
  { id: "gj2", state: "Gujarat", district: "Junagadh", market: "Junagadh", commodity: "Groundnut", variety: "TJ-37", minPrice: 5500, maxPrice: 6800, modalPrice: 6100, unit: "Quintal", date: "2026-03-08", lat: 21.5222, lng: 70.4579 },
  { id: "gj3", state: "Gujarat", district: "Unjha", market: "Unjha", commodity: "Cumin", variety: "Local", minPrice: 32000, maxPrice: 42000, modalPrice: 37000, unit: "Quintal", date: "2026-03-08", lat: 23.8000, lng: 72.3833 },
  { id: "gj4", state: "Gujarat", district: "Ahmedabad", market: "Ahmedabad", commodity: "Cotton", variety: "Shankar-6", minPrice: 6200, maxPrice: 7100, modalPrice: 6650, unit: "Quintal", date: "2026-03-08", lat: 23.0225, lng: 72.5714 },
  { id: "gj5", state: "Gujarat", district: "Bhavnagar", market: "Bhavnagar", commodity: "Castor", variety: "GCH-7", minPrice: 5500, maxPrice: 6200, modalPrice: 5850, unit: "Quintal", date: "2026-03-08", lat: 21.7645, lng: 72.1519 },
  { id: "gj6", state: "Gujarat", district: "Surat", market: "Surat", commodity: "Sugarcane", variety: "Co-86032", minPrice: 290, maxPrice: 345, modalPrice: 318, unit: "Quintal", date: "2026-03-08", lat: 21.1702, lng: 72.8311 },
  { id: "gj7", state: "Gujarat", district: "Vadodara", market: "Vadodara", commodity: "Cotton", variety: "Hybrid", minPrice: 6100, maxPrice: 7000, modalPrice: 6550, unit: "Quintal", date: "2026-03-08", lat: 22.3072, lng: 73.1812 },
  { id: "gj8", state: "Gujarat", district: "Amreli", market: "Amreli", commodity: "Groundnut", variety: "Bold", minPrice: 5600, maxPrice: 6900, modalPrice: 6250, unit: "Quintal", date: "2026-03-08", lat: 21.6015, lng: 71.2204 },
  { id: "gj9", state: "Gujarat", district: "Banaskantha", market: "Deesa", commodity: "Cumin", variety: "Local", minPrice: 31000, maxPrice: 41000, modalPrice: 36000, unit: "Quintal", date: "2026-03-08", lat: 24.2585, lng: 72.1891 },
  { id: "gj10", state: "Gujarat", district: "Kutch", market: "Bhuj", commodity: "Castor", variety: "GCH-7", minPrice: 5300, maxPrice: 6100, modalPrice: 5700, unit: "Quintal", date: "2026-03-08", lat: 23.2420, lng: 69.6669 },
  { id: "gj11", state: "Gujarat", district: "Mehsana", market: "Mehsana", commodity: "Potato", variety: "Kufri Pukhraj", minPrice: 450, maxPrice: 1100, modalPrice: 780, unit: "Quintal", date: "2026-03-08", lat: 23.5880, lng: 72.3693 },
  { id: "gj12", state: "Gujarat", district: "Morbi", market: "Morbi", commodity: "Groundnut", variety: "GG-20", minPrice: 5700, maxPrice: 6800, modalPrice: 6250, unit: "Quintal", date: "2026-03-08", lat: 22.8120, lng: 70.8370 },
  { id: "gj13", state: "Gujarat", district: "Sabarkantha", market: "Himmatnagar", commodity: "Maize", variety: "Hybrid", minPrice: 1800, maxPrice: 2200, modalPrice: 2000, unit: "Quintal", date: "2026-03-08", lat: 23.5969, lng: 72.9660 },

  // RAJASTHAN
  { id: "rj1", state: "Rajasthan", district: "Jodhpur", market: "Jodhpur", commodity: "Cumin", variety: "Local", minPrice: 33000, maxPrice: 43000, modalPrice: 38000, unit: "Quintal", date: "2026-03-08", lat: 26.2389, lng: 73.0243 },
  { id: "rj2", state: "Rajasthan", district: "Kota", market: "Kota", commodity: "Soybean", variety: "JS-335", minPrice: 4000, maxPrice: 5200, modalPrice: 4600, unit: "Quintal", date: "2026-03-08", lat: 25.2138, lng: 75.8648 },
  { id: "rj3", state: "Rajasthan", district: "Alwar", market: "Alwar", commodity: "Mustard", variety: "Local", minPrice: 5000, maxPrice: 5800, modalPrice: 5400, unit: "Quintal", date: "2026-03-08", lat: 27.5530, lng: 76.6346 },
  { id: "rj4", state: "Rajasthan", district: "Jaipur", market: "Jaipur", commodity: "Wheat", variety: "Lok-1", minPrice: 2200, maxPrice: 2600, modalPrice: 2400, unit: "Quintal", date: "2026-03-08", lat: 26.9124, lng: 75.7873 },
  { id: "rj5", state: "Rajasthan", district: "Nagaur", market: "Nagaur", commodity: "Coriander", variety: "Local", minPrice: 7000, maxPrice: 9000, modalPrice: 8000, unit: "Quintal", date: "2026-03-08", lat: 27.2024, lng: 73.7339 },
  { id: "rj6", state: "Rajasthan", district: "Barmer", market: "Barmer", commodity: "Cumin", variety: "Local", minPrice: 32000, maxPrice: 42000, modalPrice: 37000, unit: "Quintal", date: "2026-03-08", lat: 25.7521, lng: 71.3967 },
  { id: "rj7", state: "Rajasthan", district: "Udaipur", market: "Udaipur", commodity: "Maize", variety: "Local", minPrice: 1700, maxPrice: 2200, modalPrice: 1950, unit: "Quintal", date: "2026-03-08", lat: 24.5854, lng: 73.7125 },
  { id: "rj8", state: "Rajasthan", district: "Bikaner", market: "Bikaner", commodity: "Bajra", variety: "HHB-67", minPrice: 2200, maxPrice: 2600, modalPrice: 2400, unit: "Quintal", date: "2026-03-08", lat: 28.0229, lng: 73.3119 },
  { id: "rj9", state: "Rajasthan", district: "Chittorgarh", market: "Chittorgarh", commodity: "Soybean", variety: "JS-9560", minPrice: 4100, maxPrice: 5100, modalPrice: 4600, unit: "Quintal", date: "2026-03-08", lat: 24.8887, lng: 74.6269 },
  { id: "rj10", state: "Rajasthan", district: "Sikar", market: "Sikar", commodity: "Mustard", variety: "RH-749", minPrice: 4800, maxPrice: 5600, modalPrice: 5200, unit: "Quintal", date: "2026-03-08", lat: 27.6094, lng: 75.1399 },
  { id: "rj11", state: "Rajasthan", district: "Bundi", market: "Bundi", commodity: "Garlic", variety: "Local", minPrice: 7000, maxPrice: 10000, modalPrice: 8500, unit: "Quintal", date: "2026-03-08", lat: 25.4305, lng: 75.6499 },
  { id: "rj12", state: "Rajasthan", district: "Tonk", market: "Tonk", commodity: "Wheat", variety: "Lok-1", minPrice: 2100, maxPrice: 2550, modalPrice: 2325, unit: "Quintal", date: "2026-03-08", lat: 26.1664, lng: 75.7885 },
  { id: "rj13", state: "Rajasthan", district: "Jhalawar", market: "Jhalawar", commodity: "Orange", variety: "Local", minPrice: 2500, maxPrice: 4000, modalPrice: 3250, unit: "Quintal", date: "2026-03-08", lat: 24.5974, lng: 76.1604 },

  // MADHYA PRADESH
  { id: "mp1", state: "Madhya Pradesh", district: "Indore", market: "Indore", commodity: "Soybean", variety: "JS-335", minPrice: 4100, maxPrice: 5300, modalPrice: 4700, unit: "Quintal", date: "2026-03-08", lat: 22.7196, lng: 75.8577 },
  { id: "mp2", state: "Madhya Pradesh", district: "Bhopal", market: "Bhopal", commodity: "Wheat", variety: "Sehore", minPrice: 2300, maxPrice: 2700, modalPrice: 2500, unit: "Quintal", date: "2026-03-08", lat: 23.2599, lng: 77.4126 },
  { id: "mp3", state: "Madhya Pradesh", district: "Ujjain", market: "Ujjain", commodity: "Garlic", variety: "Local", minPrice: 7500, maxPrice: 11000, modalPrice: 9200, unit: "Quintal", date: "2026-03-08", lat: 23.1765, lng: 75.7885 },
  { id: "mp4", state: "Madhya Pradesh", district: "Neemuch", market: "Neemuch", commodity: "Coriander", variety: "Eagle", minPrice: 7500, maxPrice: 9500, modalPrice: 8500, unit: "Quintal", date: "2026-03-08", lat: 24.4710, lng: 74.8670 },
  { id: "mp5", state: "Madhya Pradesh", district: "Jabalpur", market: "Jabalpur", commodity: "Rice", variety: "HMT", minPrice: 2200, maxPrice: 2800, modalPrice: 2500, unit: "Quintal", date: "2026-03-08", lat: 23.1815, lng: 79.9864 },
  { id: "mp6", state: "Madhya Pradesh", district: "Gwalior", market: "Gwalior", commodity: "Mustard", variety: "Local", minPrice: 4900, maxPrice: 5700, modalPrice: 5300, unit: "Quintal", date: "2026-03-08", lat: 26.2183, lng: 78.1828 },
  { id: "mp7", state: "Madhya Pradesh", district: "Ratlam", market: "Ratlam", commodity: "Garlic", variety: "Local", minPrice: 7200, maxPrice: 10500, modalPrice: 8800, unit: "Quintal", date: "2026-03-08", lat: 23.3340, lng: 75.0367 },
  { id: "mp8", state: "Madhya Pradesh", district: "Dewas", market: "Dewas", commodity: "Soybean", variety: "JS-9560", minPrice: 4000, maxPrice: 5200, modalPrice: 4600, unit: "Quintal", date: "2026-03-08", lat: 22.9676, lng: 76.0534 },
  { id: "mp9", state: "Madhya Pradesh", district: "Chhindwara", market: "Chhindwara", commodity: "Orange", variety: "Nagpur Type", minPrice: 2800, maxPrice: 4500, modalPrice: 3650, unit: "Quintal", date: "2026-03-08", lat: 22.0574, lng: 78.9382 },
  { id: "mp10", state: "Madhya Pradesh", district: "Sagar", market: "Sagar", commodity: "Wheat", variety: "GW-322", minPrice: 2200, maxPrice: 2650, modalPrice: 2425, unit: "Quintal", date: "2026-03-08", lat: 23.8388, lng: 78.7378 },
  { id: "mp11", state: "Madhya Pradesh", district: "Mandsaur", market: "Mandsaur", commodity: "Garlic", variety: "Local", minPrice: 7800, maxPrice: 11500, modalPrice: 9650, unit: "Quintal", date: "2026-03-08", lat: 24.0659, lng: 75.0697 },
  { id: "mp12", state: "Madhya Pradesh", district: "Hoshangabad", market: "Hoshangabad", commodity: "Chickpea", variety: "JG-11", minPrice: 4500, maxPrice: 5500, modalPrice: 5000, unit: "Quintal", date: "2026-03-08", lat: 22.7432, lng: 77.7186 },

  // UTTAR PRADESH
  { id: "up1", state: "Uttar Pradesh", district: "Agra", market: "Agra", commodity: "Potato", variety: "Kufri Pukhraj", minPrice: 500, maxPrice: 1200, modalPrice: 800, unit: "Quintal", date: "2026-03-08", lat: 27.1767, lng: 78.0081 },
  { id: "up2", state: "Uttar Pradesh", district: "Lucknow", market: "Lucknow", commodity: "Wheat", variety: "PBW-343", minPrice: 2200, maxPrice: 2650, modalPrice: 2425, unit: "Quintal", date: "2026-03-08", lat: 26.8467, lng: 80.9462 },
  { id: "up3", state: "Uttar Pradesh", district: "Meerut", market: "Meerut", commodity: "Sugarcane", variety: "CoS-767", minPrice: 315, maxPrice: 355, modalPrice: 335, unit: "Quintal", date: "2026-03-08", lat: 28.9845, lng: 77.7064 },
  { id: "up4", state: "Uttar Pradesh", district: "Varanasi", market: "Varanasi", commodity: "Rice", variety: "BPT", minPrice: 2100, maxPrice: 2700, modalPrice: 2400, unit: "Quintal", date: "2026-03-08", lat: 25.3176, lng: 82.9739 },
  { id: "up5", state: "Uttar Pradesh", district: "Allahabad", market: "Prayagraj", commodity: "Potato", variety: "Kufri Badshah", minPrice: 450, maxPrice: 1100, modalPrice: 750, unit: "Quintal", date: "2026-03-08", lat: 25.4358, lng: 81.8463 },
  { id: "up6", state: "Uttar Pradesh", district: "Kanpur", market: "Kanpur", commodity: "Wheat", variety: "HD-2967", minPrice: 2250, maxPrice: 2600, modalPrice: 2425, unit: "Quintal", date: "2026-03-08", lat: 26.4499, lng: 80.3319 },
  { id: "up7", state: "Uttar Pradesh", district: "Bareilly", market: "Bareilly", commodity: "Rice", variety: "Pusa Basmati", minPrice: 3200, maxPrice: 4200, modalPrice: 3700, unit: "Quintal", date: "2026-03-08", lat: 28.3670, lng: 79.4304 },
  { id: "up8", state: "Uttar Pradesh", district: "Gorakhpur", market: "Gorakhpur", commodity: "Rice", variety: "Swarna", minPrice: 1900, maxPrice: 2500, modalPrice: 2200, unit: "Quintal", date: "2026-03-08", lat: 26.7606, lng: 83.3732 },
  { id: "up9", state: "Uttar Pradesh", district: "Aligarh", market: "Aligarh", commodity: "Potato", variety: "Kufri Bahar", minPrice: 480, maxPrice: 1150, modalPrice: 810, unit: "Quintal", date: "2026-03-08", lat: 27.8974, lng: 78.0880 },
  { id: "up10", state: "Uttar Pradesh", district: "Mathura", market: "Mathura", commodity: "Potato", variety: "Kufri Pukhraj", minPrice: 500, maxPrice: 1180, modalPrice: 840, unit: "Quintal", date: "2026-03-08", lat: 27.4924, lng: 77.6737 },
  { id: "up11", state: "Uttar Pradesh", district: "Jhansi", market: "Jhansi", commodity: "Chickpea", variety: "JG-14", minPrice: 4500, maxPrice: 5400, modalPrice: 4950, unit: "Quintal", date: "2026-03-08", lat: 25.4484, lng: 78.5685 },
  { id: "up12", state: "Uttar Pradesh", district: "Farrukhabad", market: "Farrukhabad", commodity: "Potato", variety: "Kufri Chandramukhi", minPrice: 460, maxPrice: 1050, modalPrice: 755, unit: "Quintal", date: "2026-03-08", lat: 27.3906, lng: 79.5715 },
  { id: "up13", state: "Uttar Pradesh", district: "Muzaffarnagar", market: "Muzaffarnagar", commodity: "Sugarcane", variety: "Co-0238", minPrice: 320, maxPrice: 360, modalPrice: 340, unit: "Quintal", date: "2026-03-08", lat: 29.4727, lng: 77.7085 },
  { id: "up14", state: "Uttar Pradesh", district: "Firozabad", market: "Firozabad", commodity: "Onion", variety: "Red", minPrice: 800, maxPrice: 2400, modalPrice: 1600, unit: "Quintal", date: "2026-03-08", lat: 27.1591, lng: 78.3957 },
  { id: "up15", state: "Uttar Pradesh", district: "Moradabad", market: "Moradabad", commodity: "Wheat", variety: "PBW-343", minPrice: 2200, maxPrice: 2600, modalPrice: 2400, unit: "Quintal", date: "2026-03-08", lat: 28.8386, lng: 78.7733 },
  { id: "up16", state: "Uttar Pradesh", district: "Sultanpur", market: "Sultanpur", commodity: "Rice", variety: "Swarna", minPrice: 1950, maxPrice: 2500, modalPrice: 2225, unit: "Quintal", date: "2026-03-08", lat: 26.2648, lng: 82.0727 },

  // PUNJAB
  { id: "pb1", state: "Punjab", district: "Ludhiana", market: "Ludhiana", commodity: "Wheat", variety: "PBW-725", minPrice: 2275, maxPrice: 2600, modalPrice: 2450, unit: "Quintal", date: "2026-03-08", lat: 30.9010, lng: 75.8573 },
  { id: "pb2", state: "Punjab", district: "Amritsar", market: "Amritsar", commodity: "Rice", variety: "Pusa Basmati", minPrice: 3500, maxPrice: 4500, modalPrice: 4000, unit: "Quintal", date: "2026-03-08", lat: 31.6340, lng: 74.8723 },
  { id: "pb3", state: "Punjab", district: "Bathinda", market: "Bathinda", commodity: "Cotton", variety: "Hybrid", minPrice: 6300, maxPrice: 7200, modalPrice: 6750, unit: "Quintal", date: "2026-03-08", lat: 30.2110, lng: 74.9455 },
  { id: "pb4", state: "Punjab", district: "Abohar", market: "Abohar", commodity: "Kinnow", variety: "Kinnow", minPrice: 1500, maxPrice: 3000, modalPrice: 2200, unit: "Quintal", date: "2026-03-08", lat: 30.1453, lng: 74.1950 },
  { id: "pb5", state: "Punjab", district: "Patiala", market: "Patiala", commodity: "Wheat", variety: "HD-3086", minPrice: 2275, maxPrice: 2600, modalPrice: 2438, unit: "Quintal", date: "2026-03-08", lat: 30.3398, lng: 76.3869 },
  { id: "pb6", state: "Punjab", district: "Jalandhar", market: "Jalandhar", commodity: "Potato", variety: "Kufri Pukhraj", minPrice: 450, maxPrice: 1050, modalPrice: 750, unit: "Quintal", date: "2026-03-08", lat: 31.3260, lng: 75.5762 },
  { id: "pb7", state: "Punjab", district: "Sangrur", market: "Sangrur", commodity: "Rice", variety: "PR-126", minPrice: 2100, maxPrice: 2600, modalPrice: 2350, unit: "Quintal", date: "2026-03-08", lat: 30.2455, lng: 75.8421 },
  { id: "pb8", state: "Punjab", district: "Mansa", market: "Mansa", commodity: "Cotton", variety: "Hybrid", minPrice: 6200, maxPrice: 7100, modalPrice: 6650, unit: "Quintal", date: "2026-03-08", lat: 29.9988, lng: 75.3881 },
  { id: "pb9", state: "Punjab", district: "Muktsar", market: "Muktsar", commodity: "Mustard", variety: "RLM-619", minPrice: 4800, maxPrice: 5600, modalPrice: 5200, unit: "Quintal", date: "2026-03-08", lat: 30.4769, lng: 74.5130 },
  { id: "pb10", state: "Punjab", district: "Fazilka", market: "Fazilka", commodity: "Wheat", variety: "WH-1105", minPrice: 2275, maxPrice: 2580, modalPrice: 2428, unit: "Quintal", date: "2026-03-08", lat: 30.4036, lng: 74.0284 },

  // HARYANA
  { id: "hr1", state: "Haryana", district: "Karnal", market: "Karnal", commodity: "Wheat", variety: "WH-1105", minPrice: 2275, maxPrice: 2600, modalPrice: 2450, unit: "Quintal", date: "2026-03-08", lat: 29.6857, lng: 76.9905 },
  { id: "hr2", state: "Haryana", district: "Hisar", market: "Hisar", commodity: "Mustard", variety: "RH-749", minPrice: 5100, maxPrice: 5700, modalPrice: 5400, unit: "Quintal", date: "2026-03-08", lat: 29.1492, lng: 75.7217 },
  { id: "hr3", state: "Haryana", district: "Sonipat", market: "Sonipat", commodity: "Rice", variety: "1121 Basmati", minPrice: 3800, maxPrice: 4800, modalPrice: 4300, unit: "Quintal", date: "2026-03-08", lat: 28.9931, lng: 77.0151 },
  { id: "hr4", state: "Haryana", district: "Sirsa", market: "Sirsa", commodity: "Cotton", variety: "Desi", minPrice: 6000, maxPrice: 6800, modalPrice: 6400, unit: "Quintal", date: "2026-03-08", lat: 29.5349, lng: 75.0280 },
  { id: "hr5", state: "Haryana", district: "Panipat", market: "Panipat", commodity: "Wheat", variety: "HD-3086", minPrice: 2275, maxPrice: 2580, modalPrice: 2428, unit: "Quintal", date: "2026-03-08", lat: 29.3909, lng: 76.9635 },
  { id: "hr6", state: "Haryana", district: "Ambala", market: "Ambala", commodity: "Rice", variety: "Pusa 1509", minPrice: 3200, maxPrice: 4200, modalPrice: 3700, unit: "Quintal", date: "2026-03-08", lat: 30.3782, lng: 76.7767 },
  { id: "hr7", state: "Haryana", district: "Jind", market: "Jind", commodity: "Mustard", variety: "Local", minPrice: 4900, maxPrice: 5600, modalPrice: 5250, unit: "Quintal", date: "2026-03-08", lat: 29.3159, lng: 76.3143 },
  { id: "hr8", state: "Haryana", district: "Rohtak", market: "Rohtak", commodity: "Bajra", variety: "HHB-67", minPrice: 2100, maxPrice: 2500, modalPrice: 2300, unit: "Quintal", date: "2026-03-08", lat: 28.8955, lng: 76.5796 },
  { id: "hr9", state: "Haryana", district: "Rewari", market: "Rewari", commodity: "Mustard", variety: "RH-749", minPrice: 5000, maxPrice: 5650, modalPrice: 5325, unit: "Quintal", date: "2026-03-08", lat: 28.1970, lng: 76.6194 },
  { id: "hr10", state: "Haryana", district: "Kurukshetra", market: "Kurukshetra", commodity: "Wheat", variety: "WH-1105", minPrice: 2275, maxPrice: 2600, modalPrice: 2438, unit: "Quintal", date: "2026-03-08", lat: 29.9695, lng: 76.8783 },

  // WEST BENGAL
  { id: "wb1", state: "West Bengal", district: "Kolkata", market: "Kolkata", commodity: "Rice", variety: "Gobindobhog", minPrice: 3000, maxPrice: 4000, modalPrice: 3500, unit: "Quintal", date: "2026-03-08", lat: 22.5726, lng: 88.3639 },
  { id: "wb2", state: "West Bengal", district: "Hooghly", market: "Hooghly", commodity: "Potato", variety: "Jyoti", minPrice: 500, maxPrice: 1000, modalPrice: 750, unit: "Quintal", date: "2026-03-08", lat: 22.9086, lng: 88.3967 },
  { id: "wb3", state: "West Bengal", district: "Murshidabad", market: "Murshidabad", commodity: "Jute", variety: "JRO-524", minPrice: 4500, maxPrice: 5500, modalPrice: 5000, unit: "Quintal", date: "2026-03-08", lat: 24.1700, lng: 88.2700 },
  { id: "wb4", state: "West Bengal", district: "Bardhaman", market: "Bardhaman", commodity: "Rice", variety: "Swarna", minPrice: 2000, maxPrice: 2600, modalPrice: 2300, unit: "Quintal", date: "2026-03-08", lat: 23.2324, lng: 87.8615 },
  { id: "wb5", state: "West Bengal", district: "Malda", market: "Malda", commodity: "Mango", variety: "Himsagar", minPrice: 3000, maxPrice: 6000, modalPrice: 4500, unit: "Quintal", date: "2026-03-08", lat: 25.0108, lng: 88.1410 },
  { id: "wb6", state: "West Bengal", district: "Nadia", market: "Krishnanagar", commodity: "Rice", variety: "Miniket", minPrice: 2800, maxPrice: 3600, modalPrice: 3200, unit: "Quintal", date: "2026-03-08", lat: 23.4013, lng: 88.4883 },
  { id: "wb7", state: "West Bengal", district: "Midnapore", market: "Midnapore", commodity: "Potato", variety: "Jyoti", minPrice: 480, maxPrice: 950, modalPrice: 715, unit: "Quintal", date: "2026-03-08", lat: 22.4260, lng: 87.3199 },
  { id: "wb8", state: "West Bengal", district: "Siliguri", market: "Siliguri", commodity: "Tea", variety: "CTC", minPrice: 14000, maxPrice: 24000, modalPrice: 19000, unit: "Quintal", date: "2026-03-08", lat: 26.7271, lng: 88.3953 },

  // BIHAR
  { id: "br1", state: "Bihar", district: "Patna", market: "Patna", commodity: "Wheat", variety: "HD-2967", minPrice: 2200, maxPrice: 2600, modalPrice: 2400, unit: "Quintal", date: "2026-03-08", lat: 25.6093, lng: 85.1376 },
  { id: "br2", state: "Bihar", district: "Muzaffarpur", market: "Muzaffarpur", commodity: "Banana", variety: "Malbhog", minPrice: 600, maxPrice: 1200, modalPrice: 900, unit: "Quintal", date: "2026-03-08", lat: 26.1209, lng: 85.3647 },
  { id: "br3", state: "Bihar", district: "Nalanda", market: "Nalanda", commodity: "Rice", variety: "Swarna", minPrice: 2000, maxPrice: 2500, modalPrice: 2250, unit: "Quintal", date: "2026-03-08", lat: 25.1200, lng: 85.4500 },
  { id: "br4", state: "Bihar", district: "Bhagalpur", market: "Bhagalpur", commodity: "Maize", variety: "Hybrid", minPrice: 1800, maxPrice: 2300, modalPrice: 2050, unit: "Quintal", date: "2026-03-08", lat: 25.2425, lng: 86.9842 },
  { id: "br5", state: "Bihar", district: "Gaya", market: "Gaya", commodity: "Rice", variety: "Swarna", minPrice: 1900, maxPrice: 2450, modalPrice: 2175, unit: "Quintal", date: "2026-03-08", lat: 24.7955, lng: 84.9994 },
  { id: "br6", state: "Bihar", district: "Darbhanga", market: "Darbhanga", commodity: "Wheat", variety: "HD-2967", minPrice: 2150, maxPrice: 2550, modalPrice: 2350, unit: "Quintal", date: "2026-03-08", lat: 26.1542, lng: 85.8918 },
  { id: "br7", state: "Bihar", district: "Samastipur", market: "Samastipur", commodity: "Banana", variety: "Kothia", minPrice: 550, maxPrice: 1100, modalPrice: 825, unit: "Quintal", date: "2026-03-08", lat: 25.8631, lng: 85.7831 },
  { id: "br8", state: "Bihar", district: "Vaishali", market: "Hajipur", commodity: "Banana", variety: "Malbhog", minPrice: 600, maxPrice: 1250, modalPrice: 925, unit: "Quintal", date: "2026-03-08", lat: 25.6857, lng: 85.2167 },
  { id: "br9", state: "Bihar", district: "Begusarai", market: "Begusarai", commodity: "Maize", variety: "Hybrid", minPrice: 1750, maxPrice: 2250, modalPrice: 2000, unit: "Quintal", date: "2026-03-08", lat: 25.4182, lng: 86.1272 },

  // ODISHA
  { id: "od1", state: "Odisha", district: "Bhubaneswar", market: "Bhubaneswar", commodity: "Rice", variety: "Swarna", minPrice: 1900, maxPrice: 2400, modalPrice: 2150, unit: "Quintal", date: "2026-03-08", lat: 20.2961, lng: 85.8245 },
  { id: "od2", state: "Odisha", district: "Sambalpur", market: "Sambalpur", commodity: "Cotton", variety: "Hybrid", minPrice: 5800, maxPrice: 6600, modalPrice: 6200, unit: "Quintal", date: "2026-03-08", lat: 21.4669, lng: 83.9756 },
  { id: "od3", state: "Odisha", district: "Cuttack", market: "Cuttack", commodity: "Rice", variety: "Swarna", minPrice: 1950, maxPrice: 2450, modalPrice: 2200, unit: "Quintal", date: "2026-03-08", lat: 20.4625, lng: 85.8830 },
  { id: "od4", state: "Odisha", district: "Berhampur", market: "Berhampur", commodity: "Cashew", variety: "Raw", minPrice: 9500, maxPrice: 13000, modalPrice: 11200, unit: "Quintal", date: "2026-03-08", lat: 19.3150, lng: 84.7941 },
  { id: "od5", state: "Odisha", district: "Koraput", market: "Koraput", commodity: "Turmeric", variety: "Local", minPrice: 7500, maxPrice: 10500, modalPrice: 9000, unit: "Quintal", date: "2026-03-08", lat: 18.8135, lng: 82.7115 },
  { id: "od6", state: "Odisha", district: "Balasore", market: "Balasore", commodity: "Rice", variety: "MTU-7029", minPrice: 1850, maxPrice: 2350, modalPrice: 2100, unit: "Quintal", date: "2026-03-08", lat: 21.4934, lng: 86.9135 },

  // KERALA
  { id: "kl1", state: "Kerala", district: "Ernakulam", market: "Kochi", commodity: "Coconut", variety: "Tall", minPrice: 14000, maxPrice: 18000, modalPrice: 16000, unit: "1000 Nuts", date: "2026-03-08", lat: 9.9312, lng: 76.2673 },
  { id: "kl2", state: "Kerala", district: "Wayanad", market: "Wayanad", commodity: "Coffee", variety: "Robusta", minPrice: 9000, maxPrice: 12000, modalPrice: 10500, unit: "Quintal", date: "2026-03-08", lat: 11.6854, lng: 76.1320 },
  { id: "kl3", state: "Kerala", district: "Idukki", market: "Idukki", commodity: "Cardamom", variety: "Alleppey Green", minPrice: 100000, maxPrice: 150000, modalPrice: 125000, unit: "Quintal", date: "2026-03-08", lat: 9.8494, lng: 76.9720 },
  { id: "kl4", state: "Kerala", district: "Thrissur", market: "Thrissur", commodity: "Coconut", variety: "Hybrid", minPrice: 13500, maxPrice: 17000, modalPrice: 15200, unit: "1000 Nuts", date: "2026-03-08", lat: 10.5276, lng: 76.2144 },
  { id: "kl5", state: "Kerala", district: "Palakkad", market: "Palakkad", commodity: "Rice", variety: "Jyothi", minPrice: 2400, maxPrice: 3000, modalPrice: 2700, unit: "Quintal", date: "2026-03-08", lat: 10.7867, lng: 76.6548 },
  { id: "kl6", state: "Kerala", district: "Kozhikode", market: "Kozhikode", commodity: "Black Pepper", variety: "Malabar", minPrice: 40000, maxPrice: 55000, modalPrice: 47500, unit: "Quintal", date: "2026-03-08", lat: 11.2588, lng: 75.7804 },
  { id: "kl7", state: "Kerala", district: "Kollam", market: "Kollam", commodity: "Cashew", variety: "Raw", minPrice: 10000, maxPrice: 14000, modalPrice: 12000, unit: "Quintal", date: "2026-03-08", lat: 8.8932, lng: 76.6141 },
  { id: "kl8", state: "Kerala", district: "Kannur", market: "Kannur", commodity: "Coconut", variety: "Tall", minPrice: 13800, maxPrice: 17500, modalPrice: 15650, unit: "1000 Nuts", date: "2026-03-08", lat: 11.8745, lng: 75.3704 },
  { id: "kl9", state: "Kerala", district: "Kottayam", market: "Kottayam", commodity: "Rubber", variety: "RSS-4", minPrice: 16000, maxPrice: 18500, modalPrice: 17200, unit: "Quintal", date: "2026-03-08", lat: 9.5916, lng: 76.5222 },

  // CHHATTISGARH
  { id: "cg1", state: "Chhattisgarh", district: "Raipur", market: "Raipur", commodity: "Rice", variety: "MTU-1010", minPrice: 2000, maxPrice: 2500, modalPrice: 2250, unit: "Quintal", date: "2026-03-08", lat: 21.2514, lng: 81.6296 },
  { id: "cg2", state: "Chhattisgarh", district: "Durg", market: "Durg", commodity: "Soybean", variety: "JS-9560", minPrice: 4000, maxPrice: 5000, modalPrice: 4500, unit: "Quintal", date: "2026-03-08", lat: 21.1904, lng: 81.2849 },
  { id: "cg3", state: "Chhattisgarh", district: "Bilaspur", market: "Bilaspur", commodity: "Rice", variety: "Swarna", minPrice: 1950, maxPrice: 2450, modalPrice: 2200, unit: "Quintal", date: "2026-03-08", lat: 22.0797, lng: 82.1409 },
  { id: "cg4", state: "Chhattisgarh", district: "Rajnandgaon", market: "Rajnandgaon", commodity: "Rice", variety: "MTU-1010", minPrice: 1950, maxPrice: 2400, modalPrice: 2175, unit: "Quintal", date: "2026-03-08", lat: 21.0968, lng: 81.0320 },
  { id: "cg5", state: "Chhattisgarh", district: "Korba", market: "Korba", commodity: "Maize", variety: "Hybrid", minPrice: 1750, maxPrice: 2200, modalPrice: 1975, unit: "Quintal", date: "2026-03-08", lat: 22.3595, lng: 82.7501 },

  // JHARKHAND
  { id: "jh1", state: "Jharkhand", district: "Ranchi", market: "Ranchi", commodity: "Vegetables", variety: "Mixed", minPrice: 500, maxPrice: 2500, modalPrice: 1500, unit: "Quintal", date: "2026-03-08", lat: 23.3441, lng: 85.3096 },
  { id: "jh2", state: "Jharkhand", district: "Dumka", market: "Dumka", commodity: "Rice", variety: "MTU-7029", minPrice: 1900, maxPrice: 2400, modalPrice: 2150, unit: "Quintal", date: "2026-03-08", lat: 24.2686, lng: 87.2492 },
  { id: "jh3", state: "Jharkhand", district: "Hazaribagh", market: "Hazaribagh", commodity: "Potato", variety: "Local", minPrice: 500, maxPrice: 1000, modalPrice: 750, unit: "Quintal", date: "2026-03-08", lat: 23.9925, lng: 85.3637 },
  { id: "jh4", state: "Jharkhand", district: "Deoghar", market: "Deoghar", commodity: "Wheat", variety: "HD-2967", minPrice: 2100, maxPrice: 2550, modalPrice: 2325, unit: "Quintal", date: "2026-03-08", lat: 24.4854, lng: 86.6944 },
  { id: "jh5", state: "Jharkhand", district: "Dhanbad", market: "Dhanbad", commodity: "Vegetables", variety: "Mixed", minPrice: 600, maxPrice: 2800, modalPrice: 1700, unit: "Quintal", date: "2026-03-08", lat: 23.7957, lng: 86.4304 },

  // ASSAM
  { id: "as1", state: "Assam", district: "Guwahati", market: "Guwahati", commodity: "Tea", variety: "CTC", minPrice: 15000, maxPrice: 25000, modalPrice: 20000, unit: "Quintal", date: "2026-03-08", lat: 26.1445, lng: 91.7362 },
  { id: "as2", state: "Assam", district: "Jorhat", market: "Jorhat", commodity: "Rice", variety: "Joha", minPrice: 3000, maxPrice: 4000, modalPrice: 3500, unit: "Quintal", date: "2026-03-08", lat: 26.7509, lng: 94.2037 },
  { id: "as3", state: "Assam", district: "Nagaon", market: "Nagaon", commodity: "Rice", variety: "Ranjit", minPrice: 2200, maxPrice: 2800, modalPrice: 2500, unit: "Quintal", date: "2026-03-08", lat: 26.3504, lng: 92.6840 },
  { id: "as4", state: "Assam", district: "Dibrugarh", market: "Dibrugarh", commodity: "Tea", variety: "Orthodox", minPrice: 18000, maxPrice: 28000, modalPrice: 23000, unit: "Quintal", date: "2026-03-08", lat: 27.4728, lng: 94.9120 },
  { id: "as5", state: "Assam", district: "Silchar", market: "Silchar", commodity: "Rice", variety: "Local", minPrice: 2300, maxPrice: 2900, modalPrice: 2600, unit: "Quintal", date: "2026-03-08", lat: 24.8333, lng: 92.7789 },
  { id: "as6", state: "Assam", district: "Tinsukia", market: "Tinsukia", commodity: "Tea", variety: "CTC", minPrice: 14000, maxPrice: 23000, modalPrice: 18500, unit: "Quintal", date: "2026-03-08", lat: 27.4922, lng: 95.3547 },

  // HIMACHAL PRADESH
  { id: "hp1", state: "Himachal Pradesh", district: "Shimla", market: "Shimla", commodity: "Apple", variety: "Royal Delicious", minPrice: 4000, maxPrice: 8000, modalPrice: 6000, unit: "Quintal", date: "2026-03-08", lat: 31.1048, lng: 77.1734 },
  { id: "hp2", state: "Himachal Pradesh", district: "Kullu", market: "Kullu", commodity: "Apple", variety: "Golden Delicious", minPrice: 3500, maxPrice: 7000, modalPrice: 5500, unit: "Quintal", date: "2026-03-08", lat: 31.9579, lng: 77.1095 },
  { id: "hp3", state: "Himachal Pradesh", district: "Mandi", market: "Mandi", commodity: "Vegetables", variety: "Peas", minPrice: 3000, maxPrice: 5000, modalPrice: 4000, unit: "Quintal", date: "2026-03-08", lat: 31.7087, lng: 76.9315 },
  { id: "hp4", state: "Himachal Pradesh", district: "Solan", market: "Solan", commodity: "Tomato", variety: "Hybrid", minPrice: 800, maxPrice: 2500, modalPrice: 1650, unit: "Quintal", date: "2026-03-08", lat: 30.9045, lng: 77.0967 },
  { id: "hp5", state: "Himachal Pradesh", district: "Kinnaur", market: "Kinnaur", commodity: "Apple", variety: "Kinnauri", minPrice: 5000, maxPrice: 10000, modalPrice: 7500, unit: "Quintal", date: "2026-03-08", lat: 31.5800, lng: 78.1700 },

  // UTTARAKHAND
  { id: "uk1", state: "Uttarakhand", district: "Dehradun", market: "Dehradun", commodity: "Rice", variety: "Basmati", minPrice: 3200, maxPrice: 4200, modalPrice: 3700, unit: "Quintal", date: "2026-03-08", lat: 30.3165, lng: 78.0322 },
  { id: "uk2", state: "Uttarakhand", district: "Haldwani", market: "Haldwani", commodity: "Wheat", variety: "UP-2338", minPrice: 2200, maxPrice: 2600, modalPrice: 2400, unit: "Quintal", date: "2026-03-08", lat: 29.2183, lng: 79.5130 },
  { id: "uk3", state: "Uttarakhand", district: "Haridwar", market: "Haridwar", commodity: "Sugarcane", variety: "CoS-767", minPrice: 310, maxPrice: 350, modalPrice: 330, unit: "Quintal", date: "2026-03-08", lat: 29.9457, lng: 78.1642 },
  { id: "uk4", state: "Uttarakhand", district: "Udham Singh Nagar", market: "Rudrapur", commodity: "Wheat", variety: "PBW-343", minPrice: 2250, maxPrice: 2600, modalPrice: 2425, unit: "Quintal", date: "2026-03-08", lat: 28.9760, lng: 79.4041 },

  // GOA
  { id: "ga1", state: "Goa", district: "North Goa", market: "Mapusa", commodity: "Coconut", variety: "Tall", minPrice: 13000, maxPrice: 16000, modalPrice: 14500, unit: "1000 Nuts", date: "2026-03-08", lat: 15.5938, lng: 73.8106 },
  { id: "ga2", state: "Goa", district: "South Goa", market: "Margao", commodity: "Cashew", variety: "Raw", minPrice: 10000, maxPrice: 13500, modalPrice: 11750, unit: "Quintal", date: "2026-03-08", lat: 15.2832, lng: 73.9862 },

  // DELHI
  { id: "dl1", state: "Delhi", district: "New Delhi", market: "Azadpur", commodity: "Onion", variety: "Nashik Red", minPrice: 900, maxPrice: 2800, modalPrice: 1800, unit: "Quintal", date: "2026-03-08", lat: 28.7167, lng: 77.1833 },
  { id: "dl2", state: "Delhi", district: "New Delhi", market: "Azadpur", commodity: "Tomato", variety: "Hybrid", minPrice: 600, maxPrice: 2200, modalPrice: 1400, unit: "Quintal", date: "2026-03-08", lat: 28.7167, lng: 77.1833 },
  { id: "dl3", state: "Delhi", district: "New Delhi", market: "Azadpur", commodity: "Potato", variety: "Agra", minPrice: 500, maxPrice: 1100, modalPrice: 800, unit: "Quintal", date: "2026-03-08", lat: 28.7167, lng: 77.1833 },
  { id: "dl4", state: "Delhi", district: "New Delhi", market: "Okhla", commodity: "Vegetables", variety: "Mixed", minPrice: 500, maxPrice: 3000, modalPrice: 1750, unit: "Quintal", date: "2026-03-08", lat: 28.5355, lng: 77.2693 },
  { id: "dl5", state: "Delhi", district: "New Delhi", market: "Ghazipur", commodity: "Fruits", variety: "Mixed", minPrice: 2000, maxPrice: 8000, modalPrice: 5000, unit: "Quintal", date: "2026-03-08", lat: 28.6289, lng: 77.3209 },

  // JAMMU & KASHMIR
  { id: "jk1", state: "Jammu & Kashmir", district: "Srinagar", market: "Srinagar", commodity: "Apple", variety: "Delicious", minPrice: 5000, maxPrice: 10000, modalPrice: 7500, unit: "Quintal", date: "2026-03-08", lat: 34.0837, lng: 74.7973 },
  { id: "jk2", state: "Jammu & Kashmir", district: "Shopian", market: "Shopian", commodity: "Apple", variety: "Ambri", minPrice: 4000, maxPrice: 8000, modalPrice: 6000, unit: "Quintal", date: "2026-03-08", lat: 33.7159, lng: 74.8291 },
  { id: "jk3", state: "Jammu & Kashmir", district: "Anantnag", market: "Anantnag", commodity: "Apple", variety: "Royal Delicious", minPrice: 4500, maxPrice: 9000, modalPrice: 6750, unit: "Quintal", date: "2026-03-08", lat: 33.7311, lng: 75.1487 },
  { id: "jk4", state: "Jammu & Kashmir", district: "Baramulla", market: "Baramulla", commodity: "Walnut", variety: "Kagzi", minPrice: 30000, maxPrice: 45000, modalPrice: 37500, unit: "Quintal", date: "2026-03-08", lat: 34.1985, lng: 74.3639 },
  { id: "jk5", state: "Jammu & Kashmir", district: "Jammu", market: "Jammu", commodity: "Rice", variety: "Basmati", minPrice: 3000, maxPrice: 4000, modalPrice: 3500, unit: "Quintal", date: "2026-03-08", lat: 32.7266, lng: 74.8570 },
  { id: "jk6", state: "Jammu & Kashmir", district: "Pulwama", market: "Pulwama", commodity: "Saffron", variety: "Lacha", minPrice: 150000, maxPrice: 250000, modalPrice: 200000, unit: "Quintal", date: "2026-03-08", lat: 33.8748, lng: 74.8953 },

  // MANIPUR
  { id: "mn1", state: "Manipur", district: "Imphal", market: "Imphal", commodity: "Rice", variety: "Chakhao", minPrice: 4000, maxPrice: 6000, modalPrice: 5000, unit: "Quintal", date: "2026-03-08", lat: 24.8170, lng: 93.9368 },
  { id: "mn2", state: "Manipur", district: "Bishnupur", market: "Bishnupur", commodity: "Rice", variety: "Local", minPrice: 2500, maxPrice: 3500, modalPrice: 3000, unit: "Quintal", date: "2026-03-08", lat: 24.6263, lng: 93.7700 },

  // MEGHALAYA
  { id: "ml1", state: "Meghalaya", district: "Shillong", market: "Shillong", commodity: "Potato", variety: "Local", minPrice: 600, maxPrice: 1200, modalPrice: 900, unit: "Quintal", date: "2026-03-08", lat: 25.5788, lng: 91.8933 },
  { id: "ml2", state: "Meghalaya", district: "Jaintia Hills", market: "Jowai", commodity: "Turmeric", variety: "Lakadong", minPrice: 12000, maxPrice: 18000, modalPrice: 15000, unit: "Quintal", date: "2026-03-08", lat: 25.4500, lng: 92.2000 },

  // TRIPURA
  { id: "tr1", state: "Tripura", district: "Agartala", market: "Agartala", commodity: "Rice", variety: "Local", minPrice: 1800, maxPrice: 2300, modalPrice: 2050, unit: "Quintal", date: "2026-03-08", lat: 23.8315, lng: 91.2868 },
  { id: "tr2", state: "Tripura", district: "Udaipur", market: "Udaipur", commodity: "Rubber", variety: "RSS-4", minPrice: 15500, maxPrice: 17500, modalPrice: 16500, unit: "Quintal", date: "2026-03-08", lat: 23.5333, lng: 91.4833 },

  // NAGALAND
  { id: "nl1", state: "Nagaland", district: "Dimapur", market: "Dimapur", commodity: "Rice", variety: "Local", minPrice: 2500, maxPrice: 3500, modalPrice: 3000, unit: "Quintal", date: "2026-03-08", lat: 25.9042, lng: 93.7270 },
  { id: "nl2", state: "Nagaland", district: "Kohima", market: "Kohima", commodity: "Vegetables", variety: "Mixed", minPrice: 800, maxPrice: 3000, modalPrice: 1900, unit: "Quintal", date: "2026-03-08", lat: 25.6751, lng: 94.1086 },

  // MIZORAM
  { id: "mz1", state: "Mizoram", district: "Aizawl", market: "Aizawl", commodity: "Ginger", variety: "Nadia", minPrice: 3000, maxPrice: 5000, modalPrice: 4000, unit: "Quintal", date: "2026-03-08", lat: 23.7271, lng: 92.7176 },
  { id: "mz2", state: "Mizoram", district: "Lunglei", market: "Lunglei", commodity: "Turmeric", variety: "Local", minPrice: 7000, maxPrice: 10000, modalPrice: 8500, unit: "Quintal", date: "2026-03-08", lat: 22.8873, lng: 92.7233 },

  // ARUNACHAL PRADESH
  { id: "ar1", state: "Arunachal Pradesh", district: "Itanagar", market: "Itanagar", commodity: "Rice", variety: "Local", minPrice: 2500, maxPrice: 3500, modalPrice: 3000, unit: "Quintal", date: "2026-03-08", lat: 27.0844, lng: 93.6053 },
  { id: "ar2", state: "Arunachal Pradesh", district: "Pasighat", market: "Pasighat", commodity: "Orange", variety: "Khasi Mandarin", minPrice: 2500, maxPrice: 4000, modalPrice: 3250, unit: "Quintal", date: "2026-03-08", lat: 28.0660, lng: 95.3269 },

  // SIKKIM
  { id: "sk1", state: "Sikkim", district: "Gangtok", market: "Gangtok", commodity: "Cardamom", variety: "Large", minPrice: 90000, maxPrice: 140000, modalPrice: 115000, unit: "Quintal", date: "2026-03-08", lat: 27.3389, lng: 88.6065 },
  { id: "sk2", state: "Sikkim", district: "Namchi", market: "Namchi", commodity: "Ginger", variety: "Organic", minPrice: 3500, maxPrice: 5500, modalPrice: 4500, unit: "Quintal", date: "2026-03-08", lat: 27.1667, lng: 88.3500 },
];

// Add historical prices to all rates
export const mandiRates: MandiRate[] = rawMandiRates.map(rate => ({
  ...rate,
  ...generateHistoricalPrices(rate.modalPrice),
}));
