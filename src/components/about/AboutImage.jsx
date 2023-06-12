import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutImage = ({ aboutData }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      initial={inView ? { opacity: 0.1 } : { opacity: 1 }}
      animate={inView ? { opacity: 1 } : { opacity: 0.1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center w-full"
    >
      <div className="relative w-[250px] h-[250px] bg-gray-800 dark:bg-gray-200 rounded-lg flex justify-center items-center overflow-hidden rectangular-spin-animation">
        <div className="absolute inset-[5px] rounded-lg bg-light dark:bg-dark z-10">
          <div className="absolute inset-[5px] w-[calc(100% - 10px)] h-[calc(100% - 5px)] object-cover bg-gray-800 dark:bg-gray-200 rounded-lg">
            <img className="w-full h-full" src={aboutData.profileImg} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutImage;
