import { portfolioData } from "@/app/data/portfolio-i18n";
import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { ExperienceFlow } from "@/app/components/ExperienceFlow";
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
    <div className="mx-auto w-full max-w-7xl px-4 py-8 text-foreground md:px-8 md:py-10 lg:px-12">
      <Header />

      <main className="space-y-20 pb-20 lg:space-y-24">
        <Hero projectCount={projectCount} technologyCount={technologyCount} />
        <ExperienceFlow />
        <TechStack />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}
