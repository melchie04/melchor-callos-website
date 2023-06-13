import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Header from "./layouts/Header";
import Preloader from "./pages/Preloader";
import Socials from "./layouts/Socials";
import Download from "./layouts/Download";
import AnimatedRoutes from "./components/customs/AnimatedRoutes";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 8000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="flex justify-center overflow-hidden">
          <Header />
          <AnimatedRoutes />
          <Socials />
          <Download />
          <ToastContainer />
        </div>
      )}
    </>
  );
}

export default App;
