import Hero from "./sections/hero/Hero";
import Projects from "./sections/projects/Projects";
import Skills from "./sections/skills/Skills";

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <Projects/>
      <Skills/>
    </main>
  );
}
