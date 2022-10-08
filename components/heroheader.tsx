import { motion } from "framer-motion";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { Social } from "../typings";
type Props = {
  socials?: Social[];
};

const HeroHeader = ({ socials }: Props) => {
  if (!socials) return null;
  return (
    <header
      className="sticky top-0 flex p-5 items-start justify-between max-w-7xl mx-auto z-20
    xl:items-center
    "
    >
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {socials &&
          socials?.map((social) => (
            <SocialIcon
              url={social?.url}
              fgColor="gray"
              bgColor="transparent"
              key={social?._id}
            />
          ))}
      </motion.div>
      <Link href={"#contact"}>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-row items-center text-gray-300 cursor-pointer space-x-2 md:mr-2"
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get In Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
};
export default HeroHeader;
