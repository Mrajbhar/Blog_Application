import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { FaBlogger } from "react-icons/fa";
import facebook from "../../assets/images/facebook.svg";
import google from "../../assets/images/google.svg";
import linkedin from "../../assets/images/linkedin.svg";
import "../../styles/styles.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");
  const [login, setLogin] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Sign-in button clicked");

    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,
      {email, password}
    );


      if (res && res.data.success) {
        toast.success(res.data.message);
        localStorage.setItem("token", res.data.token);
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };


  const handleRegister = async (e) => {
    e.preventDefault();
    if (!name || !email2 || !password2) {
      toast.error("Please fill in all the fields.");
      return;
    }
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        { name, email: email2, password: password2 }
      );

      if (res && res.data.success) {
        toast.success(res.data.message);
        setLogin(true); // Set login to true after signup
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="login">
      <div
        className={`login__colored-container ${
          login
            ? "login__colored-container--left"
            : "login__colored-container--right"
        }`}
      ></div>
      <div
        className={`login__welcome-back ${
          login
            ? "login__welcome-back--active"
            : "login__welcome-back--inactive"
        }`}
      >
        <div className="login__welcome-back__logo-container">
          <FaBlogger /> Blog
        </div>
        <div className="login__welcome-back__main-container">
          <div className="login__welcome-back__main-container__text-container">
            <span className="login__welcome-back__main-container__text-container--title">
              Welcome Back!
            </span>
            <span className="login__welcome-back__main-container__text-container--secondary">
              To keep sharing your work with us, please log in.
            </span>
          </div>
          <div
            className="login__welcome-back__main-container__button-container"
            onClick={() => {
              setLogin(!login);
            }}
          >
            Sign In
          </div>
        </div>
      </div>
      <div
        className={`login__create-container ${
          login
            ? "login__create-container--active"
            : "login__create-container--inactive"
        }`}
      >
        Create Account
        <div className="login__create-container__social-container">
          <a href="https://www.facebook.com/yourpage" target="_blank">
            <img
              className="login__create-container__social-container--facebook-icon"
              src={facebook}
              alt="Facebook"
            />
          </a>
          <a href="https://www.google.com" target="_blank">
            <img
              className="login__create-container__social-container--google-icon"
              src={google}
              alt="Google"
            />
          </a>

          <a href="https://www.linkedin.com/company/yourpage" target="_blank">
            <img
              className="login__create-container__social-container--linkedin-icon"
              src={linkedin}
              alt="LinkedIn"
            />
          </a>
        </div>
        <span className="login__create-container--info-text">
          or use email for your registration
        </span>
        <div className="login__create-container__form-container">
          <form
            className="login__create-container__form-container__form"
            onSubmit={handleRegister} 

          >
            <input
              className="login__create-container__form-container__form--name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="login__create-container__form-container__form--email"
              type="email"
              placeholder="Email"
              value={email2}
              onChange={(e) => setEmail2(e.target.value)}
              required
            />
            <input
              className="login__create-container__form-container__form--password"
              type="password"
              placeholder="Password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              required
            />
            <button
              className="login__create-container__form-container__form--submit"
              type="submit"
              onClick={handleRegister} 
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div
        className={`login__login-container ${
          !login
            ? "login__login-container--active"
            : "login__login-container--inactive"
        }`}
      >
        <div className="login__login-container__logo-container">
          <FaBlogger />
          Blog
        </div>
        <div className="login__login-container__main-container">
          <div className="login__login-container__main-container__social-container">
            <a href="https://www.facebook.com/yourpage" target="_blank">
              <img
                className="login__create-container__social-container--facebook-icon"
                src={facebook}
                alt="Facebook"
              />
            </a>

            <a href="https://www.google.com" target="_blank">
              <img
                className="login__create-container__social-container--google-icon"
                src={google}
                alt="Google"
              />
            </a>
            <a href="https://www.linkedin.com/company/yourpage" target="_blank">
              <img
                className="login__create-container__social-container--linkedin-icon"
                src={linkedin}
                alt="LinkedIn"
              />
            </a>
          </div>
          <span className="login__login-container__main-container--info-text">
            or use email for your login
          </span>
          <div className="login__login-container__main-container__form-container">
            <form
              className="login__login-container__main-container__form-container__form"
              onSubmit={handleLogin} 

            >
              <input
                className="login__login-container__main-container__form-container__form--email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                className="login__login-container__main-container__form-container__form--password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                className="login__login-container__main-container__form-container__form--submit"
                type="submit"

              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
      <div
        className={`login__hello-container ${
          !login
            ? "login__hello-container--active"
            : "login__hello-container--inactive"
        }`}
      >
        <div className="login__welcome-back__main-container__text-container">
          <span className="login__welcome-back__main-container__text-container--title">
            Hello, stranger!
          </span>
          <span className="login__welcome-back__main-container__text-container--secondary">
            Enter your personal details and start your own portfolio!
          </span>
        </div>
        <div
          className="login__welcome-back__main-container__button-container"
          onClick={() => setLogin(!login)}
        >
          Sign Up
        </div>
      </div>
    </div>
  );
};

export default Login;
