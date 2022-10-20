import { Skill as SkillType } from "../typings";
import Skill from "./skill";
type Props = {
  skills?: SkillType[];
};

const Skills = ({ skills }: Props) => {
  if (!skills) return null;
  return (
    <div
      className="text-center md:text-left
      max-w-fit xl:px-10 xl:space-y-0 mx-auto
     min-w-[360px] overflow-y-scroll scrollbar-thin overflow-x-hidden
     pt-10 
     h-screen
     "
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-xl lg:text-2xl ">
        Skills
      </h3>

      <h3
        className="uppercase tracking-[3px]
        text-gray=500 text-xs px-6 md:px-0  md:text-sm 
        mt-5"
      >
        Hover Over a skill for proficiency
      </h3>

      <div className="
      grid justify-items-center sm:grid-cols-3
      grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mt-10
      ">
        {skills?.slice(0, skills?.length / 2)?.map((skill) => (
          <Skill key={skill?._id} skill={skill} />
        ))}

        {skills?.slice(skills.length / 2, skills?.length)?.map((skill) => (
          <Skill key={skill?._id} skill={skill} directionLeft />
        ))}
      </div>
    </div>
  );
};

export default Skills;
