import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Function from "./components/Function";
import Loop from "./components/Loop";
import Arrays from "./components/Arrays";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ifelse from "./components/Ifelse";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/function" element={<Function />} />
        <Route path="/loop" element={<Loop />} />{" "}
        <Route path="/ifelse" element={<Ifelse />} />{" "}
        <Route path="/array" element={<Arrays />} />{" "}
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
