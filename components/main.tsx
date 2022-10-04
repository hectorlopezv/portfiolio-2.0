import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";
import HeroComponent from "../components/hero";
import About from "./about";
import Experience from "./experience";

const Main: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Hector Portfolio</title>
      </Head>

      {/* Header */}
      <Header />
      {/* Hero */}

      <section id="hero" className="snap-center">
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
      {/* Skills */}
      {/* Projects */}
      {/* Contact Me */}
    </div>
  );
};

export default Main;
