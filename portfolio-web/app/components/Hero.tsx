"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { translations } from "@/app/data/translations";
import { portfolioData } from "@/app/data/portfolio-i18n";

interface HeroProps {
  projectCount: number;
  technologyCount: number;
}

export function Hero({ projectCount, technologyCount }: HeroProps) {
  const { language } = useLanguage();
  const t = translations[language];
  const data = portfolioData[language];
  const profile = data.profile;

  return (
    <section className="rounded-3xl border border-line bg-surface p-8 shadow-sm md:p-10">
      <div className="grid gap-8 md:grid-cols-[2fr_1fr] md:items-end">
        <div className="space-y-5">
          <p className="inline-flex rounded-full border border-line px-3 py-1 text-sm text-muted">
            {profile.role} · {profile.location}
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            {t.hero.title}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted">{profile.summary}</p>
          <p className="text-sm font-medium text-slate-700">{profile.availability}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#proyectos"
              className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              {t.hero.viewProjects}
            </a>
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-line px-5 py-2.5 text-sm font-medium text-slate-800 transition hover:bg-slate-100"
            >
              {t.hero.downloadCV}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <article className="rounded-2xl border border-line bg-slate-50 p-4">
            <p className="text-xs text-muted">{t.hero.projectsLabel}</p>
            <p className="mt-1 text-2xl font-semibold">{projectCount}+</p>
          </article>
          <article className="rounded-2xl border border-line bg-slate-50 p-4">
            <p className="text-xs text-muted">{t.hero.technologiesLabel}</p>
            <p className="mt-1 text-2xl font-semibold">{technologyCount}+</p>
          </article>
          <article className="col-span-2 rounded-2xl border border-line bg-slate-50 p-4">
            <p className="text-xs text-muted">{t.hero.focusLabel}</p>
            <p className="mt-1 text-sm font-medium leading-relaxed text-slate-700">
              {t.hero.focusText}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
