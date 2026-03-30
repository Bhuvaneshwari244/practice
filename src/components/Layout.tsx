import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { languages } from "@/data/translations";
import { Home, BookOpen, Users, BarChart3, Truck, Stethoscope, Star, Menu, X, MessageCircle, TrendingUp, Calendar, Sun, Moon, Satellite } from "lucide-react";
import { useState } from "react";
import { useTheme } from "next-themes";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";
import Chatbot from "./Chatbot";

const navItems = [
  { path: "/", icon: Home, key: "home" as const },
  { path: "/crops", icon: BookOpen, key: "crops" as const },
  { path: "/community", icon: Users, key: "community" as const },
  { path: "/mandi", icon: BarChart3, key: "mandi" as const },
  { path: "/transport", icon: Truck, key: "transport" as const },
  { path: "/diagnosis", icon: Stethoscope, key: "diagnosis" as const },
  { path: "/yield-prediction", icon: TrendingUp, key: "yieldPrediction" as const },
  { path: "/crop-calendar", icon: Calendar, key: "cropCalendar" as const },
  { path: "/crop-health", icon: Satellite, key: "cropHealth" as const },
  { path: "/recommendations", icon: Star, key: "recommendations" as const },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const { lang, setLang, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <AnimatedBackground />
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 bg-card/90 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl">🌾</span>
            <span className="text-xl font-display font-bold text-gradient tracking-tight">AgriLink</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(item => {
              const active = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path}
                  className="relative px-3 py-2 rounded-xl text-sm transition-all duration-200">
                  <span className={`relative z-10 flex items-center gap-1.5 ${active ? "text-primary-foreground font-medium" : "text-muted-foreground hover:text-foreground"}`}>
                    <item.icon size={15} />
                    {t.nav[item.key]}
                  </span>
                  {active && (
                    <div className="absolute inset-0 bg-primary rounded-xl" />
                  )}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 text-foreground rounded-xl hover:bg-secondary transition-colors"
              title="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <select value={lang} onChange={e => setLang(e.target.value)}
              className="bg-secondary text-secondary-foreground text-xs rounded-xl px-3 py-2 border border-border/50 focus:ring-2 focus:ring-primary outline-none">
              {languages.map(l => <option key={l.code} value={l.code}>{l.native}</option>)}
            </select>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-foreground rounded-xl hover:bg-secondary transition-colors">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-card border-t border-border/50">
            <div className="p-4 space-y-1">
              {navItems.map((item, i) => (
                <div key={item.path}>
                  <Link to={item.path} onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all hover:scale-105 active:scale-95 ${location.pathname === item.path ? "bg-primary text-primary-foreground font-medium" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`}>
                    <item.icon size={18} /> {t.nav[item.key]}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pb-20 md:pb-8">{children}</main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-xl border-t border-border/50">
        <div className="flex justify-around py-2.5">
          {navItems.slice(0, 5).map(item => {
            const active = location.pathname === item.path;
            return (
              <Link key={item.path} to={item.path}
                className="relative flex flex-col items-center gap-0.5 text-[10px] p-1">
                <span className={`relative z-10 transition-colors ${active ? "text-primary" : "text-muted-foreground"}`}>
                  <item.icon size={20} />
                </span>
                <span className={`relative z-10 ${active ? "text-primary font-medium" : "text-muted-foreground"}`}>
                  {t.nav[item.key]}
                </span>
                {active && (
                  <div className="absolute -top-1 w-1 h-1 bg-primary rounded-full" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* WhatsApp Floating Button */}
      <motion.a
        href={buildWhatsAppLink("Hi AgriLink, I need help with farming")}
        target="_blank" rel="noopener noreferrer"
        className="fixed bottom-20 md:bottom-6 right-4 z-50 bg-green-500 hover:bg-green-600 text-white rounded-2xl p-3.5 shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Contact us on WhatsApp"
      >
        <MessageCircle size={24} />
      </motion.a>

      {/* AI Chatbot */}
      <Chatbot />
    </div>
  );
}
