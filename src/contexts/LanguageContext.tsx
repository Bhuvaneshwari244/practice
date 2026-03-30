import React, { createContext, useContext, useState, useEffect } from "react";
import { getTranslation } from "@/data/translations";

type LanguageContextType = {
  lang: string;
  setLang: (l: string) => void;
  t: ReturnType<typeof getTranslation>;
};

const LanguageContext = createContext<LanguageContextType>({ lang: "en", setLang: () => {}, t: getTranslation("en") });

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState(() => localStorage.getItem("agrilink-lang") || "en");
  const t = getTranslation(lang);
  useEffect(() => { localStorage.setItem("agrilink-lang", lang); }, [lang]);
  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
