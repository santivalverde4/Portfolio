"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { translations } from "@/app/data/translations";

export function ExperienceFlow() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="experiencia" className="rounded-3xl border border-line bg-surface p-8 shadow-soft md:p-10">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted">{t.flow.eyebrow}</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            {t.flow.title}
          </h2>
          <p className="mt-2 max-w-2xl text-muted">{t.flow.subtitle}</p>
        </div>
        <div className="rounded-full border border-line bg-[color:var(--surface-2)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-muted">
          {t.flow.tag}
        </div>
      </div>

      <div className="relative mt-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-6 left-6 w-px bg-gradient-to-b from-[color:var(--accent)]/70 via-[color:var(--line)] to-transparent md:inset-y-auto md:left-10 md:right-10 md:top-7 md:h-px md:w-auto md:bg-gradient-to-r"
        />
        <div className="grid gap-4 md:grid-cols-3">
          {t.flow.steps.map((step, index) => (
            <article
              key={step.title}
              className={`group relative rounded-2xl border border-line bg-[color:var(--surface-2)]/60 p-6 pt-10 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)]/40 hover:bg-surface motion-rise motion-delay-${index + 1}`}
            >
              <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface text-xs font-semibold text-[color:var(--accent)]">
                0{index + 1}
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
