import React from "react";
import "../css/Landing.css";
import Typewriter from "typewriter-effect";
import m from "../images/utils/logo-aero2.png";

class Landing extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="pagesl">
          <div className="overlayl">
            <div className="landing d-flex flex-column-reverse flex-lg-row align-items-center justify-content-center flex-wrap">
              <div className="landing-about">
                <h1 className="font-weight-bold text-uppercase">
                  AeroClub MNNIT
                </h1>
              </div>
              <div className="landing-logo">
                <img src={m} alt="aero" srcSet="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
