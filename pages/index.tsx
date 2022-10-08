import { GetServerSideProps } from "next";
import Head from "next/head";
import { ErrorBoundary } from "react-error-boundary";
import HeaderPortfolio from "../components/header";

import { Props, Social } from "../typings";
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
        {props && props?.socials && (
          <>
            <Head>
              <title>{`Hector Lopez - Portfolio`}</title>
            </Head>
            <HeaderPortfolio socials={props?.socials} />
          </>
        )}
      </div>
    </ErrorBoundary>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  //const pageInfo: PageInfo = await FetchPageInfo();
  // const experiences: ExpType[] = await FetchExperiences();
  // const skills: Skill[] = await FetchSkills();
  // const projects: Project[] = await FetchProjects();
  const socials: Social[] = await FetchSocials();
  console.log("socials", socials);
  return {
    props: {
      socials,
      // experiences,
      // skills,
      // projects,
      // socials,
    },
  };
};
export default Home;
