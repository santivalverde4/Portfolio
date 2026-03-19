import { profile, projects, techGroups } from "@/app/data/portfolio";
import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { TechStack } from "@/app/components/TechStack";
import { Projects } from "@/app/components/Projects";

export const metadata = {
  title: `${profile.name} - Portfolio`,
  description: profile.summary,
};

export default function Home() {
  const projectCount = projects.length;
  const technologyCount = techGroups.reduce(
    (accumulator, group) => accumulator + group.items.length,
    0,
  );

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-8 text-slate-900 md:px-10 lg:px-14">
      <Header profile={profile} />

      <main className="space-y-14 pb-14">
        <Hero profile={profile} projectCount={projectCount} technologyCount={technologyCount} />
        <TechStack groups={techGroups} />
        <Projects projects={projects} />
      </main>

      <footer id="contacto" className="border-t border-line pt-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold">Contacto</h3>
            <p className="mt-2 text-muted">
              ¿Interesado en colaborar? Escribeme un email o conecta conmigo en mis redes.
            </p>
          </div>
          <div className="space-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="block text-sm font-medium text-slate-700 transition hover:text-slate-900"
            >
              ✉️ {profile.email}
            </a>
            {profile.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="block text-sm font-medium text-slate-700 transition hover:text-slate-900"
              >
                → {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-line pt-8 text-center text-sm text-muted">
          <p>© 2025 {profile.name}. Construido con Next.js + TypeScript.</p>
        </div>
      </footer>
    </div>
  );
}
