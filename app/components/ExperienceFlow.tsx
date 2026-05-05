"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { translations } from "@/app/data/translations";

export function ExperienceFlow() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="experiencia"
      className="relative overflow-hidden rounded-[30px] border border-line bg-surface p-8 shadow-soft md:p-10"
      data-reveal="section"
      data-parallax-scope
    >
      <div
        className="pointer-events-none absolute -right-16 top-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.09),transparent_68%)] blur-3xl"
        data-parallax="soft"
      />

      <div
        className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        data-reveal-group
      >
        <div className="max-w-2xl">
          <p
            className="font-mono text-[11px] font-medium uppercase tracking-[0.34em] text-muted"
            data-reveal-item
          >
            {t.flow.eyebrow}
          </p>
          <h2
            className="mt-3 font-display text-3xl font-semibold tracking-[-0.03em] md:text-4xl"
            data-reveal-item
          >
            {t.flow.title}
          </h2>
          <p className="mt-3 text-muted" data-reveal-item>
            {t.flow.subtitle}
          </p>
        </div>

        <div
          className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-[color:var(--surface-2)] px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-foreground/75"
          data-reveal-item
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
          {t.flow.tag}
        </div>
      </div>

      <div className="relative mt-10" data-reveal-group>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-6 left-6 w-px bg-gradient-to-b from-[color:var(--accent)]/80 via-white/16 to-transparent md:inset-y-auto md:left-10 md:right-10 md:top-7 md:h-px md:w-auto md:bg-gradient-to-r"
        />

        <div className="grid gap-4 md:grid-cols-3">
          {t.flow.steps.map((step, index) => (
            <article
              key={step.title}
              className="group relative overflow-hidden rounded-[24px] border border-line bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 pt-10 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)]/35 hover:bg-[color:var(--surface-2)]/70"
              data-reveal-item
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
              <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/25 font-mono text-[11px] font-semibold text-[color:var(--accent)]">
                0{index + 1}
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
