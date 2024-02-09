import React, { Component } from "react";
import { Link } from "react-router-dom";
import instagram from "./img/instagram.svg";
import facebook from "./img/facebook.svg";
import twitterx from "./img/twitterx.svg";

export default class Footer extends Component {
  render() {
    return (
        <div className="foot mt-5" style={{position: 'fixed', bottom: '0px', left: '0px', height: '100px', width: '100%',}}>
          <footer className="d-flex flex-wrap justify-content-between align-items-center p-3 mt-4 border-top bg-dark" style={{minHeight: '10vh' }}>
            <p className="col-md-4 mb-0 text-light">
              © All Copyright 2024 NewsMonkey,<br/> Usama Patel
            </p>

            <Link className="navbar-brand text-light" to="/">
              <strong> NewsMonkey </strong>
            </Link>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li className="ms-3">
              <Link to='https://www.instagram.com/' target="_blank">
                <img src={instagram} alt="Instagram"/>
                </Link>
              </li>
              <li className="ms-3">
                <Link to='https://www.facebook.com/' target="_blank">
                <img src={facebook} alt="Facebook"/>
                </Link>
              </li>
              <li className="ms-3">
              <Link to='https://www.twitter.com/' target="_blank">
                <img src={twitterx} alt="Twitter"/>
                </Link>
              </li>
            </ul>
          </footer>
        </div>
    );
  }
}
