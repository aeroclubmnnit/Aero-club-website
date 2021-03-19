import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "../../css/SingleProject.css";
import Loading from "../../Animations/Loading";
import { Container, Jumbotron } from "react-bootstrap";
import { REACT_APP_BASE_TITLE, REACT_APP_SERVER } from "../../grobalVars"

function SingleProject() {
  const { projectId } = useParams();
  const [project, setProject] = useState(undefined);
  const history = useHistory();


  useEffect(() => {
    document.title = `Project-${projectId} | ${REACT_APP_BASE_TITLE}`;
    fetch(`${REACT_APP_SERVER}/api/projects/${projectId}`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) history.push("/404");
        setProject(data);
      });
  }, []);

  return (
    <div>
      <Loading time={1.5} />
      <div
        className=" pagesp"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,.4)), url(${project?.pic})`,
        }}
      >
        <div className="overlayp">
          <div className="pageTitlep titleBoldp">
            {project?.title}
            <h5 style={{ fontSize: "1rem" }}>By {project?.teamname}</h5>
            <span className="meta">
              <em style={{ fontSize: "0.8rem" }}>
                Issued on {new Date(project?.issuedon).toLocaleDateString()}
              </em>
            </span>
          </div>
        </div>
      </div>

      <Jumbotron
        fluid
        style={{
          background: "white",
          width: "100%",
          margin: "auto",
          paddingBottom: "1rem",
          paddingLeft: "2rem",
        }}
      >
        <Container>
          <h4>Description:</h4>
          <p dangerouslySetInnerHTML={{ __html: project?.description }}></p>
          <h4>Objective:</h4>
          <p dangerouslySetInnerHTML={{ __html: project?.objective }}></p>
          <p>
            <img style={{ width: "60vw" }} src={project?.pic} />
          </p>
          <h4>Project Status:</h4>
          <p dangerouslySetInnerHTML={{ __html: project?.status }}></p>

          <h4>Members:</h4>
          <p>
            {" "}
            {project?.members.map(function (d, idx) {
              console.log(d);
              return <li key={idx}>{d.user.name}</li>;
            })}
          </p>
        </Container>
        <hr />
      </Jumbotron>
    </div>
  );
}

export default SingleProject;
