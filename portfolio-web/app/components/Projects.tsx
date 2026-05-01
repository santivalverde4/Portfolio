"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { portfolioData } from "@/app/data/portfolio-i18n";
import { translations } from "@/app/data/translations";

const projectAccents = [
  "from-[#0f8f88]/16 via-white/82 to-white/88",
  "from-[#d58c4f]/18 via-white/82 to-white/88",
  "from-[#17212b]/10 via-white/84 to-white/90",
];

const projectBadgeAccents = [
  "border-[#0f8f88]/15 bg-[#0f8f88]/12 text-[#0b6f69]",
  "border-[#d58c4f]/15 bg-[#d58c4f]/12 text-[#8f5622]",
  "border-slate-900/10 bg-slate-900/8 text-slate-700",
];

export function Projects() {
  const { language } = useLanguage();
  const t = translations[language];
  const data = portfolioData[language];
  const projects = data.projects;

  return (
    <section id="proyectos" className="scroll-mt-28 space-y-6">
      <div className="reveal-up flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="section-kicker">{t.projects.eyebrow}</p>
          <h2 className="mt-5 max-w-3xl font-display text-3xl leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl">
            {t.projects.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="rounded-[24px] border border-slate-900/10 bg-white/55 px-4 py-3 text-sm font-medium text-slate-600 shadow-[0_14px_36px_rgba(15,23,42,0.05)]">
          {projects.length.toString().padStart(2, "0")} {t.nav.projects.toLowerCase()}
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-12">
        {projects.map((project, index) => {
          const accent = projectAccents[index % projectAccents.length];
          const badgeAccent = projectBadgeAccents[index % projectBadgeAccents.length];
          const hasSeparateDemo = project.demoUrl !== project.repoUrl;
          const spanClass = index === 0 || index === projects.length - 1 ? "xl:col-span-7" : "xl:col-span-5";

          return (
            <article
              key={project.title}
              className={`reveal-up group relative overflow-hidden rounded-[32px] border border-white/70 bg-white/72 p-6 shadow-[0_26px_70px_rgba(27,40,52,0.08)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:shadow-[0_34px_90px_rgba(27,40,52,0.12)] md:p-7 ${spanClass}`}
              style={{ animationDelay: `${index * 110 + 160}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-90`} />
              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`inline-flex rounded-full border px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.24em] ${badgeAccent}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 max-w-2xl font-display text-2xl leading-tight tracking-[-0.04em] text-slate-950">
                  {project.title}
                </h3>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  {project.description}
                </p>

                <div className="mt-6">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-muted">
                    {t.projects.stack}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-white/70 bg-white/76 px-3 py-1.5 text-[0.75rem] font-medium text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.04)]"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 grow">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-muted">
                    {t.projects.highlights}
                  </p>
                  <ul className="mt-3 grid gap-3 md:grid-cols-2">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="rounded-[22px] border border-white/70 bg-white/68 p-4 text-sm leading-6 text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.04)]"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {hasSeparateDemo ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_16px_36px_rgba(15,23,42,0.16)] hover:-translate-y-0.5 hover:bg-slate-800"
                    >
                      {t.projects.viewDemo}
                    </a>
                  ) : null}
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-slate-900/10 bg-white/60 px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-[0_16px_36px_rgba(15,23,42,0.05)] hover:-translate-y-0.5 hover:bg-white"
                  >
                    {t.projects.viewRepo}
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
