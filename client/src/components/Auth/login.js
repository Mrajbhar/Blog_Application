import Layout from '../Layout/Layout';
import React, { useState } from 'react';
import "../../styles/styles.css";

const Login = () => {

  return (
    <Layout>

     <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="style.css" />
  <title>Static Template</title>
  <div className="container">
    <div className="left">
      <div className="login-section">
        <header>
          <h2 className="animation a1">Coding Vibes</h2>
          <h4 className="animation a2">
            Welcome back, Please login to your account
          </h4>
        </header>
        <form>
          <input type="email" placeholder="Email" className="input-field animation a3" />
          <input type="password" placeholder="Password" className="input-field animation a4" />
          <p className="animation a5"><a href="#">Forgot password?</a></p>
          <button className="animation a6">Sign in</button>
        </form>
      </div>
    </div>
    <div className="right" />
  </div>
</div>


    </Layout>
  );
};

export default Login;
