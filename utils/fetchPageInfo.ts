import { PageInfo } from "../typings";

export const FetchPageInfo = async () => {
  const res = await fetch(
    `https://portfiolio4.vercel.app/api/getPageInfo`
  );
  const data = await res?.json();
  const pageInfo: PageInfo = data?.pageInfo;
  return pageInfo;
};
