"use client";
import Image from "next/image";
import CvButton from "./CvButton";
import { motion } from "framer-motion";

const RightSide = () => {
  return (
    <div className="w-full min-h-[550px] relative">
      <CvButton />
      <div className="w-[450px] h-[380px] lg:w-[950px] lg:h-[700px] absolute  overflow-visible -right-36 top-4">
        <Image src="/elipses.svg" fill alt="elipse" />
      </div>
      <motion.div
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: -190 }}
        transition={{ duration: 1, delay: 2 }}
        className="w-[280px] h-[360px] lg:w-[400px] lg:h-[500px] 2xl:w-[450px] 2xl:h-[600px] z-10 absolute -bottom-4 lg:bottom-0 left-[50%] 
      translate-x-[-50%] "
      >
        <Image
          src="/profile.png"
          alt="person"
          sizes="w-full"
          fill
          className="object-cover transform scale-x-[-1]"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] xl:w-[800px] xl:h-[800px] 2xl:h-[850px] 2xl:w-[850px] absolute -bottom-44 lg:-bottom-72 left-[50%] 
      translate-x-[-50%] "
      >
        <Image
          src="/blob.svg"
          alt="blob"
          fill
          sizes="w-full"
          className="absolute"
        />
      </motion.div>
    </div>
  );
};

export default RightSide;
