import { motion } from "framer-motion";
import React from "react";


interface CardProps {
  card: {
    id: number;
    description: string;
    title: string;
  };
}

const Card = ({ card }: CardProps) => {
  return (
    <motion.div
    initial={{ opacity: 0, x: 200 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }} 
    viewport={{once:true}}
      key={card.id}
      className="relative border-2 border-violet-500 rounded-2xl min-h-[250px] w-[450px] p-8"
    >
      <h3 className="text-3xl text-center font-bold mb-4">{card.title}</h3>
      <p className="text-xl text-center">{card.description}</p>
      <div
        className="absolute flex items-center justify-center -top-12 translate-y-[-50%] right-[50%] translate-x-[50%] 
    w-12 h-12 rounded-full bg-violet-500"
      >
        <p className="text-xl font-bold">{card.id}</p>
      </div>
    </motion.div>
  );
};

export default Card;
