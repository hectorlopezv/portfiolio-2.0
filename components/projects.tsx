/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../sanity";
import { Project } from "../typings";
type Props = {
  projects?: Project[];
};

const Projects = ({ projects }: Props) => {
  if (!projects) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="
      flex overflow-hidden flex-col text-left max-w-full
      h-screen mx-auto items-center z-0 pt-11"
    >
      <h3
        className="
      uppercase tracking-[20px]
      text-gray-500 text-xl md:text-2xl"
      >
        Projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll 
      overflow-y-hidden snap-x snap-mandatory z-10
      scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80
      h-full
      "
      >
        {projects?.map((project, index) => (
          <div
            className="w-screen flex-shrink-0 snap-center 
            flex flex-col space-y-5 items-center justify-center 
            "
            key={project?._id}
          >
            <motion.div
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative w-[300px] h-[300px] sm:w-[400px]
              sm:h-[400px]"
            >
              <Image
                src={urlFor(project?.image)?.url()}
                alt="project image"
                layout="fill"
                className="object-cover rounded-lg"
              />
            </motion.div>

            <div className="space-y-5 lg:space-y-10 px-0 md:px-10 max-w-6xl min-h-[198px]">
              <h4 className="text-xl lg:text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50 px-1">
                  Case of study {index + 1} of {projects.length} :{" "}
                </span>
                {project.title}
              </h4>
              <div className="flex items-center space-x-2 justify-center flex-wrap px-2">
                {project?.techonologies?.map((tech) => (
                  <motion.div
                    key={tech?._id}
                    initial={{ y: -300, opacity: 0 }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative h-10 w-10"
                  >
                    <Image
                      src={urlFor(tech?.image)?.url()}
                      alt="project image"
                      layout="fill"
                      className="object-cover rounded-full"
                    />
                  </motion.div>
                ))}
              </div>

              <p className="text-sm sm:text-xl lg:text-xl text-center md:text-left px-1 sm:px-8 md:px-6">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div
        className="w-full absolute top-[30%] bg-[#F7AB0A]/10
      left-0 h-[500px] -skew-y-12"
      />
    </motion.div>
  );
};

export default Projects;
