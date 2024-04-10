import Link from "next/link";
import { links } from "../utils/links";
import { motion } from "framer-motion";
import { menuSlide, slide } from "../utils/anim";

interface MobileNavbarProps {
  onClick: () => void;
}

const MobileNavbar = ({ onClick }: MobileNavbarProps) => {
  return (
    <motion.div
      variants={menuSlide}
      animate="enter"
      exit="exit"
      initial="initial"
      className="bg-neutral-800 text-white fixed right-0 
    top-0 h-full max-w-sm w-full"
    >
      <div className="p-20 flex justify-between">
        <div className="flex flex-col gap-12 mt-12 max-w-44 w-full">
          <p className="text-gray-300 border-b w-full">Navigation</p>
          <ul className="flex flex-col gap-6 text-3xl">
            {links.map((link, index) => (
              <motion.li
                custom={index}
                key={index}
                variants={slide}
                animate="enter"
                exit="exit"
                initial="initial"
              >
                <Link
                  onClick={onClick}
                  className="hover:pl-6 hover:text-purple-600 transition-all duration-300"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileNavbar;
