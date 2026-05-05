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
    <section id="proyectos" className="space-y-8">
      <div>
        <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
          {t.projects.title}
        </h2>
        <p className="mt-1 text-muted">{t.projects.subtitle}</p>
      </div>

      <Carousel ariaLabel={labels.carousel} className="pb-2">
        <CarouselContent className="items-stretch">
          {projects.map((project, index) => (
            <CarouselItem key={`${project.title}-${index}`}>
              <article
                className={`group h-full overflow-hidden rounded-3xl border border-line bg-surface shadow-soft transition duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)]/40 motion-rise motion-delay-${(index % 4) + 1}`}
              >
                <div className="p-5 sm:p-6 md:p-8">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-semibold text-foreground md:text-2xl">
                        {project.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-muted">{project.description}</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                        {t.projects.stack}
                      </p>
                      <ul className="mt-2 flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <li
                            key={tech}
                            className="rounded-full border border-line/70 bg-[color:var(--surface-2)] px-3 py-1 text-xs font-medium text-muted"
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
                      <ul className="mt-2 space-y-2">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex gap-3 text-sm text-muted">
                            <span className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-[color:var(--accent)]"></span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex cursor-pointer rounded-lg border border-line px-4 py-2 text-sm font-semibold text-foreground transition duration-200 hover:border-[color:var(--accent)]/40 hover:bg-[color:var(--surface-2)]"
                      >
                        {t.projects.viewDemo}
                      </a>
                    )}
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex cursor-pointer rounded-lg bg-[color:var(--accent)] px-4 py-2 text-sm font-semibold text-black transition duration-200 hover:bg-[color:var(--accent-strong)]"
                    >
                      {t.projects.viewRepo}
                    </a>
                  </div>
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNavigation
          alwaysShow
          previousLabel={labels.previous}
          nextLabel={labels.next}
        />
        <CarouselIndicator getAriaLabel={labels.slide} />
      </Carousel>
    </section>
  );
}
