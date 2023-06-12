import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const HeroContent = ({ homeData }) => {
  const [text] = useTypewriter(homeData.typewriter);
  return (
    <div className="flex flex-col justify-center items-center h-full md:ml-5 ml-0 md:my-0 my-5">
      <div className="flex flex-col md:text-left text-center">
        <h1 className="font-bold lg:text-7xl sm:text-6xl xs:text-5xl text-4xl my-1 text-gray-800 dark:text-gray-200">
          {homeData.greetings}
          <span className="text-primary">{homeData.name}</span>
        </h1>
        <p className="font-medium italic lg:text-3xl sm:text-2xl xs:text-xl text-lg my-1 text-tertiary dark:text-secondary">
          {text}
          <Cursor />
        </p>
      </div>
    </div>
  );
};

export default HeroContent;
