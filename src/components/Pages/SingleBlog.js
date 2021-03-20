import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "../../css/SingleBlog.css";
import Loading from "../../Animations/Loading";
import { Container, Jumbotron } from "react-bootstrap";
import { REACT_APP_BASE_TITLE, REACT_APP_SERVER } from "../../grobalVars"

function SingleBlog() {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(undefined);
  const history = useHistory();

  const year = {
    1: "1st year",
    2: "2nd year",
    3: "3rd year",
    4: "final year",
  };

  const branch = {
    '0': 'Biotechnology',
    '1': 'Civil Engg.',
    '2': 'Electrical Engg.',
    '3': 'Mechanical Engg.',
    '4': 'Computer Science Engg.',
    '5': 'Electronics and Comm. Engg.',
    '6': 'Production and Industrial Engg.',
    '8': 'Information Technology',
    '9': 'Chemical Engg.',
    'x': 'NA'
  }

  useEffect(() => {
    document.title = `Blog-${blogId} | ${REACT_APP_BASE_TITLE}`;
    fetch(`${REACT_APP_SERVER}/api/blogstoUI/${blogId}`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) history.push("/404");
        else setBlog(data);
      });
  }, []);

  return (
    <div>
      <Loading time={2} />

      <div
        className="pagesp d-flex"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,.4))`,
        }}
      >
        <div className="overlayp">
          <div className="pageTitlep titleBoldp">
            {blog?.title}
            <p className="meta">
              <em style={{ fontSize: "1rem" }}>
                Posted by{" "}
                {blog?.postedBy.linkedin_url !==
                  "https://www.linkedin.com/in/username/" ? (
                  <a href={blog?.postedBy.linkedin_url} target="_blank">
                    {blog?.postedBy.name}
                  </a>
                ) : (
                  blog?.postedBy.name
                )}{" "}
                {`( branch - ${branch[blog?.postedBy.registration_no[4]]} , ${blog?.postedBy.year == -1
                  ? "year - NA"
                  : year[blog?.postedBy.year]
                  } )`}{" "}
                on {new Date(blog?.publishedAt).toLocaleDateString()}
              </em>
            </p>
          </div>
        </div>
        {
          blog?.pic &&
          <div className="image" style={{ width: '30rem' }}>
            <img src={blog?.pic} alt="img" style={{ width: '100%', height: '100%' }} />
          </div>
        }
      </div>
      <Jumbotron
        fluid
        style={{
          background: "white",
          width: "100%",
        }}
        className="my-4"
      >
        <Container className="col-10 col-md-10 col-lg-11 singleblog-contents">
          <p dangerouslySetInnerHTML={{ __html: blog?.body }}></p>
        </Container>
        <hr />
      </Jumbotron>
    </div>
  );
}

export default SingleBlog;
