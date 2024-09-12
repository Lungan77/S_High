import Hero_section from "@/components/hero_section";
import Features from "@/components/features"
import About from "@/components/about";
import ProgramsCurriculum from "@/components/programs";

export default function Home() {
  return (
    <>
      <Hero_section />
      <Features />
      <ProgramsCurriculum />
      <About/>
    </>
  );
}
