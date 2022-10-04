/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
type Props = {
  image: string;
};

const ExperienceCard = (props: Props) => {
  return (
    <article
      className="flex flex-col rounded-lg 
    w-[430px] md:w-[600px] xl:w-[900px]
    snap-center bg-[#292929] p-10
    opacity-40 hover:opacity-100
    cursor-pointer transition-opacity duration-200
    overflow-hidden
    items-center space-y-7 flex-shrink-0"
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={props.image}
        alt="company logo"
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] 
        object-cover object-center"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">SSR Web UI</h4>
        <p className="font-bold text-2xl mt-1">Globant</p>
        <div className="flex space-x-2 my-2">
          <img src="" alt="" className="h-10 w-10 rounded-full" />
          {/*Stack */}
          {/*Stack */}
          {/*Stack */}
          {/*Stack */}
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work... - Ended...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Text</li>
          <li>Text</li>
          <li>Text</li>
          <li>Text</li>
          <li>Text</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
