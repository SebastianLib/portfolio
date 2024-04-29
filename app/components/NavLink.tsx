import Link from "next/link";
import { motion } from "framer-motion";

interface NavLinkProps {
  link: {
    label: string;
    href: string;
  };
  hoveredItem: number | null;
  onHover?: () => void;
  index: number;
}

const NavLink = ({ link, hoveredItem, onHover, index }: NavLinkProps) => {
  return (
    <li className="relative" onMouseEnter={onHover}>
      <Link href={link.href}>{link.label}</Link>
      {hoveredItem === index && (
        <motion.div
          layoutId="purple-dot"
          className="absolute w-3 h-3 left-[50%] translate-x-[-50%] rounded-full bg-purple-600"
        />
      )}
    </li>
  );
};

export default NavLink;
