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
        className="relative filter group-hover:grayscale
        transition duration-300
        h-[4rem] w-[4rem] rounded-full
        "
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
        ease-in-out group-hover:bg-white rounded-full z-0 h-[4rem] w-[4rem]"
      >
        <div className="flex items-center justify-center h-full rounded-full">
          <p className="text-xs sm:text-base font-bold text-black opacity-100">{`${skill?.progress}%`}</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
