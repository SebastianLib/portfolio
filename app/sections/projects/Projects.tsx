import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import StickyScroll from "./components/StickyScroll";
import { MotionValue, useTransform, motion } from "framer-motion";

const Projects = ({progress}:{progress:MotionValue<number>}) => {

  const scale = useTransform(progress, [0,1], [0.9, 1])
  const rotate = useTransform(progress, [0,0.5], [-5, 0])

  return (
    <motion.section style={{scale, rotate}} id="projects" className="bg-black z-40 relative">
      <div className="max-w-7xl mx-auto pt-20">
        <TextGenerateEffect words={"My Projects"} className="z-10 relative" />
        <StickyScroll />
      </div>
    </motion.section>
  );
};

export default Projects;
