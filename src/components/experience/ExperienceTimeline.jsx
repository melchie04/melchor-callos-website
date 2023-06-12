import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ExperienceContent from "./ExperienceContent";

const Timeline = ({ experienceData }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={inView ? { opacity: 0.1 } : { opacity: 1 }}
      animate={inView ? { opacity: 1 } : { opacity: 0.1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col lg:mx-72 md:mx-52 sm:mx-32 mx-10 md:my-20 my-10"
    >
      <ol className="relative border-l-4 border-primary">
        {experienceData.experiences.map((experience, index) => (
          <li key={index} className="md:my-20 my-10 ml-6">
            <ExperienceContent experience={experience} />
          </li>
        ))}
      </ol>
    </motion.div>
  );
};

export default Timeline;
