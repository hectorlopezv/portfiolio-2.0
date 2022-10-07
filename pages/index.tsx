import { GetStaticProps } from "next";
import Main from "../components/main";
import {
  Experience,
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
    <Main
      pageInfo={pageInfo}
      expereiences={expereiences}
      projects={projects}
      skills={skills}
      socials={socials}
    />
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const pageInfo: PageInfo = await FetchPageInfo();
  const experience: Experience[] = await FetchExperiences();
  const skills: Skill[] = await FetchSkills();
  const projects: Project[] = await FetchProjects();
  const socials: Social[] = await FetchSocials();

  return {
    revalidate: 100,
    props: {
      pageInfo,
      expereiences: experience,
      skills,
      projects,
      socials,
    },
  };
};
