import React, { useEffect } from "react";
import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
      className="w-full flex flex-col bg-light dark:bg-dark mb-20"
    >
      <Title
        title={aboutData.title.toUpperCase()}
        subtitle={aboutData.subtitle}
      />
      <div className="flex flex-col lg:mx-44 sm:mx-20 xs:mx-10 mx-5 md:my-20 my-10">
        <AboutImage aboutData={aboutData} />
        <AboutContent aboutData={aboutData} />
      </div>
      <div className="flex flex-col lg:mx-44 sm:mx-20 xs:mx-10 mx-5 md:my-20 my-10">
        <AboutSkills aboutData={aboutData} />
      </div>
    </motion.div>
  );
};

export default About;
