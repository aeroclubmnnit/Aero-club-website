import React, { useState } from "react";
import ReactQuill from "react-quill";
import { useDispatch } from "react-redux";
import { REACT_APP_BASE_TITLE, REACT_APP_SERVER } from "../../../../grobalVars";

export default function ProjForm(props) {
  const [formData, setformData] = useState({
    title: "",
    description: "",
    objective: "",
  });

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
        fetch(`${REACT_APP_SERVER}/api/projects`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
          body: JSON.stringify({
            title: formData.title,
            description: formData.description,
            objective: formData.objective,
          }),
        })
          .then((res) => {
            setformData({
              title: "",
              description: "",
              objective: "",
            });
            res.json().then((data) => {
              dispatch({ type: "CREATE_PROJECT", payload: data });
              setLoading(false);
            });
          })
          .catch((err) => {
            setLoading(false);
            setformData({
              title: "",
              description: "",
              objective: "",
            });
          });
      }}
    >
      <div className="form-floating mb-3">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          required
          value={formData.title}
          onChange={(e) => {
            setformData((prev) => ({
              ...prev,
              title: e.target.value,
            }));
          }}
        />
      </div>
      <div className="form-floating mb-3">
        <label htmlFor="objective">Objective</label>

        <input
          type="text"
          className="form-control"
          id="objective"
          required
          value={formData.objective}
          onChange={(e) => {
            setformData((prev) => ({
              ...prev,
              objective: e.target.value,
            }));
          }}
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
        value={formData.description}
        onChange={(e) => {
          setformData((prev) => ({
            ...prev,
            description: e.target.value,
          }));
        }}
      />
      <button type="submit" className="btn btn-primary">
        {loading ? "loading..." : "Submit"}
      </button>
    </form>
  );
}
