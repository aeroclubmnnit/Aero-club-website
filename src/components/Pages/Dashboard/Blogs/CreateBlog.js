import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import ReactQuill, { Quill } from "react-quill";
import ImageResize from "quill-image-resize";
import "react-quill/dist/quill.snow.css";
import "../../../../css/CreateBlog.css";
import "../../../../css/SingleBlog.css";
import { REACT_APP_BASE_TITLE, REACT_APP_SERVER } from "../../../../grobalVars"
import { Button, Container, Jumbotron, Tab, Tabs } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
Quill.register("modules/imageResize", ImageResize);

export default function CreateBlog() {
  document.title = `CreateBlog | ${REACT_APP_BASE_TITLE}`;
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

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
    if (!localStorage.getItem("jwtToken")) {
      history.push("/user/login");
      toast.warn("You must be logged in !");
      return;
    }
  }, []);

  const handleCreateBlog = () => {
    setLoading(true);
    if (!title || !body) {
      toast.warn("Please specify all the details before you create the blog !");
      setLoading(false);
      return;
    }

    fetch(`${REACT_APP_SERVER}/api/blogs`, {
      method: "post",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        body,
        postedBy: user.id,
        publishedAt: Date.now(),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        dispatch({ type: "UPDATE_BLOG", payload: { ...data, _id: data.id } });
        toast.success(
          "Blog has been sent for confirmation...Till then stay tuned !"
        );
        history.push("/user/dashboard");
      });
  };

  return (
    <div className="blog">
      <div className="pagesg">
        <div className="overlayg">
          <div className="pageTitleg titleBoldg">
            <h4 className="mt-4">
              Create your blog full of creativity and innovation ...!
            </h4>
          </div>
        </div>
      </div>

      <div className="mt-4 mx-2">
        <Tabs defaultActiveKey="create" id="uncontrolled-tab-example">
          <Tab eventKey="create" title="Layout">
            <div className="container-fluid bg-light col-10 rounded p-4 my-5 mx-auto">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <ReactQuill
                className="mb-3"
                modules={{
                  toolbar: [
                    ["bold", "italic", "underline", "strike"],
                    [{ header: [1, 2, 3, 4, 5, 6, false] }],
                    [{ size: ["small", false, "large", "huge"] }],
                    [{ font: [] }],
                    [{ color: [] }, { background: [] }],
                    [{ list: "ordered" }, { list: "bullet" }],
                    [{ script: "sub" }, { script: "super" }],
                    ["blockquote", "code-block"],
                    [{ indent: "-1" }, { indent: "+1" }],
                    [{ direction: "rtl" }],
                    [{ align: [] }],
                    ["link", "image", "video"],
                    ["clean"],
                  ],
                  imageResize: {
                    displayStyles: {
                      backgroundColor: "black",
                      border: "none",
                      color: "white",
                    },
                    modules: ["Resize", "DisplaySize", "Toolbar"],
                  },
                }}
                value={body}
                onChange={setBody}
              />
            </div>
            <Button
              className="create-btn"
              size='lg'
              variant="danger"
              onClick={handleCreateBlog}
            >
              {loading ? "Loading ..." : "Create Blog"}
            </Button>
          </Tab>
          <Tab eventKey="preview" title="Preview">
            <div>
              <div
                className="pagesp"
                style={{
                  background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,.4)),`,
                }}
              >
                <div className="overlayp">
                  <div className="pageTitlep titleBoldp">
                    {title}
                    <p className="meta">
                      <em style={{ fontSize: "1rem" }}>
                        Posted by{" "}
                        {user?.linkedin_url !==
                          "https://www.linkedin.com/in/username/" ? (
                          <a href={user?.linkedin_url} target="_blank">
                            {user?.name}
                          </a>
                        ) : (
                          user?.name
                        )}{" "}
                        {`( branch - ${branch[user?.registration_no[4]]} , ${user?.year == -1
                          ? "year - NA"
                          : year[user?.year]
                          } )`}{" "}
                on {new Date(Date.now()).toLocaleDateString()}
                      </em>
                    </p>
                  </div>
                </div>
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
                  <p dangerouslySetInnerHTML={{ __html: body }}></p>
                </Container>
                <hr />
              </Jumbotron>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
