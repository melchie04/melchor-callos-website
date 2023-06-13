import React from "react";
import { preloaderData } from "../data/content";

const cvUrl = import.meta.env.VITE_CV_URL;

const Download = () => {
  const handleDownload = () => {
    const filename = cvUrl.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = cvUrl;
    aTag.setAttribute("download", filename);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div className="fixed bottom-0 right-0 p-3 z-50 mr-1">
      <button
        className="text-primary font-bold flex items-center hover:animate-shake"
        onClick={handleDownload}
      >
        <img src={preloaderData.loader} className="w-10 h-10" />
        <span className="hidden sm:inline mr-[7px]">DOWNLOAD</span>
        <span>CV</span>
      </button>
    </div>
  );
};

export default Download;
