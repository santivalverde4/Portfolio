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
    <section id="tecnologias" className="space-y-5">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">{t.techStack.title}</h2>
        <p className="mt-1 text-muted">{t.techStack.subtitle}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
        {groups.map((group) => (
          <article
            key={group.area}
            className="rounded-2xl border border-line bg-surface p-5 shadow-sm"
          >
            <h3 className="text-base font-semibold text-slate-900">{group.area}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((technology) => (
                <li
                  key={technology}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
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
