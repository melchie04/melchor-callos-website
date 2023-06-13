import React from "react";
import AliceCarousel from "react-alice-carousel";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutSkills = ({ aboutData }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const items = aboutData.skills.map((skill, index) => {
    return (
      <div
        key={index}
        className="py-3 px-0 flex flex-col justify-center items-center"
      >
        <img src={skill.img} alt={skill.name} className="mb-2 w-14" />
        <h1 className="text-sm md:text-base text-gray-800 dark:text-gray-200">
          {skill.name}
        </h1>
      </div>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    640: {
      items: 4,
    },
    1024: {
      items: 6,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial={inView ? { opacity: 0.1 } : { opacity: 1 }}
      animate={inView ? { opacity: 1 } : { opacity: 0.1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center items-center my-10"
    >
      <p className="font-semibold text-xl text-primary mb-5">
        Here are my skills:
      </p>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </motion.div>
  );
};

export default AboutSkills;
