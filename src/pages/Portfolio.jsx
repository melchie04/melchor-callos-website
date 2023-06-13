import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/content";
import Title from "../components/customs/Title";
import LeftProject from "../components/portfolio/LeftProject";
import RightProject from "../components/portfolio/RightProject";

const Portfolio = () => {
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
        title={portfolioData.title.toUpperCase()}
        subtitle={portfolioData.subtitle}
      />
      {portfolioData.projects.map((project, index) =>
        index % 2 === 0 ? (
          <LeftProject project={project} key={index} />
        ) : (
          <RightProject project={project} key={index} />
        )
      )}
    </motion.div>
  );
};

export default Portfolio;
