"use client";
import { useEffect, useRef } from "react";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import Hero from "./sections/hero/Hero";
import Projects from "./sections/projects/Projects";
import Skills from "./sections/skills/Skills";
import Lenis from "@studio-freight/lenis";
import ButtonToStart from "./components/ButtonToHome";
import Journey from "./sections/journey/Journey";
import Navbar from "./components/Navbar";
import { useScroll } from "framer-motion";

export default function Home() {
  const container = useRef<any>();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const id = el.getAttribute("href")?.slice(1);
        if (!id) return;
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <Navbar />
      <main>
        <div ref={container} className="relative">
          <Hero progress={scrollYProgress}/>
          <Projects progress={scrollYProgress}/>
        </div>
        <Skills />
        <Journey />
        <Contact />
      </main>
      <Footer />
      <ButtonToStart />
    </>
  );
}
