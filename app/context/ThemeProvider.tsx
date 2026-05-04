"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_KEY = "theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY) as Theme | null;
    if (savedTheme === "light" || savedTheme === "dark") {
      setThemeState(savedTheme);
      updateDocumentTheme(savedTheme);
      return;
    }

    updateDocumentTheme("dark");
  }, []);

  const setTheme = (nextTheme: Theme) => {
    setThemeState(nextTheme);
    localStorage.setItem(THEME_KEY, nextTheme);
    updateDocumentTheme(nextTheme);
  };

  const toggleTheme = () => {
    setThemeState((previous) => {
      const nextTheme = previous === "dark" ? "light" : "dark";
      localStorage.setItem(THEME_KEY, nextTheme);
      updateDocumentTheme(nextTheme);
      return nextTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function updateDocumentTheme(theme: Theme) {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme);
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
