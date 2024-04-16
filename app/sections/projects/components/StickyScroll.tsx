"use client";
import { useState } from "react";
import Body from "./Body";
import Card from "./Card";
import { projects } from "@/utils/projects";

const StickyScroll = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <div className="-mt-8 md:-mt-32 z-0 px-2 flex w-full md:gap-4 xl:gap-20 items-start">
      <div className="w-full md:py-[40vh]">
        <div>
          {projects.map((feature, index) => (
            <Body
              key={index}
              setCurrentIndex={setCurrentIndex}
              index={index}
              projects={projects[index]}
            />
          ))}
        </div>
      </div>
      <div className="hidden md:flex w-full sticky top-0 h-screen items-center">
        <div className="w-full rounded-2xl aspect-square">
          <Card
            currentImage={projects[currentIndex].image}
            link={projects[currentIndex].link}
            github={projects[currentIndex].github}
          />
        </div>
      </div>
    </div>
  );
};

export default StickyScroll;
