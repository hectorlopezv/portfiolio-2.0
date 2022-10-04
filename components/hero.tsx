import { FC } from "react";
import { useTypewriter } from "../hooks/useTypeWritter";
import BackGroundCircles from "./BackGroundCircles";
import { Cursor } from "./Cursor";

interface PropsType {}
const HeroComponent: FC<PropsType> = () => {
  const [text] = useTypewriter({
    words: [
      "Hi, My Name's Hector Lopez",
      "Full-Stack Developer",
      "Electronic Engineering",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div>
      <BackGroundCircles />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F7AB8A" />
      </h1>
    </div>
  );
};
export default HeroComponent;
