import { useState, useEffect } from "react";
import { Cloud, CloudRain, Sun, Wind, Droplets, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  description: string;
  icon: string;
}

export function WeatherWidget() {
  const { t } = useLanguage();
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Get user's location
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;
              await getWeatherData(latitude, longitude);
            },
            async () => {
              // Fallback to Hyderabad if location denied
              await getWeatherData(17.385044, 78.486671);
            }
          );
        } else {
          // Fallback if geolocation not supported
          await getWeatherData(17.385044, 78.486671);
        }
      } catch (err) {
        setError("Failed to fetch weather data");
        setLoading(false);
      }
    };

    fetchWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getWeatherData = async (latitude: number, longitude: number) => {
    try {
      // Using Open-Meteo API (free, no API key required)
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&timezone=auto`
      );
      
      const weatherData = await weatherResponse.json();
      
      // Get location name using reverse geocoding
      const locationResponse = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      );
      const locationData = await locationResponse.json();
      
      const weatherCode = weatherData.current.weather_code;
      const condition = getWeatherCondition(weatherCode);
      
      setWeather({
        location: locationData.address.city || locationData.address.town || locationData.address.village || "Your Location",
        temperature: Math.round(weatherData.current.temperature_2m),
        condition: condition.name,
        humidity: weatherData.current.relative_humidity_2m,
        windSpeed: Math.round(weatherData.current.wind_speed_10m),
        description: condition.description,
        icon: condition.icon
      });
      setLoading(false);
    } catch (err) {
      console.error("Error fetching weather:", err);
      setError("Unable to fetch weather data");
      setLoading(false);
    }
  };

  const getWeatherCondition = (code: number) => {
    // WMO Weather interpretation codes
    if (code === 0) return { name: "Clear", description: "Clear sky", icon: "sun" };
    if (code <= 3) return { name: "Partly Cloudy", description: "Partly cloudy", icon: "cloud" };
    if (code <= 48) return { name: "Foggy", description: "Fog", icon: "cloud" };
    if (code <= 67) return { name: "Rainy", description: "Rain", icon: "rain" };
    if (code <= 77) return { name: "Snowy", description: "Snow", icon: "cloud" };
    if (code <= 82) return { name: "Rainy", description: "Rain showers", icon: "rain" };
    if (code <= 99) return { name: "Stormy", description: "Thunderstorm", icon: "rain" };
    return { name: "Unknown", description: "Weather data unavailable", icon: "cloud" };
  };

  const getWeatherIcon = (icon: string) => {
    switch (icon) {
      case "sun":
        return <Sun className="h-12 w-12 text-yellow-500" />;
      case "rain":
        return <CloudRain className="h-12 w-12 text-blue-500" />;
      default:
        return <Cloud className="h-12 w-12 text-gray-500" />;
    }
  };

  if (loading) {
    return (
      <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 border-blue-200 dark:border-blue-800">
        <CardContent className="p-6">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 dark:border-blue-400"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error || !weather) {
    return null;
  }

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 border-blue-200 dark:border-blue-800 shadow-lg">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Cloud className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          {t.common.weather || "Weather"}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{weather.location}</p>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-blue-900 dark:text-blue-100">{weather.temperature}</span>
              <span className="text-2xl text-blue-700 dark:text-blue-300">°C</span>
            </div>
            <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{weather.condition}</p>
          </div>
          <div className="flex-shrink-0">
            {getWeatherIcon(weather.icon)}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 pt-3 border-t border-blue-200 dark:border-blue-800">
          <div className="flex flex-col items-center">
            <Droplets className="h-4 w-4 text-blue-500 dark:text-blue-400 mb-1" />
            <span className="text-xs text-muted-foreground">{t.common.humidity || "Humidity"}</span>
            <span className="text-sm font-semibold text-blue-900 dark:text-blue-100">{weather.humidity}%</span>
          </div>
          <div className="flex flex-col items-center">
            <Wind className="h-4 w-4 text-blue-500 dark:text-blue-400 mb-1" />
            <span className="text-xs text-muted-foreground">{t.common.wind || "Wind"}</span>
            <span className="text-sm font-semibold text-blue-900 dark:text-blue-100">{weather.windSpeed} km/h</span>
          </div>
          <div className="flex flex-col items-center">
            <Eye className="h-4 w-4 text-blue-500 dark:text-blue-400 mb-1" />
            <span className="text-xs text-muted-foreground">{t.common.condition || "Condition"}</span>
            <span className="text-xs font-semibold text-blue-900 dark:text-blue-100 text-center">{weather.description}</span>
          </div>
        </div>

        <div className="text-xs text-center text-muted-foreground pt-2 border-t border-blue-200 dark:border-blue-800">
          {t.common.weatherSource || "Data from Open-Meteo"}
        </div>
      </CardContent>
    </Card>
  );
}
