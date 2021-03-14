import React, { useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "../../css/Login.css";
import m from "../../images/utils/logo-aero2.png";

function Login() {
  const email = useRef();
  const password = useRef();
  const history = useHistory();

  useEffect(() => {
    document.title = `Login | ${process.env.REACT_APP_BASE_TITLE}`;
    if (localStorage.getItem("jwtToken")) history.push("/404");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${process.env.REACT_APP_SERVER}/api/signin`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.current.value,
        password: password.current.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) toast.warn(data.error);
        else {
          localStorage.setItem("jwtToken", data.token);
          history.push("/user/dashboard");
          toast.success(data.message);
          window.location.reload();
        }
      });
  };

  const passwordToggle = () => {
    const eye = document.getElementById('eye')
    if (eye.classList.contains('fa-eye')) {
      eye.classList.remove('fa-eye')
      eye.classList.add('fa-eye-slash')
      document.getElementById('inputPassword').type = 'password'
    }
    else {
      eye.classList.remove('fa-eye-slash')
      eye.classList.add('fa-eye')
      document.getElementById('inputPassword').type = 'text'
    }
  }

  return (
    <div className="login">
      <div className="container h-100 m-auto d-flex justify-content-center align-items-center">
        <div className="login-logo">
          <img src={m} alt="aeroclub" />
        </div>
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin shadow">
            <div className="card-body">
              <h5
                className="card-title text-center font-weight-bold"
                id="heading"
              >
                Account login
              </h5>
              <form className="form-signin">
                <div className="form-label-group">
                  <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Gsuite Email Address"
                    required
                    autoFocus
                    ref={email}
                  />
                  <label htmlFor="inputEmail">Gsuite Email Address</label>
                </div>

                <div className="form-label-group">
                  <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    required
                    maxLength={30}
                    ref={password}
                  />
                  <label htmlFor="inputPassword" >Password</label><i className="fa fa-eye-slash float-right" id='eye' onClick={passwordToggle}></i>
                </div>
                <button
                  className="btn btn-lg btn-dark btn-block text-uppercase l1"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Sign in
                </button>
                <hr className="my-4" />
                <div className="para">
                  <p>
                    <Link
                      to="/user/forgetpassword"
                      style={{ textDecoration: "none" }}
                      className="l1"
                    >
                      Forgot Password ?
                    </Link>
                  </p>
                  <p style={{ color: "white" }}>
                    Don't have an account?{" "}
                    <Link
                      to="/user/signup"
                      style={{ textDecoration: "none" }}
                      className="l1"
                    >
                      Signup
                    </Link>
                  </p>
                  <button
                    type="button"
                    className="btn btn-dark text-uppercase l1"
                    style={{ width: "100%" }}
                  >
                    <Link
                      to="/"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      Back to Home
                    </Link>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
