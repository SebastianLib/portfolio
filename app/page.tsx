import Contact from "./sections/contact/Contact";
import Hero from "./sections/hero/Hero";
import Projects from "./sections/projects/Projects";
import Skills from "./sections/skills/Skills";

export default function Home() {
  console.log(process.env.SERVICE_ID);
  return (
    <main className="">
      <Hero/>
      <Projects/>
      <Skills/>
      <Contact/>
    </main>
  );
}
