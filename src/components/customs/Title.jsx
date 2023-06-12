import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Title = ({ title, subtitle }) => {
  const [ref, inView] = useInView({
    threshold: 0.6,
  });

  return (
    <motion.div
      ref={ref}
      initial={inView ? { opacity: 0.1 } : { opacity: 1 }}
      animate={inView ? { opacity: 1 } : { opacity: 0.1 }}
      transition={{ duration: 0.5 }}
      className="h-screen flex flex-col justify-center items-center text-center p-4"
    >
      <p className="lg:text-xl sm:text-lg xs:text-md text-base text-tertiary dark:text-secondary my-2">
        {subtitle}
      </p>
      <h1 className="lg:text-5xl sm:text-4xl xs:text-3xl text-2xl font-bold text-primary my-2">
        {title}
      </h1>
    </motion.div>
  );
};

export default Title;
