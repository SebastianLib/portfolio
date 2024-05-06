import { links } from "@/utils/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div
        className="max-w-7xl mx-auto mt-20 py-12 border-violet-500 
        border-t-2 flex flex-col md:flex-row gap-6 items-center justify-between overflow-hidden px-2"
      >
        <Link href="#home">
          <p className="text-3xl font-semibold">
            Sebastian <span className="text-purple-500">Lib</span>
          </p>
        </Link>

        <ul className="flex gap-4 md:gap-12 flex-wrap justify-center">
          {links.map((link, index) => (
            <li
              key={index}
              className="text-xl hover:text-violet-500 transition-colors duration-500"
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
