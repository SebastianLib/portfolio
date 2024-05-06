import { ProjectTypes } from "@/utils/constants";
import clsx from "clsx";
import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface BodyProps {
  projects: ProjectTypes;
  index: number;
  setCurrentIndex: (index: number) => void;
}

const Body = ({ projects, index, setCurrentIndex }: BodyProps) => {
  
  const {link, github, title, description, image} = projects;

  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  
  useEffect(()=>{
    if(isInView){
      setCurrentIndex(index)
    }
  }, [isInView])

  return (
    <div 
    ref={ref} className="py-14 lg:py-32 px-4 md:px-24 lg:px-0 space-y-4 lg:space-y-0">
      <h3
        className={clsx(
          "text-3xl lg:text-4xl text-center lg:text-left font-semibold transition-colors duration-500",
          isInView ? `text-transparent bg-clip-text bg-gradient-to-l from-blue-500 to-purple-500` : `text-white`
        )}
      >
        {title}
      </h3>
      <p className="text-center lg:text-left text-lg lg:text-xl text-neutral-400">{description}</p>
      <div className="flex relative lg:hidden w-full h-[230px] sm:h-[350px]">
        <Image
        src={image}
        fill
        sizes="w-full"
        className="object-cover rounded-2xl"
        alt="card"
        />
      </div>
      <div
        className="lg:hidden flex justify-center items-center text-2xl gap-8"
      >
        <Link
          href={github}
          className="flex gap-2 bg-violet-500 rounded-full text-lg p-3 items-center  transition-colors duration-500"
        >
          <span>
            <FaGithub size={30} />
          </span>
          Github
        </Link>
        <Link
          href={link}
          className="flex gap-2 bg-violet-500 rounded-full text-lg p-3 items-center transition-colors duration-500"
        >
          <span>
            <FaExternalLinkAlt />
          </span>
          Go there
        </Link>
      </div>
    </div>
  );
};

export default Body;
