import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { useTypewriter } from "../hooks/useTypeWritter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackGroundCircles from "./BackGroundCircles";
import { Cursor } from "./Cursor";
interface PropsType {
  pageInfo?: PageInfo;
}
const HeroComponent: FC<PropsType> = ({ pageInfo }) => {
  const [text] = useTypewriter({
    words: [
      `Hi, My Name's ${pageInfo?.name}`,
      "Full-Stack Developer",
      "GCP Cloud Architect",
      "Cross-Platform On Flutter",
      "Electronic Engineering",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  console.log("pageInfo", pageInfo);
  if (!pageInfo) return null;
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackGroundCircles />
      <div className="relative h-52 w-52">
        <Image
          src={urlFor(pageInfo?.heroImage).url()}
          alt="profile picture"
          layout="fill"
          className="rounded-full mx-auto object-cover"
        />
      </div>

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB8A" />
        </h1>

        <div className="pt-5">
          <Link href={"#about"}>
            <button className="heroButton">About</button>
          </Link>
          <Link href={"#experience"}>
            <button className="heroButton">Experience</button>
          </Link>
          <Link href={"#skills"}>
            <button className="heroButton">Skills</button>
          </Link>
          <Link href={"#projects"}>
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HeroComponent;
