import React from "react";
import HeroContent from "../components/home/HeroContent";
import HeroImage from "../components/home/HeroImage";
import { homeData } from "../data/content";

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-light dark:bg-dark">
      <div className="flex flex-col md:flex-row justify-center items-start">
        <HeroImage homeData={homeData} />
        <HeroContent homeData={homeData} />
      </div>
    </div>
  );
};

export default Home;
