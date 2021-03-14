import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Loading from "../../Animations/Loading";
import "../../css/featured-proj.css";

function Projects() {

  const [projects, SetProjects] = useState([]);
  const [signedin, setsignedin] = useState(false)
  document.title = `Projects | ${process.env.REACT_APP_BASE_TITLE}`;

  useEffect(() => {

    fetch(`${process.env.REACT_APP_SERVER}/api/isSignedIn`, {
      method: "post",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          localStorage.removeItem("jwtToken");
          return ;
        }
        setsignedin(true);
      });

    fetch(`${process.env.REACT_APP_SERVER}/api/projects/approved`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return SetProjects(data);
      });
  }, []);

  const [page, SetPage] = useState(1);
  const projects_per_page = 1;
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
            <Loading time={2} />
            {projects
              .slice((page - 1) * projects_per_page, page * projects_per_page)
              .map((project) =>
                project.open || signedin ? (
                  <li
                    className="cards_item"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                  >
                    <div className="card cardproj">
                      <div className="card_image">
                        <img src={project.pic} />
                      </div>
                      <div className="card_content">
                        <h2 className="card_title" style={{ fontSize: 23 }}>
                          {project.title}
                        </h2>
                        <p
                          className="card_text"
                          style={{ marginTop: 0, marginBottom: 0 }}
                        >
                          By {project.teamname}
                        </p>
                        <p
                          className="card_text"
                          style={{ marginTop: 0, marginBottom: 0 }}
                        >
                          Project Status : {project.status}
                        </p>
                        <p
                          className="card_text"
                          style={{ marginTop: 0, marginBottom: 0 }}
                        >
                          Issued on {new Date(project.issuedon).toDateString()}
                        </p>

                        <Button
                          className="btns card_btns"
                          variant="danger"
                          href={`projects/${project._id}`}
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
                <i class="fa fa-angle-double-left"></i> Previous
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
                Next <i class="fa fa-angle-double-right"></i>
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
