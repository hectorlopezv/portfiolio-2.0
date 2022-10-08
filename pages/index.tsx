import { GetServerSideProps } from "next";
import { ErrorBoundary } from "react-error-boundary";

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
  console.log("props", props);
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
        {props?.pageInfo && props?.expereiences && props?.projects && props?.skills && props?.socials && <></>}
      </div>
    </ErrorBoundary>
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
