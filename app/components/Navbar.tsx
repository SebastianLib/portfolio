import Link from "next/link";
import React from "react";
import { links } from "../data/links";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="fixed top-4 w-full flex justify-center">
      <div
        className="flex justify-between items-center max-w-7xl w-full py-6 md:px-8 mx-4 
      rounded-full border-2 border-transparent md:border-purple-600 transition"
      >
        <Link href="/">
          <p className="text-2xl font-semibold">
            Sebastian <span className="text-purple-500 shadow-xl">Lib</span>
          </p>
        </Link>

        <ul className="hidden md:flex gap-10 text-xl">
          {links.map((link) => (
            <li>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <MdOutlineMenu className="md:hidden text-white text-3xl"/>
      </div>
    </nav>
  );
};

export default Navbar;
