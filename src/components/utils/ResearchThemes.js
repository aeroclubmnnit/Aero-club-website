import React from "react";
import "../../css/ResearchThemes.css";

const ResearchThemes = () => {
  return (
    <div className="container-fluid" style={{ background: "rgb(29, 29, 29)" }}>
      <div
        className="pageTitle titleBold headingc white-headingc"
        data-aos="fade-down"
        style={{ marginBottom: "-25px", color: "white" }}
      >
        Research Themes
      </div>
      <div className="jumbotron" style={{marginBottom:"0", background:"rgba(0, 0, 0, 0)"}}>
        <div
          className="miniSep"
          style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
        ></div>
        <div className="row justify-content-center">
          <div
            className="col-sm-10"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div
              className="card text-center"
              style={{ marginBottom: "1.5rem", width: "auto" }}
            >
              <div
                className="card-header"
                style={{
                  fontSize: "1.5rem",
                  background: "rgb(56, 55, 55)",
                  color: "white",
                  border: "3px solid white",
                }}
              >
                Our Domains
              </div>
              <div className="card-body">
                {/* <h5 class="card-title">Special title treatment</h5> */}
                <p className="card-text">
                  <p>Fixed Wing Aircraft </p>
                  <p>Multirotors</p>
                  <p>Space Vehicles </p>
                  <a href="#" className="btn btn-dark">
                    Astronomy
                  </a>
                </p>
              </div>
              {/* <div class="card-footer text-muted">
                    2 days ago
                </div> */}
            </div>
          </div>
        </div>
        <div className="i-am-centered">
          <div className="row justify-content-center">
            <div className="col-sm-10" data-aos="fade-up">
              <div
                className="card text-center"
                style={{ marginBottom: "0.5rem", width: "auto" }}
              >
                <div
                  className="card-header"
                  style={{
                    fontSize: "1.5rem",
                    background: "rgb(56, 55, 55)",
                    color: "white",
                    border: "3px solid white",
                  }}
                >
                  Technologies
                </div>
              </div>
            </div>
            <div
              className="col-sm-5"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
            >
              <div className="card" style={{ marginBottom: "1rem" }}>
                <div
                  className="card-body"
                  style={{ background: "rgb(204, 67, 67)" }}
                >
                  <h5 className="card-title" style={{ color: "white" }}>
                    Perception
                  </h5>
                  {/* <div className="miniSep" style={{width:'auto',height:'2px', background: 'white' }} ></div> */}
                  <p className="card-text" style={{ color: "white" }}>
                    Perception using Sensors
                    <br />
                    GPS Based Navigation
                    <br />
                    Deep Learning
                    <br />
                    Object Detection, Tracking and Avoidance
                    <br />
                    Computer Vision
                    <br />
                    Sensor Fusion
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-5"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
            >
              <div className="card" style={{ marginBottom: "1rem" }}>
                <div
                  className="card-body"
                  style={{ background: "rgb(204, 67, 67)" }}
                >
                  <h5 className="card-title" style={{ color: "white" }}>
                    Design
                  </h5>
                  {/* <div className="miniSep" style={{width:'auto',height:'2px', background: 'white' }} ></div> */}
                  <p className="card-text" style={{ color: "white" }}>
                    Computer Aided Design
                    <br />
                    Structural Analysis
                    <br />
                    Design and Manufacture of RC Aircrafts and Multirotors
                    <br />
                    3D Printing
                    <br />
                    Materials
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-sm-5"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
            >
              <div className="card" style={{ marginBottom: "1rem" }}>
                <div
                  className="card-body"
                  style={{ background: "rgb(204, 67, 67)" }}
                >
                  <h5 className="card-title" style={{ color: "white" }}>
                    Planning
                  </h5>
                  {/* <div className="miniSep" style={{width:'auto',height:'2px', background: 'white' }} ></div> */}
                  <p className="card-text" style={{ color: "white" }}>
                    Swarm Intelligence
                    <br />
                    Path Planning
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-5"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
            >
              <div className="card" style={{ marginBottom: "1rem" }}>
                <div
                  className="card-body"
                  style={{ background: "rgb(204, 67, 67)" }}
                >
                  <h5 className="card-title" style={{ color: "white" }}>
                    Control
                  </h5>
                  {/* <div className="miniSep" style={{width:'auto',height:'2px', background: 'white' }} ></div> */}
                  <p className="card-text" style={{ color: "white" }}>
                    Control System Algorithms
                    <br />
                    Different Actuators and their Control
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-5"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
            >
              <div className="card" style={{ marginBottom: "1rem" }}>
                <div
                  className="card-body"
                  style={{ background: "rgb(204, 67, 67)" }}
                >
                  <h5 className="card-title" style={{ color: "white" }}>
                    Aerodynamics
                  </h5>
                  {/* <div className="miniSep" style={{width:'auto',height:'2px', background: 'white' }} ></div> */}
                  <p className="card-text" style={{ color: "white" }}>
                    CFD Simulations
                    <br />
                    Aerofoil Analysis
                    <br />
                    Lift and Drag Studies
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-5"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
            >
              <div className="card" style={{ marginBottom: "1rem" }}>
                <div
                  className="card-body"
                  style={{ background: "rgb(204, 67, 67)" }}
                >
                  <h5 className="card-title" style={{ color: "white" }}>
                    Power Source
                  </h5>
                  {/* <div className="miniSep" style={{width:'auto',height:'2px', background: 'white' }} ></div> */}
                  <p className="card-text" style={{ color: "white" }}>
                    Battery Related Studies
                    <br />
                    Electronic Speed Controllers
                    <br />
                    Propulsion Systems
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-5"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
            >
              <div
                className="card"
                style={{ marginBottom: "1rem", borderRadius: "9px" }}
              >
                <div
                  className="card-body"
                  style={{ background: "rgb(204, 67, 67)" }}
                >
                  <h5 className="card-title" style={{ color: "white" }}>
                    Electronics
                  </h5>
                  {/* <div className="miniSep" style={{width:'auto',height:'2px', background: 'white' }} ></div> */}
                  <p className="card-text" style={{ color: "white" }}>
                    Sensors and Microcontrollers
                    <br />
                    Embedded systems
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchThemes;
