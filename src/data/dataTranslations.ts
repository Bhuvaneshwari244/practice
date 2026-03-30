// Data-level translations for crop names, categories, plant parts, community categories, states, districts etc.

type DataTranslations = {
  cropCategories: Record<string, string>;
  cropNames: Record<string, string>;
  communityCategories: Record<string, string>;
  plantParts: Record<string, string>;
  stateNames?: Record<string, string>;
  placeNames?: Record<string, string>;
};

const dataTranslations: Record<string, DataTranslations> = {
  en: {
    cropCategories: { All: "All", Cereals: "Cereals", Pulses: "Pulses", Oilseeds: "Oilseeds", Vegetables: "Vegetables", Fruits: "Fruits", Spices: "Spices", Commercial: "Commercial", Plantation: "Plantation" },
    cropNames: {
      Rice: "Rice", Wheat: "Wheat", "Maize (Corn)": "Maize (Corn)", "Bajra (Pearl Millet)": "Bajra (Pearl Millet)", "Jowar (Sorghum)": "Jowar (Sorghum)", "Ragi (Finger Millet)": "Ragi (Finger Millet)", Barley: "Barley", Oats: "Oats",
      "Foxtail Millet (Kangni)": "Foxtail Millet (Kangni)", "Kodo Millet": "Kodo Millet", "Barnyard Millet (Sanwa)": "Barnyard Millet (Sanwa)", "Proso Millet (Cheena)": "Proso Millet (Cheena)",
      "Chickpea (Chana)": "Chickpea (Chana)", "Pigeon Pea (Arhar/Tur)": "Pigeon Pea (Arhar/Tur)", "Lentil (Masoor)": "Lentil (Masoor)", "Moong (Green Gram)": "Moong (Green Gram)", "Urad (Black Gram)": "Urad (Black Gram)", "Field Pea (Matar)": "Field Pea (Matar)", "Horse Gram (Kulthi)": "Horse Gram (Kulthi)",
      "Cowpea (Lobia)": "Cowpea (Lobia)", "Moth Bean": "Moth Bean", "Rajma (Kidney Bean)": "Rajma (Kidney Bean)",
      "Groundnut (Peanut)": "Groundnut (Peanut)", Soybean: "Soybean", "Mustard (Sarson)": "Mustard (Sarson)", Sunflower: "Sunflower", "Sesame (Til)": "Sesame (Til)", Castor: "Castor", "Linseed (Flax)": "Linseed (Flax)",
      "Safflower (Kusum)": "Safflower (Kusum)", "Niger Seed (Ramtil)": "Niger Seed (Ramtil)",
      Tomato: "Tomato", Potato: "Potato", Onion: "Onion", "Brinjal (Eggplant)": "Brinjal (Eggplant)", "Chilli (Green & Red)": "Chilli (Green & Red)", "Okra (Bhindi/Lady Finger)": "Okra (Bhindi/Lady Finger)", Cabbage: "Cabbage", Cauliflower: "Cauliflower", Carrot: "Carrot", Radish: "Radish", "Spinach (Palak)": "Spinach (Palak)", "Bottle Gourd (Lauki)": "Bottle Gourd (Lauki)", "Bitter Gourd (Karela)": "Bitter Gourd (Karela)", "Ridge Gourd (Turai)": "Ridge Gourd (Turai)", Pumpkin: "Pumpkin", Cucumber: "Cucumber", "French Beans": "French Beans", "Drumstick (Moringa)": "Drumstick (Moringa)", "Sweet Potato": "Sweet Potato", Lettuce: "Lettuce", Broccoli: "Broccoli", "Capsicum (Bell Pepper)": "Capsicum (Bell Pepper)", Beetroot: "Beetroot", "Snake Gourd (Chichinda)": "Snake Gourd (Chichinda)", "Ash Gourd (Petha)": "Ash Gourd (Petha)", "Cluster Bean (Guar)": "Cluster Bean (Guar)", "Taro (Arbi)": "Taro (Arbi)", "Tapioca (Cassava)": "Tapioca (Cassava)",
      Mango: "Mango", Banana: "Banana", Papaya: "Papaya", Guava: "Guava", Pomegranate: "Pomegranate", Grapes: "Grapes", Apple: "Apple", "Orange (Nagpur/Kinnow)": "Orange (Nagpur/Kinnow)", "Lemon/Lime": "Lemon/Lime", Watermelon: "Watermelon", "Sapota (Chikoo)": "Sapota (Chikoo)", Jackfruit: "Jackfruit", Pineapple: "Pineapple", Strawberry: "Strawberry", Litchi: "Litchi", "Amla (Indian Gooseberry)": "Amla (Indian Gooseberry)", "Dragon Fruit (Kamalam)": "Dragon Fruit (Kamalam)",
      "Turmeric (Haldi)": "Turmeric (Haldi)", "Ginger (Adrak)": "Ginger (Adrak)", "Garlic (Lehsun)": "Garlic (Lehsun)", "Coriander (Dhaniya)": "Coriander (Dhaniya)", "Cumin (Jeera)": "Cumin (Jeera)", "Fenugreek (Methi)": "Fenugreek (Methi)", "Black Pepper": "Black Pepper", Cardamom: "Cardamom", "Clove (Laung)": "Clove (Laung)", "Cinnamon (Dalchini)": "Cinnamon (Dalchini)", "Fennel (Saunf)": "Fennel (Saunf)", "Saffron (Kesar)": "Saffron (Kesar)",
      "Cotton (Kapas)": "Cotton (Kapas)", Sugarcane: "Sugarcane", Tobacco: "Tobacco", Jute: "Jute",
      Tea: "Tea", Coffee: "Coffee", Rubber: "Rubber", Coconut: "Coconut", "Oil Palm": "Oil Palm", "Arecanut (Betel Nut)": "Arecanut (Betel Nut)", Cocoa: "Cocoa", Cashew: "Cashew", Vanilla: "Vanilla", "Betel Vine (Paan)": "Betel Vine (Paan)",
    },
    communityCategories: { All: "All", "Pest Control": "Pest Control", Irrigation: "Irrigation", Soil: "Soil", Market: "Market", Seeds: "Seeds", Fertilizer: "Fertilizer", Organic: "Organic", Equipment: "Equipment", Weather: "Weather" },
    plantParts: { Leaf: "Leaf", Stem: "Stem", Root: "Root", Fruit: "Fruit", "Pod/Seed": "Pod/Seed", Flower: "Flower", Insect: "Insect", "Full Plant": "Full Plant" },
  },
  hi: {
    cropCategories: { All: "सभी", Cereals: "अनाज", Pulses: "दालें", Oilseeds: "तिलहन", Vegetables: "सब्जियाँ", Fruits: "फल", Spices: "मसाले", Commercial: "व्यावसायिक", Plantation: "बागान" },
    cropNames: {
      Rice: "चावल", Wheat: "गेहूं", "Maize (Corn)": "मक्का", "Bajra (Pearl Millet)": "बाजरा", "Jowar (Sorghum)": "ज्वार", "Ragi (Finger Millet)": "रागी (मडुआ)", Barley: "जौ", Oats: "जई",
      "Foxtail Millet (Kangni)": "कंगनी (काकुन)", "Kodo Millet": "कोदो", "Barnyard Millet (Sanwa)": "सांवा (झंगोरा)", "Proso Millet (Cheena)": "चीना (बर्री)",
      "Chickpea (Chana)": "चना", "Pigeon Pea (Arhar/Tur)": "अरहर/तूर दाल", "Lentil (Masoor)": "मसूर दाल", "Moong (Green Gram)": "मूंग", "Urad (Black Gram)": "उड़द", "Field Pea (Matar)": "मटर", "Horse Gram (Kulthi)": "कुल्थी",
      "Cowpea (Lobia)": "लोबिया", "Moth Bean": "मोठ", "Rajma (Kidney Bean)": "राजमा",
      "Groundnut (Peanut)": "मूंगफली", Soybean: "सोयाबीन", "Mustard (Sarson)": "सरसों", Sunflower: "सूरजमुखी", "Sesame (Til)": "तिल", Castor: "अरंडी", "Linseed (Flax)": "अलसी",
      "Safflower (Kusum)": "कुसुम", "Niger Seed (Ramtil)": "रामतिल",
      Tomato: "टमाटर", Potato: "आलू", Onion: "प्याज", "Brinjal (Eggplant)": "बैंगन", "Chilli (Green & Red)": "मिर्च", "Okra (Bhindi/Lady Finger)": "भिंडी", Cabbage: "पत्तागोभी", Cauliflower: "फूलगोभी", Carrot: "गाजर", Radish: "मूली", "Spinach (Palak)": "पालक", "Bottle Gourd (Lauki)": "लौकी", "Bitter Gourd (Karela)": "करेला", "Ridge Gourd (Turai)": "तोरई", Pumpkin: "कद्दू", Cucumber: "खीरा", "French Beans": "फ्रेंच बीन्स", "Drumstick (Moringa)": "सहजन (मोरिंगा)", "Sweet Potato": "शकरकंद", Lettuce: "सलाद पत्ता", Broccoli: "ब्रोकली", "Capsicum (Bell Pepper)": "शिमला मिर्च", Beetroot: "चुकंदर", "Snake Gourd (Chichinda)": "चचिंडा", "Ash Gourd (Petha)": "पेठा", "Cluster Bean (Guar)": "ग्वार फली", "Taro (Arbi)": "अरबी", "Tapioca (Cassava)": "टैपिओका (कसावा)",
      Mango: "आम", Banana: "केला", Papaya: "पपीता", Guava: "अमरूद", Pomegranate: "अनार", Grapes: "अंगूर", Apple: "सेब", "Orange (Nagpur/Kinnow)": "संतरा (नागपुर/किन्नू)", "Lemon/Lime": "नींबू", Watermelon: "तरबूज", "Sapota (Chikoo)": "चीकू", Jackfruit: "कटहल", Pineapple: "अनानास", Strawberry: "स्ट्रॉबेरी", Litchi: "लीची", "Amla (Indian Gooseberry)": "आंवला", "Dragon Fruit (Kamalam)": "ड्रैगन फ्रूट (कमलम)",
      "Turmeric (Haldi)": "हल्दी", "Ginger (Adrak)": "अदरक", "Garlic (Lehsun)": "लहसुन", "Coriander (Dhaniya)": "धनिया", "Cumin (Jeera)": "जीरा", "Fenugreek (Methi)": "मेथी", "Black Pepper": "काली मिर्च", Cardamom: "इलायची", "Clove (Laung)": "लौंग", "Cinnamon (Dalchini)": "दालचीनी", "Fennel (Saunf)": "सौंफ", "Saffron (Kesar)": "केसर",
      "Cotton (Kapas)": "कपास", Sugarcane: "गन्ना", Tobacco: "तम्बाकू", Jute: "जूट/पटसन",
      Tea: "चाय", Coffee: "कॉफी", Rubber: "रबड़", Coconut: "नारियल", "Oil Palm": "ऑयल पाम", "Arecanut (Betel Nut)": "सुपारी", Cocoa: "कोको", Cashew: "काजू", Vanilla: "वनीला", "Betel Vine (Paan)": "पान",
    },
    communityCategories: { All: "सभी", "Pest Control": "कीट नियंत्रण", Irrigation: "सिंचाई", Soil: "मिट्टी", Market: "बाजार", Seeds: "बीज", Fertilizer: "उर्वरक", Organic: "जैविक", Equipment: "उपकरण", Weather: "मौसम" },
    plantParts: { Leaf: "पत्ती", Stem: "तना", Root: "जड़", Fruit: "फल", "Pod/Seed": "फली/बीज", Flower: "फूल", Insect: "कीट", "Full Plant": "पूरा पौधा" },
  },
  te: {
    cropCategories: { All: "అన్ని", Cereals: "ధాన్యాలు", Pulses: "పప్పులు", Oilseeds: "నూనెగింజలు", Vegetables: "కూరగాయలు", Fruits: "పండ్లు", Spices: "సుగంధ ద్రవ్యాలు", Commercial: "వాణిజ్య", Plantation: "తోటపంటలు" },
    cropNames: {
      Rice: "వరి (బియ్యం)", Wheat: "గోధుమ", "Maize (Corn)": "మొక్కజొన్న", "Bajra (Pearl Millet)": "సజ్జ", "Jowar (Sorghum)": "జొన్న", "Ragi (Finger Millet)": "రాగి", Barley: "బార్లీ", Oats: "ఓట్స్",
      "Foxtail Millet (Kangni)": "కొర్రలు", "Kodo Millet": "అరికెలు", "Barnyard Millet (Sanwa)": "ఊదలు", "Proso Millet (Cheena)": "వరిగెలు",
      "Chickpea (Chana)": "శనగ", "Pigeon Pea (Arhar/Tur)": "కందిపప్పు", "Lentil (Masoor)": "మసూర్ పప్పు", "Moong (Green Gram)": "పెసర", "Urad (Black Gram)": "మినుము", "Field Pea (Matar)": "బఠానీ", "Horse Gram (Kulthi)": "ఉలవలు",
      "Cowpea (Lobia)": "అలసందలు", "Moth Bean": "పెసలు", "Rajma (Kidney Bean)": "రాజ్మా",
      "Groundnut (Peanut)": "వేరుశనగ", Soybean: "సోయాబీన్", "Mustard (Sarson)": "ఆవాలు", Sunflower: "పొద్దుతిరుగుడు", "Sesame (Til)": "నువ్వులు", Castor: "ఆముదం", "Linseed (Flax)": "అవిసె",
      "Safflower (Kusum)": "కుసుమ", "Niger Seed (Ramtil)": "వెర్రి నువ్వులు",
      Tomato: "టమాటా", Potato: "బంగాళాదుంప", Onion: "ఉల్లిపాయ", "Brinjal (Eggplant)": "వంకాయ", "Chilli (Green & Red)": "మిరపకాయ", "Okra (Bhindi/Lady Finger)": "బెండకాయ", Cabbage: "క్యాబేజీ", Cauliflower: "గోబీ", Carrot: "క్యారెట్", Radish: "ముల్లంగి", "Spinach (Palak)": "పాలకూర", "Bottle Gourd (Lauki)": "సొరకాయ", "Bitter Gourd (Karela)": "కాకరకాయ", "Ridge Gourd (Turai)": "బీరకాయ", Pumpkin: "గుమ్మడికాయ", Cucumber: "దోసకాయ", "French Beans": "ఫ్రెంచ్ బీన్స్", "Drumstick (Moringa)": "మునగ", "Sweet Potato": "చిలగడదుంప", Lettuce: "లెట్యూస్", Broccoli: "బ్రోకోలి", "Capsicum (Bell Pepper)": "క్యాప్సికం", Beetroot: "బీట్‌రూట్", "Snake Gourd (Chichinda)": "పొట్లకాయ", "Ash Gourd (Petha)": "బూడిదగుమ్మడి", "Cluster Bean (Guar)": "గోరుచిక్కుడు", "Taro (Arbi)": "చామదుంప", "Tapioca (Cassava)": "టాపియోకా",
      Mango: "మామిడి", Banana: "అరటి", Papaya: "బొప్పాయి", Guava: "జామ", Pomegranate: "దానిమ్మ", Grapes: "ద్రాక్ష", Apple: "ఆపిల్", "Orange (Nagpur/Kinnow)": "నారింజ", "Lemon/Lime": "నిమ్మ", Watermelon: "పుచ్చకాయ", "Sapota (Chikoo)": "సపోట", Jackfruit: "పనస", Pineapple: "అనాస", Strawberry: "స్ట్రాబెర్రీ", Litchi: "లీచీ", "Amla (Indian Gooseberry)": "ఉసిరి", "Dragon Fruit (Kamalam)": "డ్రాగన్ ఫ్రూట్ (కమలం)",
      "Turmeric (Haldi)": "పసుపు", "Ginger (Adrak)": "అల్లం", "Garlic (Lehsun)": "వెల్లుల్లి", "Coriander (Dhaniya)": "ధనియాలు", "Cumin (Jeera)": "జీలకర్ర", "Fenugreek (Methi)": "మెంతులు", "Black Pepper": "నల్లమిరియాలు", Cardamom: "ఏలకులు", "Clove (Laung)": "లవంగాలు", "Cinnamon (Dalchini)": "దాల్చిన", "Fennel (Saunf)": "సోంపు", "Saffron (Kesar)": "కుంకుమపువ్వు",
      "Cotton (Kapas)": "పత్తి", Sugarcane: "చెరకు", Tobacco: "పొగాకు", Jute: "జనపనార",
      Tea: "తేయాకు", Coffee: "కాఫీ", Rubber: "రబ్బరు", Coconut: "కొబ్బరి", "Oil Palm": "ఆయిల్ పామ్", "Arecanut (Betel Nut)": "పోక", Cocoa: "కోకో", Cashew: "జీడిపప్పు", Vanilla: "వెనిల్లా", "Betel Vine (Paan)": "తమలపాకు",
    },
    communityCategories: { All: "అన్ని", "Pest Control": "చీడపీడల నియంత్రణ", Irrigation: "నీటిపారుదల", Soil: "నేల", Market: "మార్కెట్", Seeds: "విత్తనాలు", Fertilizer: "ఎరువులు", Organic: "సేంద్రియ", Equipment: "పరికరాలు", Weather: "వాతావరణం" },
    plantParts: { Leaf: "ఆకు", Stem: "కాండం", Root: "వేరు", Fruit: "పండు", "Pod/Seed": "కాయ/విత్తనం", Flower: "పువ్వు", Insect: "పురుగు", "Full Plant": "మొత్తం మొక్క" },
  },
  ta: {
    cropCategories: { All: "அனைத்தும்", Cereals: "தானியங்கள்", Pulses: "பருப்புகள்", Oilseeds: "எண்ணெய் வித்துக்கள்", Vegetables: "காய்கறிகள்", Fruits: "பழங்கள்", Spices: "மசாலா பொருட்கள்", Commercial: "வணிகப் பயிர்கள்", Plantation: "தோட்டப் பயிர்கள்" },
    cropNames: {
      Rice: "அரிசி (நெல்)", Wheat: "கோதுமை", "Maize (Corn)": "சோளம்", "Bajra (Pearl Millet)": "கம்பு", "Jowar (Sorghum)": "சோளம்", "Ragi (Finger Millet)": "கேழ்வரகு", Barley: "வாற்கோதுமை", Oats: "ஓட்ஸ்",
      "Foxtail Millet (Kangni)": "தினை", "Kodo Millet": "வரகு", "Barnyard Millet (Sanwa)": "குதிரைவாலி", "Proso Millet (Cheena)": "பனிவரகு",
      "Chickpea (Chana)": "கொண்டைக்கடலை", "Pigeon Pea (Arhar/Tur)": "துவரை", "Lentil (Masoor)": "மசூர் பருப்பு", "Moong (Green Gram)": "பாசிப்பயறு", "Urad (Black Gram)": "உளுந்து", "Field Pea (Matar)": "பட்டாணி", "Horse Gram (Kulthi)": "கொள்ளு",
      "Cowpea (Lobia)": "காராமணி", "Moth Bean": "துவரை பயறு", "Rajma (Kidney Bean)": "ராஜ்மா",
      "Groundnut (Peanut)": "நிலக்கடலை", Soybean: "சோயா", "Mustard (Sarson)": "கடுகு", Sunflower: "சூரியகாந்தி", "Sesame (Til)": "எள்", Castor: "ஆமணக்கு", "Linseed (Flax)": "ஆளி விதை",
      "Safflower (Kusum)": "குசும்பா", "Niger Seed (Ramtil)": "உசிலி எள்",
      Tomato: "தக்காளி", Potato: "உருளைக்கிழங்கு", Onion: "வெங்காயம்", "Brinjal (Eggplant)": "கத்தரிக்காய்", "Chilli (Green & Red)": "மிளகாய்", "Okra (Bhindi/Lady Finger)": "வெண்டைக்காய்", Cabbage: "முட்டைகோஸ்", Cauliflower: "காலிஃப்ளவர்", Carrot: "கேரட்", Radish: "முள்ளங்கி", "Spinach (Palak)": "பசலைக்கீரை", "Bottle Gourd (Lauki)": "சுரைக்காய்", "Bitter Gourd (Karela)": "பாகற்காய்", "Ridge Gourd (Turai)": "பீர்க்கங்காய்", Pumpkin: "பூசணிக்காய்", Cucumber: "வெள்ளரிக்காய்", "French Beans": "பீன்ஸ்", "Drumstick (Moringa)": "முருங்கை", "Sweet Potato": "சர்க்கரைவள்ளிக் கிழங்கு",
      Lettuce: "லெட்யூஸ்", Broccoli: "ப்ரோக்கோலி", "Capsicum (Bell Pepper)": "குடைமிளகாய்", Beetroot: "பீட்ரூட்", "Snake Gourd (Chichinda)": "புடலங்காய்", "Ash Gourd (Petha)": "சுரைக்காய் (வெள்ளை)", "Cluster Bean (Guar)": "கொத்தவரங்காய்", "Taro (Arbi)": "சேப்பங்கிழங்கு", "Tapioca (Cassava)": "மரவள்ளிக்கிழங்கு",
      Mango: "மாம்பழம்", Banana: "வாழைப்பழம்", Papaya: "பப்பாளி", Guava: "கொய்யா", Pomegranate: "மாதுளை", Grapes: "திராட்சை", Apple: "ஆப்பிள்", "Orange (Nagpur/Kinnow)": "ஆரஞ்சு", "Lemon/Lime": "எலுமிச்சை", Watermelon: "தர்பூசணி", "Sapota (Chikoo)": "சப்போட்டா", Jackfruit: "பலாப்பழம்", Pineapple: "அன்னாசிப்பழம்", Strawberry: "ஸ்ட்ராபெர்ரி", Litchi: "லிச்சி", "Amla (Indian Gooseberry)": "நெல்லிக்காய்", "Dragon Fruit (Kamalam)": "டிராகன் ஃப்ரூட்",
      "Turmeric (Haldi)": "மஞ்சள்", "Ginger (Adrak)": "இஞ்சி", "Garlic (Lehsun)": "பூண்டு", "Coriander (Dhaniya)": "கொத்தமல்லி", "Cumin (Jeera)": "சீரகம்", "Fenugreek (Methi)": "வெந்தயம்", "Black Pepper": "மிளகு", Cardamom: "ஏலக்காய்", "Clove (Laung)": "கிராம்பு", "Cinnamon (Dalchini)": "பட்டை", "Fennel (Saunf)": "பெருஞ்சீரகம்", "Saffron (Kesar)": "குங்குமப்பூ",
      "Cotton (Kapas)": "பருத்தி", Sugarcane: "கரும்பு", Tobacco: "புகையிலை", Jute: "சணல்",
      Tea: "தேயிலை", Coffee: "காபி", Rubber: "ரப்பர்", Coconut: "தேங்காய்", "Oil Palm": "எண்ணெய் பனை", "Arecanut (Betel Nut)": "பாக்கு", Cocoa: "கோகோ", Cashew: "முந்திரி", Vanilla: "வெனிலா", "Betel Vine (Paan)": "வெற்றிலை",
    },
    communityCategories: { All: "அனைத்தும்", "Pest Control": "பூச்சி கட்டுப்பாடு", Irrigation: "நீர்ப்பாசனம்", Soil: "மண்", Market: "சந்தை", Seeds: "விதைகள்", Fertilizer: "உரம்", Organic: "இயற்கை", Equipment: "கருவிகள்", Weather: "வானிலை" },
    plantParts: { Leaf: "இலை", Stem: "தண்டு", Root: "வேர்", Fruit: "பழம்", "Pod/Seed": "காய்/விதை", Flower: "பூ", Insect: "பூச்சி", "Full Plant": "முழு செடி" },
  },
  kn: {
    cropCategories: { All: "ಎಲ್ಲಾ", Cereals: "ಧಾನ್ಯಗಳು", Pulses: "ಬೇಳೆಕಾಳುಗಳು", Oilseeds: "ಎಣ್ಣೆಕಾಳುಗಳು", Vegetables: "ತರಕಾರಿಗಳು", Fruits: "ಹಣ್ಣುಗಳು", Spices: "ಸಂಬಾರ ಪದಾರ್ಥಗಳು", Commercial: "ವಾಣಿಜ್ಯ", Plantation: "ತೋಟಗಾರಿಕೆ" },
    cropNames: {
      Rice: "ಭತ್ತ (ಅಕ್ಕಿ)", Wheat: "ಗೋಧಿ", "Maize (Corn)": "ಮೆಕ್ಕೆಜೋಳ", "Bajra (Pearl Millet)": "ಸಜ್ಜೆ", "Jowar (Sorghum)": "ಜೋಳ", "Ragi (Finger Millet)": "ರಾಗಿ", Barley: "ಬಾರ್ಲಿ", Oats: "ಓಟ್ಸ್",
      "Foxtail Millet (Kangni)": "ನವಣೆ", "Kodo Millet": "ಹಾರಕ", "Barnyard Millet (Sanwa)": "ಊದಲು", "Proso Millet (Cheena)": "ಬರಗು",
      "Chickpea (Chana)": "ಕಡಲೆ", "Pigeon Pea (Arhar/Tur)": "ತೊಗರಿ", "Lentil (Masoor)": "ಮಸೂರ ಬೇಳೆ", "Moong (Green Gram)": "ಹೆಸರು", "Urad (Black Gram)": "ಉದ್ದು", "Field Pea (Matar)": "ಬಟಾಣಿ", "Horse Gram (Kulthi)": "ಹುರುಳಿ",
      "Cowpea (Lobia)": "ಅಲಸಂದೆ", "Moth Bean": "ಮಟ್ಕಿ", "Rajma (Kidney Bean)": "ರಾಜ್ಮಾ",
      "Groundnut (Peanut)": "ಕಡಲೆಕಾಯಿ", Soybean: "ಸೋಯಾಬೀನ್", "Mustard (Sarson)": "ಸಾಸಿವೆ", Sunflower: "ಸೂರ್ಯಕಾಂತಿ", "Sesame (Til)": "ಎಳ್ಳು", Castor: "ಹರಳು",
      "Safflower (Kusum)": "ಕುಸುಮೆ", "Niger Seed (Ramtil)": "ಗುರೆಳ್ಳು",
      Tomato: "ಟೊಮೊಟೊ", Potato: "ಆಲೂಗಡ್ಡೆ", Onion: "ಈರುಳ್ಳಿ", "Brinjal (Eggplant)": "ಬದನೆಕಾಯಿ", "Chilli (Green & Red)": "ಮೆಣಸಿನಕಾಯಿ", "Okra (Bhindi/Lady Finger)": "ಬೆಂಡೆಕಾಯಿ", Cabbage: "ಎಲೆಕೋಸು", Cauliflower: "ಹೂಕೋಸು", Carrot: "ಕ್ಯಾರೆಟ್", Radish: "ಮೂಲಂಗಿ", "Spinach (Palak)": "ಪಾಲಕ್",
      "Snake Gourd (Chichinda)": "ಪಡವಲಕಾಯಿ", "Ash Gourd (Petha)": "ಬೂದುಗುಂಬಳ", "Cluster Bean (Guar)": "ಗೋರಿಕಾಯಿ", "Taro (Arbi)": "ಕೆಸುವಿನ ಗಡ್ಡೆ",
      Mango: "ಮಾವಿನಹಣ್ಣು", Banana: "ಬಾಳೆಹಣ್ಣು", Papaya: "ಪಪ್ಪಾಯ", Guava: "ಸೀಬೆಹಣ್ಣು", Pomegranate: "ದಾಳಿಂಬೆ", Grapes: "ದ್ರಾಕ್ಷಿ", Apple: "ಸೇಬು", "Dragon Fruit (Kamalam)": "ಡ್ರ್ಯಾಗನ್ ಫ್ರೂಟ್",
      "Turmeric (Haldi)": "ಅರಿಶಿನ", "Ginger (Adrak)": "ಶುಂಠಿ", "Garlic (Lehsun)": "ಬೆಳ್ಳುಳ್ಳಿ", "Coriander (Dhaniya)": "ಕೊತ್ತಂಬರಿ", "Cumin (Jeera)": "ಜೀರಿಗೆ", "Clove (Laung)": "ಲವಂಗ", "Cinnamon (Dalchini)": "ದಾಲ್ಚಿನ್ನಿ", "Saffron (Kesar)": "ಕೇಸರಿ",
      "Cotton (Kapas)": "ಹತ್ತಿ", Sugarcane: "ಕಬ್ಬು", Tea: "ಚಹಾ", Coffee: "ಕಾಫಿ", Coconut: "ತೆಂಗಿನಕಾಯಿ", "Arecanut (Betel Nut)": "ಅಡಿಕೆ",
    },
    communityCategories: { All: "ಎಲ್ಲಾ", "Pest Control": "ಕೀಟ ನಿಯಂತ್ರಣ", Irrigation: "ನೀರಾವರಿ", Soil: "ಮಣ್ಣು", Market: "ಮಾರುಕಟ್ಟೆ", Seeds: "ಬೀಜಗಳು", Fertilizer: "ಗೊಬ್ಬರ", Organic: "ಸಾವಯವ", Equipment: "ಉಪಕರಣ", Weather: "ಹವಾಮಾನ" },
    plantParts: { Leaf: "ಎಲೆ", Stem: "ಕಾಂಡ", Root: "ಬೇರು", Fruit: "ಹಣ್ಣು", "Pod/Seed": "ಕಾಯಿ/ಬೀಜ", Flower: "ಹೂವು", Insect: "ಕೀಟ", "Full Plant": "ಪೂರ್ಣ ಗಿಡ" },
  },
  ml: {
    cropCategories: { All: "എല്ലാം", Cereals: "ധാന്യങ്ങൾ", Pulses: "പയർ വർഗങ്ങൾ", Oilseeds: "എണ്ണക്കുരു", Vegetables: "പച്ചക്കറികൾ", Fruits: "പഴങ്ങൾ", Spices: "സുഗന്ധ വ്യഞ്ജനങ്ങൾ", Commercial: "വാണിജ്യ", Plantation: "തോട്ടവിളകൾ" },
    cropNames: {
      Rice: "അരി (നെല്ല്)", Wheat: "ഗോതമ്പ്", "Maize (Corn)": "ചോളം", Tomato: "തക്കാളി", Potato: "ഉരുളക്കിഴങ്ങ്", Onion: "ഉള്ളി", "Brinjal (Eggplant)": "വഴുതന", "Chilli (Green & Red)": "മുളക്",
      "Foxtail Millet (Kangni)": "തിന", "Kodo Millet": "വരക്", "Barnyard Millet (Sanwa)": "കുതിരവാലി", "Proso Millet (Cheena)": "പനിവരക്",
      "Cowpea (Lobia)": "പയർ", "Moth Bean": "മോത്ത് ബീൻ", "Rajma (Kidney Bean)": "രാജ്മ",
      "Safflower (Kusum)": "കുസുംബ", "Niger Seed (Ramtil)": "നൈജർ വിത്ത്",
      "Snake Gourd (Chichinda)": "പടവലം", "Ash Gourd (Petha)": "കുമ്പളം", "Cluster Bean (Guar)": "കൊത്തമര", "Taro (Arbi)": "ചേമ്പ്", "Tapioca (Cassava)": "കപ്പ",
      Mango: "മാങ്ങ", Banana: "വാഴപ്പഴം", Coconut: "തേങ്ങ", "Turmeric (Haldi)": "മഞ്ഞൾ", "Ginger (Adrak)": "ഇഞ്ചി", "Black Pepper": "കുരുമുളക്", Cardamom: "ഏലക്ക", "Clove (Laung)": "ഗ്രാമ്പൂ", "Cinnamon (Dalchini)": "കറുവപ്പട്ട", "Saffron (Kesar)": "കുങ്കുമം",
      Tea: "ചായ", Coffee: "കാപ്പി", Rubber: "റബ്ബർ", "Arecanut (Betel Nut)": "അടയ്ക്ക", "Dragon Fruit (Kamalam)": "ഡ്രാഗൺ ഫ്രൂട്ട്",
      Cashew: "കശുവണ്ടി", Vanilla: "വാനില", "Betel Vine (Paan)": "വെറ്റില", Cocoa: "കൊക്കോ",
    },
    communityCategories: { All: "എല്ലാം", "Pest Control": "കീട നിയന്ത്രണം", Irrigation: "ജലസേചനം", Soil: "മണ്ണ്", Market: "വിപണി", Seeds: "വിത്തുകൾ", Fertilizer: "വളം", Organic: "ജൈവ", Equipment: "ഉപകരണങ്ങൾ", Weather: "കാലാവസ്ഥ" },
    plantParts: { Leaf: "ഇല", Stem: "തണ്ട്", Root: "വേര്", Fruit: "പഴം", "Pod/Seed": "കായ/വിത്ത്", Flower: "പൂവ്", Insect: "കീടം", "Full Plant": "മുഴുവൻ ചെടി" },
  },
  mr: {
    cropCategories: { All: "सर्व", Cereals: "धान्ये", Pulses: "कडधान्ये", Oilseeds: "तेलबिया", Vegetables: "भाजीपाला", Fruits: "फळे", Spices: "मसाले", Commercial: "व्यावसायिक", Plantation: "बागायती" },
    cropNames: {
      Rice: "भात (तांदूळ)", Wheat: "गहू", "Maize (Corn)": "मका", "Bajra (Pearl Millet)": "बाजरी", "Jowar (Sorghum)": "ज्वारी", "Ragi (Finger Millet)": "नाचणी",
      "Foxtail Millet (Kangni)": "राळा", "Kodo Millet": "कोद्रा", "Barnyard Millet (Sanwa)": "भगर", "Proso Millet (Cheena)": "वरी",
      "Chickpea (Chana)": "हरभरा", "Pigeon Pea (Arhar/Tur)": "तूर डाळ", "Groundnut (Peanut)": "भुईमूग", Soybean: "सोयाबीन", "Mustard (Sarson)": "मोहरी",
      "Cowpea (Lobia)": "चवळी", "Moth Bean": "मटकी", "Rajma (Kidney Bean)": "राजमा",
      "Safflower (Kusum)": "करडई", "Niger Seed (Ramtil)": "खुरसणी",
      Tomato: "टोमॅटो", Potato: "बटाटा", Onion: "कांदा", "Brinjal (Eggplant)": "वांगे", "Chilli (Green & Red)": "मिरची", "Okra (Bhindi/Lady Finger)": "भेंडी",
      "Snake Gourd (Chichinda)": "पडवळ", "Ash Gourd (Petha)": "कोहळा", "Cluster Bean (Guar)": "गवार", "Taro (Arbi)": "अळू",
      Mango: "आंबा", Banana: "केळे", "Turmeric (Haldi)": "हळद", "Ginger (Adrak)": "आले", "Garlic (Lehsun)": "लसूण", "Clove (Laung)": "लवंग", "Cinnamon (Dalchini)": "दालचिनी", "Saffron (Kesar)": "केशर",
      "Cotton (Kapas)": "कापूस", Sugarcane: "ऊस", Tea: "चहा", Coffee: "कॉफी", Coconut: "नारळ", "Arecanut (Betel Nut)": "सुपारी", "Dragon Fruit (Kamalam)": "ड्रॅगन फ्रूट",
    },
    communityCategories: { All: "सर्व", "Pest Control": "कीड नियंत्रण", Irrigation: "सिंचन", Soil: "माती", Market: "बाजार", Seeds: "बियाणे", Fertilizer: "खत", Organic: "सेंद्रिय", Equipment: "साधने", Weather: "हवामान" },
    plantParts: { Leaf: "पान", Stem: "खोड", Root: "मूळ", Fruit: "फळ", "Pod/Seed": "शेंग/बी", Flower: "फूल", Insect: "कीड", "Full Plant": "संपूर्ण झाड" },
  },
  bn: {
    cropCategories: { All: "সব", Cereals: "শস্য", Pulses: "ডাল", Oilseeds: "তৈলবীজ", Vegetables: "শাকসবজি", Fruits: "ফল", Spices: "মশলা", Commercial: "বাণিজ্যিক", Plantation: "বাগান" },
    cropNames: {
      Rice: "ধান (চাল)", Wheat: "গম", "Maize (Corn)": "ভুট্টা", Tomato: "টমেটো", Potato: "আলু", Onion: "পেঁয়াজ", "Brinjal (Eggplant)": "বেগুন",
      "Foxtail Millet (Kangni)": "কাউন", "Kodo Millet": "কোদো", "Barnyard Millet (Sanwa)": "শ্যামা", "Proso Millet (Cheena)": "চিনা",
      "Cowpea (Lobia)": "বরবটি", "Moth Bean": "মোঠ ডাল", "Rajma (Kidney Bean)": "রাজমা",
      "Safflower (Kusum)": "কুসুম", "Niger Seed (Ramtil)": "রামতিল",
      "Snake Gourd (Chichinda)": "চিচিঙ্গা", "Ash Gourd (Petha)": "চালকুমড়ো", "Cluster Bean (Guar)": "গুয়ার", "Taro (Arbi)": "কচু",
      Mango: "আম", Banana: "কলা", "Turmeric (Haldi)": "হলুদ", "Ginger (Adrak)": "আদা", "Clove (Laung)": "লবঙ্গ", "Cinnamon (Dalchini)": "দারচিনি", "Saffron (Kesar)": "জাফরান",
      Jute: "পাট", Tea: "চা", Sugarcane: "আখ", "Arecanut (Betel Nut)": "সুপারি", "Dragon Fruit (Kamalam)": "ড্রাগন ফল",
    },
    communityCategories: { All: "সব", "Pest Control": "কীট নিয়ন্ত্রণ", Irrigation: "সেচ", Soil: "মাটি", Market: "বাজার", Seeds: "বীজ", Fertilizer: "সার", Organic: "জৈব", Equipment: "যন্ত্রপাতি", Weather: "আবহাওয়া" },
    plantParts: { Leaf: "পাতা", Stem: "কাণ্ড", Root: "শিকড়", Fruit: "ফল", "Pod/Seed": "শুঁটি/বীজ", Flower: "ফুল", Insect: "পোকা", "Full Plant": "সম্পূর্ণ গাছ" },
  },
  gu: {
    cropCategories: { All: "બધા", Cereals: "અનાજ", Pulses: "કઠોળ", Oilseeds: "તેલીબિયાં", Vegetables: "શાકભાજી", Fruits: "ફળ", Spices: "મસાલા", Commercial: "વ્યાપારી", Plantation: "વાવેતર" },
    cropNames: {
      Rice: "ચોખા (ડાંગર)", Wheat: "ઘઉં", "Maize (Corn)": "મકાઈ", "Bajra (Pearl Millet)": "બાજરી", "Groundnut (Peanut)": "મગફળી",
      "Foxtail Millet (Kangni)": "કાંગ", "Kodo Millet": "કોદરા", "Barnyard Millet (Sanwa)": "સામો", "Proso Millet (Cheena)": "ચીનો",
      "Cowpea (Lobia)": "ચોળા", "Moth Bean": "મઠ", "Rajma (Kidney Bean)": "રાજમા",
      "Safflower (Kusum)": "કુસુમ", "Niger Seed (Ramtil)": "રામતલ",
      Tomato: "ટામેટા", Potato: "બટાટા", Onion: "ડુંગળી", "Cotton (Kapas)": "કપાસ", Sugarcane: "શેરડી",
      "Snake Gourd (Chichinda)": "પડવળ", "Ash Gourd (Petha)": "કોળું", "Cluster Bean (Guar)": "ગુવાર", "Taro (Arbi)": "અળવી",
      Mango: "કેરી", Banana: "કેળા", "Turmeric (Haldi)": "હળદર", "Ginger (Adrak)": "આદું", Coconut: "નાળિયેર", "Clove (Laung)": "લવિંગ", "Cinnamon (Dalchini)": "તજ", "Saffron (Kesar)": "કેસર",
      "Arecanut (Betel Nut)": "સોપારી", "Dragon Fruit (Kamalam)": "ડ્રેગન ફ્રૂટ",
    },
    communityCategories: { All: "બધા", "Pest Control": "જીવાત નિયંત્રણ", Irrigation: "સિંચાઈ", Soil: "માટી", Market: "બજાર", Seeds: "બીજ", Fertilizer: "ખાતર", Organic: "જૈવિક", Equipment: "સાધનો", Weather: "હવામાન" },
    plantParts: { Leaf: "પાન", Stem: "દાંડી", Root: "મૂળ", Fruit: "ફળ", "Pod/Seed": "શીંગ/બીજ", Flower: "ફૂલ", Insect: "જીવાત", "Full Plant": "આખો છોડ" },
  },
  pa: {
    cropCategories: { All: "ਸਾਰੇ", Cereals: "ਅਨਾਜ", Pulses: "ਦਾਲਾਂ", Oilseeds: "ਤੇਲ ਬੀਜ", Vegetables: "ਸਬਜ਼ੀਆਂ", Fruits: "ਫਲ", Spices: "ਮਸਾਲੇ", Commercial: "ਵਪਾਰਕ", Plantation: "ਬਾਗਬਾਨੀ" },
    cropNames: {
      Rice: "ਚਾਵਲ (ਝੋਨਾ)", Wheat: "ਕਣਕ", "Maize (Corn)": "ਮੱਕੀ", "Bajra (Pearl Millet)": "ਬਾਜਰਾ", "Chickpea (Chana)": "ਛੋਲੇ", "Mustard (Sarson)": "ਸਰ੍ਹੋਂ",
      "Foxtail Millet (Kangni)": "ਕੰਗਣੀ", "Kodo Millet": "ਕੋਦੋ", "Barnyard Millet (Sanwa)": "ਸਾਂਵਾ", "Proso Millet (Cheena)": "ਚੀਨਾ",
      "Cowpea (Lobia)": "ਲੋਬੀਆ", "Moth Bean": "ਮੋਠ", "Rajma (Kidney Bean)": "ਰਾਜਮਾਂਹ",
      Tomato: "ਟਮਾਟਰ", Potato: "ਆਲੂ", Onion: "ਪਿਆਜ਼", "Cotton (Kapas)": "ਕਪਾਹ", Sugarcane: "ਗੰਨਾ",
      Mango: "ਅੰਬ", Banana: "ਕੇਲਾ", "Clove (Laung)": "ਲੌਂਗ", "Cinnamon (Dalchini)": "ਦਾਲਚੀਨੀ", "Saffron (Kesar)": "ਕੇਸਰ",
      "Arecanut (Betel Nut)": "ਸੁਪਾਰੀ", "Dragon Fruit (Kamalam)": "ਡ੍ਰੈਗਨ ਫਰੂਟ",
    },
    communityCategories: { All: "ਸਾਰੇ", "Pest Control": "ਕੀੜੇ ਕੰਟਰੋਲ", Irrigation: "ਸਿੰਚਾਈ", Soil: "ਮਿੱਟੀ", Market: "ਬਜ਼ਾਰ", Seeds: "ਬੀਜ", Fertilizer: "ਖਾਦ", Organic: "ਜੈਵਿਕ", Equipment: "ਸਾਜ਼-ਸਾਮਾਨ", Weather: "ਮੌਸਮ" },
    plantParts: { Leaf: "ਪੱਤਾ", Stem: "ਤਣਾ", Root: "ਜੜ੍ਹ", Fruit: "ਫਲ", "Pod/Seed": "ਫਲੀ/ਬੀਜ", Flower: "ਫੁੱਲ", Insect: "ਕੀੜਾ", "Full Plant": "ਪੂਰਾ ਪੌਦਾ" },
  },
};

// Short name aliases used in mandi rates and recommendations
// Maps short commodity names to their full crop library names
const shortNameAliases: Record<string, string> = {
  Chilli: "Chilli (Green & Red)", Cotton: "Cotton (Kapas)", Groundnut: "Groundnut (Peanut)",
  Turmeric: "Turmeric (Haldi)", Ginger: "Ginger (Adrak)", Garlic: "Garlic (Lehsun)",
  Maize: "Maize (Corn)", Jowar: "Jowar (Sorghum)", Bajra: "Bajra (Pearl Millet)",
  Ragi: "Ragi (Finger Millet)", Cumin: "Cumin (Jeera)", Coriander: "Coriander (Dhaniya)",
  Mustard: "Mustard (Sarson)", Sesame: "Sesame (Til)", Chickpea: "Chickpea (Chana)",
  "Pigeon Pea": "Pigeon Pea (Arhar/Tur)", Lentil: "Lentil (Masoor)", Moong: "Moong (Green Gram)",
  Urad: "Urad (Black Gram)", Okra: "Okra (Bhindi/Lady Finger)", Brinjal: "Brinjal (Eggplant)",
  Arecanut: "Arecanut (Betel Nut)", Fenugreek: "Fenugreek (Methi)", Saffron: "Saffron (Kesar)",
  Fennel: "Fennel (Saunf)", Clove: "Clove (Laung)", Cinnamon: "Cinnamon (Dalchini)",
  Pepper: "Black Pepper", "Black Pepper": "Black Pepper",
  Sapota: "Sapota (Chikoo)", Amla: "Amla (Indian Gooseberry)", Cowpea: "Cowpea (Lobia)",
  Safflower: "Safflower (Kusum)", Spinach: "Spinach (Palak)", Capsicum: "Capsicum (Bell Pepper)",
  Drumstick: "Drumstick (Moringa)", "Bottle Gourd": "Bottle Gourd (Lauki)",
  "Bitter Gourd": "Bitter Gourd (Karela)", "Ridge Gourd": "Ridge Gourd (Turai)",
  Linseed: "Linseed (Flax)", "Horse Gram": "Horse Gram (Kulthi)", "Field Pea": "Field Pea (Matar)",
  Rajma: "Rajma (Kidney Bean)", "Niger Seed": "Niger Seed (Ramtil)",
  // Mandi-specific
  Jaggery: "Jaggery", Vegetables: "Vegetables", Pulses: "Pulses",
  "Large Cardamom": "Large Cardamom", Masoor: "Lentil (Masoor)", Arhar: "Pigeon Pea (Arhar/Tur)",
};

// Additional short-name translations for mandi/recommendations
const shortNameTranslations: Record<string, Record<string, string>> = {
  hi: { Jaggery: "गुड़", Vegetables: "सब्जियाँ", Pulses: "दालें", "Large Cardamom": "बड़ी इलायची", "Coconut & Arecanut": "नारियल और सुपारी", "Chilli & Turmeric": "मिर्च और हल्दी", "Off-season Vegetables": "ऑफ-सीज़न सब्जियाँ", "Cumin & Coriander": "जीरा और धनिया", "Wheat (Rabi) + Rice (Kharif)": "गेहूं (रबी) + चावल (खरीफ)", "Turmeric & Ginger": "हल्दी और अदरक", "Moong (Green Gram)": "मूंग" },
  te: { Jaggery: "బెల్లం", Vegetables: "కూరగాయలు", Pulses: "పప్పులు", "Large Cardamom": "పెద్ద ఏలకులు", "Coconut & Arecanut": "కొబ్బరి & పోక", "Chilli & Turmeric": "మిరప & పసుపు", "Off-season Vegetables": "ఆఫ్-సీజన్ కూరగాయలు", "Cumin & Coriander": "జీలకర్ర & ధనియాలు", "Wheat (Rabi) + Rice (Kharif)": "గోధుమ (రబీ) + వరి (ఖరీఫ్)", "Turmeric & Ginger": "పసుపు & అల్లం", "Moong (Green Gram)": "పెసర" },
  ta: { Jaggery: "வெல்லம்", Vegetables: "காய்கறிகள்", Pulses: "பருப்புகள்", "Large Cardamom": "பெரிய ஏலக்காய்", "Coconut & Arecanut": "தேங்காய் & பாக்கு", "Chilli & Turmeric": "மிளகாய் & மஞ்சள்", "Off-season Vegetables": "அசீசன் காய்கறிகள்", "Cumin & Coriander": "சீரகம் & கொத்தமல்லி", "Wheat (Rabi) + Rice (Kharif)": "கோதுமை (ரபி) + அரிசி (காரிஃப்)", "Turmeric & Ginger": "மஞ்சள் & இஞ்சி", "Moong (Green Gram)": "பாசிப்பயறு" },
  kn: { Jaggery: "ಬೆಲ್ಲ", Vegetables: "ತರಕಾರಿಗಳು", Pulses: "ಬೇಳೆಕಾಳುಗಳು", "Large Cardamom": "ದೊಡ್ಡ ಏಲಕ್ಕಿ", "Coconut & Arecanut": "ತೆಂಗಿನಕಾಯಿ & ಅಡಿಕೆ", "Chilli & Turmeric": "ಮೆಣಸಿನಕಾಯಿ & ಅರಿಶಿನ", "Off-season Vegetables": "ಆಫ್-ಸೀಸನ್ ತರಕಾರಿ", "Cumin & Coriander": "ಜೀರಿಗೆ & ಕೊತ್ತಂಬರಿ", "Moong (Green Gram)": "ಹೆಸರು" },
  ml: { Jaggery: "ശർക്കര", Vegetables: "പച്ചക്കറികൾ", Pulses: "പയറു വർഗങ്ങൾ", "Large Cardamom": "വലിയ ഏലക്ക", "Coconut & Arecanut": "തേങ്ങ & അടയ്ക്ക", "Moong (Green Gram)": "ചെറുപയർ" },
  mr: { Jaggery: "गूळ", Vegetables: "भाजीपाला", Pulses: "कडधान्ये", "Large Cardamom": "मोठी वेलदोडा", "Moong (Green Gram)": "मूग" },
  bn: { Jaggery: "গুড়", Vegetables: "শাকসবজি", Pulses: "ডাল", "Large Cardamom": "বড় এলাচ", "Moong (Green Gram)": "মুগ" },
  gu: { Jaggery: "ગોળ", Vegetables: "શાકભાજી", Pulses: "કઠોળ", "Moong (Green Gram)": "મગ" },
  pa: { Jaggery: "ਗੁੜ", Vegetables: "ਸਬਜ਼ੀਆਂ", Pulses: "ਦਾਲਾਂ", "Moong (Green Gram)": "ਮੂੰਗ" },
};

// State name translations
const stateTranslations: Record<string, Record<string, string>> = {
  hi: { "Andhra Pradesh": "आंध्र प्रदेश", "Arunachal Pradesh": "अरुणाचल प्रदेश", "Assam": "असम", "Bihar": "बिहार", "Chhattisgarh": "छत्तीसगढ़", "Goa": "गोवा", "Gujarat": "गुजरात", "Haryana": "हरियाणा", "Himachal Pradesh": "हिमाचल प्रदेश", "Jharkhand": "झारखंड", "Karnataka": "कर्नाटक", "Kerala": "केरल", "Madhya Pradesh": "मध्य प्रदेश", "Maharashtra": "महाराष्ट्र", "Manipur": "मणिपुर", "Meghalaya": "मेघालय", "Mizoram": "मिज़ोरम", "Nagaland": "नागालैंड", "Odisha": "ओडिशा", "Punjab": "पंजाब", "Rajasthan": "राजस्थान", "Sikkim": "सिक्किम", "Tamil Nadu": "तमिल नाडु", "Telangana": "तेलंगाना", "Tripura": "त्रिपुरा", "Uttar Pradesh": "उत्तर प्रदेश", "Uttarakhand": "उत्तराखंड", "West Bengal": "पश्चिम बंगाल", "Delhi": "दिल्ली", "Jammu & Kashmir": "जम्मू और कश्मीर" },
  te: { "Andhra Pradesh": "ఆంధ్ర ప్రదేశ్", "Arunachal Pradesh": "అరుణాచల్ ప్రదేశ్", "Assam": "అస్సాం", "Bihar": "బీహార్", "Chhattisgarh": "ఛత్తీస్‌గఢ్", "Goa": "గోవా", "Gujarat": "గుజరాత్", "Haryana": "హర్యానా", "Himachal Pradesh": "హిమాచల్ ప్రదేశ్", "Jharkhand": "జార్ఖండ్", "Karnataka": "కర్ణాటక", "Kerala": "కేరళ", "Madhya Pradesh": "మధ్య ప్రదేశ్", "Maharashtra": "మహారాష్ట్ర", "Manipur": "మణిపూర్", "Meghalaya": "మేఘాలయ", "Mizoram": "మిజోరం", "Nagaland": "నాగాలాండ్", "Odisha": "ఒడిశా", "Punjab": "పంజాబ్", "Rajasthan": "రాజస్థాన్", "Sikkim": "సిక్కిం", "Tamil Nadu": "తమిళనాడు", "Telangana": "తెలంగాణ", "Tripura": "త్రిపుర", "Uttar Pradesh": "ఉత్తర ప్రదేశ్", "Uttarakhand": "ఉత్తరాఖండ్", "West Bengal": "పశ్చిమ బెంగాల్", "Delhi": "ఢిల్లీ", "Jammu & Kashmir": "జమ్మూ & కాశ్మీర్" },
  ta: { "Andhra Pradesh": "ஆந்திர பிரதேசம்", "Arunachal Pradesh": "அருணாசல பிரதேசம்", "Assam": "அசாம்", "Bihar": "பீகார்", "Chhattisgarh": "சத்தீஸ்கர்", "Goa": "கோவா", "Gujarat": "குஜராத்", "Haryana": "ஹரியானா", "Himachal Pradesh": "இமாசல பிரதேசம்", "Jharkhand": "ஜார்கண்ட்", "Karnataka": "கர்நாடகா", "Kerala": "கேரளா", "Madhya Pradesh": "மத்திய பிரதேசம்", "Maharashtra": "மகாராஷ்டிரா", "Manipur": "மணிப்பூர்", "Meghalaya": "மேகாலயா", "Mizoram": "மிசோரம்", "Nagaland": "நாகாலாந்து", "Odisha": "ஒடிசா", "Punjab": "பஞ்சாப்", "Rajasthan": "ராஜஸ்தான்", "Sikkim": "சிக்கிம்", "Tamil Nadu": "தமிழ்நாடு", "Telangana": "தெலங்கானா", "Tripura": "திரிபுரா", "Uttar Pradesh": "உத்தர பிரதேசம்", "Uttarakhand": "உத்தரகண்ட்", "West Bengal": "மேற்கு வங்காளம்", "Delhi": "டெல்லி", "Jammu & Kashmir": "ஜம்மு & காஷ்மீர்" },
  kn: { "Andhra Pradesh": "ಆಂಧ್ರ ಪ್ರದೇಶ", "Arunachal Pradesh": "ಅರುಣಾಚಲ ಪ್ರದೇಶ", "Assam": "ಅಸ್ಸಾಂ", "Bihar": "ಬಿಹಾರ", "Chhattisgarh": "ಛತ್ತೀಸ್‌ಗಢ", "Goa": "ಗೋವಾ", "Gujarat": "ಗುಜರಾತ್", "Haryana": "ಹರಿಯಾಣ", "Himachal Pradesh": "ಹಿಮಾಚಲ ಪ್ರದೇಶ", "Jharkhand": "ಜಾರ್ಖಂಡ್", "Karnataka": "ಕರ್ನಾಟಕ", "Kerala": "ಕೇರಳ", "Madhya Pradesh": "ಮಧ್ಯ ಪ್ರದೇಶ", "Maharashtra": "ಮಹಾರಾಷ್ಟ್ರ", "Manipur": "ಮಣಿಪುರ", "Meghalaya": "ಮೇಘಾಲಯ", "Mizoram": "ಮಿಜೋರಾಂ", "Nagaland": "ನಾಗಾಲ್ಯಾಂಡ್", "Odisha": "ಒಡಿಶಾ", "Punjab": "ಪಂಜಾಬ್", "Rajasthan": "ರಾಜಸ್ಥಾನ", "Sikkim": "ಸಿಕ್ಕಿಂ", "Tamil Nadu": "ತಮಿಳುನಾಡು", "Telangana": "ತೆಲಂಗಾಣ", "Tripura": "ತ್ರಿಪುರ", "Uttar Pradesh": "ಉತ್ತರ ಪ್ರದೇಶ", "Uttarakhand": "ಉತ್ತರಾಖಂಡ", "West Bengal": "ಪಶ್ಚಿಮ ಬಂಗಾಳ", "Delhi": "ದೆಹಲಿ", "Jammu & Kashmir": "ಜಮ್ಮು & ಕಾಶ್ಮೀರ" },
  ml: { "Andhra Pradesh": "ആന്ധ്രപ്രദേശ്", "Arunachal Pradesh": "അരുണാചൽ പ്രദേശ്", "Assam": "ആസാം", "Bihar": "ബീഹാർ", "Chhattisgarh": "ഛത്തീസ്ഗഡ്", "Goa": "ഗോവ", "Gujarat": "ഗുജറാത്ത്", "Haryana": "ഹരിയാണ", "Himachal Pradesh": "ഹിമാചൽ പ്രദേശ്", "Jharkhand": "ജാർഖണ്ഡ്", "Karnataka": "കർണാടക", "Kerala": "കേരളം", "Madhya Pradesh": "മധ്യപ്രദേശ്", "Maharashtra": "മഹാരാഷ്ട്ര", "Tamil Nadu": "തമിഴ്‌നാട്", "Telangana": "തെലങ്കാന", "Uttar Pradesh": "ഉത്തർ പ്രദേശ്", "West Bengal": "പശ്ചിമ ബംഗാൾ", "Delhi": "ഡൽഹി", "Jammu & Kashmir": "ജമ്മു & കശ്മീർ" },
  mr: { "Andhra Pradesh": "आंध्र प्रदेश", "Arunachal Pradesh": "अरुणाचल प्रदेश", "Assam": "आसाम", "Bihar": "बिहार", "Chhattisgarh": "छत्तीसगड", "Goa": "गोवा", "Gujarat": "गुजरात", "Haryana": "हरियाणा", "Himachal Pradesh": "हिमाचल प्रदेश", "Jharkhand": "झारखंड", "Karnataka": "कर्नाटक", "Kerala": "केरळ", "Madhya Pradesh": "मध्य प्रदेश", "Maharashtra": "महाराष्ट्र", "Odisha": "ओडिशा", "Punjab": "पंजाब", "Rajasthan": "राजस्थान", "Tamil Nadu": "तमिळनाडू", "Telangana": "तेलंगणा", "Uttar Pradesh": "उत्तर प्रदेश", "West Bengal": "पश्चिम बंगाल", "Delhi": "दिल्ली", "Jammu & Kashmir": "जम्मू आणि काश्मीर" },
  bn: { "Andhra Pradesh": "অন্ধ্র প্রদেশ", "Assam": "আসাম", "Bihar": "বিহার", "Gujarat": "গুজরাট", "Jharkhand": "ঝাড়খণ্ড", "Karnataka": "কর্ণাটক", "Kerala": "কেরল", "Madhya Pradesh": "মধ্যপ্রদেশ", "Maharashtra": "মহারাষ্ট্র", "Odisha": "ওড়িশা", "Punjab": "পাঞ্জাব", "Rajasthan": "রাজস্থান", "Tamil Nadu": "তামিলনাড়ু", "Telangana": "তেলেঙ্গানা", "Uttar Pradesh": "উত্তর প্রদেশ", "West Bengal": "পশ্চিমবঙ্গ", "Delhi": "দিল্লি", "Jammu & Kashmir": "জম্মু ও কাশ্মীর" },
  gu: { "Andhra Pradesh": "આંધ્ર પ્રદેશ", "Bihar": "બિહાર", "Chhattisgarh": "છત્તીસગઢ", "Goa": "ગોવા", "Gujarat": "ગુજરાત", "Haryana": "હરિયાણા", "Jharkhand": "ઝારખંડ", "Karnataka": "કર્ણાટક", "Kerala": "કેરળ", "Madhya Pradesh": "મધ્ય પ્રદેશ", "Maharashtra": "મહારાષ્ટ્ર", "Punjab": "પંજાબ", "Rajasthan": "રાજસ્થાન", "Tamil Nadu": "તમિલનાડુ", "Telangana": "તેલંગાણા", "Uttar Pradesh": "ઉત્તર પ્રદેશ", "West Bengal": "પશ્ચિમ બંગાળ", "Delhi": "દિલ્લી" },
  pa: { "Andhra Pradesh": "ਆਂਧਰਾ ਪ੍ਰਦੇਸ਼", "Bihar": "ਬਿਹਾਰ", "Gujarat": "ਗੁਜਰਾਤ", "Haryana": "ਹਰਿਆਣਾ", "Himachal Pradesh": "ਹਿਮਾਚਲ ਪ੍ਰਦੇਸ਼", "Jharkhand": "ਝਾਰਖੰਡ", "Karnataka": "ਕਰਨਾਟਕ", "Kerala": "ਕੇਰਲ", "Madhya Pradesh": "ਮੱਧ ਪ੍ਰਦੇਸ਼", "Maharashtra": "ਮਹਾਰਾਸ਼ਟਰ", "Punjab": "ਪੰਜਾਬ", "Rajasthan": "ਰਾਜਸਥਾਨ", "Tamil Nadu": "ਤਮਿਲਨਾਡੂ", "Telangana": "ਤੇਲੰਗਾਨਾ", "Uttar Pradesh": "ਉੱਤਰ ਪ੍ਰਦੇਸ਼", "West Bengal": "ਪੱਛਮੀ ਬੰਗਾਲ", "Delhi": "ਦਿੱਲੀ", "Jammu & Kashmir": "ਜੰਮੂ ਤੇ ਕਸ਼ਮੀਰ" },
};

// District & market name translations (place names used across India)
const placeTranslations: Record<string, Record<string, string>> = {
  te: {
    // AP
    "Guntur": "గుంటూరు", "Kurnool": "కర్నూలు", "Krishna": "కృష్ణా", "Anantapur": "అనంతపురం", "West Godavari": "పశ్చిమ గోదావరి", "East Godavari": "తూర్పు గోదావరి", "Chittoor": "చిత్తూరు", "Prakasam": "ప్రకాశం", "Srikakulam": "శ్రీకాకుళం", "Vizianagaram": "విజయనగరం", "Nellore": "నెల్లూరు", "Kadapa": "కడప", "Visakhapatnam": "విశాఖపట్నం",
    "Vijayawada": "విజయవాడ", "Eluru": "ఏలూరు", "Kakinada": "కాకినాడ", "Madanapalle": "మదనపల్లి", "Ongole": "ఒంగోలు", "Tirupati": "తిరుపతి", "Narasaraopet": "నరసరావుపేట", "Machilipatnam": "మచిలీపట్నం",
    // Telangana
    "Hyderabad": "హైదరాబాద్", "Nizamabad": "నిజామాబాద్", "Warangal": "వరంగల్", "Karimnagar": "కరీంనగర్", "Khammam": "ఖమ్మం", "Adilabad": "ఆదిలాబాద్", "Nalgonda": "నల్గొండ", "Medak": "మెదక్", "Mahbubnagar": "మహబూబ్‌నగర్", "Suryapet": "సూర్యాపేట", "Siddipet": "సిద్దిపేట",
    "Bowenpally": "బోయిన్‌పల్లి", "Sangareddy": "సంగారెడ్డి",
    // Major cities in other states
    "New Delhi": "న్యూ ఢిల్లీ", "Azadpur": "ఆజాద్‌పూర్", "North Goa": "ఉత్తర గోవా", "South Goa": "దక్షిణ గోవా",
  },
  hi: {
    // AP
    "Guntur": "गुंटूर", "Kurnool": "कुरनूल", "Krishna": "कृष्णा", "Anantapur": "अनंतपुर", "West Godavari": "पश्चिम गोदावरी", "East Godavari": "पूर्वी गोदावरी", "Chittoor": "चित्तूर", "Prakasam": "प्रकाशम", "Srikakulam": "श्रीकाकुलम", "Vizianagaram": "विजयनगरम", "Nellore": "नेल्लोर", "Kadapa": "कडप्पा", "Visakhapatnam": "विशाखापत्तनम",
    "Vijayawada": "विजयवाड़ा", "Eluru": "एलुरु", "Kakinada": "काकीनाडा", "Madanapalle": "मदनपल्ली", "Ongole": "ओंगोल", "Tirupati": "तिरुपति", "Narasaraopet": "नरसरावपेट", "Machilipatnam": "मछलीपट्टणम",
    // Telangana
    "Hyderabad": "हैदराबाद", "Nizamabad": "निजामाबाद", "Warangal": "वारंगल", "Karimnagar": "करीमनगर", "Khammam": "खम्मम", "Adilabad": "आदिलाबाद", "Nalgonda": "नालगोंडा", "Medak": "मेदक", "Mahbubnagar": "महबूबनगर", "Suryapet": "सूर्यापेट", "Siddipet": "सिद्दीपेट",
    "Bowenpally": "बोवेनपल्ली", "Sangareddy": "संगारेड्डी",
    // TN
    "Coimbatore": "कोयम्बत्तूर", "Salem": "सलेम", "Madurai": "मदुरै", "Thanjavur": "तंजावुर", "Dindigul": "डिंडीगुल", "Erode": "इरोड", "Tirunelveli": "तिरुनेलवेली", "Theni": "तेनी", "Villupuram": "विल्लुपुरम", "Tirupur": "तिरुपुर", "Vellore": "वेल्लोर", "Kanyakumari": "कन्याकुमारी", "Nagercoil": "नागरकोइल", "Nagapattinam": "नागपट्टिनम", "Cuddalore": "कुड्डालोर",
    // Karnataka
    "Bengaluru": "बेंगलुरु", "Hassan": "हासन", "Dharwad": "धारवाड़", "Belgaum": "बेलगाम", "Shimoga": "शिमोगा", "Mysuru": "मैसूरु", "Raichur": "रायचूर", "Davangere": "दावणगेरे", "Chikmagalur": "चिकमंगलूर", "Kodagu": "कोडगु", "Tumkur": "तुमकूर", "Mandya": "मांड्या", "Gulbarga": "गुलबर्गा", "Bellary": "बेल्लारी", "Udupi": "उडुपी", "Bidar": "बीदर",
    "Yeshwanthpur": "यशवंतपुर", "Hubli": "हुबली", "Madikeri": "मदिकेरी",
    // Maharashtra
    "Nashik": "नासिक", "Pune": "पुणे", "Nagpur": "नागपुर", "Solapur": "सोलापुर", "Sangli": "सांगली", "Kolhapur": "कोल्हापुर", "Ahmednagar": "अहमदनगर", "Jalgaon": "जळगाव", "Aurangabad": "औरंगाबाद", "Satara": "सातारा", "Yavatmal": "यवतमाल", "Ratnagiri": "रत्नागिरी", "Latur": "लातूर", "Wardha": "वर्धा", "Dhule": "धुळे",
    "Lasalgaon": "लासलगाव",
    // Gujarat
    "Rajkot": "राजकोट", "Junagadh": "जूनागढ़", "Unjha": "ऊंझा", "Ahmedabad": "अहमदाबाद", "Bhavnagar": "भावनगर", "Surat": "सूरत", "Vadodara": "वडोदरा", "Amreli": "अमरेली", "Banaskantha": "बनासकांठा", "Kutch": "कच्छ", "Mehsana": "मेहसाणा", "Morbi": "मोरबी", "Sabarkantha": "साबरकांठा",
    "Deesa": "डीसा", "Bhuj": "भुज", "Himmatnagar": "हिम्मतनगर",
    // Rajasthan
    "Jodhpur": "जोधपुर", "Kota": "कोटा", "Alwar": "अलवर", "Jaipur": "जयपुर", "Nagaur": "नागौर", "Barmer": "बाड़मेर", "Udaipur": "उदयपुर", "Bikaner": "बीकानेर", "Chittorgarh": "चित्तौड़गढ़", "Sikar": "सीकर", "Bundi": "बूंदी", "Tonk": "टोंक", "Jhalawar": "झालावाड़",
    // MP
    "Indore": "इंदौर", "Bhopal": "भोपाल", "Ujjain": "उज्जैन", "Neemuch": "नीमच", "Jabalpur": "जबलपुर", "Gwalior": "ग्वालियर", "Ratlam": "रतलाम", "Dewas": "देवास", "Chhindwara": "छिंदवाड़ा", "Sagar": "सागर", "Mandsaur": "मंदसौर", "Hoshangabad": "होशंगाबाद",
    // UP
    "Agra": "आगरा", "Lucknow": "लखनऊ", "Meerut": "मेरठ", "Varanasi": "वाराणसी", "Allahabad": "इलाहाबाद", "Kanpur": "कानपुर", "Bareilly": "बरेली", "Gorakhpur": "गोरखपुर", "Aligarh": "अलीगढ़", "Mathura": "मथुरा", "Jhansi": "झांसी", "Farrukhabad": "फर्रुखाबाद", "Muzaffarnagar": "मुजफ्फरनगर", "Firozabad": "फिरोजाबाद", "Moradabad": "मुरादाबाद", "Sultanpur": "सुल्तानपुर",
    "Prayagraj": "प्रयागराज",
    // Punjab
    "Ludhiana": "लुधियाना", "Amritsar": "अमृतसर", "Bathinda": "बठिंडा", "Abohar": "अबोहर", "Patiala": "पटियाला", "Jalandhar": "जालंधर", "Sangrur": "संगरूर", "Mansa": "मानसा", "Muktsar": "मुक्तसर", "Fazilka": "फाजिल्का",
    // Haryana
    "Karnal": "करनाल", "Hisar": "हिसार", "Sonipat": "सोनीपत", "Sirsa": "सिरसा", "Panipat": "पानीपत", "Ambala": "अम्बाला", "Jind": "जींद", "Rohtak": "रोहतक", "Rewari": "रेवाड़ी", "Kurukshetra": "कुरुक्षेत्र",
    // WB
    "Kolkata": "कोलकाता", "Hooghly": "हुगली", "Murshidabad": "मुर्शिदाबाद", "Bardhaman": "बर्धमान", "Malda": "मालदा", "Nadia": "नदिया", "Midnapore": "मिदनापुर", "Siliguri": "सिलीगुड़ी", "Krishnanagar": "कृष्णनगर",
    // Bihar
    "Patna": "पटना", "Muzaffarpur": "मुजफ्फरपुर", "Nalanda": "नालंदा", "Bhagalpur": "भागलपुर", "Gaya": "गया", "Darbhanga": "दरभंगा", "Samastipur": "समस्तीपुर", "Vaishali": "वैशाली", "Begusarai": "बेगूसराय", "Hajipur": "हाजीपुर",
    // Others
    "Bhubaneswar": "भुवनेश्वर", "Sambalpur": "संबलपुर", "Cuttack": "कटक", "Berhampur": "बेरहमपुर", "Koraput": "कोरापुट", "Balasore": "बालासोर",
    "Ernakulam": "एर्णाकुलम", "Kochi": "कोच्चि", "Wayanad": "वायनाड", "Idukki": "इडुक्की", "Thrissur": "त्रिशूर", "Palakkad": "पालक्काड", "Kozhikode": "कोझिकोड", "Kollam": "कोल्लम", "Kannur": "कन्नूर", "Kottayam": "कोट्टायम",
    "Raipur": "रायपुर", "Durg": "दुर्ग", "Bilaspur": "बिलासपुर", "Rajnandgaon": "राजनांदगांव", "Korba": "कोरबा",
    "Ranchi": "रांची", "Dumka": "दुमका", "Hazaribagh": "हजारीबाग", "Deoghar": "देवघर", "Dhanbad": "धनबाद",
    "Guwahati": "गुवाहाटी", "Jorhat": "जोरहाट", "Nagaon": "नगांव", "Dibrugarh": "डिब्रूगढ़", "Silchar": "सिलचर", "Tinsukia": "तिनसुकिया",
    "Shimla": "शिमला", "Kullu": "कुल्लू", "Mandi": "मंडी", "Solan": "सोलन", "Kinnaur": "किन्नौर",
    "Dehradun": "देहरादून", "Haldwani": "हल्द्वानी", "Haridwar": "हरिद्वार", "Udham Singh Nagar": "उधम सिंह नगर", "Rudrapur": "रुद्रपुर",
    "North Goa": "उत्तरी गोवा", "South Goa": "दक्षिणी गोवा", "Mapusa": "मापुसा", "Margao": "मडगांव",
    "New Delhi": "नई दिल्ली", "Azadpur": "आज़ादपुर", "Okhla": "ओखला", "Ghazipur": "गाजीपुर",
    "Srinagar": "श्रीनगर", "Shopian": "शोपियां", "Anantnag": "अनंतनाग", "Baramulla": "बारामूला", "Jammu": "जम्मू", "Pulwama": "पुलवामा",
    "Imphal": "इम्फाल", "Bishnupur": "बिष्णुपुर", "Shillong": "शिलांग", "Jaintia Hills": "जयंतिया हिल्स", "Jowai": "जोवाई",
    "Agartala": "अगरतला", "Dimapur": "दीमापुर", "Kohima": "कोहिमा", "Aizawl": "आइज़ोल", "Lunglei": "लुंगलेई",
    "Itanagar": "ईटानगर", "Pasighat": "पासीघाट", "Gangtok": "गंगटोक", "Namchi": "नामची",
  },
  ta: {
    "Coimbatore": "கோயம்புத்தூர்", "Salem": "சேலம்", "Madurai": "மதுரை", "Thanjavur": "தஞ்சாவூர்", "Dindigul": "திண்டுக்கல்", "Erode": "ஈரோடு", "Tirunelveli": "திருநெல்வேலி", "Theni": "தேனி", "Villupuram": "விழுப்புரம்", "Tirupur": "திருப்பூர்", "Vellore": "வேலூர்", "Kanyakumari": "கன்னியாகுமரி", "Nagercoil": "நாகர்கோவில்", "Nagapattinam": "நாகப்பட்டினம்", "Cuddalore": "கடலூர்",
    "Hyderabad": "ஹைதராபாத்", "Bengaluru": "பெங்களூரு", "Kolkata": "கொல்கத்தா", "New Delhi": "புதுடெல்லி",
    "Guntur": "குண்டூர்", "Vijayawada": "விஜயவாடா", "Nashik": "நாசிக்", "Pune": "புனே", "Ahmedabad": "அகமதாபாத்", "Jaipur": "ஜெய்ப்பூர்", "Lucknow": "லக்னோ", "Patna": "பட்னா",
  },
  kn: {
    "Bengaluru": "ಬೆಂಗಳೂರು", "Hassan": "ಹಾಸನ", "Dharwad": "ಧಾರವಾಡ", "Belgaum": "ಬೆಳಗಾವಿ", "Shimoga": "ಶಿವಮೊಗ್ಗ", "Mysuru": "ಮೈಸೂರು", "Raichur": "ರಾಯಚೂರು", "Davangere": "ದಾವಣಗೆರೆ", "Chikmagalur": "ಚಿಕ್ಕಮಗಳೂರು", "Kodagu": "ಕೊಡಗು", "Tumkur": "ತುಮಕೂರು", "Mandya": "ಮಂಡ್ಯ", "Gulbarga": "ಕಲಬುರ್ಗಿ", "Bellary": "ಬಳ್ಳಾರಿ", "Udupi": "ಉಡುಪಿ", "Bidar": "ಬೀದರ್",
    "Yeshwanthpur": "ಯಶವಂತಪುರ", "Hubli": "ಹುಬ್ಬಳ್ಳಿ", "Madikeri": "ಮಡಿಕೇರಿ",
    "Hyderabad": "ಹೈದರಾಬಾದ್", "New Delhi": "ನವದೆಹಲಿ",
  },
  ml: {
    "Ernakulam": "എറണാകുളം", "Kochi": "കൊച്ചി", "Wayanad": "വയനാട്", "Idukki": "ഇടുക്കി", "Thrissur": "തൃശൂർ", "Palakkad": "പാലക്കാട്", "Kozhikode": "കോഴിക്കോട്", "Kollam": "കൊല്ലം", "Kannur": "കണ്ണൂർ", "Kottayam": "കോട്ടയം",
    "Hyderabad": "ഹൈദരാബാദ്", "Bengaluru": "ബെംഗളൂരു", "New Delhi": "ന്യൂ ഡൽഹി",
  },
  mr: {
    "Nashik": "नाशिक", "Pune": "पुणे", "Nagpur": "नागपूर", "Solapur": "सोलापूर", "Sangli": "सांगली", "Kolhapur": "कोल्हापूर", "Ahmednagar": "अहमदनगर", "Jalgaon": "जळगाव", "Aurangabad": "औरंगाबाद", "Satara": "सातारा", "Yavatmal": "यवतमाळ", "Ratnagiri": "रत्नागिरी", "Latur": "लातूर", "Wardha": "वर्धा", "Dhule": "धुळे",
    "Lasalgaon": "लासलगाव", "Mumbai": "मुंबई",
    "Hyderabad": "हैदराबाद", "New Delhi": "नवी दिल्ली",
  },
  gu: {
    "Rajkot": "રાજકોટ", "Junagadh": "જૂનાગઢ", "Unjha": "ઊંઝા", "Ahmedabad": "અમદાવાદ", "Bhavnagar": "ભાવનગર", "Surat": "સુરત", "Vadodara": "વડોદરા", "Amreli": "અમરેલી", "Banaskantha": "બનાસકાંઠા", "Kutch": "કચ્છ", "Mehsana": "મહેસાણા", "Morbi": "મોરબી", "Sabarkantha": "સાબરકાંઠા",
    "Deesa": "ડીસા", "Bhuj": "ભુજ", "Himmatnagar": "હિંમતનગર",
  },
  pa: {
    "Ludhiana": "ਲੁਧਿਆਣਾ", "Amritsar": "ਅੰਮ੍ਰਿਤਸਰ", "Bathinda": "ਬਠਿੰਡਾ", "Abohar": "ਅਬੋਹਰ", "Patiala": "ਪਟਿਆਲਾ", "Jalandhar": "ਜਲੰਧਰ", "Sangrur": "ਸੰਗਰੂਰ", "Mansa": "ਮਾਨਸਾ", "Muktsar": "ਮੁਕਤਸਰ", "Fazilka": "ਫ਼ਾਜ਼ਿਲਕਾ",
    "Karnal": "ਕਰਨਾਲ", "Hisar": "ਹਿਸਾਰ", "New Delhi": "ਨਵੀਂ ਦਿੱਲੀ",
  },
};

// Helper: get translated name with fallback to English (original name)
export function getDataTranslation(lang: string): DataTranslations {
  return dataTranslations[lang] || dataTranslations.en;
}

export function translateCropName(name: string, lang: string): string {
  if (lang === "en") return name;
  const dt = dataTranslations[lang];
  // Direct match
  if (dt?.cropNames?.[name]) return dt.cropNames[name];
  // Try short-name specific translations
  const shortTrans = shortNameTranslations[lang];
  if (shortTrans?.[name]) return shortTrans[name];
  // Try alias to full name
  const fullName = shortNameAliases[name];
  if (fullName && dt?.cropNames?.[fullName]) return dt.cropNames[fullName];
  return name;
}

export function translateCategory(category: string, lang: string): string {
  const dt = dataTranslations[lang];
  return dt?.cropCategories?.[category] || category;
}

export function translateCommunityCategory(category: string, lang: string): string {
  const dt = dataTranslations[lang];
  return dt?.communityCategories?.[category] || category;
}

export function translatePlantPart(part: string, lang: string): string {
  const dt = dataTranslations[lang];
  return dt?.plantParts?.[part] || part;
}

export function translateStateName(state: string, lang: string): string {
  if (lang === "en") return state;
  return stateTranslations[lang]?.[state] || state;
}

export function translatePlaceName(place: string, lang: string): string {
  if (lang === "en") return place;
  return placeTranslations[lang]?.[place] || place;
}
