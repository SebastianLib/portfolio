"use client"
import { CardContainer, CardItem, CardBody } from "@/components/ui/3d-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { skillsList } from "@/utils/skills";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
    initial:{
        opacity: 0,
        y:-100,
    },
    animate: (index:number)=>({
        opacity: 1,
        y:0,
        transition: {
            duration: 0.3,
            delay: 0.15 * index,
        },
    })
}

const Skills = () => {
  return (
    <section className="min-h-[1000px]">
      <div className="max-w-7xl mx-auto -mt-24 px-4">
        <TextGenerateEffect
          words={"My Skills"}
          className="mt-20 z-10 relative"
        />

        <div 
        className="mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5
         gap-4 sm:gap-14"
         >

          {skillsList.map((skill, index)=>{
            const {icon:Icon, label} = skill
                return (
                    <motion.div
                    key={index}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once:true}}
                    custom={index}
                    >
                    <CardContainer
                    className="relative w-full group h-full shadow-2xl shadow-violet-500/50"
                  >
                    <CardBody
                      className="bg-black relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] 
                      flex flex-col justify-center items-center gap-4 rounded-2xl 
                        border-violet-500 border-2 aspect-square"
                    >
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold flex flex-col justify-center items-center gap-4"
                      >
                    <Icon size={60} className=" group-hover:text-violet-500 transition-colors duration-500"/>
                    <h3 className="text-xl font-bold text-center group-hover:text-violet-500 transition-colors duration-500">{label}</h3>
                      </CardItem>
                    </CardBody>
                  </CardContainer> 
                  </motion.div>
                )
            })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
