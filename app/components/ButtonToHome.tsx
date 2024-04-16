import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ButtonToStart = () => {

    const [position, setPosition] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setPosition(true);
        } else {
            setPosition(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {        
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    if (!position) {
        return null;
    }

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.5}}
            className="fixed flex hover:scale-105 transition items-center justify-center bottom-3 right-3 
            md:bottom-10 md:right-10 z-20 rounded-full bg-violet-600 w-20 h-20 cursor-pointer"
            onClick={scrollToTop}
        >
            <FaArrowUp size={30}/>
        </motion.div>
    );
}

export default ButtonToStart;