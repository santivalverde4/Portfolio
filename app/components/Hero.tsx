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
    <section className="relative overflow-hidden rounded-[28px] border border-line bg-surface p-8 shadow-soft md:p-12">
      <div className="grid gap-8 md:grid-cols-[2fr_1fr] md:items-end">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-[color:var(--surface-2)] px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
              {profile.role}
            </span>
            <span className="text-muted">{profile.location}</span>
          </div>
          <h1 className="font-display max-w-2xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            {t.hero.title}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted">{profile.summary}</p>
          <p className="text-sm font-medium text-muted">{profile.availability}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#proyectos"
              className="cursor-pointer rounded-xl bg-[color:var(--accent)] px-5 py-2.5 text-sm font-semibold text-black transition duration-200 hover:bg-[color:var(--accent-strong)]"
            >
              {t.hero.viewProjects}
            </a>
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer rounded-xl border border-line px-5 py-2.5 text-sm font-semibold text-foreground transition duration-200 hover:border-[color:var(--accent)]/40 hover:bg-[color:var(--surface-2)]"
            >
              {t.hero.downloadCV}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <article className="rounded-2xl border border-line bg-[color:var(--surface-2)]/70 p-4 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)]/40 hover:bg-surface motion-rise">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">{t.hero.projectsLabel}</p>
            <p className="mt-2 font-display text-3xl font-semibold">{projectCount}+</p>
          </article>
          <article className="rounded-2xl border border-line bg-[color:var(--surface-2)]/70 p-4 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)]/40 hover:bg-surface motion-rise motion-delay-1">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">{t.hero.technologiesLabel}</p>
            <p className="mt-2 font-display text-3xl font-semibold">{technologyCount}+</p>
          </article>
          <article className="col-span-2 rounded-2xl border border-line bg-[color:var(--surface-2)]/70 p-4 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)]/40 hover:bg-surface motion-rise motion-delay-2">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">{t.hero.focusLabel}</p>
            <p className="mt-2 text-sm font-medium leading-relaxed text-muted">
              {t.hero.focusText}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
