"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { portfolioData } from "@/app/data/portfolio-i18n";
import { translations } from "@/app/data/translations";

interface HeroProps {
  projectCount: number;
  technologyCount: number;
}

export function Hero({ projectCount, technologyCount }: HeroProps) {
  const { language } = useLanguage();
  const t = translations[language];
  const data = portfolioData[language];
  const profile = data.profile;

  const stats = [
    { label: t.hero.projectsLabel, value: `${projectCount}+` },
    { label: t.hero.technologiesLabel, value: `${technologyCount}+` },
  ];

  return (
    <section
      id="inicio"
      className="reveal-up scroll-mt-28 relative overflow-hidden rounded-[36px] px-6 py-8 sm:px-8 lg:px-10 lg:py-10"
    >
      <div className="glass-panel absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,143,136,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(213,140,79,0.16),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.9),transparent_56%)] xl:block" />
      <div className="pointer-events-none absolute right-6 top-6 h-20 w-20 rounded-full border border-white/50 bg-white/40 blur-2xl" />

      <div className="relative z-10 grid gap-6 xl:grid-cols-[1.18fr_0.82fr] xl:items-stretch">
        <div className="flex flex-col justify-between">
          <div>
            <p className="section-kicker">{t.hero.kicker}</p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <span className="rounded-full border border-slate-900/10 bg-white/60 px-3 py-1.5 font-medium text-slate-700">
                {profile.role}
              </span>
              <span className="rounded-full border border-slate-900/10 bg-white/50 px-3 py-1.5 text-slate-600">
                {profile.location}
              </span>
            </div>

            <h1 className="mt-8 max-w-4xl text-balance font-display text-4xl leading-[0.95] tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl xl:text-[4.8rem]">
              {t.hero.title}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              {profile.summary}
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div className="flex flex-wrap gap-3">
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(15,23,42,0.22)] hover:-translate-y-0.5 hover:bg-slate-800"
              >
                {t.hero.viewProjects}
              </a>
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/60 px-5 py-3 text-sm font-semibold text-slate-800 shadow-[0_18px_40px_rgba(15,23,42,0.06)] hover:-translate-y-0.5 hover:bg-white"
              >
                {t.hero.downloadCV}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-muted">
                {t.hero.connectLabel}
              </span>
              {profile.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-slate-900/10 bg-white/55 px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.04)] hover:-translate-y-0.5 hover:bg-white hover:text-slate-950"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <article
            className="reveal-up hero-grid glass-panel relative overflow-hidden rounded-[30px] p-6"
            style={{ animationDelay: "120ms" }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.72),transparent_52%)]" />
            <div className="relative z-10">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-muted">
                {profile.role}
              </p>
              <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600">
                {profile.location}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {stats.map((stat) => (
                  <article
                    key={stat.label}
                    className="rounded-[24px] border border-slate-900/10 bg-white/70 p-4 shadow-[0_12px_28px_rgba(15,23,42,0.05)]"
                  >
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted">
                      {stat.label}
                    </p>
                    <p className="mt-3 font-display text-3xl tracking-[-0.05em] text-slate-950">
                      {stat.value}
                    </p>
                  </article>
                ))}
                <article className="rounded-[24px] border border-slate-900/10 bg-white/70 p-4 shadow-[0_12px_28px_rgba(15,23,42,0.05)] sm:col-span-2">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted">
                    {t.hero.focusLabel}
                  </p>
                  <p className="mt-3 text-sm font-medium leading-7 text-slate-700">
                    {profile.availability}
                  </p>
                </article>
              </div>
            </div>
          </article>

          <article
            className="reveal-up relative overflow-hidden rounded-[30px] bg-[linear-gradient(150deg,#17212b_0%,#0b6f69_62%,#1f2a36_100%)] p-6 text-white shadow-[0_34px_90px_rgba(27,40,52,0.22)]"
            style={{ animationDelay: "240ms" }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_30%)]" />
            <div className="relative z-10">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-white/60">
                {t.hero.focusLabel}
              </p>
              <h2 className="mt-4 max-w-sm font-display text-2xl leading-tight tracking-[-0.04em] text-white">
                {t.hero.focusText}
              </h2>
              <p className="mt-6 text-sm font-medium text-white/70">{t.hero.capabilitiesTitle}</p>
              <ul className="mt-4 space-y-3">
                {t.hero.capabilities.map((capability) => (
                  <li key={capability} className="flex gap-3 text-sm leading-7 text-white/82">
                    <span className="mt-3 h-px w-6 shrink-0 bg-white/40" />
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
