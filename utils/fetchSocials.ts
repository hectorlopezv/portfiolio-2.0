import { Social } from "../typings";

export const FetchSocials = async () => {
  const res = await fetch(`https://portfiolio4.vercel.app/api/getSocial`);
  const data = await res?.json();
  const socials: Social[] = data?.socials;
  return socials;
};
