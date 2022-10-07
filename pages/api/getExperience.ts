// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../sanity";
import { Experience } from "../../typings";

type Data = {
  experiences: Experience[];
};
const query = `*[_type == "experience"]{
    ...,
    technologies[]->
}`;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const experiences: Experience[] = await sanityClient.fetch(query);
  res.status(200).json({ experiences });
}
