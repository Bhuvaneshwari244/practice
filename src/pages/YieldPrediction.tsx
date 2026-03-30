import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, Droplets, Thermometer, Gauge, Beaker, Lightbulb, RefreshCw } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import PageTransition from "@/components/PageTransition";

interface PredictionInputs {
  cropType: string;
  temperature: number;
  rainfall: number;
  humidity: number;
  soilPH: number;
}

interface YieldResult {
  predictedYield: number;
  unit: string;
  confidence: number;
  suggestions: Array<{
    type: 'warning' | 'info' | 'success';
    icon: React.ComponentType<{ className?: string; size?: number }>;
    message: string;
  }>;
}

const cropYieldData = [
  { name: 'Rice', yield: 1.2, optimal: 2.5 },
  { name: 'Wheat', yield: 2.1, optimal: 3.2 },
  { name: 'Maize', yield: 3.8, optimal: 4.5 },
  { name: 'Cotton', yield: 0.8, optimal: 1.5 },
  { name: 'Sugarcane', yield: 45, optimal: 65 },
  { name: 'Groundnut', yield: 1.5, optimal: 2.2 }
];

const cropOptions = [
  'Rice', 'Wheat', 'Maize', 'Cotton', 'Sugarcane', 'Groundnut', 
  'Soybean', 'Chickpea', 'Mustard', 'Barley', 'Jowar', 'Bajra'
];

function YieldPrediction() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [inputs, setInputs] = useState<PredictionInputs>({
    cropType: '',
    temperature: 25,
    rainfall: 100,
    humidity: 60,
    soilPH: 6.5
  });
  const [result, setResult] = useState<YieldResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchingWeather, setIsFetchingWeather] = useState(false);
  const [weatherLocation, setWeatherLocation] = useState<string>("");

  // Automatically fetch weather data on component mount
  useEffect(() => {
    const fetchWeatherData = async () => {
      setIsFetchingWeather(true);
      try {
        // Get user's location
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;
              await getWeatherForLocation(latitude, longitude);
            },
            async () => {
              // Fallback to Hyderabad if location denied
              await getWeatherForLocation(17.385044, 78.486671);
            }
          );
        } else {
          // Fallback if geolocation not supported
          await getWeatherForLocation(17.385044, 78.486671);
        }
      } catch (error) {
        console.error("Error fetching weather:", error);
        toast({
          title: t.yieldPredictionExtra.failedWeather,
          description: t.yieldPredictionExtra.noAutoFill,
          variant: "destructive",
        });
        setIsFetchingWeather(false);
      }
    };

    fetchWeatherData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getWeatherForLocation = async (latitude: number, longitude: number) => {
    try {
      // Fetch weather data from Open-Meteo API
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,precipitation&daily=precipitation_sum&timezone=auto`
      );
      
      if (!weatherResponse.ok) {
        throw new Error('Weather API failed');
      }
      
      const weatherData = await weatherResponse.json();
      
      // Get location name
      const locationResponse = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      );
      
      let location = "Your Location";
      if (locationResponse.ok) {
        const locationData = await locationResponse.json();
        location = locationData.address?.city || locationData.address?.town || locationData.address?.village || "Your Location";
      }
      
      // Update inputs with real weather data
      setInputs(prev => ({
        ...prev,
        temperature: Math.round(weatherData.current?.temperature_2m || 25),
        humidity: Math.round(weatherData.current?.relative_humidity_2m || 60),
        rainfall: Math.round(weatherData.daily?.precipitation_sum?.[0] || 0)
      }));
      
      setWeatherLocation(location);
      setIsFetchingWeather(false);
      
      toast({
        title: t.yieldPredictionExtra.weatherLoaded,
        description: `${t.yieldPredictionExtra.autoFetchedFor}${location}`,
      });
    } catch (err) {
      console.error("Error fetching weather:", err);
      setIsFetchingWeather(false);
      // Don't show error toast, just silently fail and use default values
    }
  };

  const fetchDefaultWeatherData = async () => {
    try {
      // Default to Hyderabad coordinates
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=17.385&longitude=78.4867&current=temperature_2m,relative_humidity_2m,precipitation&daily=precipitation_sum&timezone=auto`
      );
      
      const weatherData = await weatherResponse.json();
      
      setInputs(prev => ({
        ...prev,
        temperature: Math.round(weatherData.current.temperature_2m),
        humidity: weatherData.current.relative_humidity_2m,
        rainfall: Math.round(weatherData.daily.precipitation_sum[0] || 0)
      }));
      
      setWeatherLocation("Hyderabad");
      setIsFetchingWeather(false);
      
      toast({
        title: t.yieldPredictionExtra.weatherLoaded,
        description: `${t.yieldPredictionExtra.autoFetchedFor}Hyderabad`,
      });
    } catch (err) {
      console.error("Error fetching default weather:", err);
      setIsFetchingWeather(false);
    }
  };

  const calculateYield = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      const baseYield = 1.0;
      let multiplier = 1.0;
      
      if (inputs.temperature >= 20 && inputs.temperature <= 30) {
        multiplier *= 1.2;
      } else if (inputs.temperature < 15 || inputs.temperature > 35) {
        multiplier *= 0.7;
      }
      
      if (inputs.rainfall >= 80 && inputs.rainfall <= 150) {
        multiplier *= 1.3;
      } else if (inputs.rainfall < 50) {
        multiplier *= 0.6;
      }
      
      if (inputs.humidity >= 50 && inputs.humidity <= 70) {
        multiplier *= 1.1;
      } else if (inputs.humidity < 30 || inputs.humidity > 80) {
        multiplier *= 0.8;
      }
      
      if (inputs.soilPH >= 6.0 && inputs.soilPH <= 7.5) {
        multiplier *= 1.2;
      } else if (inputs.soilPH < 5.5 || inputs.soilPH > 8.0) {
        multiplier *= 0.7;
      }
      
      const predictedYield = baseYield * multiplier;
      const confidence = Math.min(95, Math.max(60, multiplier * 80));
      
      const suggestions = [];
      
      if (inputs.rainfall < 80) {
        suggestions.push({
          type: 'warning' as const,
          icon: Droplets,
          message: t.yieldPrediction.lowRainfallWarning
        });
      }
      
      if (inputs.temperature > 32) {
        suggestions.push({
          type: 'warning' as const,
          icon: Thermometer,
          message: t.yieldPrediction.highTemperatureWarning
        });
      }
      
      if (inputs.soilPH < 6.0) {
        suggestions.push({
          type: 'info' as const,
          icon: Beaker,
          message: t.yieldPrediction.acidicSoilInfo
        });
      }
      
      if (inputs.humidity < 40) {
        suggestions.push({
          type: 'warning' as const,
          icon: Gauge,
          message: t.yieldPrediction.lowHumidityWarning
        });
      }
      
      if (suggestions.length === 0) {
        suggestions.push({
          type: 'success' as const,
          icon: Lightbulb,
          message: t.yieldPrediction.optimalConditions
        });
      }
      
      setResult({
        predictedYield,
        unit: t.yieldPrediction.unit,
        confidence,
        suggestions
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <PageTransition>
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-green-800 dark:text-green-400">{t.yieldPrediction.title}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">{t.yieldPrediction.subtitle}</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              {t.yieldPrediction.cropEnvironmentalData}
            </CardTitle>
            <CardDescription className="flex items-center justify-between">
              <span>{t.yieldPrediction.enterCropType}</span>
              {weatherLocation && (
                <Badge variant="outline" className="text-xs">
                  📍 {weatherLocation}
                </Badge>
              )}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {isFetchingWeather && (
              <div className="flex items-center justify-center p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600 mr-2"></div>
                <span className="text-sm text-blue-600 dark:text-blue-400">{t.yieldPredictionExtra.fetchingWeather}</span>
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="cropType">🌾 {t.yieldPrediction.cropType}</Label>
              <Select value={inputs.cropType} onValueChange={(value) => setInputs({...inputs, cropType: value})}>
                <SelectTrigger>
                  <SelectValue placeholder={t.yieldPrediction.selectCropType} />
                </SelectTrigger>
                <SelectContent>
                  {cropOptions.map(crop => (
                    <SelectItem key={crop} value={crop}>{crop}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="temperature" className="flex items-center justify-between">
                  <span>🌡️ {t.yieldPrediction.temperature}</span>
                  <Badge variant="secondary" className="text-xs">{t.yieldPredictionExtra.autoFilled}</Badge>
                </Label>
                <Input
                  id="temperature"
                  type="number"
                  value={inputs.temperature}
                  onChange={(e) => setInputs({...inputs, temperature: Number(e.target.value)})}
                  min="0"
                  max="50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rainfall" className="flex items-center justify-between">
                  <span>🌧️ {t.yieldPrediction.rainfall}</span>
                  <Badge variant="secondary" className="text-xs">{t.yieldPredictionExtra.autoFilled}</Badge>
                </Label>
                <Input
                  id="rainfall"
                  type="number"
                  value={inputs.rainfall}
                  onChange={(e) => setInputs({...inputs, rainfall: Number(e.target.value)})}
                  min="0"
                  max="500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="humidity" className="flex items-center justify-between">
                  <span>💧 {t.yieldPrediction.humidity}</span>
                  <Badge variant="secondary" className="text-xs">{t.yieldPredictionExtra.autoFilled}</Badge>
                </Label>
                <Input
                  id="humidity"
                  type="number"
                  value={inputs.humidity}
                  onChange={(e) => setInputs({...inputs, humidity: Number(e.target.value)})}
                  min="0"
                  max="100"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="soilPH">🧪 {t.yieldPrediction.soilPH}</Label>
                <Input
                  id="soilPH"
                  type="number"
                  step="0.1"
                  value={inputs.soilPH}
                  onChange={(e) => setInputs({...inputs, soilPH: Number(e.target.value)})}
                  min="3"
                  max="10"
                />
              </div>
            </div>

            <Button 
              onClick={() => {
                setIsFetchingWeather(true);
                if ("geolocation" in navigator) {
                  navigator.geolocation.getCurrentPosition(
                    async (position) => {
                      const { latitude, longitude } = position.coords;
                      await getWeatherForLocation(latitude, longitude);
                    },
                    async () => {
                      await getWeatherForLocation(17.385044, 78.486671);
                    }
                  );
                } else {
                  getWeatherForLocation(17.385044, 78.486671);
                }
              }} 
              variant="outline"
              className="w-full"
              disabled={isFetchingWeather}
            >
              <RefreshCw className={`mr-2 h-4 w-4 ${isFetchingWeather ? 'animate-spin' : ''}`} />
              {t.yieldPredictionExtra.refreshWeather}
            </Button>

            <Button 
              onClick={calculateYield} 
              className="w-full bg-green-600 hover:bg-green-700"
              disabled={!inputs.cropType || isLoading}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  {t.yieldPrediction.analyzing}
                </>
              ) : (
                <>
                  <TrendingUp className="mr-2 h-4 w-4" />
                  {t.yieldPrediction.predictYield}
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {result && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                {t.yieldPrediction.predictedYield}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-2">
                <div className="text-5xl font-bold text-green-600">
                  {result.predictedYield.toFixed(2)}
                </div>
                <div className="text-lg text-gray-600">{result.unit}</div>
                <Badge variant="secondary" className="text-sm">
                  {t.yieldPredictionExtra.mlModelPowered}
                </Badge>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-yellow-500" />
                  {t.yieldPrediction.smartSuggestions}
                </h4>
                {result.suggestions.map((suggestion, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                    <suggestion.icon className={`h-5 w-5 mt-0.5 ${
                      suggestion.type === 'warning' ? 'text-orange-500' :
                      suggestion.type === 'success' ? 'text-green-500' : 'text-blue-500'
                    }`} />
                    <p className="text-sm text-gray-700">{suggestion.message}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart className="h-5 w-5 text-green-600" />
            {t.yieldPrediction.yieldComparison}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={cropYieldData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="yield" fill="#16a34a" name={t.yieldPrediction.currentYield} />
              <Bar dataKey="optimal" fill="#22c55e" name={t.yieldPrediction.optimalYield} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
    </PageTransition>
  );
}

export default YieldPrediction;