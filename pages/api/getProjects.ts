// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../sanity";
import { Project } from "../../typings";

type Data = {
  projects: Project[];
};
const query = `*[_type == "project"]{
    ...,
    techonologies[]->
}`;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projects: Project[] = await sanityClient.fetch(query);
  res.status(200).json({ projects });
}
