import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PageControlContext = createContext();

const PageControlProvider = ({ children }) => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("/");

  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <PageControlContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </PageControlContext.Provider>
  );
};

export const PageControlState = () => {
  return useContext(PageControlContext);
};

export default PageControlProvider;
