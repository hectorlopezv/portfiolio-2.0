import { GetServerSideProps } from "next";
import Head from "next/head";
import About from "../components/about";
import ContactMe from "../components/contact-me";
import Experience from "../components/experience";
import GoUp from "../components/go-up";
import HeaderPortfolio from "../components/header";
import HeroComponent from "../components/hero";
import Projects from "../components/projects";
import Skills from "../components/skills";
import {
  Experience as ExpType,
  PageInfo,
  Project,
  Props,
  Skill,
  Social,
} from "../typings";
import { FetchExperiences } from "../utils/fetchExperiences";
import { FetchPageInfo } from "../utils/fetchPageInfo";
import { FetchProjects } from "../utils/fetchProjects";
import { FetchSkills } from "../utils/fetchSkills";
import { FetchSocials } from "../utils/fetchSocials";

const Home = ({ pageInfo, expereiences, projects, skills, socials }: Props) => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white
     h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
     scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80
     "
    >
      <Head>
        <title>{`${pageInfo?.name} - Portfolio`}</title>
      </Head>

      <HeaderPortfolio socials={socials} />
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

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const pageInfo: PageInfo = await FetchPageInfo();
  const experience: ExpType[] = await FetchExperiences();
  const skills: Skill[] = await FetchSkills();
  const projects: Project[] = await FetchProjects();
  const socials: Social[] = await FetchSocials();

  return {
    props: {
      pageInfo,
      expereiences: experience,
      skills,
      projects,
      socials,
    },
  };
};
