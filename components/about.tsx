import Image from "next/image";
import React from "react";
import ProfilePicture from "../images/profile.png";
import { motion } from "framer-motion";
type Props = {};

const About = (props: Props) => {
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

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{
          duration: 1.2,
        }}
        src={ProfilePicture.src}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mt-5 -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 
        rounded-full object cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[800px]"
      />
      <div className="space-y-10 px-0 md:px-10 -mt-5">
        <p className="text-base text-center">
          Successful practical experience in developing fully functional
          responsive applications using HTML/HTML5, CSS3, JavaScript,
          Typescript, React.js/Next.js, Nest.js, Flutter. • team leading
          experience (3 - 5 specialists) • Experience in Architecting solutions
          from start to finish using GCP • Familiar with JS testing frameworks,
          such as Jest, Cypress, TestCafe, Storybook • Successfully designed and
          developed web user interfaces and resolved cross-browser issues •
          Developed Front-End code in a timely and high-quality manner while
          ensuring a consistent look and feel • Monitored website performance
          problems and rectify the issues
        </p>
      </div>
    </motion.div>
  );
};

export default About;
