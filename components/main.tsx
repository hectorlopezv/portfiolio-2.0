/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Header from "../components/header";
import HeroComponent from "../components/hero";
import { Props } from "../typings";
import About from "./about";
import ContactMe from "./contact-me";
import Experience from "./experience";
import GoUp from "./go-up";
import Projects from "./projects";
import Skills from "./skills";

const Main = ({ pageInfo, expereiences, projects, skills, socials }: Props) => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white
     h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
     scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80
     "
    >
      <Head>
        <title>Hector Portfolio</title>
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <HeroComponent pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <Experience experiences={expereiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <GoUp />
    </div>
  );
};

export default Main;
