import { motion } from "framer-motion";
import { TbFileDownload } from "react-icons/tb";

const CvButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2.5 }}
      className="w-28 h-28 group absolute top-10 left-[50%] translate-x-[-50%] lg:left-16 xl:left-0 lg:top-44 z-20 rounded-full"
    >
      <div className="relative hover:scale-110 transition duration-500 z-10 w-full h-full overflow-hidden rounded-full p-[5px] focus:outline-none">
        <span
          className="absolute inset-0 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#965cdd_0%,#393BB2_50%,#9755e8_100%)] 
        shadow-xl"
        />
        <a
          className="inline-flex flex-col h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-lg font-semibold text-white backdrop-blur-3xl"
          href="/myCV.pdf"
          download
        >
          <TbFileDownload size={24} /> <span className="text-xl">CV</span>
        </a>
      </div>
      <div className="absolute rounded-full -inset-3 bg-gradient-to-r from-blue-500 to-violet-500 blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
    </motion.div>
  );
};

export default CvButton;
