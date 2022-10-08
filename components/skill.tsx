import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../sanity";
import { Skill } from "../typings";
type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className=" w-[4.5rem] md:w-20
        h-[4.5rem] md:h-20 filter group-hover:grayscale
        transition duration-300"
      >
        <Image
          layout="fill"
          alt="skill"
          src={urlFor(skill?.image)?.url()}
          className="object-cover rounded-full"
        />
      </motion.div>

      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-white w-[4.5rem] md:w-20
        h-[4.5rem] md:h-20 rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl md:text-3xl font-bold text-black opacity-100">{`${skill?.progress}%`}</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
