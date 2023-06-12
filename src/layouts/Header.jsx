import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FiSun, FiMoon } from "react-icons/fi";
import { navData } from "../data/content";
import { DarkModeState } from "../context/DarkModeProvider";
import { PageControlState } from "../context/PageControlProvider";

const Header = () => {
  const { isDarkMode, toggleDarkMode } = DarkModeState();
  const { activePage, setActivePage } = PageControlState();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-[1366px] w-full fixed z-50 bg-light dark:bg-dark bg-opacity-75 dark:bg-opacity-75">
      <div className="md:flex relative items-center justify-between py-4 md:px-10 px-7">
        <div className="flex items-center">
          <Link to="/" onClick={() => setActivePage(item.href)}>
            <img
              src={navData.logo}
              alt="MC"
              className="w-10 h-auto object-cover"
            />
          </Link>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden dark:text-gray-200"
        >
          {isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={`md:flex absolute md:items-center md:pb-0 pb-12 md:static md:z-auto z-[-1] md:bg-transparent bg-gray-200 dark:md:bg-transparent dark:bg-gray-800 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            isOpen ? "top-20 " : "top-[-490px]"
          }`}
        >
          {navData.links.map((item, index) => (
            <li key={index} className="md:mx-2 text-xs font-bold md:my-0 my-5">
              <Link
                to={item.href}
                className={`${
                  item.href === activePage
                    ? "text-primary"
                    : "text-gray-800 dark:text-gray-200"
                } hover:text-primary dark:hover:text-primary duration-500 cursor-pointer`}
                onClick={() => {
                  setActivePage(item.href);
                  setIsOpen(!isOpen);
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li className="md:mx-2 md:mt-0 mt-5">
            <button
              className="w-5 h-5 flex items-center justify-center cursor-pointer"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? (
                <FiSun
                  className="text-yellow-400 hover:text-primary"
                  size={24}
                />
              ) : (
                <FiMoon
                  className="text-gray-800 hover:text-primary"
                  size={24}
                />
              )}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
