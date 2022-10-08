import { Experience } from "../typings";

export const FetchExperiences = async () => {
  const res = await fetch(`https://portfiolio4.vercel.app/api/getExperience`);
  const data = await res?.json();
  const experiences: Experience[] = data?.experiences;
  return experiences;
};
