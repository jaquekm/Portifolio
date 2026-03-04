import { Hero } from "@/components/sections/Hero";
import { Authority } from "@/components/sections/Authority";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Specialties } from "@/components/sections/Specialties";
import { ArticlesPreview } from "@/components/sections/ArticlesPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <Authority />
      <Projects />
      <Specialties />
      <ArticlesPreview />
      <About />
    </>
  );
}
