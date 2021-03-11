import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import "../../css/Login.css";

function ForgetPassword() {
  useEffect(() => {
    document.title = `Forget Password | ${process.env.REACT_APP_BASE_TITLE}`;
  }, [])

  const email = useRef();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${process.env.REACT_APP_SERVER}/api/forget-password`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.current.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) toast.warn(data.error);
        else {
          toast.success(data.message);
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
                  Forget Password
                </h5>
                <form className="form-signin">
                  <div className="form-label-group">
                    <input
                      type="email"
                      id="inputEmail"
                      className="form-control"
                      placeholder="Registered Gsuite id"
                      required
                      autoFocus
                      ref={email}
                    />
                    <label htmlFor="inputEmail">Registered Gsuite id</label>
                  </div>

                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase btn-dark l1"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Send mail
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

export default ForgetPassword;
