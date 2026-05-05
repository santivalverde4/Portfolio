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
    <header
      className="sticky top-4 z-30 mb-12 rounded-[24px] border border-line/80 bg-surface/78 px-5 py-4 shadow-soft backdrop-blur-xl transition-[transform,background,border-color,padding,box-shadow] duration-300 md:px-7"
      data-nav-shell
    >
      <nav className="flex flex-wrap items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[color:var(--accent)] shadow-[0_0_18px_rgba(255,255,255,0.28)]" />
          <span className="font-display text-base font-semibold tracking-tight text-foreground">
            {profile.name}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-muted">
          <a
            className="cursor-pointer transition duration-200 hover:-translate-y-0.5 hover:text-foreground"
            href="#tecnologias"
          >
            {t.nav.technologies}
          </a>
          <a
            className="cursor-pointer transition duration-200 hover:-translate-y-0.5 hover:text-foreground"
            href="#proyectos"
          >
            {t.nav.projects}
          </a>
          <a
            className="cursor-pointer transition duration-200 hover:-translate-y-0.5 hover:text-foreground"
            href={profile.cvUrl}
            target="_blank"
            rel="noreferrer"
          >
            {t.nav.cv}
          </a>
          <a
            className="cursor-pointer transition duration-200 hover:-translate-y-0.5 hover:text-foreground"
            href="#contacto"
          >
            {t.nav.contact}
          </a>

          <div className="flex gap-2 border-l border-line/70 pl-5">
            <button
              onClick={() => setLanguage("en")}
              className={`cursor-pointer rounded-lg px-2.5 py-1.5 font-medium transition duration-200 ${
                language === "en"
                  ? "bg-foreground text-background"
                  : "text-muted hover:bg-[color:var(--surface-2)] hover:text-foreground"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("es")}
              className={`cursor-pointer rounded-lg px-2.5 py-1.5 font-medium transition duration-200 ${
                language === "es"
                  ? "bg-foreground text-background"
                  : "text-muted hover:bg-[color:var(--surface-2)] hover:text-foreground"
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
