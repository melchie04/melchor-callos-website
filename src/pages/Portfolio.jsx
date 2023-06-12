import React, { useEffect } from "react";
import { portfolioData } from "../data/content";
import Title from "../components/customs/Title";
import LeftProject from "../components/portfolio/LeftProject";
import RightProject from "../components/portfolio/RightProject";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col bg-light dark:bg-dark mb-20">
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
    </div>
  );
};

export default Portfolio;
