import React from "react";

export default function Contact(props) {
    return (
      <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
        <div className="row my-3 row-cols-2 row-cols-md-2 mt-2 mb-5 g-4">
          <div className="col">
            <div className="card border-secondary" >
              <div className="card-body text-secondary-emphasis ">
                <h3 className="card-title text-center">Contact Details</h3>
                <hr />
                <p className="card-text text-center fst-italic mb-2">+91 9328167199<br/>
                  usamapatel334356@gmail.com<br/>usamapatel34356@gmail.com

                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-secondary">
              <div className="card-body text-secondary-emphasis ">
                <h3 className="card-title text-center">Permanent Address</h3>
                <hr />
                <p className="card-text text-center fst-italic mb-2">
                  +251/GF, Parmar Street,
                  <br />
                  Vahalu, Bharuch, Gujarat
                  <br /> India -392020
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="card border-secondary my-5">
          <div className="card-header text-center">
            <h4 className="my-2">Fill The Details Below To Get In Touch With Us</h4>
          </div>
          <div className="card-body text-secondary-emphasis">
            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="firstname" className="form-label">
                  First Name
                </label>
                <input type="text" className="form-control" id="firstname" />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastname" className="form-label">
                  LastName
                </label>
                <input type="text" className="form-control" id="lastname" />
              </div>
              <div className="col-12">
                <label htmlFor="address" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="address"
                  placeholder="Enter Email Address Here"
                />
              </div>
              <div className="col-12">
                <label htmlFor="Number" className="form-label">
                  Number
                </label>
                <input
                  type="Number"
                  className="form-control"
                  id="Number"
                  placeholder="Enter Number Here"
                />
              </div>
              <div className="col-12 d-grid gap-2">
                <button type="submit" className="btn btn-outline-success my-3">
                  Submit Your Details
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
