import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface CardProps {
  currentImage: string ;
  link: string;
  github: string
}

const Card = ({ currentImage, link, github }: CardProps) => {
  return (
    <div
      key={link}
      className="w-full rounded-2xl absolute inset-0 overflow-hidden mt-20 shadow-2xl shadow-violet-500/50"
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
    </div>
  );
};

export default Card;
