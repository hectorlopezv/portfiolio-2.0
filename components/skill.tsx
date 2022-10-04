import React from "react";
import { motion } from "framer-motion";
type Props = {
  directionLeft?: boolean;
};

const Skill = ({ directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        alt="skill"
        initial={{
          x: directionLeft ? -200 : 200,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src=""
        className="rounded-full border
        xl:w-32 filter group-hover:grayscale transition 
        duration-300 ease-in-out
        border-gray-500 object-cover h-24 w-24 md:w-28 xl:h-32
        md:h-28"
      />

      <div
        className="absolute opacity-0
      group-hover:bg-white h-24 w-24 md:w-28 xl:w-32 xl:h-32
      md:h-28
      rounded-full z-0
      group-hover:opacity-80 transition duration-300"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
