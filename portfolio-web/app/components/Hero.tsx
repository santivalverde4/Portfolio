import { Profile } from "@/app/types/portfolio";

interface HeroProps {
  profile: Profile;
  projectCount: number;
  technologyCount: number;
}

export function Hero({ profile, projectCount, technologyCount }: HeroProps) {
  return (
    <section className="rounded-3xl border border-line bg-surface p-8 shadow-sm md:p-10">
      <div className="grid gap-8 md:grid-cols-[2fr_1fr] md:items-end">
        <div className="space-y-5">
          <p className="inline-flex rounded-full border border-line px-3 py-1 text-sm text-muted">
            {profile.role} · {profile.location}
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Desarrollo aplicaciones web y móviles accesibles y de alto desempeño.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted">{profile.summary}</p>
          <p className="text-sm font-medium text-slate-700">{profile.availability}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#proyectos"
              className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              Ver proyectos
            </a>
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-line px-5 py-2.5 text-sm font-medium text-slate-800 transition hover:bg-slate-100"
            >
              Descargar CV
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <article className="rounded-2xl border border-line bg-slate-50 p-4">
            <p className="text-xs text-muted">Proyectos</p>
            <p className="mt-1 text-2xl font-semibold">{projectCount}+</p>
          </article>
          <article className="rounded-2xl border border-line bg-slate-50 p-4">
            <p className="text-xs text-muted">Tecnologías</p>
            <p className="mt-1 text-2xl font-semibold">{technologyCount}+</p>
          </article>
          <article className="col-span-2 rounded-2xl border border-line bg-slate-50 p-4">
            <p className="text-xs text-muted">Enfoque</p>
            <p className="mt-1 text-sm font-medium leading-relaxed text-slate-700">
              Full-Stack, accesibilidad WCAG 2.1, arquitectura escalable y experiencia inclusiva.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
