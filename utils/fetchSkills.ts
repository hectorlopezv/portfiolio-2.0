import { Skill } from "../typings";

export const FetchSkills = async () => {
  const res = await fetch(`https://portfiolio4.vercel.app/api/getSkills`);
  const data = await res?.json();
  const skills: Skill[] = data?.skills;
  return skills;
};
