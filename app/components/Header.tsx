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
    <header className="sticky top-4 z-10 mb-8 rounded-2xl border border-line/70 bg-surface/90 px-5 py-3 shadow-sm backdrop-blur">
      <nav className="flex flex-wrap items-center justify-between gap-3 text-sm">
        <span className="font-semibold tracking-tight">{profile.name}</span>
        <div className="flex items-center gap-5 text-muted">
          <a className="hover:text-slate-900" href="#tecnologias">
            {t.nav.technologies}
          </a>
          <a className="hover:text-slate-900" href="#proyectos">
            {t.nav.projects}
          </a>
          <a className="hover:text-slate-900" href={profile.cvUrl} target="_blank" rel="noreferrer">
            {t.nav.cv}
          </a>
          <a className="hover:text-slate-900" href="#contacto">
            {t.nav.contact}
          </a>
          <div className="flex gap-2 border-l border-line pl-5">
            <button
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1 rounded-lg transition font-medium ${
                language === "en"
                  ? "bg-slate-900 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("es")}
              className={`px-2.5 py-1 rounded-lg transition font-medium ${
                language === "es"
                  ? "bg-slate-900 text-white"
                  : "text-slate-700 hover:bg-slate-100"
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
