import React from "react";
import { motion } from "framer-motion";
import { preloaderData } from "../data/content";

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="w-screen h-screen flex flex-col justify-center items-center bg-light dark:bg-dark"
    >
      <img src={preloaderData.loader} className="w-40" />
      <h1 className="xs:text-3xl text-2xl font-bold text-primary flex flex-col justify-center items-center text-center animate-pulse">
        {preloaderData.greetings.toUpperCase()}
      </h1>
    </motion.div>
  );
};

export default Preloader;
