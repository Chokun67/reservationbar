import React from "react";
import "../assets/style/login.css";
import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function Signin() {
  return (
    <>
      <div className="bigbg">
      <div className="flex-container">
        <div className="left-half">
          <div className="login-container">
            <h1>Login</h1>
            <form className="login-form">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" required />

              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />

              <button type="submit" className="login-button">
                Login
              </button>
              <div className="separator">
                <hr />
                <span>or</span>
                <hr />
              </div>
              <button type="button" className="google-login-button">
              <FcGoogle className="icon-google"/> Login with Google
              </button>
            </form>
          </div>
        </div>
        <div className="right-half">
          <div className="login-container">
            <h1>WELCOME BACK!</h1>
            <p>
              Please log in to your account with your username <br />
              and password before making reservations.
              <br />
              Thank you!
            </p>
            <div className="logo">
              <img src={logo} alt="Your Logo" />
            </div>
            <p>Already have an account? Log in!</p>

            <Link to="/register">
              {" "}
              <div className="go-register">
              <p>Register</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Signin;
