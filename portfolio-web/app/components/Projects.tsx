import { Project } from "@/app/types/portfolio";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="proyectos" className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Proyectos destacados</h2>
        <p className="mt-1 text-muted">Trabajos recientes que demuestran mis habilidades y experiencia.</p>
      </div>

      <div className="grid gap-6">
        {projects.map((project, index) => (
          <article
            key={index}
            className="group overflow-hidden rounded-3xl border border-line bg-surface shadow-sm transition hover:shadow-md"
          >
            <div className="p-8">
              <div className="mb-4 flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                  <p className="mt-2 max-w-2xl text-muted">{project.description}</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-sm font-medium text-slate-700">Stack</p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-700">Highlights</p>
                  <ul className="mt-2 space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-700">
                        <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
                >
                  Ver Demo
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-lg border border-line px-4 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-100"
                >
                  Repositorio
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
