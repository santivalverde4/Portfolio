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
    <section id="tecnologias" className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
          {t.techStack.title}
        </h2>
        <p className="mt-1 text-muted">{t.techStack.subtitle}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <article
            key={group.area}
            className="group relative rounded-2xl border border-line bg-surface p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)]/40"
          >
            <h3 className="font-display text-base font-semibold text-foreground">{group.area}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((technology) => (
                <li
                  key={technology}
                  className="rounded-full border border-line/70 bg-[color:var(--surface-2)] px-3 py-1 text-xs font-medium text-muted transition duration-200 group-hover:border-[color:var(--accent)]/40"
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
