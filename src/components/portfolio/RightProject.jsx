import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const RightProject = ({ project }) => {
  const [ref, inView] = useInView({
    threshold: 0.4,
  });

  return (
    <motion.div
      ref={ref}
      initial={inView ? { opacity: 0.1 } : { opacity: 1 }}
      animate={inView ? { opacity: 1 } : { opacity: 0.1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col-reverse md:flex-row lg:mx-44 sm:mx-20 xs:mx-10 mx-5 md:my-20 my-10"
    >
      <div className="flex-1 flex md:justify-end justify-center items-center md:pr-10 md:mb-0 mt-5">
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left w-60">
          <p className="font-semibold text-md text-primary bg-gray-200 dark:bg-gray-800 rounded-md px-3 mb-4">
            {project.tech}
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 max-w-lg mb-4">
            {project.title}
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-md mb-4">
            {project.description}
          </p>
        </div>
      </div>
      <div className="flex-1 flex md:justify-start justify-center items-center md:pl-10 md:mt-0 mb-5">
        <div
          className="group relative justify-center items-center rounded-lg shadow-md w-60 bg-white p-1
          cursor-pointer overflow-hidden transition-shadow hover:shadow-lg hover:shadow-black/30"
        >
          <img
            src={project.image}
            alt=""
            className="w-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[100%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <a
              href={project.github}
              target="_blank"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-5 mb-2 w-full flex justify-center items-center"
            >
              <FaGithub />
              <span className="pl-2">GITHUB</span>
            </a>
            <a
              href={project.demo}
              target="_blank"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md mb-5 mt-2 w-full flex justify-center items-center"
            >
              <FaLink />
              <span className="pl-2">DEMO</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RightProject;
