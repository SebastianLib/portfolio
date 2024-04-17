"use client";
import Image from "next/image";
import CvButton from "./CvButton";
import { motion } from "framer-motion";

const RightSide = () => {
  return (
    <div className="w-full min-h-[550px] relative">
      <CvButton />
      <div className="w-[450px] h-[380px] md:w-[950px] md:h-[700px] absolute  overflow-visible -right-36">
        <Image src="/elipses.svg" fill alt="elipse" />
      </div>
      <motion.div
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: -190 }}
        transition={{ duration: 1, delay: 2 }}
        className="w-[280px] h-[360px] md:w-[400px] md:h-[500px] 2xl:w-[450px] 2xl:h-[600px] z-10 absolute -bottom-4 md:bottom-0 left-[50%] 
      translate-x-[-50%] "
      >
        <Image
          src="/profile.png"
          alt="person"
          fill
          className="object-cover transform scale-x-[-1]"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ duration: 1, delay: 1.3 }}
        className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[800px] 2xl:h-[850px] 2xl:w-[850px] absolute -bottom-44 md:-bottom-72 left-[50%] 
      translate-x-[-50%] "
      >
        <Image src="/blob.svg" alt="person" fill className="absolute" />
      </motion.div>
    </div>
  );
};

export default RightSide;
