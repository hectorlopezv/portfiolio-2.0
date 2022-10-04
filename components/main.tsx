import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";
import HeroComponent from "../components/hero";
import About from "./about";
import ContactMe from "./contact-me";
import Experience from "./experience";
import Projects from "./projects";
import Skills from "./skills";

const Main: NextPage = () => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white
     h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
     
     "
    >
      <Head>
        <title>Hector Portfolio</title>
      </Head>

      {/* Header */}
      <Header />
      {/* Hero */}

      <section id="hero" className="snap-start">
        <HeroComponent />
      </section>
      {/* About */}

      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Experience */}

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      <section id="skills" className="snap-center">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      {/* Skills */}
      {/* Projects */}
      {/* Contact Me */}
    </div>
  );
};

export default Main;
