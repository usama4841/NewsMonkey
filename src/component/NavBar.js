import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <strong> NewsMonkey </strong>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse col-10"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav text-light me-auto mb-2 mb-lg-0 col-12 justify-content-center">
            <li className="nav-item p-2">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link className="nav-link" to="/business">
                business
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link className="nav-link" to="/entertainment">
                entertainment
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link className="nav-link" to="/health">
                health
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link className="nav-link" to="/science">
                science
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link className="nav-link" to="/sports">
                sports
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link className="nav-link" to="/technology">
                technology
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link className="nav-link" to="/About">
                About Us
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link className="nav-link" to="/Contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item d-flex ms-auto p-2">
              <div
                className="form-check form-switch m-auto"
                id="navbarSupportedContent"
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.ToggleMode}
                />
                <label
                  className={`form-check-label text-${props.mode==='light'?'dark':'light'}`}
                  htmlFor="flexSwitchCheckDefault"
                >
                  Enable Dark Mode
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
