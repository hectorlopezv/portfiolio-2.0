import { motion } from "framer-motion";
import { Experience } from "../typings";
import ExperienceCard from "./experience-card";
type Props = {
  experiences: Experience[];
};

const Experience = ({ experiences }: Props) => {
  if (!experiences) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden
    items-center
    flex-col text-left md:flex-row 
    max-w-full px-10 justify-evenly mx-auto
    
    
    "
    >
      <h3 className="absolute top-24 md:top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div
        className="
      mx-auto w-full flex space-x-5 overflow-x-scroll 
      p-10 snap-x snap-mandatory top-28 absolute
      scrollbar-thin scrollbar-track-gray-400/20 
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
