import { Skill as SkillType } from "../typings";
import Skill from "./skill";
type Props = {
  skills?: SkillType[];
};

const Skills = ({ skills }: Props) => {
  return (
    <div
      className="flex relative flex-col text-center md:text-left
      max-w-fit xl:px-10 h-screen max-h-screen justify-center xl:space-y-0 mx-auto
      items-center min-w-[460px] overflow-y-scroll scrollbar-none overflow-x-hidden"
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl mt-16 md:mt-28">
        Skills
      </h3>

      <h3
        className="uppercase tracking-[3px]
        text-gray=500 text-sm mt-8"
      >
        Hover Over a skill for proficiency
      </h3>

      <div className=" grid grid-cols-3 md:grid-cols-4 gap-4 mt-12">
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
