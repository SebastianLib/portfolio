"use client";
import { motion } from "framer-motion";

const LeftSide = () => {
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="flex h-full flex-col justify-center mt-20 md:mt-0"
      >
        <div>
          <p className="capitalize text-2xl md:text-4xl text-center md:text-left text-white">
            frontend developer
          </p>
          <h1
            className="capitalize text-5xl md:text-7xl text-center md:text-left font-semibold text-transparent bg-clip-text
        bg-gradient-to-l from-blue-500 to-purple-500"
          >
            Sebastian <br className="hidden md:flex" />
            Lib
          </h1>
        </div>
        <div className="mt-4 md:mt-20 border-l-[6px] flex flex-col items-center md:items-start border-hidden md:border-solid border-l-neutral-500">
          <p className="pl-3 text-neutral-400 text-md md:text-xl max-w-sm text-center md:text-left">
            Self-taught frontend developer passionate about continuous learning
            and innovative web design.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LeftSide;
