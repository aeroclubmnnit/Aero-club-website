import React, { useState, useEffect } from "react";
import { Button, Container, Jumbotron } from "react-bootstrap";
import Loading from "../../Animations/Loading";
import "../../css/SingleBlog.css";
import { REACT_APP_BASE_TITLE, REACT_APP_SERVER } from "../../grobalVars"

function Blogs() {
  const [blogs, SetBlogs] = useState([]);

  useEffect(() => {
    document.title = `Blogs | ${REACT_APP_BASE_TITLE}`;
    fetch(`${REACT_APP_SERVER}/api/blogs/toUI`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => SetBlogs(data));
  }, []);

  const [page, SetPage] = useState(1);
  const blogs_per_page = 5;
  const no_of_pages = Math.ceil(blogs.length / blogs_per_page);
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

  return (
    <div>
      <div className=" pagesg">
        <div className="overlayg">
          <div className="pageTitleg titleBoldg">BLOGS</div>
        </div>
      </div>

      <div style={{ background: "white", overflow: "hidden", minHeight: '36vh' }} >
        <Loading time={2} />
        <div className='my-5'>
          {blogs
            .slice((page - 1) * blogs_per_page, page * blogs_per_page)
            .map((blog, i) => (
              <Jumbotron
                className='shadow my-3 rounded'
                fluid
                style={{
                  background: `${i % 2 === 0 ? 'rgb(137, 54 ,54)' : 'rgb(36 ,22 ,22)'}`,
                  width: "80vw",
                  margin: "auto",
                  color: 'white',
                  paddingBottom: "1rem",
                }}
                key={blog._id}
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <Container>
                  <h2 className="blog-container-head">{blog.title}</h2>
                  <p className="blog-container-para">
                    <em>
                      Posted by{" "}
                      {blog.postedBy.linkedin_url !==
                        "https://www.linkedin.com/in/username/" ? (
                        <a href={blog.postedBy.linkedin_url} target="_blank">
                          {blog.postedBy.name}
                        </a>
                      ) : (
                        blog.postedBy.name
                      )}{" "}
                      {`( branch - ${branch[blog.postedBy.registration_no[4]]}, ${blog.postedBy.year == -1
                        ? "year - NA"
                        : year[blog.postedBy.year]
                        } )`}{" "}
                    on {new Date(blog.publishedAt).toLocaleDateString()}
                    </em>
                  </p>
                  <Button href={`/blogs/${blog._id}`} variant="danger">
                    See More
                  </Button>
                </Container>
              </Jumbotron>
            ))}
          {!blogs.length && (
            <h3 className="text-center mt-5">No blogs available...!</h3>
          )}
          <div className="float-right mr-5 my-5">
            {page > 1 && (
              <Button
                variant="danger"
                className="mx-1"
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
                Next <i className="fa fa-angle-double-right"></i>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
