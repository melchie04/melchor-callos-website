import React, { useEffect } from "react";
import { experienceData } from "../data/content";
import Title from "../components/customs/Title";
import ExperienceTimeline from "../components/experience/ExperienceTimeline";

const Experience = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col bg-light dark:bg-dark mb-20">
      <Title
        title={experienceData.title.toUpperCase()}
        subtitle={experienceData.subtitle}
      />
      <ExperienceTimeline experienceData={experienceData} />
    </div>
  );
};

export default Experience;
