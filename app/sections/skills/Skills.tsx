"use client"
import { CardContainer, CardItem, CardBody } from "@/components/ui/3d-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { skillsList } from "@/utils/constants";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInAnimationVariants = {
    initial:{
        opacity: 0,
        y:100,
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
    <section id="skills" className="pb-12 lg:-mt-44 pt-12 relative">
      <div className="max-w-7xl mx-auto px-4 pt-8 z-20 relative">
        <TextGenerateEffect
          words={"My Skills"}
          className="z-10 relative mb-20"
        />

        <div 
        className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5
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
                      flex flex-col justify-center items-center gap-4 rounded-3xl overflow-hidden
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
      {/* <div className="w-[450px] h-[380px] md:w-[950px] md:h-[700px] absolute overflow-visible right-20 -top-48 -z-10">
        <Image src="/elipse1.svg" fill alt="elipse" />
      </div> */}
    </section>
  );
};

export default Skills;
