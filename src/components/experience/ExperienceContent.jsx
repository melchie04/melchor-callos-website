import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ExperienceContent = ({ experience }) => {
  const [ref, inView] = useInView({
    threshold: 0.4,
  });

  return (
    <>
      <motion.div
        ref={ref}
        initial={inView ? { opacity: 0.1 } : { opacity: 1 }}
        animate={inView ? { opacity: 1 } : { opacity: 0.1 }}
        transition={{ duration: 0.5 }}
        className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-6 ring-4 ring-primary bg-gray-200"
      >
        <img src={experience.icon} className="w-full h-full object-cover" />
      </motion.div>
      <motion.div
        ref={ref}
        initial={inView ? { opacity: 0.1 } : { opacity: 1 }}
        animate={inView ? { opacity: 1 } : { opacity: 0.1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-start items-start ml-2 mt-8 p-4 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md"
      >
        <h3 className="text-primary text-lg font-bold mb-2">
          {experience.title}
        </h3>
        <p className="text-tertiary dark:text-secondary text-md font-semibold mb-2">
          {experience.company_name}
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          {experience.description}
        </p>
      </motion.div>
    </>
  );
};

export default ExperienceContent;
