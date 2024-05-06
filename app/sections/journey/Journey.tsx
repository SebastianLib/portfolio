"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Card from "./components/Card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { journeyCards } from "@/utils/constants";

const Journey = () => {
  const targetRef = useRef<HTMLDialogElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["50", "-45%"]);
  return (
    <section id="journey" ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden">
      <TextGenerateEffect words={"My Journey"} className="z-10 relative mb-32" />
        <motion.div style={{ x }} className="flex gap-12 relative">
          <div className="absolute -top-12 left-0 right-0 h-1 bg-violet-500 
          before:content-[''] before:absolute before:right-[-2px] before:-top-2 before:w-6 before:h-1 
          before:bg-violet-500 before:rotate-45 
          after:content-[''] after:absolute after:right-[-2px] after:top-2 after:w-6 after:h-1 
          after:bg-violet-500 after:-rotate-45
          " />
          {journeyCards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;
