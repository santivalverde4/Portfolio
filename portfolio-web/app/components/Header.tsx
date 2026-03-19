import { Profile } from "@/app/types/portfolio";

interface HeaderProps {
  profile: Profile;
}

export function Header({ profile }: HeaderProps) {
  return (
    <header className="sticky top-4 z-10 mb-8 rounded-2xl border border-line/70 bg-surface/90 px-5 py-3 shadow-sm backdrop-blur">
      <nav className="flex flex-wrap items-center justify-between gap-3 text-sm">
        <span className="font-semibold tracking-tight">{profile.name}</span>
        <div className="flex items-center gap-5 text-muted">
          <a className="hover:text-slate-900" href="#tecnologias">
            Tecnologías
          </a>
          <a className="hover:text-slate-900" href="#proyectos">
            Proyectos
          </a>
          <a className="hover:text-slate-900" href="#cv">
            CV
          </a>
          <a className="hover:text-slate-900" href="#contacto">
            Contacto
          </a>
        </div>
      </nav>
    </header>
  );
}
