import React, { useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import "../../css/Login.css";

function PasswordReset() {

  const password = useRef();
  const confirmPassword = useRef();
  const history = useHistory();
  const { token } = useParams();

  useEffect(() => {
    document.title = `Reset Password | ${process.env.REACT_APP_BASE_TITLE}`;
    fetch(`${process.env.REACT_APP_SERVER}/api/resetverify`, {
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) history.push("/404");
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.current.value !== confirmPassword.current.value) {
      toast.warn("passwords do not match !");
      return;
    }

    fetch(`/api/reset-password`, {
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password.current.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) toast.warn(data.error);
        else {
          if (data.message) toast.success(data.message);
          else toast.warn("Your session has expired...try again !");
          history.push("/user/login");
        }
      });
  };

  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5
                  className="card-title text-center font-weight-bold"
                  id="heading"
                >
                  Reset Password
                </h5>
                <form className="form-signin">
                  <div className="form-label-group">
                    <input
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      placeholder="New Password"
                      required
                      ref={password}
                    />
                    <label htmlFor="inputPassword">New Password</label>
                  </div>
                  <div className="form-label-group">
                    <input
                      type="password"
                      id="inputretypePassword"
                      className="form-control"
                      placeholder="Retype Password"
                      required
                      ref={confirmPassword}
                    />
                    <label htmlFor="inputretypePassword">Retype Password</label>
                  </div>
                  <button
                    className="btn btn-lg btn-primary btn-dark text-uppercase l1"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Update Password
                  </button>
                  <hr className="my-4" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordReset;
