import { portfolioData } from "@/app/data/portfolio-i18n";
import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { TechStack } from "@/app/components/TechStack";
import { Projects } from "@/app/components/Projects";
import { Footer } from "@/app/components/Footer";

const defaultData = portfolioData.es;

export const metadata = {
  title: `${defaultData.profile.name} - Portfolio`,
  description: defaultData.profile.summary,
};

export default function Home() {
  const projectCount = defaultData.projects.length;
  const technologyCount = defaultData.techGroups.reduce(
    (accumulator, group) => accumulator + group.items.length,
    0,
  );

  return (
    <div className="relative isolate">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.68),transparent_62%)]" />
      <div className="mx-auto w-full max-w-[1280px] px-4 py-5 text-slate-900 sm:px-6 lg:px-10">
        <Header />

        <main className="space-y-6 pb-8 md:space-y-8 md:pb-10">
          <Hero projectCount={projectCount} technologyCount={technologyCount} />
          <TechStack />
          <Projects />
        </main>

        <Footer />
      </div>
    </div>
  );
}
