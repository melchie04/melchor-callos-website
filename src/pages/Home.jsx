import React from "react";
import { motion } from "framer-motion";
import { homeData } from "../data/content";
import HeroContent from "../components/home/HeroContent";
import HeroImage from "../components/home/HeroImage";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
      className="w-full h-screen flex flex-col justify-center items-center bg-light dark:bg-dark"
    >
      <div className="flex flex-col md:flex-row justify-center items-start">
        <HeroImage homeData={homeData} />
        <HeroContent homeData={homeData} />
      </div>
    </motion.div>
  );
};

export default Home;
