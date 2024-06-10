import { MotionValue, useTransform } from "framer-motion";
import { IconType } from "react-icons";
import {motion} from "framer-motion"

interface ContactSliderProps {
  progress: MotionValue<number>;
  icon: IconType;
  text: String;
  left: string;
  direction: string;
}

const ContactSlider = ({
  progress,
  icon: Icon,
  text,
  left,
  direction
}: ContactSliderProps) => {
    const dir = direction === "left" ? -1 : 1;
    const x = useTransform(progress, [0,1], [-200 * dir, 200 * dir])
  return (
    <motion.div  style={{ left, x }} className="relative flex gap-10">
      <p className="text-3xl font-bold flex items-center gap-2 cursor-pointer hover:text-purple-500 transition-colors duration-300">
        <Icon /> {text}
      </p>
      <p className="text-3xl font-bold flex items-center gap-2 cursor-pointer hover:text-purple-500 transition-colors duration-300">
        <Icon /> {text}
      </p>
      <p className="text-3xl font-bold flex items-center gap-2 cursor-pointer hover:text-purple-500 transition-colors duration-300">
        <Icon /> {text}
      </p>
      <p className="text-3xl font-bold flex items-center gap-2 cursor-pointer hover:text-purple-500 transition-colors duration-300">
        <Icon /> {text}
      </p>
      <p className="text-3xl font-bold flex items-center gap-2 cursor-pointer hover:text-purple-500 transition-colors duration-300">
        <Icon /> {text}
      </p>
      <p className="text-3xl font-bold flex items-center gap-2 cursor-pointer hover:text-purple-500 transition-colors duration-300">
        <Icon /> {text}
      </p>
      <p className="text-3xl font-bold flex items-center gap-2 cursor-pointer hover:text-purple-500 transition-colors duration-300">
        <Icon /> {text}
      </p>
      <p className="text-3xl font-bold flex items-center gap-2 cursor-pointer hover:text-purple-500 transition-colors duration-300">
        <Icon /> {text}
      </p>
      <p className="text-3xl font-bold flex items-center gap-2 cursor-pointer hover:text-purple-500 transition-colors duration-300">
        <Icon /> {text}
      </p>
      <p className="text-3xl font-bold flex items-center gap-2 cursor-pointer hover:text-purple-500 transition-colors duration-300">
        <Icon /> {text}
      </p>
      <p className="text-3xl font-bold flex items-center gap-2 cursor-pointer hover:text-purple-500 transition-colors duration-300">
        <Icon /> {text}
      </p>
    </motion.div >
  );
};

export default ContactSlider;
