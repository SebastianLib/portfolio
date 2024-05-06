"use client";
import { useState } from "react";
import Body from "./Body";
import Card from "./Card";
import { projects } from "@/utils/constants";


const StickyScroll = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <div className="lg:-mt-48 z-0 px-4 flex w-full lg:gap-4 xl:gap-20 items-start">
      <div className="w-full lg:py-[40vh]">
          {projects.map((feature, index) => (
            <Body
              key={index}
              setCurrentIndex={setCurrentIndex}
              index={index}
              projects={projects[index]}
            />
          ))}
      </div>
      <div className="hidden lg:flex w-full sticky top-0 h-screen items-center">
        <div className="w-full max-h-[50%] relative rounded-2xl aspect-square">

          {projects.map((project, index) => (
            <div
              key={index}
              className={`${
                currentIndex === index ? "opacity-100" : "opacity-0"
              } transition-opacity`}
            >
              <Card
                currentImage={project.image}
                link={project.link}
                github={project.github}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StickyScroll;
