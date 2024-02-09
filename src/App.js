import React, { useState } from "react";
import "./App.css";
import NavBar from "./component/NavBar";
import News from "./component/News";
import About from "./component/About";
import { Routes, Route } from "react-router-dom";
import Contact from "./component/Contact";
import LoadingBar from "react-top-loading-bar";

export default function App(props) {
  const pageSize = 6;
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState("light");
  const ToggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
      <div>
        <NavBar mode={mode} ToggleMode={ToggleMode} />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="container my-3">
                <News
                  mode={mode}
                  setProgress={setProgress}
                  pageSize={pageSize}
                  country="in"
                  category="general"
                />
              </div>
            }
          />
          <Route
            exact
            path="/business"
            element={
              <div className="container my-3">
                <News
                  mode={mode}
                  setProgress={setProgress}
                  key="business"
                  pageSize={pageSize}
                  country="in"
                  category="business"
                />
              </div>
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <div className="container my-3">
                <News
                  mode={mode}
                  setProgress={setProgress}
                  key="entertainent"
                  pageSize={pageSize}
                  country="in"
                  category="entertainment"
                />
              </div>
            }
          />
          <Route
            exact
            path="/health"
            element={
              <div className="container my-3">
                <News
                  mode={mode}
                  setProgress={setProgress}
                  key="health"
                  pageSize={pageSize}
                  country="in"
                  category="health"
                />
              </div>
            }
          />
          <Route
            exact
            path="/science"
            element={
              <div className="container my-3">
                <News
                  mode={mode}
                  setProgress={setProgress}
                  key="science"
                  pageSize={pageSize}
                  country="in"
                  category="science"
                />
              </div>
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <div className="container my-3">
                <News
                  mode={mode}
                  setProgress={setProgress}
                  key="sports"
                  pageSize={pageSize}
                  country="in"
                  category="sports"
                />
              </div>
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <div className="container my-3">
                <News
                  mode={mode}
                  setProgress={setProgress}
                  key="technology"
                  pageSize={pageSize}
                  country="in"
                  category="technology"
                />
              </div>
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <div className="container my-3">
                <News
                  mode={mode}
                  setProgress={setProgress}
                  key="technology"
                  pageSize={pageSize}
                  country="in"
                  category="technology"
                />
              </div>
            }
          />
          <Route
            exact
            path="/About"
            element={
              <div className="container">
                <About mode={mode} />
              </div>
            }
          />
          <Route
            exact
            path="/Contact"
            element={
              <div className="container">
                <Contact mode={mode} />
              </div>
            }
          />
        </Routes>
      </div>
  );
}
