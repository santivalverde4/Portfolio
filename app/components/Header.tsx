"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { translations } from "@/app/data/translations";
import { portfolioData } from "@/app/data/portfolio-i18n";

export function Header() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const data = portfolioData[language];
  const profile = data.profile;

  return (
    <header className="sticky top-4 z-20 mb-10 rounded-2xl border border-line/80 bg-surface/85 px-6 py-4 shadow-soft backdrop-blur">
      <nav className="flex flex-wrap items-center justify-between gap-4 text-sm">
        <span className="font-display text-base font-semibold tracking-tight">{profile.name}</span>
        <div className="flex flex-wrap items-center gap-5 text-muted">
          <a className="cursor-pointer transition duration-200 hover:text-foreground" href="#tecnologias">
            {t.nav.technologies}
          </a>
          <a className="cursor-pointer transition duration-200 hover:text-foreground" href="#proyectos">
            {t.nav.projects}
          </a>
          <a
            className="cursor-pointer transition duration-200 hover:text-foreground"
            href={profile.cvUrl}
            target="_blank"
            rel="noreferrer"
          >
            {t.nav.cv}
          </a>
          <a className="cursor-pointer transition duration-200 hover:text-foreground" href="#contacto">
            {t.nav.contact}
          </a>
          <div className="flex gap-2 border-l border-line/70 pl-5">
            <button
              onClick={() => setLanguage("en")}
              className={`cursor-pointer rounded-lg px-2.5 py-1.5 font-medium transition duration-200 ${
                language === "en"
                  ? "bg-foreground text-background"
                  : "text-muted hover:text-foreground hover:bg-[color:var(--surface-2)]"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("es")}
              className={`cursor-pointer rounded-lg px-2.5 py-1.5 font-medium transition duration-200 ${
                language === "es"
                  ? "bg-foreground text-background"
                  : "text-muted hover:text-foreground hover:bg-[color:var(--surface-2)]"
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
