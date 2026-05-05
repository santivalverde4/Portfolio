"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { translations } from "@/app/data/translations";
import { portfolioData } from "@/app/data/portfolio-i18n";

export function TechStack() {
  const { language } = useLanguage();
  const t = translations[language];
  const data = portfolioData[language];
  const groups = data.techGroups;

  return (
    <section id="tecnologias" className="space-y-8" data-reveal="section">
      <div className="max-w-3xl" data-reveal-group>
        <p
          className="font-mono text-[11px] uppercase tracking-[0.34em] text-muted"
          data-reveal-item
        >
          Stack
        </p>
        <h2
          className="mt-3 font-display text-3xl font-semibold tracking-[-0.03em] md:text-4xl"
          data-reveal-item
        >
          {t.techStack.title}
        </h2>
        <p className="mt-3 text-muted" data-reveal-item>
          {t.techStack.subtitle}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" data-reveal-group>
        {groups.map((group) => (
          <article
            key={group.area}
            className="group relative overflow-hidden rounded-[24px] border border-line bg-surface p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)]/35 hover:bg-[color:var(--surface-2)]/72"
            data-reveal-item
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
            <div className="pointer-events-none absolute -right-10 top-6 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.09),transparent_72%)] opacity-0 blur-2xl transition duration-300 group-hover:opacity-100" />
            <h3 className="font-display text-lg font-semibold text-foreground">{group.area}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((technology) => (
                <li
                  key={technology}
                  className="rounded-full border border-line/70 bg-[color:var(--surface-2)]/78 px-3 py-1 text-xs font-medium text-muted transition duration-200 group-hover:border-[color:var(--accent)]/30 group-hover:text-foreground/85"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
