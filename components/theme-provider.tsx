"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface Theme {
  name: string;
  background: string;
  backgroundAlt: string;
  accent: string;
  secondary: string;
  tertiary: string;
  textGradient: string;
  buttonGradient: string;
  badgeGradient: string;
  shadow: string;
  overlay: string;
}

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
  themes: Record<string, Theme>;
}

const themes: Record<string, Theme> = {
  cyberpunk: {
    name: "Cyberpunk",
    background: "bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900",
    backgroundAlt:
      "bg-gradient-to-br from-purple-900 via-pink-900 to-slate-900",
    accent: "bg-gradient-to-r from-cyan-400 to-blue-500",
    secondary: "bg-gradient-to-r from-purple-500 to-pink-500",
    tertiary: "bg-gradient-to-r from-blue-500 to-cyan-400",
    textGradient: "from-cyan-400 via-blue-400 to-purple-400",
    buttonGradient:
      "from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700",
    badgeGradient: "from-cyan-500/80 to-blue-500/80",
    shadow: "shadow-cyan-500/25",
    overlay: "from-cyan-500/20 to-transparent",
  },
  matrix: {
    name: "Matrix",
    background: "bg-gradient-to-br from-black via-green-900 to-black",
    backgroundAlt: "bg-gradient-to-br from-green-900 via-black to-green-800",
    accent: "bg-gradient-to-r from-green-400 to-emerald-500",
    secondary: "bg-gradient-to-r from-lime-500 to-green-500",
    tertiary: "bg-gradient-to-r from-emerald-500 to-teal-400",
    textGradient: "from-green-400 via-emerald-400 to-lime-400",
    buttonGradient:
      "from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700",
    badgeGradient: "from-green-500/80 to-emerald-500/80",
    shadow: "shadow-green-500/25",
    overlay: "from-green-500/20 to-transparent",
  },
  sunset: {
    name: "Sunset",
    background: "bg-gradient-to-br from-orange-900 via-red-900 to-purple-900",
    backgroundAlt:
      "bg-gradient-to-br from-red-900 via-purple-900 to-orange-900",
    accent: "bg-gradient-to-r from-orange-400 to-red-500",
    secondary: "bg-gradient-to-r from-red-500 to-pink-500",
    tertiary: "bg-gradient-to-r from-yellow-500 to-orange-400",
    textGradient: "from-orange-400 via-red-400 to-pink-400",
    buttonGradient:
      "from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700",
    badgeGradient: "from-orange-500/80 to-red-500/80",
    shadow: "shadow-orange-500/25",
    overlay: "from-orange-500/20 to-transparent",
  },
  ocean: {
    name: "Ocean",
    background: "bg-gradient-to-br from-blue-900 via-teal-900 to-cyan-900",
    backgroundAlt: "bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900",
    accent: "bg-gradient-to-r from-blue-400 to-teal-500",
    secondary: "bg-gradient-to-r from-teal-500 to-cyan-500",
    tertiary: "bg-gradient-to-r from-cyan-500 to-blue-400",
    textGradient: "from-blue-400 via-teal-400 to-cyan-400",
    buttonGradient:
      "from-blue-500 to-teal-600 hover:from-blue-600 hover:to-teal-700",
    badgeGradient: "from-blue-500/80 to-teal-500/80",
    shadow: "shadow-blue-500/25",
    overlay: "from-blue-500/20 to-transparent",
  },
  aurora: {
    name: "Aurora",
    background: "bg-gradient-to-br from-purple-900 via-blue-900 to-green-900",
    backgroundAlt:
      "bg-gradient-to-br from-blue-900 via-green-900 to-purple-900",
    accent: "bg-gradient-to-r from-purple-400 to-blue-500",
    secondary: "bg-gradient-to-r from-blue-500 to-green-500",
    tertiary: "bg-gradient-to-r from-green-500 to-purple-400",
    textGradient: "from-purple-400 via-blue-400 to-green-400",
    buttonGradient:
      "from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700",
    badgeGradient: "from-purple-500/80 to-blue-500/80",
    shadow: "shadow-purple-500/25",
    overlay: "from-purple-500/20 to-transparent",
  },
  cosmic: {
    name: "Cosmic",
    background: "bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900",
    backgroundAlt:
      "bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900",
    accent: "bg-gradient-to-r from-indigo-400 to-purple-500",
    secondary: "bg-gradient-to-r from-purple-500 to-pink-500",
    tertiary: "bg-gradient-to-r from-pink-500 to-indigo-400",
    textGradient: "from-indigo-400 via-purple-400 to-pink-400",
    buttonGradient:
      "from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700",
    badgeGradient: "from-indigo-500/80 to-purple-500/80",
    shadow: "shadow-indigo-500/25",
    overlay: "from-indigo-500/20 to-transparent",
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("cyberpunk");

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
