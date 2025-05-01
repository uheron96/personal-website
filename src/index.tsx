import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router";
import { Portfolio } from "./screens/Portfolio";
import { Project } from "./screens/Project";
import ScrollToTop from "./utils/ScrollToTop";
import { ContactMe } from "./screens/ContactMe";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/contactMe" element={<ContactMe />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
