import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
type Props = {
  pageInfo?: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  if (!pageInfo) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{ opacity: 1 }}
      className="flex relative flex-col text-center md:text-left
     px-8 justify-evenly mx-auto items-center overflow-hidden
    h-screen
    "
    >
      <h3 className="
      uppercase tracking-[20px] text-gray-500
      text-2xl md:text-3xl">
        About
      </h3>

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="
        flex-shrink-0 w-56 h-56 md:w-64 md:h-64 relative
        md:rounded-lg xl:w-[350px] xl:h-[400px]"
      >
        <Image
          className="rounded-lg object-cover"
          layout="fill"
          alt="profile picture"
          src={urlFor(pageInfo?.ProfilePic)?.url()}
        />
      </motion.div>

      <div className="space-y-10 px-0 md:px-10">
        <div className="text-sm sm:text-xl space-y-1 text-left ">
          {pageInfo?.backgroundInformation.split(".").map((text) => {
            return <p key={text}>{text}</p>;
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
