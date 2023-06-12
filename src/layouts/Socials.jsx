import React from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="fixed left-0 bottom-0 flex sm:flex-col flex-row sm:space-y-4 sm:space-x-0 space-x-4 p-4 z-50">
      <a
        href="#"
        target="_blank"
        className="w-8 h-8 bg-primary hover:scale-125 duration-300 text-light dark:text-dark p-2 rounded-full flex items-center"
      >
        <FaLinkedin />
      </a>
      <a
        href="#"
        target="_blank"
        className="w-8 h-8 bg-primary hover:scale-125 duration-300 text-light dark:text-dark p-2 rounded-full flex items-center"
      >
        <FaGithub />
      </a>

      <a
        href="#"
        target="_blank"
        className="w-8 h-8 bg-primary hover:scale-125 duration-300 text-light dark:text-dark p-2 rounded-full flex items-center"
      >
        <FaFacebook />
      </a>
      <a
        href="#"
        target="_blank"
        className="w-8 h-8 bg-primary hover:scale-125 duration-300 text-light dark:text-dark p-2 rounded-full flex items-center"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default Socials;
