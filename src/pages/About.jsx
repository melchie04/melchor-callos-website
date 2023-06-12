import React, { useEffect } from "react";
import { aboutData } from "../data/content";
import Title from "../components/customs/Title";
import AboutContent from "../components/about/AboutContent";
import AboutImage from "../components/about/AboutImage";
import AboutSkills from "../components/about/AboutSkills";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col bg-light dark:bg-dark mb-20">
      <Title
        title={aboutData.title.toUpperCase()}
        subtitle={aboutData.subtitle}
      />
      <div className="flex flex-col lg:mx-44 sm:mx-20 xs:mx-10 mx-5 md:my-20 my-10">
        <AboutImage aboutData={aboutData} />
        <AboutContent aboutData={aboutData} />
        <AboutSkills aboutData={aboutData} />
      </div>
    </div>
  );
};

export default About;
