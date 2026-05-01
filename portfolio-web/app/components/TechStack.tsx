"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { portfolioData } from "@/app/data/portfolio-i18n";
import { translations } from "@/app/data/translations";

const stackAccents = [
  {
    panel: "from-[#0f8f88]/18 via-white/78 to-white/82",
    badge: "border-[#0f8f88]/15 bg-[#0f8f88]/12 text-[#0b6f69]",
  },
  {
    panel: "from-[#d58c4f]/18 via-white/78 to-white/84",
    badge: "border-[#d58c4f]/15 bg-[#d58c4f]/12 text-[#8f5622]",
  },
  {
    panel: "from-[#16202b]/10 via-white/82 to-white/88",
    badge: "border-slate-900/10 bg-slate-900/8 text-slate-700",
  },
];

export function TechStack() {
  const { language } = useLanguage();
  const t = translations[language];
  const data = portfolioData[language];
  const groups = data.techGroups;

  return (
    <section
      id="tecnologias"
      className="scroll-mt-28 grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start"
    >
      <div className="reveal-up lg:sticky lg:top-24">
        <div className="glass-panel relative overflow-hidden rounded-[32px] px-6 py-7 sm:px-7">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,143,136,0.1),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(213,140,79,0.12),transparent_40%)]" />
          <div className="relative z-10">
            <p className="section-kicker">{t.techStack.eyebrow}</p>
            <h2 className="mt-5 max-w-lg font-display text-3xl leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl">
              {t.techStack.title}
            </h2>
            <p className="mt-4 max-w-md text-base leading-8 text-slate-600">
              {t.techStack.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {groups.map((group, index) => {
          const accent = stackAccents[index % stackAccents.length];
          const isWideCard = index === groups.length - 1;

          return (
            <article
              key={group.area}
              className={`reveal-up group relative overflow-hidden rounded-[30px] border border-white/65 bg-white/72 p-5 shadow-[0_24px_60px_rgba(27,40,52,0.08)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(27,40,52,0.12)] ${
                isWideCard ? "md:col-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 90 + 120}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${accent.panel} opacity-90`} />
              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex rounded-full border px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.24em] ${accent.badge}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-slate-900/10" />
                </div>

                <h3 className="mt-5 font-display text-2xl tracking-[-0.04em] text-slate-950">
                  {group.area}
                </h3>

                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {group.items.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full border border-white/70 bg-white/75 px-3 py-1.5 text-[0.75rem] font-medium text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.04)]"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
