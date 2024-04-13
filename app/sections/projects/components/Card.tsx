import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface CardProps {
  currentImage: string;
  link: string;
  github: string
}

const Card = ({ currentImage, link, github }: CardProps) => {
  return (
    <motion.div
      key={currentImage}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-[60%] w-full rounded-2xl relative overflow-hidden mt-20 "
    >
      <Image src={currentImage} className="object-cover" fill alt="card" />
      <div
        className="absolute inset-0 bg-black/50 flex justify-center items-center
      opacity-0 hover:opacity-100 transition-opacity duration-500 text-2xl gap-8"
      >
        <Link
          href={github}
          className="flex gap-2 items-center hover:text-violet-400 transition-colors duration-500"
        >
          <span>
            <FaGithub size={30} />
          </span>
          Github
        </Link>
        <Link
          href={link}
          className="flex gap-2 items-center hover:text-violet-400 transition-colors duration-500"
        >
          <span>
            <FaExternalLinkAlt />
          </span>
          Go there
        </Link>
      </div>
    </motion.div>
  );
};

export default Card;
