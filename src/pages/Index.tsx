import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { BookOpen, Users, BarChart3, Truck, Stethoscope, Star, TrendingUp, Calendar, Satellite } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { WeatherWidget } from "@/components/WeatherWidget";

export default function Index() {
  const { t } = useLanguage();

  const features = [
    {
      path: "/crops",
      icon: BookOpen,
      title: "crops",
      descKey: "cropsDesc",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      path: "/community",
      icon: Users,
      title: "community",
      descKey: "communityDesc",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      path: "/mandi",
      icon: BarChart3,
      title: "mandi",
      descKey: "mandiDesc",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      path: "/transport",
      icon: Truck,
      title: "transport",
      descKey: "transportDesc",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      path: "/diagnosis",
      icon: Stethoscope,
      title: "diagnosis",
      descKey: "diagnosisDesc",
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      path: "/yield-prediction",
      icon: TrendingUp,
      title: "yieldPrediction",
      descKey: "yieldPredictionDesc",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      path: "/crop-calendar",
      icon: Calendar,
      title: "cropCalendar",
      descKey: "cropCalendarDesc",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      path: "/crop-health",
      icon: Satellite,
      title: "cropHealth",
      descKey: "cropHealthDesc",
      color: "text-teal-600",
      bgColor: "bg-teal-50"
    },
    {
      path: "/recommendations",
      icon: Star,
      title: "recommendations",
      descKey: "recommendationsDesc",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    }
  ];

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4 leading-tight py-2">
            {t.hero.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
        </div>

        {/* Weather Widget */}
        <div className="max-w-md mx-auto mb-12">
          <WeatherWidget />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <Link
              key={feature.path}
              to={feature.path}
              className="group bg-card p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50"
            >
              <div className={`${feature.bgColor} ${feature.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon size={24} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {t.nav[feature.title]}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t.features[feature.descKey as keyof typeof t.features]}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}