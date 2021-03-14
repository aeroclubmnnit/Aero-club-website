import React, { useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../css/Login.css";
import { toast } from "react-toastify";
import m from "../../images/utils/logo-aero2.png";

function Signup() {

  const name = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const history = useHistory();

  useEffect(() => {
    document.title = `Signup | ${process.env.REACT_APP_BASE_TITLE}`;
    if (localStorage.getItem("jwtToken")) history.push("/404");
    toast.warn('Account Signup is available only for MNNIT Students...!')
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.current.value !== confirmPassword.current.value) {
      toast.warn("passwords do not match !");
      return;
    }

    fetch(`${process.env.REACT_APP_SERVER}/api/signup`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.current.value,
        email: email.current.value,
        password: password.current.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) toast.warn(data.error);
        else {
          toast.success(data.message);
          history.push("/user/login");
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
  const passwordToggle1 = () => {
    const eye1 = document.getElementById('eye1')
    if (eye1.classList.contains('fa-eye')) {
      eye1.classList.remove('fa-eye')
      eye1.classList.add('fa-eye-slash')
      document.getElementById('inputretypePassword').type = 'password'
    }
    else {
      eye1.classList.remove('fa-eye-slash')
      eye1.classList.add('fa-eye')
      document.getElementById('inputretypePassword').type = 'text'
    }
  }


  return (
    <div className="login">
      <div className="container h-100 d-flex justify-content-center align-items-center">
        <div className="login-logo">
          <img src={m} alt="aeroclub" />
        </div>
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin">
            <div className="card-body">
              <h5
                className="card-title text-center font-weight-bold"
                id="heading"
              >
                Account Signup
              </h5>
              <form className="form-signin">
                <div className="form-label-group">
                  <input
                    type="text"
                    id="inputname"
                    className="form-control"
                    placeholder="Name"
                    required
                    autoFocus
                    ref={name}
                  />
                  <label htmlFor="inputname">Name</label>
                </div>
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
                  <em style={{ fontSize: "x-small" }}>
                    * password must between 8-30 characters containing at least
                    one lowercase and one uppercase letter, one numeric digit,
                    and one special character
                  </em>
                </div>
                <div className="form-label-group">
                  <input
                    type="text"
                    id="inputretypePassword"
                    className="form-control"
                    placeholder="Retype Password"
                    required
                    maxLength={30}
                    ref={confirmPassword}
                  />
                  <label htmlFor="inputretypePassword">Retype Password</label><i className="fa fa-eye-slash float-right" id='eye1' onClick={passwordToggle1}></i>
                </div>
                <button
                  className="btn btn-primary btn-block text-uppercase btn-dark l1 mb-3"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Sign up
                </button>
                <div className="para">
                  <p style={{ color: "white" }}>
                    Already have an account?{" "}
                    <Link
                      to="/user/login"
                      style={{ textDecoration: "none" }}
                      className="l1"
                    >
                      Signin
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

export default Signup;
