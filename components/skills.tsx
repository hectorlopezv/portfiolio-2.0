import React from "react";
import { motion } from "framer-motion";
import Skill from "./skill";
type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col text-center 
    justify-center xl:space-y-0 mx-auto items-center
    md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3
        className="top-36 absolute tracking-[3px] 
      text-gray-500 text-sm"
      >
        Hover Over a skill for proficiency
      </h3>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 ">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
};

export default Skills;
