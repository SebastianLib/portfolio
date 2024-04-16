import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import StickyScroll from "./components/StickyScroll";

const Projects = () => {
  return (
    <section id="projects" className="">
      <div className="max-w-7xl mx-auto pt-20 ">
        <TextGenerateEffect words={"My Projects"} className="z-10 relative" />
        <StickyScroll />
      </div>
    </section>
  );
};

export default Projects;
