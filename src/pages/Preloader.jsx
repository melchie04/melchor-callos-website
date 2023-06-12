import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { preloaderData } from "../data/content";

const Preloader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 3000);
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-light dark:bg-dark">
      {showLoader ? (
        <motion.img
          src={preloaderData.loader}
          className="w-40"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 1 }}
        />
      ) : (
        <>
          <motion.h1
            className="xs:text-3xl text-2xl font-bold text-primary flex flex-col justify-center items-center text-center animate-pulse"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={preloaderData.logo} className="w-40 mb-5" />
            {preloaderData.greetings.toUpperCase()}
          </motion.h1>
        </>
      )}
    </div>
  );
};

export default Preloader;
