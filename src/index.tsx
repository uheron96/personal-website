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
import { PostHogProvider } from "posthog-js/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <PostHogProvider
      apiKey={process.env.REACT_APP_POSTHOG_KEY || ""}
      options={{
        api_host: "https://us.i.posthog.com",
        debug: process.env.NODE_ENV === "development",
      }}
    >
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/contactMe" element={<ContactMe />} />
        </Routes>
      </BrowserRouter>
    </PostHogProvider>
  </React.StrictMode>
);

reportWebVitals();
