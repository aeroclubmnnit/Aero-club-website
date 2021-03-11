import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import ReactQuill, { Quill } from "react-quill";
import ImageResize from "quill-image-resize";
import "react-quill/dist/quill.snow.css";
import "../../../../css/CreateBlog.css";
import "../../../../css/SingleBlog.css";
import { Button, Container, Jumbotron, Tab, Tabs } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
Quill.register("modules/imageResize", ImageResize);

export default function CreateBlog() {
  document.title = "CreateBlog | Aero Club";
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [pic, setPic] = useState("");
  const [postedBy, setPostedBy] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(user._id)
    if (!localStorage.getItem("jwtToken")) {
      history.push("/user/login");
      toast.warn("You must be logged in !");
      return;
    }
    setPostedBy(`${user?.name} (${user?.email})`);
  }, [user]);

  const handleCreateBlog = () => {
    setLoading(true);
    if (!title || !body || !pic) {
      toast.warn("Please specify all the details before you create the blog !");
      return;
    }

    fetch(`${process.env.REACT_APP_SERVER}/api/blogs`, {
      method: "post",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        body,
        pic,
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
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  placeholder="Background image URL"
                  value={pic}
                  onChange={(e) => setPic(e.target.value)}
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
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Posted By : </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={postedBy}
                  disabled
                />
              </div>
            </div>
            <Button
              className="create-btn"
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
                  background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,.4)), url(${pic})`,
                }}
              >
                <div className="overlayp">
                  <div className="pageTitlep titleBoldp">
                    {title}
                    <p className="meta">
                      <em style={{ fontSize: "0.8rem" }}>
                        Posted by {postedBy} on{" "}
                        {new Date(Date.now()).toLocaleDateString()}
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
