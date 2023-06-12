import React from "react";
import { preloaderData } from "../data/content";

const Download = () => {
  return (
    <div className="fixed bottom-0 right-0 p-3 z-50 mr-1">
      <button className="text-primary font-bold flex items-center hover:animate-shake">
        <img src={preloaderData.loader} className="w-10 h-10" />
        <span className="hidden sm:inline mr-[7px]">DOWNLOAD</span>
        <span>CV</span>
      </button>
    </div>
  );
};

export default Download;
