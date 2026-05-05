"use client";

import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselItem,
  CarouselNavigation,
} from "@/app/components/Carousel";
import { useLanguage } from "@/app/context/LanguageProvider";
import { translations } from "@/app/data/translations";
import { portfolioData } from "@/app/data/portfolio-i18n";

export function Projects() {
  const { language } = useLanguage();
  const t = translations[language];
  const data = portfolioData[language];
  const projects = data.projects;
  const labels =
    language === "es"
      ? {
          carousel: "Carrusel de proyectos",
          previous: "Proyecto anterior",
          next: "Proyecto siguiente",
          slide: (index: number) => `Ir al proyecto ${index + 1}`,
        }
      : {
          carousel: "Projects carousel",
          previous: "Previous project",
          next: "Next project",
          slide: (index: number) => `Go to project ${index + 1}`,
        };

  return (
    <section id="proyectos" className="space-y-8" data-reveal="section" data-parallax-scope>
      <div className="relative" data-reveal-group>
        <div
          className="pointer-events-none absolute -right-24 -top-8 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_70%)] blur-3xl"
          data-parallax="soft"
        />
        <p
          className="font-mono text-[11px] uppercase tracking-[0.34em] text-muted"
          data-reveal-item
        >
          Work
        </p>
        <h2
          className="mt-3 font-display text-3xl font-semibold tracking-[-0.03em] md:text-4xl"
          data-reveal-item
        >
          {t.projects.title}
        </h2>
        <p className="mt-3 max-w-2xl text-muted" data-reveal-item>
          {t.projects.subtitle}
        </p>
      </div>

      <div data-reveal-group>
        <Carousel ariaLabel={labels.carousel} className="pb-2">
          <CarouselContent className="items-stretch">
            {projects.map((project, index) => (
              <CarouselItem key={`${project.title}-${index}`}>
                <article
                  className="group relative h-full overflow-hidden rounded-[30px] border border-line bg-surface shadow-soft transition duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)]/35"
                  data-reveal-item
                >
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.06),transparent_45%,rgba(255,255,255,0.03))]" />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
                  <div className="pointer-events-none absolute -right-16 top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.1),transparent_70%)] opacity-0 blur-3xl transition duration-300 group-hover:opacity-100" />

                  <div className="relative z-10 p-5 sm:p-6 md:p-8">
                    <div className="mb-5 flex items-start justify-between gap-6">
                      <div className="flex-1">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/70">
                          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <h3 className="mt-4 font-display text-2xl font-semibold text-foreground md:text-3xl">
                          {project.title}
                        </h3>
                        <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                          {t.projects.stack}
                        </p>
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <li
                              key={tech}
                              className="rounded-full border border-line/70 bg-[color:var(--surface-2)] px-3 py-1 text-xs font-medium text-muted transition duration-200 group-hover:border-[color:var(--accent)]/25 group-hover:text-foreground/85"
                            >
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                          {t.projects.highlights}
                        </p>
                        <ul className="mt-3 space-y-3">
                          {project.highlights.map((highlight, highlightIndex) => (
                            <li
                              key={highlightIndex}
                              className="flex gap-3 text-sm leading-relaxed text-muted"
                            >
                              <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-[color:var(--accent)]"></span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex cursor-pointer items-center gap-3 rounded-xl bg-[color:var(--accent)] px-4 py-2.5 text-sm font-semibold text-black transition duration-200 hover:bg-[color:var(--accent-strong)]"
                      >
                        {t.projects.viewRepo}
                        <ArrowUpRightIcon />
                      </a>
                    </div>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselNavigation alwaysShow previousLabel={labels.previous} nextLabel={labels.next} />
          <CarouselIndicator getAriaLabel={labels.slide} />
        </Carousel>
      </div>
    </section>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 14 14 6" />
      <path d="M7 6h7v7" />
    </svg>
  );
}
