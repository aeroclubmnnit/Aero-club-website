import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "../../css/featured-proj.css";
import OwlCarousel from 'react-owl-carousel';
import { REACT_APP_SERVER } from "../../grobalVars";

export default function Featuredproject() {
  const [projects, SetProjects] = useState([]);
  useEffect(() => {
    fetch(`${REACT_APP_SERVER}/api/projects/featured`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => SetProjects(data));
  }, []);
  return (
    <div className="cont featured-proj">
      <div className="container-fluid">
        <div
          className="pageTitle titleBold headingc white-headingc"
          data-aos="fade-down"
          style={{ marginBottom: "5px" }}
        >
          Featured Projects
        </div>
        <div className="miniSep" style={{ marginBottom: "20px" }}></div>
        <ul className="cards">
          {
            projects.length && (
              <OwlCarousel className='owl-theme' autoplay autoplaySpeed={2000} autoplay HoverPauseloop responsive={{
                0: {
                  items: 1
                },
                700: {
                  items: 2
                },
                1000: {
                  items: 3
                }
              }} >
                {projects.map((project) => (
                  <div className='item' key={project._id} style={{ margin: 'auto' }}>
                    <li className="cards_item" data-aos="fade-up" style={{ width: '100%' }} data-aos="flip-left">
                      <div className="card">
                        <div className="card_image">
                          <img className="evfeatured" src={project.pic} style={{ width: '100%', maxHeight: '18rem', minHeight: '18rem' }} />
                        </div>
                        <div className="card_content forphone forphone1" style={{ width: '100%' }}>
                          <h2 className="card_title forphone forphone2" style={{ width: '100%' }}>{project.title}</h2>
                          <p className="card_text forphone forphone3" style={{ width: '100%' }}>
                            {project.objective}
                          </p>
                          {/* <div className="card-footer text-center"> */}
                          <Button
                            className="btns card_btns"
                            variant="danger"
                            href={`projects/${project._id}`}
                            style={{ marginTop: 10 }}
                          >
                            Read More
                  </Button>
                          {/* </div> */}
                        </div>
                      </div>
                    </li>
                  </div>
                ))}
              </OwlCarousel>
            )}
        </ul>
      </div>
    </div>
  );
}
