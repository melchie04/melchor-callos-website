import React, { createContext, useContext, useState, useEffect } from "react";

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    if (document.documentElement.classList.contains("dark")) {
      setLightMode();
    } else {
      setDarkMode();
    }
  };

  const setDarkMode = () => {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
    setIsDarkMode(true);
  };

  const setLightMode = () => {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
    setIsDarkMode(false);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      if (storedTheme === "dark") {
        setDarkMode();
      } else {
        setLightMode();
      }
    } else {
      setDarkMode();
    }
  }, []);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const DarkModeState = () => {
  return useContext(DarkModeContext);
};

export default DarkModeProvider;
