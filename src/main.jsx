import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import DarkModeProvider from "./context/DarkModeProvider.jsx";
import PageControlProvider from "./context/PageControlProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "react-alice-carousel/lib/alice-carousel.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeProvider>
        <PageControlProvider>
          <App />
        </PageControlProvider>
      </DarkModeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
