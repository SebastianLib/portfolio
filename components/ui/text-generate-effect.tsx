"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "@/utils/cn";
 
export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  
const isInView = useInView(scope)
  let wordsArray = words.split(" ");
  useEffect(() => {
    if(isInView){ 
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    )};
  }, [isInView]);
 
  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className=" text-white opacity-0"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };
 
  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <h2 className="text-white text-center leading-snug tracking-wide sm:text-4xl md:text-5xl">
          {renderWords()}
        </h2>
      </div>
    </div>
  );
};