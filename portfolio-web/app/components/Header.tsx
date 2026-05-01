"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { portfolioData } from "@/app/data/portfolio-i18n";
import { translations } from "@/app/data/translations";

export function Header() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const data = portfolioData[language];
  const profile = data.profile;
  const headerLabel =
    language === "es" ? "Ingenieria de software" : "Software engineering";

  const initials = profile.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

  const navItems = [
    { href: "#tecnologias", label: t.nav.technologies },
    { href: "#proyectos", label: t.nav.projects },
    { href: profile.cvUrl, label: t.nav.cv, external: true },
    { href: "#contacto", label: t.nav.contact },
  ];

  return (
    <header className="reveal-up sticky top-4 z-30 mb-6">
      <nav className="glass-panel rounded-[32px] px-4 py-4 sm:px-5 lg:px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between gap-3">
            <a href="#inicio" className="group flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#16202b_0%,#0f8f88_58%,#d58c4f_100%)] font-display text-sm font-semibold tracking-[0.24em] text-white shadow-[0_20px_40px_rgba(15,143,136,0.18)]">
                {initials}
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-[0.65rem] uppercase tracking-[0.28em] text-muted">
                  {headerLabel}
                </span>
                <span className="block truncate pt-1 font-semibold text-slate-950">
                  {profile.name}
                </span>
              </span>
            </a>

            <div className="hidden items-center gap-2 rounded-full border border-slate-900/10 bg-white/60 px-3 py-2 shadow-[0_12px_30px_rgba(15,23,42,0.05)] md:inline-flex lg:hidden">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inset-0 rounded-full bg-emerald-500/45 animate-ping" />
                <span className="relative rounded-full bg-emerald-500" />
              </span>
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-slate-600">
                {profile.availability}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
            <div className="flex flex-wrap items-center gap-2 lg:justify-center">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="inline-flex items-center rounded-full px-3 py-2 text-sm font-medium text-slate-600 hover:-translate-y-0.5 hover:bg-white hover:text-slate-950"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center justify-between gap-3">
              <div className="hidden items-center gap-2 rounded-full border border-slate-900/10 bg-white/60 px-3 py-2 shadow-[0_12px_30px_rgba(15,23,42,0.05)] lg:inline-flex">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inset-0 rounded-full bg-emerald-500/45 animate-ping" />
                  <span className="relative rounded-full bg-emerald-500" />
                </span>
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-slate-600">
                  {profile.availability}
                </span>
              </div>

              <div className="inline-flex rounded-full border border-slate-900/10 bg-white/70 p-1 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
                <button
                  type="button"
                  onClick={() => setLanguage("es")}
                  aria-pressed={language === "es"}
                  className={`rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] ${
                    language === "es"
                      ? "bg-slate-950 text-white shadow-[0_10px_24px_rgba(15,23,42,0.18)]"
                      : "text-slate-600 hover:bg-white hover:text-slate-950"
                  }`}
                >
                  ES
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  aria-pressed={language === "en"}
                  className={`rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] ${
                    language === "en"
                      ? "bg-slate-950 text-white shadow-[0_10px_24px_rgba(15,23,42,0.18)]"
                      : "text-slate-600 hover:bg-white hover:text-slate-950"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
