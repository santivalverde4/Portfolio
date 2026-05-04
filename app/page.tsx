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
  const projectCount = 15;
  const technologyCount = defaultData.techGroups.reduce(
    (accumulator, group) => accumulator + group.items.length,
    0,
  );

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-8 text-slate-900 md:px-10 lg:px-14">
      <Header />

      <main className="space-y-14 pb-14">
        <Hero projectCount={projectCount} technologyCount={technologyCount} />
        <TechStack />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}
