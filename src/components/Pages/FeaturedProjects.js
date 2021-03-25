import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Loading from "../../Animations/Loading";
import "../../css/featured-proj.css";
import { REACT_APP_BASE_TITLE, REACT_APP_SERVER } from "../../grobalVars"

function FeaturedProjects() {

  const [projects, SetProjects] = useState([]);
  const [signedin, setsignedin] = useState(false)
  document.title = `Projects | ${REACT_APP_BASE_TITLE}`;

  useEffect(() => {

    fetch(`${REACT_APP_SERVER}/api/isSignedIn`, {
      method: "post",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          localStorage.removeItem("jwtToken");
          return;
        }
        setsignedin(true);
      });

    fetch(`${REACT_APP_SERVER}/api/projects/featured`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return SetProjects(data);
      });
  }, []);

  const [page, SetPage] = useState(1);
  const projects_per_page = 4;
  const no_of_pages = Math.ceil(projects.length / projects_per_page);

  return (
    <>
      <Loading time={2} />
      <div className="cont">
        <div className=" pagesg">
          <div className="overlayg">
            <div className="pageTitleg titleBoldg">PROJECTS</div>
          </div>
        </div>
        <div
          className="main"
          style={{ overflow: "hidden", minHeight: "31.7vh" }}
        >
          <ul className="cards">
            {projects
              .slice((page - 1) * projects_per_page, page * projects_per_page)
              .map((project) =>
                project.open || signedin ? (
                  <li className="cards_item" data-aos="fade-up" data-aos="flip-left" data-aos-easing="linear"
                    data-aos-duration="1500">
                    <div className="card cardproj">
                      <div className="card_image">
                        <img className="evfeatured" src={project.pic} style={{ width: '100%', maxHeight: '18rem', minHeight: '18rem' }} />
                      </div>
                      <div className="card_content forphone forphone1" style={{ width: '100%' }}>
                        <h2 className="card_title forphone forphone2" style={{ width: '100%' }}>{project.title}</h2>
                        <p className="card_text forphone forphone3 mb-5" style={{ width: '100%' }}>
                          <strong>OBJECTIVE</strong> : {project.objective} <br /> <br />
                          <strong>STATUS</strong> : {project.status}
                        </p>
                        <Button
                          className="btns card_btns"
                          variant="danger"
                          href={`${window.location.origin}/projects/${project._id}`}
                          style={{ marginTop: 10 }}
                        >
                          Read More
                  </Button>
                      </div>
                    </div>
                  </li>
                ) : (
                  <div></div>
                )
              )}
          </ul>
          {!projects.length && (
            <h3 className="text-center mt-5">No projects available...!</h3>
          )}
          <div className="float-right mr-5 mb-3 mt-5">
            {page > 1 && (
              <Button
                className="mx-1"
                variant="danger"
                onClick={() => {
                  SetPage((page) => page - 1);
                }}
              >
                <i className="fa fa-angle-double-left"></i> Previous
              </Button>
            )}
            {page < no_of_pages && (
              <Button
                variant="danger"
                className="mx-1"
                onClick={() => {
                  SetPage((page) => page + 1);
                }}
              >
                Next <i className="fa fa-angle-double-right"></i>
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedProjects;