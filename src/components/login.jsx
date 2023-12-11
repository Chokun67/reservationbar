import React, { useState, useEffect } from "react";
import "../assets/style/login.css";
import { FcGoogle } from "react-icons/fc";
import { API } from '../assets/api/authen';
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
import swalactive from "./swalfire";

function Signin() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  const setToken = (tokenValue) => {
    setCookie('token', tokenValue, { path: '/' });
  };
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    console.log({formData});
    event.preventDefault();
    API.user_login(formData)
      .then((response) => {
        console.log('POST Response:', response.data);
        console.log("api",response.data.Token);
        setToken(response.data.Token);
        navigate("/");
        swalactive('success','success to login');
      })
      .catch((error) => {
        console.error('POST Error:', error);
        swalactive('error','fail to login');
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const googlebutton = () =>{
    swalactive('warning','feature not ready')
  }

  return (
    <>
      <div className="left-half">
        <div className="login-container">
          <h1>Login</h1>
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />

            <button type="submit" className="login-button">
              Login
            </button>
            <div className="separator">
              <hr />
              <span>or</span>
              <hr />
            </div>
            <button type="button" className="google-login-button" onClick={googlebutton}>
              <FcGoogle className="icon-google" />
              Login with Google
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
