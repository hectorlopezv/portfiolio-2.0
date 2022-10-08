import { GetServerSideProps } from "next";
import Head from "next/head";
import { ErrorBoundary } from "react-error-boundary";
import ContactMe from "../components/contact-me";
import Experience from "../components/experience";
import GoUp from "../components/go-up";
import HeroComponent from "../components/hero";
import Projects from "../components/projects";
import Skills from "../components/skills";

import {
  Experience as TExperience,
  PageInfo,
  Project,
  Props,
  Skill,
} from "../typings";
import { FetchExperiences } from "../utils/fetchExperiences";
import { FetchPageInfo } from "../utils/fetchPageInfo";
import { FetchProjects } from "../utils/fetchProjects";
import { FetchSkills } from "../utils/fetchSkills";

function ErrorFallback({ error, resetErrorBoundary }: any) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

const Home = (props: Props) => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      <div
        className="bg-[rgb(36,36,36)] text-white
     h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
     scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80
     "
      >
        {props &&
          props?.pageInfo &&
          props?.experiences &&
          props?.skills &&
          props?.projects && (
            <>
              <Head>
                <title>{`Hector Lopez - Portfolio`}</title>
              </Head>
              {/* <HeaderPortfolio socials={props?.socials} /> */}
              <section id="hero" className="snap-start">
                <HeroComponent pageInfo={props?.pageInfo} />
              </section>
              <section id="experience" className="snap-center">
                <Experience experiences={props?.experiences} />
              </section>
              <section id="skills" className="snap-start">
                <Skills skills={props?.skills} />
              </section>

              <section id="projects" className="snap-start">
                <Projects projects={props?.projects} />
              </section>

              <section id="contact" className="snap-start">
                <ContactMe />
              </section>
              <GoUp />
            </>
          )}
      </div>
    </ErrorBoundary>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const pageInfo: PageInfo = await FetchPageInfo();
  const experiences: TExperience[] = await FetchExperiences();
  const skills: Skill[] = await FetchSkills();
  const projects: Project[] = await FetchProjects();
  //const socials: Social[] = await FetchSocials();
  // console.log("socials", socials);
  return {
    props: {
      pageInfo,
      //  socials,
      experiences,
      skills,
      projects,
    },
  };
};
export default Home;
