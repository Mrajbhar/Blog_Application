import Layout from '../Layout/Layout'
import styles  from "../../styles/login.css"
import {React, useState } from 'react';

  
const login = () => {
  return (
    <Layout>
    <div className={styles.login}>
  <meta charSet="utf-8" />
  <title>Login to Celyes</title>
  <div className="row">
    <div className="input-cart col s12 m10 push-m1 z-depth-2 grey lighten-5">
      <div className="col s12 m5 login">
        <h4 className="center">Log in</h4>
        <br />
        <form action="check.php" method="post" autoComplete="off">
          <div className="row">
            <div className="input-field">
              <input type="text" id="user" name="username" className="validate" required="required" placeholder="Username" />
              <label htmlFor="user">
                <i className="material-icons">person</i>              </label>
            </div>	
          </div>
          <div className="row">
            <div className="input-field">
              <input type="password" id="pass" name="password" className="validate" required="required" placeholder="Password" />
              <label htmlFor="pass">
                <i className="material-icons">lock</i>
              </label>
            </div>	
          </div>
          <div className="row">
            <div className="switch col s6">
              <label>
                <input type="checkbox" />
                <span className="lever" />
                Remember Me
              </label>
            </div>
            <div className="col s6">
              <button type="submit" name="login" className="btn waves-effect waves-light blue right">Log in</button>
            </div>
          </div>
        </form>
      </div>
      {/* Signup form */}
      <div className="col s12 m7 signup">
        <div className="signupForm">
          <h4 className="center">Sign up</h4>
          <br />
          <form action="regCheck.php" name="signup" method="post" autoComplete="off">
            <div className="row">
              <div className="input-field col s12 m6">
                <input type="text" id="name-picked" name="namepicked" className="validate" required="required" placeholder="Enter a username" />
                <label htmlFor="name-picked">
                  <i className="material-icons">person_add</i>       
                </label>
              </div>
              <div className="input-field col s12 m6">
                <input type="password" id="pass-picked" name="passpicked" className="validate" required="required" placeholder="Password" />
                <label htmlFor="pass-picked">
                  <i className="material-icons">lock</i>                  </label>
              </div>	
            </div>
            <div className="row">
              <div className="input-field email">
                <div className="col s12">
                  <input type="text" id="email" name="email" className="validate" required="required" placeholder="Enter your email" />
                  <label htmlFor="email">
                    <i className="material-icons">mail</i> 
                  </label>
                </div>
              </div>	
            </div>
          </form>
          <div className="row">
            <button type="submit" name="btn-signup" className="btn blue right waves-effect waves-light">Sign Up</button>
          </div>
        </div>
        <div className="signup-toggle center">
          <h4 className="center">Have No Account ? <a href="#!">Sign Up</a></h4>
        </div>
      </div>
      <div className="col s12">
        <br />
        <div className="legal center">
        </div>
        <div className="legal center">
          <div className="col s12 m7 right">
            <p className="grey-text policy center">By signing up, you agree on our <a href="#!">Privacy Policy</a> and  <a href="#!">Terms of Use</a> including <a href="#!">Cookie Use</a>.</p>
          </div>
          <div className="col s12 m5">
            <p className="center grey-text" style={{fontSize: 14}}>Coding : <a href="http://fb.com/celyes01" className="main-title red-text" target="_blank">Celyes</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="fixed-action-btn toolbar">
    <a className="btn-floating btn-large amber black-text">
      Login
    </a>
    <ul>
      <li><a className="indigo center" href="#!">Login with FB</a></li>
      <li><a className="blue center" href="#!">Login with Twitter</a></li>
      <li><a className="red center" href="#!">Login with Google +</a></li>
    </ul>
  </div>
</div>

    </Layout>
  )
}


export default login