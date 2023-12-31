import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { experienceData } from "../data/content";
import Title from "../components/customs/Title";
import ExperienceTimeline from "../components/experience/ExperienceTimeline";

const Experience = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
      className="w-full flex flex-col bg-light dark:bg-dark mb-20"
    >
      <Title
        title={experienceData.title.toUpperCase()}
        subtitle={experienceData.subtitle}
      />
      <ExperienceTimeline experienceData={experienceData} />
    </motion.div>
  );
};

export default Experience;
