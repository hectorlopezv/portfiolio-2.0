import { motion } from "framer-motion";
import { Experience } from "../typings";
import ExperienceCard from "./experience-card";
type Props = {
  experiences?: Experience[];
};

const Experience = ({ experiences }: Props) => {
  if (!experiences) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" flex relative
    items-center
    flex-col text-left md:flex-row 
    max-w-full justify-evenly mx-auto
    h-screen
    "
    >
      <h3 className="uppercase tracking-[14px] text-gray-500 text-2xl pt-10 px-8">
        Experience
      </h3>

      <div
        className="
      w-full flex space-x-5 
      px-2 mt-5 scrollbar-thin scrollbar-track-gray-400/20 
      scrollbar-thumb-[#F7AB0A]/80
      "
      >
        {experiences?.map((experience) => (
          <ExperienceCard key={experience?._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
