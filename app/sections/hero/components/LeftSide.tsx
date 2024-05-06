"use client";
import { motion } from "framer-motion";

const LeftSide = () => {
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="flex h-full flex-col space-y-4 justify-center mt-20 lg:mt-0"
      >
        <div>
          <p className="capitalize text-2xl lg:text-4xl text-center lg:text-left text-white">
            frontend developer
          </p>
          <h1
            className="capitalize text-6xl lg:text-7xl text-center lg:text-left font-semibold text-transparent bg-clip-text
        bg-gradient-to-l from-blue-500 to-purple-500"
          >
            Sebastian <br className="hidden lg:flex" />
            Lib
          </h1>
        </div>
        <div className="mt-4 lg:mt-20 border-l-[6px] flex flex-col items-center lg:items-start border-hidden lg:border-solid border-l-neutral-500">
          <p className="pl-3 text-neutral-400 text-lg lg:text-xl max-w-sm text-center lg:text-left">
            Self-taught frontend developer passionate about continuous learning
            and innovative web design.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LeftSide;
