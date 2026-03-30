import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, X, Loader2, Mic, MicOff, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";

// TypeScript declarations for Speech APIs
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
  resultIndex: number;
}

interface SpeechRecognitionResultList {
  length: number;
  item(index: number): SpeechRecognitionResult;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionResult {
  length: number;
  item(index: number): SpeechRecognitionAlternative;
  [index: number]: SpeechRecognitionAlternative;
  isFinal: boolean;
}

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: Event) => void) | null;
  onend: (() => void) | null;
  start(): void;
  stop(): void;
  abort(): void;
}

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export default function Chatbot() {
  const { t, lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages.length, scrollToBottom]);

  // Initialize speech recognition and synthesis
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initialize Speech Recognition
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        
        // Set language based on current app language
        const speechLang = lang === 'hi' ? 'hi-IN' : 
                          lang === 'te' ? 'te-IN' : 
                          lang === 'ta' ? 'ta-IN' : 
                          lang === 'kn' ? 'kn-IN' : 
                          lang === 'ml' ? 'ml-IN' : 
                          lang === 'mr' ? 'mr-IN' : 
                          lang === 'bn' ? 'bn-IN' : 
                          lang === 'gu' ? 'gu-IN' : 
                          lang === 'pa' ? 'pa-IN' : 'en-IN';
        
        recognition.lang = speechLang;

        recognition.onstart = () => {
          setIsListening(true);
        };

        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          setInputValue(transcript);
          setIsListening(false);
        };

        recognition.onerror = (event) => {
          console.error('Speech recognition error:', event.error);
          setIsListening(false);
        };

        recognition.onend = () => {
          setIsListening(false);
        };

        recognitionRef.current = recognition;
      }

      // Initialize Speech Synthesis
      if (window.speechSynthesis) {
        synthRef.current = window.speechSynthesis;
        
        // Load voices - sometimes they need time to load
        const loadVoices = () => {
          const voices = synthRef.current?.getVoices() || [];
          console.log('Available voices:', voices.map(v => `${v.name} (${v.lang})`));
        };
        
        // Load voices immediately
        loadVoices();
        
        // Also load when voices change (some browsers load them asynchronously)
        if (synthRef.current) {
          synthRef.current.onvoiceschanged = loadVoices;
        }
      }
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, [lang]);

  // Function to start voice input
  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      try {
        recognitionRef.current.start();
      } catch (error) {
        console.error('Error starting speech recognition:', error);
      }
    }
  };

  // Function to stop voice input
  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
    }
  };

  // Function to speak text with enhanced fallback
  const speakText = (text: string) => {
    // IMMEDIATE Telugu check to prevent garbled speech
    if (/[\u0C00-\u0C7F]/.test(text)) {
      console.log('Telugu detected - using English notification instead');
      if (synthRef.current && voiceEnabled) {
        const notification = new SpeechSynthesisUtterance("Telugu response ready. Please read the text above.");
        notification.lang = 'en-US';
        notification.rate = 0.8;
        notification.onstart = () => setIsSpeaking(true);
        notification.onend = () => setIsSpeaking(false);
        notification.onerror = () => setIsSpeaking(false);
        try { synthRef.current.speak(notification); } catch (e) { setIsSpeaking(false); }
      }
      return;
    }
    
    if (synthRef.current && voiceEnabled) {
      // Cancel any ongoing speech
      synthRef.current.cancel();

        // Check if text contains Telugu script
        const isTeluguText = /[\u0C00-\u0C7F]/.test(text);

        // For Telugu text, ALWAYS provide notification instead of TTS
        if (isTeluguText) {
          console.log('Telugu text detected. Providing English notification to avoid garbled speech.');

          const notificationText = "Telugu response is ready. Please read the text message above.";
          const notificationUtterance = new SpeechSynthesisUtterance(notificationText);

          // Get available voices and find English voice
          const voices = synthRef.current.getVoices();
          const englishVoice = voices.find(v => v.lang === 'en-IN') || 
                             voices.find(v => v.lang.startsWith('en')) || 
                             voices[0];

          if (englishVoice) {
            notificationUtterance.voice = englishVoice;
          }

          notificationUtterance.lang = 'en-IN';
          notificationUtterance.rate = 0.8;
          notificationUtterance.pitch = 1.0;
          notificationUtterance.volume = 0.9;

          notificationUtterance.onstart = () => {
            setIsSpeaking(true);
            console.log('Playing Telugu notification in English');
          };

          notificationUtterance.onend = () => {
            setIsSpeaking(false);
            console.log('Telugu notification completed');
          };

          notificationUtterance.onerror = (event) => {
            console.error('Notification speech error:', event.error);
            setIsSpeaking(false);
          };

          try {
            synthRef.current.speak(notificationUtterance);
          } catch (error) {
            console.error('Error playing Telugu notification:', error);
            setIsSpeaking(false);
          }

          return; // Exit early for Telugu text
        }

        // For non-Telugu text, proceed with normal TTS
        const utterance = new SpeechSynthesisUtterance(text);

        // Get available voices
        const voices = synthRef.current.getVoices();

        // Voice selection for non-Telugu languages
        let selectedVoice = null;

        const speechLang = lang === 'hi' ? 'hi-IN' : 
                          lang === 'te' ? 'te-IN' : 
                          lang === 'ta' ? 'ta-IN' : 
                          lang === 'kn' ? 'kn-IN' : 
                          lang === 'ml' ? 'ml-IN' : 
                          lang === 'mr' ? 'mr-IN' : 
                          lang === 'bn' ? 'bn-IN' : 
                          lang === 'gu' ? 'gu-IN' : 
                          lang === 'pa' ? 'pa-IN' : 'en-IN';

        utterance.lang = speechLang;
        const langPrefix = speechLang.split('-')[0];
        const specificVoices = voices.filter(v => v.lang.includes(langPrefix));

        if (specificVoices.length > 0) {
          selectedVoice = specificVoices[0];
        } else {
          // Fallback to English
          selectedVoice = voices.find(v => v.lang === 'en-IN') || 
                        voices.find(v => v.lang.startsWith('en')) || 
                        voices[0];
        }

        if (selectedVoice) {
          utterance.voice = selectedVoice;
        }

        // Speech parameters
        utterance.rate = lang === 'en' ? 0.8 : 0.6;
        utterance.pitch = 1.0;
        utterance.volume = 0.9;

        utterance.onstart = () => {
          setIsSpeaking(true);
          console.log(`Started speaking in ${utterance.lang}`);
        };

        utterance.onend = () => {
          setIsSpeaking(false);
          console.log('Finished speaking');
        };

        utterance.onerror = (event) => {
          console.error('Speech synthesis error:', event.error);
          setIsSpeaking(false);

          // Try English fallback for non-Telugu text
          if (event.error !== 'not-allowed' && event.error !== 'canceled') {
            console.log('Attempting English fallback...');

            const fallbackUtterance = new SpeechSynthesisUtterance(text);
            const englishVoice = voices.find(v => v.lang.startsWith('en'));

            if (englishVoice) {
              fallbackUtterance.voice = englishVoice;
            }

            fallbackUtterance.lang = 'en-US';
            fallbackUtterance.rate = 0.8;
            fallbackUtterance.onstart = () => setIsSpeaking(true);
            fallbackUtterance.onend = () => setIsSpeaking(false);
            fallbackUtterance.onerror = () => setIsSpeaking(false);

            try {
              setTimeout(() => {
                synthRef.current?.speak(fallbackUtterance);
              }, 100);
            } catch (error) {
              console.error('Fallback speech error:', error);
              setIsSpeaking(false);
            }
          }
        };

        try {
          synthRef.current.speak(utterance);
        } catch (error) {
          console.error('Error speaking text:', error);
          setIsSpeaking(false);
        }
      }
    };

  // Function to stop speaking
  const stopSpeaking = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsSpeaking(false);
    }
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Welcome message when chatbot opens for the first time
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: t.chatbot.greeting[0],
        isBot: true,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length, t.chatbot.greeting]);

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Specific crop information queries - Check these first before general patterns
    const cropInfo = {
      // Rice/వరి
      rice: {
        en: "🌾 **Rice (Oryza sativa)** - Rice is a staple cereal crop. **Growing Season**: Kharif (June-November), **Soil**: Clay loam, well-drained fields, **Water**: High water requirement (1000-1200mm), **Sowing**: Transplanting method preferred, **Duration**: 120-150 days, **Major Pests**: Brown planthopper, stem borer, **Fertilizer**: NPK 120:60:40 kg/ha, **Best Practices**: Maintain 2-5cm water level, proper spacing 20x15cm. 📍 **For More Details**: Go to Crop Library → Use search bar to find 'Rice' → Filter by categories (Cereals) → Click on Rice card → View complete cultivation guide → For expert advice, click WhatsApp button to connect with agricultural specialists.",
        hi: "🌾 **चावल (Oryza sativa)** - चावल एक मुख्य अनाज फसल है। **बुआई का समय**: खरीफ (जून-नवंबर), **मिट्टी**: दोमट मिट्टी, अच्छी जल निकासी, **पानी**: अधिक पानी की आवश्यकता (1000-1200mm), **बुआई**: रोपाई विधि बेहतर, **अवधि**: 120-150 दिन, **मुख्य कीट**: भूरा फुदका, तना छेदक, **उर्वरक**: NPK 120:60:40 kg/ha, **सर्वोत्तम प्रथाएं**: 2-5cm पानी का स्तर बनाए रखें। 📍 **अधिक जानकारी के लिए**: फसल पुस्तकालय पर जाएं → 'चावल' खोजें → श्रेणियों से फ़िल्टर करें → चावल कार्ड पर क्लिक करें → विशेषज्ञ सलाह के लिए WhatsApp बटन दबाएं।",
        te: "🌾 **వరి (Oryza sativa)** - వరి ప్రధాన ధాన్య పంట. **సీజన్**: ఖరీఫ్ (జూన్-నవంబర్), **నేల**: మట్టి లోమ్, మంచి నీటి నిష్కాసన, **నీరు**: అధిక నీటి అవసరం (1000-1200mm), **విత్తనాలు**: మార్పిడి పద్ధతి మంచిది, **వ్యవధి**: 120-150 దినాలు, **ప్రధాన కీటకాలు**: గోధుమ రంగు తొండ పురుగు, కాండం తొలుచు పురుగు, **ఎరువులు**: NPK 120:60:40 kg/ha, **ఉత్తమ పద్ధతులు**: 2-5cm నీటి స్థాయి నిర్వహించండి, సరైన అంతరం 20x15cm. 📍 **మరిన్ని వివరాలకు**: పంట గ్రంథాలయం వెళ్లండి → సెర్చ్ బార్‌లో 'వరి' వెతకండి → వర్గాలను ఫిల్టర్ చేయండి (ధాన్యాలు) → వరి కార్డ్‌పై క్లిక్ చేయండి → పూర్తి సాగు గైడ్ చూడండి → నిపుణుల సలహా కోసం WhatsApp బటన్ క్లిక్ చేసి వ్యవసాయ నిపుణులతో కనెక్ట్ అవ్వండి."
      },
      // Wheat/గోధుమ
      wheat: {
        en: "🌾 **Wheat (Triticum aestivum)** - Major rabi crop. **Season**: Rabi (November-April), **Soil**: Well-drained loamy soil, **Water**: 300-400mm, **Sowing**: Broadcasting or drilling, **Duration**: 120-150 days, **Pests**: Aphids, termites, **Fertilizer**: NPK 120:60:40 kg/ha, **Best Practices**: Timely sowing, proper seed rate 100kg/ha. 📍 **For More Details**: Go to Crop Library → Use search bar to find 'Wheat' → Filter by categories (Cereals) → Click on Wheat card → View complete cultivation guide → For expert advice, click WhatsApp button to connect with agricultural specialists.",
        hi: "🌾 **गेहूं (Triticum aestivum)** - प्रमुख रबी फसल। **सीजन**: रबी (नवंबर-अप्रैल), **मिट्टी**: अच्छी जल निकासी वाली दोमट मिट्टी, **पानी**: 300-400mm, **बुआई**: छिड़काव या ड्रिलिंग, **अवधि**: 120-150 दिन। 📍 **अधिक जानकारी के लिए**: फसल पुस्तकालय पर जाएं → 'गेहूं' खोजें → श्रेणियों से फ़िल्टर करें → गेहूं कार्ड पर क्लिक करें → विशेषज्ञ सलाह के लिए WhatsApp बटन दबाएं।",
        te: "🌾 **గోధుమ (Triticum aestivum)** - ప్రధాన రబీ పంట. **సీజన్**: రబీ (నవంబర్-ఏప్రిల్), **నేల**: మంచి నీటి నిష్కాసన లోమీ నేల, **నీరు**: 300-400mm, **విత్తనాలు**: విత్తనం లేదా డ్రిల్లింగ్, **వ్యవధి**: 120-150 దినాలు. 📍 **మరిన్ని వివరాలకు**: పంట గ్రంథాలయం వెళ్లండి → సెర్చ్ బార్‌లో 'గోధుమ' వెతకండి → వర్గాలను ఫిల్టర్ చేయండి (ధాన్యాలు) → గోధుమ కార్డ్‌పై క్లిక్ చేయండి → పూర్తి సాగు గైడ్ చూడండి → నిపుణుల సలహా కోసం WhatsApp బటన్ క్లిక్ చేయండి."
      },
      // Maize/మొక్కజొన్న
      maize: {
        en: "🌽 **Maize (Zea mays)** - Versatile cereal crop. **Season**: Kharif & Rabi, **Soil**: Well-drained fertile soil, **Water**: 500-800mm, **Sowing**: Direct seeding, **Duration**: 90-120 days, **Spacing**: 60x20cm, **Fertilizer**: NPK 120:60:40 kg/ha. 📍 **For More Details**: Go to Crop Library → Use search bar to find 'Maize' → Filter by categories (Cereals) → Click on Maize card → View complete cultivation guide → For expert advice, click WhatsApp button to connect with agricultural specialists.",
        hi: "🌽 **मक्का (Zea mays)** - बहुउपयोगी अनाज फसल। **सीजन**: खरीफ और रबी, **मिट्टी**: अच्छी जल निकासी वाली उपजाऊ मिट्टी, **पानी**: 500-800mm। 📍 **अधिक जानकारी के लिए**: फसल पुस्तकालय पर जाएं → 'मक्का' खोजें → श्रेणियों से फ़िल्टर करें → मक्का कार्ड पर क्लिक करें → विशेषज्ञ सलाह के लिए WhatsApp बटन दबाएं।",
        te: "🌽 **మొక్కజొన్న (Zea mays)** - బహుళ ఉపయోగ ధాన్య పంట. **సీజన్**: ఖరీఫ్ & రబీ, **నేల**: మంచి నీటి నిష్కాసన సారవంతమైన నేల, **నీరు**: 500-800mm, **విత్తనాలు**: ప్రత్యక్ష విత్తనం, **వ్యవధి**: 90-120 దినాలు, **అంతరం**: 60x20cm. 📍 **మరిన్ని వివరాలకు**: పంట గ్రంథాలయం వెళ్లండి → సెర్చ్ బార్‌లో 'మొక్కజొన్న' వెతకండి → వర్గాలను ఫిల్టర్ చేయండి (ధాన్యాలు) → మొక్కజొన్న కార్డ్‌పై క్లిక్ చేయండి → పూర్తి సాగు గైడ్ చూడండి → నిపుణుల సలహా కోసం WhatsApp బటన్ క్లిక్ చేయండి."
      }
    };

    // Check for specific crop names in multiple languages
    if (message.includes('rice') || message.includes('వరి') || message.includes('चावल') || message.includes('धान')) {
      return cropInfo.rice[lang as keyof typeof cropInfo.rice] || cropInfo.rice.en;
    }
    
    if (message.includes('wheat') || message.includes('గోధుమ') || message.includes('गेहूं')) {
      return cropInfo.wheat[lang as keyof typeof cropInfo.wheat] || cropInfo.wheat.en;
    }
    
    if (message.includes('maize') || message.includes('corn') || message.includes('మొక్కజొన్న') || message.includes('मक्का')) {
      return cropInfo.maize[lang as keyof typeof cropInfo.maize] || cropInfo.maize.en;
    }
    
    // Greeting patterns
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('namaste') || message.includes('नमस्ते') || message.includes('నమస్కారం') || message.includes('హలో') || message.includes('హాయ్') || message.includes('నమస్తే')) {
      return t.chatbot.greeting[Math.floor(Math.random() * t.chatbot.greeting.length)];
    }
    
    // AgriLink features overview
    if (message.includes('agrilink') || message.includes('features') || message.includes('what can you do') || message.includes('help me') || message.includes('అగ్రిలింక్') || message.includes('ఫీచర్స్') || message.includes('సహాయం')) {
      return t.chatbot.agrilink[Math.floor(Math.random() * t.chatbot.agrilink.length)];
    }
    
    // Crop-related queries
    if (message.includes('crop') || message.includes('plant') || message.includes('grow') || message.includes('seed') || message.includes('library') || message.includes('फसल') || message.includes('पौधा') || message.includes('పంట') || message.includes('మొక్క') || message.includes('విత్తనం')) {
      return t.chatbot.crops[Math.floor(Math.random() * t.chatbot.crops.length)];
    }
    
    // Community-related queries
    if (message.includes('community') || message.includes('question') || message.includes('ask') || message.includes('forum') || message.includes('farmer') || message.includes('समुदाय') || message.includes('प्रश्न') || message.includes('సమాజం') || message.includes('ప్రశ్న') || message.includes('రైతు')) {
      return t.chatbot.community[Math.floor(Math.random() * t.chatbot.community.length)];
    }
    
    // Mandi/Market-related queries
    if (message.includes('price') || message.includes('market') || message.includes('sell') || message.includes('mandi') || message.includes('rate') || message.includes('मंडी') || message.includes('भाव') || message.includes('कीमत') || message.includes('ధర') || message.includes('మార్కెట్') || message.includes('మండి') || message.includes('రేటు')) {
      return t.chatbot.mandi[Math.floor(Math.random() * t.chatbot.mandi.length)];
    }
    
    // Transport-related queries
    if (message.includes('transport') || message.includes('logistics') || message.includes('pickup') || message.includes('delivery') || message.includes('truck') || message.includes('परिवहन') || message.includes('రవాణా') || message.includes('లారీ') || message.includes('ట్రక్')) {
      return t.chatbot.transport[Math.floor(Math.random() * t.chatbot.transport.length)];
    }
    
    // Diagnosis-related queries
    if (message.includes('disease') || message.includes('sick') || message.includes('problem') || message.includes('leaf') || message.includes('spot') || message.includes('diagnosis') || message.includes('identify') || message.includes('रोग') || message.includes('बीमारी') || message.includes('निदान') || message.includes('రోగం') || message.includes('తెగులు') || message.includes('వ్యాధి')) {
      return t.chatbot.diagnosis[Math.floor(Math.random() * t.chatbot.diagnosis.length)];
    }
    
    // Yield prediction queries
    if (message.includes('yield') || message.includes('predict') || message.includes('forecast') || message.includes('production') || message.includes('harvest') || message.includes('उत्पादन') || message.includes('पूर्वानुमान') || message.includes('దిగుబడి') || message.includes('అంచనా') || message.includes('ఉత్పత్తి')) {
      return t.chatbot.yieldPrediction[Math.floor(Math.random() * t.chatbot.yieldPrediction.length)];
    }
    
    // Crop calendar queries
    if (message.includes('calendar') || message.includes('season') || message.includes('timing') || message.includes('when to plant') || message.includes('sowing time') || message.includes('kharif') || message.includes('rabi') || message.includes('zaid') || message.includes('कैलेंडर') || message.includes('मौसम') || message.includes('खरीफ') || message.includes('रबी') || message.includes('క్యాలెండర్') || message.includes('ఋతువు') || message.includes('ఖరీఫ్') || message.includes('రబీ')) {
      return t.chatbot.cropCalendar[Math.floor(Math.random() * t.chatbot.cropCalendar.length)];
    }
    
    // Recommendations queries
    if (message.includes('recommend') || message.includes('suggest') || message.includes('advice') || message.includes('which crop') || message.includes('best crop') || message.includes('सिफारिश') || message.includes('सुझाव') || message.includes('సిఫార్సు') || message.includes('సలహా') || message.includes('సూచన')) {
      return t.chatbot.recommendations[Math.floor(Math.random() * t.chatbot.recommendations.length)];
    }
    
    // Default response with feature overview
    return t.chatbot.default;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
      
      // Speak the bot response if voice is enabled
      if (voiceEnabled) {
        setTimeout(() => {
          speakText(botResponse);
        }, 500);
      }
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-32 md:bottom-20 right-4 z-50 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl p-3.5 shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="AI Farming Assistant"
      >
        <Bot size={24} />
      </motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed right-4 z-50 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
            style={{
              bottom: '12rem', // 192px from bottom
              top: '4rem', // Ensure it doesn't go above 64px from top
              height: '24rem', // Fixed height
              maxHeight: 'calc(100vh - 8rem)' // Max height to prevent overflow
            }}
          >
            {/* Header */}
            <div className="bg-blue-500 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot size={20} />
                <div>
                  <h3 className="font-semibold text-sm">AgriBot</h3>
                  <p className="text-xs opacity-90">
                    {t.common.aiAssistant}
                    {isSpeaking && <span className="ml-1 animate-pulse">🔊</span>}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setVoiceEnabled(!voiceEnabled)}
                  className={`p-1 rounded ${voiceEnabled ? 'bg-blue-600' : 'bg-blue-400'}`}
                  title={voiceEnabled ? t.common.voiceEnabled : t.common.voiceDisabled}
                >
                  {voiceEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
                </button>
                {isSpeaking && (
                  <button
                    onClick={stopSpeaking}
                    className="p-1 hover:bg-blue-600 rounded animate-pulse"
                    title={t.common.stopSpeaking}
                  >
                    <VolumeX size={16} />
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-blue-600 rounded"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div 
              className="p-4 overflow-y-auto bg-gray-50" 
              style={{ 
                height: '14rem' // Fixed height for message area
              }}
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-3 flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-2xl text-sm relative ${
                      message.isBot
                        ? 'bg-white text-gray-800 shadow-sm'
                        : 'bg-blue-500 text-white'
                    }`}
                  >
                    {message.text}
                    {message.isBot && voiceEnabled && (
                      <button
                        onClick={() => speakText(message.text)}
                        className="absolute -right-2 -top-2 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                        title="Listen to this message"
                        disabled={isSpeaking}
                      >
                        <Volume2 size={12} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="mb-3 flex justify-start">
                  <div className="bg-white px-3 py-2 rounded-2xl shadow-sm flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin" />
                    <span className="text-sm text-gray-600">{t.chatbot.typing}</span>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t bg-white">
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder={t.chatbot.placeholder}
                    className="text-sm pr-10"
                  />
                  <button
                    onClick={isListening ? stopListening : startListening}
                    className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-1 rounded ${
                      isListening ? 'text-red-500 animate-pulse' : 'text-gray-400 hover:text-blue-500'
                    }`}
                    title={isListening ? "Stop listening" : "Start voice input"}
                    disabled={isTyping}
                  >
                    {isListening ? <MicOff size={16} /> : <Mic size={16} />}
                  </button>
                </div>
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping || isListening}
                  size="sm"
                  className="bg-blue-500 hover:bg-blue-600"
                >
                  <Send size={16} />
                </Button>
              </div>
              {isListening && (
                <div className="mt-2 text-xs text-blue-600 flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  {t.common.listening}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}