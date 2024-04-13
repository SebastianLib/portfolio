import clsx from "clsx";
import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface Features{
  link:string,
  github:string
  title: string;
  description: string;
  image:string,
}

interface BodyProps {
  features: Features;
  index: number;
  setCurrentIndex: (index: number) => void;
}

const Body = ({ features, index, setCurrentIndex }: BodyProps) => {
  
  const {link, github, title, description, image} = features;

  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  
  useEffect(()=>{
    if(isInView){
      setCurrentIndex(index)
    }
  }, [isInView])

  return (
    <div 
    ref={ref} className="py-14 md:py-32 px-6 md:px-0 space-y-4 md:space-y-0">
      <h3
        className={clsx(
          "text-3xl md:text-4xl text-center md:text-left font-semibold transition-colors duration-500",
          isInView ? `text-transparent bg-clip-text bg-gradient-to-l from-blue-500 to-purple-500` : `text-white`
        )}
      >
        {title}
      </h3>
      <p className="text-center md:text-left text-lg md:text-xl text-neutral-400">{description}</p>
      <div className="flex relative md:hidden w-full h-[230px] sm:h-[350px]">
        <Image
        src={image}
        fill
        className="object-cover rounded-2xl"
        alt="card"
        />
      </div>
      <div
        className="md:hidden flex justify-center items-center text-2xl gap-8"
      >
        <Link
          href={github}
          className="flex gap-2 bg-violet-500 rounded-full p-3 items-center  transition-colors duration-500"
        >
          <span>
            <FaGithub size={30} />
          </span>
          Github
        </Link>
        <Link
          href={link}
          className="flex gap-2 bg-violet-500 rounded-full p-3 items-center transition-colors duration-500"
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
