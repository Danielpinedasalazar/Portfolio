"use client";

import { createContext, useContext, type ReactNode } from "react";

interface Theme {
  name: string;
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
  dark: {
    name: "Dark",
    accent: "from-violet-600 to-indigo-600",
    secondary: "from-indigo-600 to-cyan-600",
    tertiary: "from-violet-500 to-purple-600",
    textGradient: "from-violet-400 via-indigo-400 to-cyan-400",
    buttonGradient:
      "from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700",
    badgeGradient: "from-violet-500/80 to-indigo-500/80",
    shadow: "shadow-violet-500/25",
    overlay: "from-violet-900/30 to-transparent",
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeContext.Provider
      value={{ theme: "dark", setTheme: () => {}, themes }}
    >
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
