import { Project } from "../typings";

export const FetchProjects = async () => {
  const res = await fetch(`https://portfiolio4.vercel.app/api/getProjects`);
  const data = await res?.json();
  const projects: Project[] = data?.projects;
  return projects;
};
