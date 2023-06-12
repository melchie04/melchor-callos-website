import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutContent = ({ aboutData }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      initial={inView ? { opacity: 0.1 } : { opacity: 1 }}
      animate={inView ? { opacity: 1 } : { opacity: 0.1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-1 flex-col justify-center items-center text-center mt-10 mb-20 mx-10"
    >
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 max-w-lg my-2">
        {aboutData.name}
      </h1>
      <p className="font-semibold text-xl text-primary my-2">
        {aboutData.roles}
      </p>
      <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 my-2">
        {aboutData.description}
      </p>
      {/* <button className="mx-auto mt-4 bg-primary text-white font-bold py-3 px-8 rounded-full transition duration-300 hover:bg-primary/60">
        DOWNLOAD CV
      </button> */}
    </motion.div>
  );
};

export default AboutContent;
