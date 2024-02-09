import React from "react";
import Aboutcard from "./img/about-card.jpg";
import { Link } from "react-router-dom";
import twitterx from "./img/twitterx.svg";
import Instagram from "./img/instagram.svg";
import facebook from "./img/facebook.svg";
export default function About() {
  return (
    <div className="container my-4">
      <div className="card mb-3">
        <img
          src={Aboutcard}
          className="card-img-top"
          alt="..."
          style={{ height: "300px" }}
        />
        <div className="card-body">
          <h2 className="card-title mb-3 text-center text-info-emphasis">
            NewsMonkey{" "}
          </h2>
          <p className="card-text text-capitalize fst-italic">
            NewsMonkey Website Is Used As A Mediator Between Users And
            Publishers So That Both Can Connect With Each Other Easily.On The
            NewsMonkey Webiste, Publisher Provides The News And Their Own Link
            That Can Easily Redirect User To Read Their News. On NewsMonkey, You
            Can Easily Get The News According To The Category That User Has
            Interest In.
          </p>
        </div>
      </div>
      <hr />
      <div className="row mb-2">
        <div className="col-md-6">
          <div className="row g-0  bg-light border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <h3 className="d-inline-block mb-2 text-primary-emphasis text-center">
                FOR USERS
              </h3>
              <h4 className="mb-2 text-capitalize fst-italic">
                A World Class Experience To Get The News From Around The World.
              </h4>
              <p className="card-text mt-2 text-capitalize fst-italic">
                NewsMonkey is used as a mediator between user and publisher,
                reaching people when they are looking for great content and
                products related to their passions. Explore news about various
                categories acccording to their preference.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row g-0  bg-light border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <h3 className="d-inline-block mb-2 text-primary-emphasis text-center">
                FOR PUBLISHERS AND CREATORS
              </h3>
              <h4 className="mb-2 text-capitalize fst-italic">
                The Best Platform To Reach Audience And Provide Valuable News.
              </h4>
              <p className="mb-2 text-capitalize fst-italic">
                NewsMonkey connects publishers and creators to audiences around
                the world eager to engage with quality content and share stories
                that inspire them. Add your content to NewsMonkey and expand
                your reach.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col text-center">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Instagram</h5>
              <Link to="https://www.instagram.com/" target="_blank">
                <img src={Instagram} alt="Instagram" />
              </Link>
            </div>
          </div>
        </div>
        <div class="col text-center">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Facebook</h5>
              <Link to="https://www.facebook.com/" target="_blank">
                <img src={facebook} alt="Facebook" />
              </Link>
            </div>
          </div>
        </div>
        <div class="col text-center">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Twitter</h5>
              <Link to="https://www.twitter.com/" target="_blank">
                <img src={twitterx} alt="Twitter" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
