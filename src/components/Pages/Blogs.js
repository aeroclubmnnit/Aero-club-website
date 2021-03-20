import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Loading from "../../Animations/Loading";
import "../../css/featured-proj.css";
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
    <>
      <Loading time={2} />
      <div className="cont">
        <div className=" pagesg">
          <div className="overlayg">
            <div className="pageTitleg titleBoldg">BLOGS</div>
          </div>
        </div>

        <div
          className="main"
          style={{ overflow: "hidden", minHeight: "31.7vh" }}
        >
          <ul className="cards">
            {blogs
              .slice((page - 1) * blogs_per_page, page * blogs_per_page)
              .map(blog => (
                <li className="cards_item" data-aos="fade-up" data-aos="flip-left" data-aos-easing="linear"
                  data-aos-duration="1500">
                  <div className="card cardproj">
                    <div className="card_image">
                      <img className="evfeatured" src={blog.pic || 'https://lh3.googleusercontent.com/PPRLO6cS9pz1oyVlPhoHBMH3u9LKlLJEBQ7kJMzziAav-C7GEp9vVpJwfky-hsrlR4h0xisARPSzF19VIPmRb31Wpf6xScPJKOggnz4rPDqSJG9FPr9m-BMyDr9zrABeZ8VsDcm9=w2400'} style={{ width: '100%', maxHeight: '18rem', minHeight: '18rem' }} />
                    </div>
                    <div className="card_content forphone forphone1" style={{ width: '100%' }}>
                      <h2 className="card_title forphone forphone2" style={{ width: '100%', minHeight: '5rem' }}>{blog.title}</h2>
                      <p className="card_text forphone forphone3" style={{ width: '100%' }}>
                        <strong>POSTED BY : {" "} </strong>
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
                          } )`}{" "} <br /> <br />
                        <strong>PUBLISHED ON : {" "} </strong> {new Date(blog.publishedAt).toLocaleDateString()}
                      </p>
                      <Button
                        className="btns card_btns"
                        variant="danger"
                        href={`/blogs/${blog._id}`}
                        style={{ marginTop: 10 }}
                      >
                        Read More
                  </Button>
                    </div>
                  </div>
                </li>
              )
              )}
          </ul>
          {!blogs.length && (
            <h3 className="text-center mt-5">No blogs available...!</h3>
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

export default Blogs;
