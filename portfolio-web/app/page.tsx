import { profile, projects, techGroups } from "@/app/data/portfolio";
import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { TechStack } from "@/app/components/TechStack";
import { Projects } from "@/app/components/Projects";
import { Footer } from "@/app/components/Footer";

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

      <Footer profile={profile} />
    </div>
  );
}
