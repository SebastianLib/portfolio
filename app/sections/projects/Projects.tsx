import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import StickyScroll from "./components/StickyScroll";

const Projects = () => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto">
        <TextGenerateEffect words={"My Projects"} className="mt-20 z-10 relative" />
        <StickyScroll />
      </div>
    </section>
  );
};

export default Projects;
