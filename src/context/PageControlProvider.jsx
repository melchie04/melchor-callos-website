import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PageControlContext = createContext();

const PageControlProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePage, setActivePage] = useState("/");

  useEffect(() => {
    setActivePage(location.pathname);
  }, [navigate]);

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
