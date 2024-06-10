import Image from "next/image";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import { MotionValue, useTransform, motion } from "framer-motion";

const Hero = ({progress}:{progress:MotionValue<number>}) => {

  const scale = useTransform(progress, [0,1], [1, 0.4])
  const rotate = useTransform(progress, [0,1], [0, -10])

  return (
    <motion.section style={{scale, rotate}} id="home" className="pt-28 sticky top-0 overflow-hidden">
      <div className="flex flex-col lg:flex-row max-w-7xl w-full min-h-[calc(100vh-7rem)] mx-auto px-4">
        <LeftSide />
        <RightSide/>
      </div>
    </motion.section>
  );
};

export default Hero;
