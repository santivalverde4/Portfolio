import { TechGroup } from "@/app/types/portfolio";

interface TechStackProps {
  groups: TechGroup[];
}

export function TechStack({ groups }: TechStackProps) {
  return (
    <section id="tecnologias" className="space-y-5">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Tecnologías</h2>
        <p className="mt-1 text-muted">Stack con el que construyo productos web de punta a punta.</p>
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
