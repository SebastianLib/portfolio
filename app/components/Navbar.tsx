"use client";
import Link from "next/link";
import React, { useState } from "react";
import MobileNavbar from "./MobileNavbar";
import { AnimatePresence, motion } from "framer-motion";
import NavLink from "./NavLink";
import { links } from "@/utils/constants";

const Navbar = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <nav className="fixed z-30 top-0 md:top-4 w-full flex justify-center bg-black md:bg-transparent">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: -200 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-between items-center max-w-7xl w-full py-4 md:px-8 mx-4 
      rounded-full border-2 border-transparent md:border-purple-600 bg-black"
      >
        <Link href="#home">
          <h2 className="text-3xl font-semibold">
            Sebastian <span className="text-purple-500">Lib</span>
          </h2>
        </Link>

        <ul
          onMouseLeave={() => setHoveredItem(null)}
          className="hidden md:flex gap-5 lg:gap-10 text-xl font-medium"
        >
          {links.map((link, index) => (
            <NavLink
              key={index}
              index={index}
              link={link}
              hoveredItem={hoveredItem}
              onHover={() => setHoveredItem(index)}
            />
          ))}
        </ul>

        <div
          onClick={() => setIsActive(!isActive)}
          className={`absolute flex top-2 right-4 z-20 w-12 h-12 bg-violet-600 rounded-full
        items-center justify-center cursor-pointer ${
          isActive ? "absolute flex" : "md:hidden"
        }`}
        >
          <div
            className={`w-full after:content-[''] after:block after:w-[40%] after:bg-white
          after:h-[2px] after:m-auto after:relative after:top-[-5px] after:transition before:content-[''] before:block before:w-[40%] before:bg-white
          before:h-[2px] before:m-auto before:transition before:relative before:top-[5px]`}
          ></div>
        </div>
        <AnimatePresence mode="wait">
          {isActive && <MobileNavbar onClick={() => setIsActive(false)} />}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
};

export default Navbar;
