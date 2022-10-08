import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{ opacity: 1 }}
      className="flex relative flex-col text-center md:text-left  md:flex-row h-screen
    max-w-7xl px-8 justify-evenly mx-auto items-center overflow-hidden
    "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mt-20 md:mt-5 -mb-20 md:mb-0 flex-shrink-0 w-56 h-72 relative
    md:rounded-lg md:w-64 md:h-96
        xl:w-[350px] xl:h-[400px]"
      >
        <Image
          className="rounded-lg object-cover"
          layout="fill"
          alt="profile picture"
          src={urlFor(pageInfo?.ProfilePic)?.url()}
        />
      </motion.div>

      <div className="space-y-10 px-0 md:px-10 mt-4">
        <p className="text-base text-center">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
};

export default About;
