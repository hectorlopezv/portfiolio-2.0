/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../sanity";
import { Experience } from "../typings";
type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article
      className="flex flex-col rounded-lg 
    w-full md:w-[550px]
    snap-center bg-[#292929] px-6
    mb-6
    opacity-40 hover:opacity-100
    cursor-pointer transition-opacity duration-200
    overflow-hidden
    items-center space-y-7 flex-shrink-0"
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 xl:w-[150px] xl:h-[150px] relative hidden lg:block"
      >
        <Image
          src={urlFor(experience?.compnayImage)?.url()}
          alt="company logo"
          layout="fill"
          className="rounded-full object-fit"
        />
      </motion.div>

      <div className="">
        <h4 className="text-md lg:text-3xl font-light">
          {experience?.jobTitle}
        </h4>
        <p className="font-bold lg:text-xl mt-1">{experience?.compnay}</p>
        <div className="flex  items-center lg:space-x-2 mt-2">
          {experience?.technologies?.map((technology, index) => {
            return (
              <div
                className={`h-10 w-10 relative ${index > 0 ? "ml-1" : ""}`}
                key={technology?._id}
              >
                <Image
                  src={urlFor(technology?.image)?.url()}
                  alt="skill"
                  layout="fill"
                  className="rounded-full object-cover object-center flex-shrink-0"
                />
              </div>
            );
          })}
        </div>
        <p className="uppercase py-5 text-gray-300 sm: text-sm lg:text-base">
          {new Date(experience?.dateStarted)?.toDateString()} -{" "}
          {experience?.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded)?.toDateString()}
        </p>
        <ul
          className="list-disc space-y-4 lg:text-lg h-96 overflow-y-scroll scrollbar-thin
        "
        >
          {experience?.points.map((point, i) => (
            <li key={i} className="text-sm">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
