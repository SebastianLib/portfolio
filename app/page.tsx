import Hero from "./sections/hero/Hero";
import Projects from "./sections/projects/Projects";

export default function Home() {
  return (
    <main className="h-[2000px]">
      <Hero/>
      <Projects/>
    </main>
  );
}
