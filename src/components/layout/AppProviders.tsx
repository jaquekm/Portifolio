"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "pt" | "en";
type Theme = "dark" | "light";

interface AppContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

interface AppProvidersProps {
  children: React.ReactNode;
}

const LANGUAGE_KEY = "portfolio:language";
const THEME_KEY = "portfolio:theme";

export function AppProviders({ children }: AppProvidersProps) {
  const [language, setLanguageState] = useState<Language>("pt");
  const [theme, setThemeState] = useState<Theme>("dark");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedLanguage = window.localStorage.getItem(LANGUAGE_KEY) as
      | Language
      | null;
    const storedTheme = window.localStorage.getItem(THEME_KEY) as Theme | null;

    if (storedLanguage === "pt" || storedLanguage === "en") {
      setLanguageState(storedLanguage);
    }

    if (storedTheme === "dark" || storedTheme === "light") {
      setThemeState(storedTheme);
      applyTheme(storedTheme);
    } else {
      // Default para dark mode refinado
      applyTheme("dark");
    }

    setIsHydrated(true);
  }, []);

  const applyTheme = (nextTheme: Theme) => {
    if (typeof document === "undefined") return;
    document.documentElement.dataset.theme = nextTheme;
  };

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LANGUAGE_KEY, nextLanguage);
    }
  };

  const setTheme = (nextTheme: Theme) => {
    setThemeState(nextTheme);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(THEME_KEY, nextTheme);
    }
    applyTheme(nextTheme);
  };

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt");
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const value: AppContextValue = {
    language,
    setLanguage,
    toggleLanguage,
    theme,
    setTheme,
    toggleTheme,
  };

  // Evita flash estranho antes de hidratar preferências
  return (
    <AppContext.Provider value={value}>
      <div className={isHydrated ? "opacity-100" : "opacity-0 transition-opacity"}>
        {children}
      </div>
    </AppContext.Provider>
  );
}
export function useAppContext(): AppContextValue {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProviders");
  }
  return context;
}

