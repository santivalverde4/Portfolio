"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { useTheme } from "@/app/context/ThemeProvider";
import { translations } from "@/app/data/translations";
import { portfolioData } from "@/app/data/portfolio-i18n";

export function Header() {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = translations[language];
  const data = portfolioData[language];
  const profile = data.profile;
  const themeLabel =
    theme === "dark"
      ? language === "es"
        ? "Claro"
        : "Light"
      : language === "es"
        ? "Oscuro"
        : "Dark";

  return (
    <header className="sticky top-4 z-10 mb-8 rounded-2xl border border-line/70 bg-surface/90 px-5 py-3 shadow-sm backdrop-blur">
      <nav className="flex flex-wrap items-center justify-between gap-3 text-sm">
        <span className="font-semibold tracking-tight">{profile.name}</span>
        <div className="flex items-center gap-5 text-muted">
          <a className="hover:text-foreground" href="#tecnologias">
            {t.nav.technologies}
          </a>
          <a className="hover:text-foreground" href="#proyectos">
            {t.nav.projects}
          </a>
          <a className="hover:text-foreground" href={profile.cvUrl} target="_blank" rel="noreferrer">
            {t.nav.cv}
          </a>
          <a className="hover:text-foreground" href="#contacto">
            {t.nav.contact}
          </a>
          <div className="flex gap-2 border-l border-line pl-5">
            <button
              onClick={toggleTheme}
              className="px-2.5 py-1 rounded-lg transition font-medium text-muted hover:text-foreground hover:bg-background/60"
              title={language === "es" ? "Cambiar tema" : "Toggle theme"}
            >
              {themeLabel}
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1 rounded-lg transition font-medium ${
                language === "en"
                  ? "bg-foreground text-background"
                  : "text-muted hover:text-foreground hover:bg-background/60"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("es")}
              className={`px-2.5 py-1 rounded-lg transition font-medium ${
                language === "es"
                  ? "bg-foreground text-background"
                  : "text-muted hover:text-foreground hover:bg-background/60"
              }`}
            >
              ES
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
