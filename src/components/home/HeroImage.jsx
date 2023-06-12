import React from "react";
import { Link } from "react-router-dom";
import { PageControlState } from "../../context/PageControlProvider";

const HeroImage = ({ homeData }) => {
  const { setActivePage } = PageControlState();

  return (
    <div className="flex flex-1 justify-center md:justify-end items-center w-full">
      <div className="relative w-48 h-48 bg-gray-800 dark:bg-gray-200 rounded-full overflow-hidden before:bg-gradient-to-t before:from-primary before:dark:to-secondary before:to-tertiary after:bg-light after:dark:bg-dark circular-spin-animation">
        <Link to="/contact" onClick={() => setActivePage("/contact")}>
          <div className="absolute inset-[12px] z-10 rounded-full overflow-hidden flex justify-center items-center flex-col cursor-pointer">
            <div className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 hover:opacity-0 bg-gray-800 dark:bg-gray-200">
              <img className="w-full h-full" src={homeData.profileImg} />
            </div>
            <div className="w-full h-full bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 font-bold text-center text-xl py-2 px-4 flex justify-center items-center">
              SAY HELLO!
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeroImage;
