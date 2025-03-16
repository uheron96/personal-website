import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router";
import { Portfolio } from "./screens/Portfolio";
import { Project } from "./screens/Project";
import ScrollToTop from "./utils/ScrollToTop";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
  <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path={"project/:id"} element={<Project />} />
    </Routes>
  </BrowserRouter>
);

/* ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);
 */
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
