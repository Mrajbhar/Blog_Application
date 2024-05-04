import React, { Component } from 'react';
import '../../styles/styles.css'
import logo from '../../assets/images/logo.png';
import facebook from '../../assets/images/facebook.svg';
import google from '../../assets/images/google.svg';
import linkedin from '../../assets/images/linkedin.svg';
import { connect } from 'react-redux';
// import { setUserAction } from '../../shared/store/actions/user.actions';
import { RouteComponentProps } from 'react-router-dom';
import { FaBlogger } from "react-icons/fa";


class Login extends Component {
    state = {
        login: true,
        signUpForm: {
            name: '',
            email: '',
            password: ''
        },
        signInForm: {
            email: '',
            password: ''
        }
    };

    signUp = () => {
        this.setState({
            signUpForm: {
                name: '',
                password: '',
                email: ''
            }
        });
    };

    signIn = () => {
        this.props.history.push('/dashboard');
        this.props.setUserType(this.state.signInForm.email);
        this.setState({
            signInForm: {
                password: '',
                email: ''
            }
        });
    };

    render() {
        const { login, signUpForm, signInForm } = this.state;
        return (
            <div className="login">
                <div className={`login__colored-container ${login ? 'login__colored-container--left' : 'login__colored-container--right'}`}></div>
                <div className={`login__welcome-back ${login ? 'login__welcome-back--active' : 'login__welcome-back--inactive'}`}>
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
                        <div onClick={() => {
                            this.setState({
                                login: !login
                            });
                        }} className="login__welcome-back__main-container__button-container">
                            Sign In
                        </div>
                    </div>
                </div>
                <div className={`login__create-container ${login ? 'login__create-container--active' : 'login__create-container--inactive'}`}>
                    Create Account
                    <div className="login__create-container__social-container">
                        <img className="login__create-container__social-container--facebook-icon" src={facebook} alt="" />
                        <img className="login__create-container__social-container--google-icon" src={google} alt="" />
                        <img className="login__create-container__social-container--linkedin-icon" src={linkedin} alt="" />
                    </div>
                    <span className="login__create-container--info-text">or use email for your registration</span>
                    <div className="login__create-container__form-container">
                        <form className="login__create-container__form-container__form" onSubmit={(e) => {
                            e.preventDefault();
                            this.signUp();
                        }}>
                            <input
                                className="login__create-container__form-container__form--name"
                                type="text"
                                placeholder="Name"
                                value={signUpForm.name}
                                onChange={(value) => this.setState({
                                    signUpForm: {
                                        name: value.target.value,
                                        email: signUpForm.email,
                                        password: signUpForm.password
                                    }
                                })}
                                required />
                            <input
                                className="login__create-container__form-container__form--email"
                                type="email"
                                placeholder="Email"
                                value={signUpForm.email}
                                onChange={(value) => this.setState({
                                    signUpForm: {
                                        email: value.target.value,
                                        name: signUpForm.name,
                                        password: signUpForm.password
                                    }
                                })}
                                required />
                            <input
                                className="login__create-container__form-container__form--password"
                                type="password"
                                placeholder="Password"
                                value={signUpForm.password}
                                onChange={(value) => this.setState({
                                    signUpForm: {
                                        password: value.target.value,
                                        name: signUpForm.name,
                                        email: signUpForm.email
                                    }
                                })}
                                required />
                            <button
                                className="login__create-container__form-container__form--submit">
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
                <div className={`login__login-container ${!login ? 'login__login-container--active' : 'login__login-container--inactive'}`}>
                    <div className="login__login-container__logo-container">
                        <FaBlogger />Blog
                    </div>
                    <div className="login__login-container__main-container">
                        <div className="login__login-container__main-container__social-container">
                            <img className="login__login-container__main-container__social-container--facebook-icon" src={facebook} alt="" />
                            <img className="login__login-container__main-container__social-container--google-icon" src={google} alt="" />
                            <img className="login__login-container__main-container__social-container--linkedin-icon" src={linkedin} alt="" />
                        </div>
                        <span className="login__login-container__main-container--info-text">or use email for your login</span>
                        <div className="login__login-container__main-container__form-container">
                            <form className="login__login-container__main-container__form-container__form" onSubmit={(e) => {
                                e.preventDefault();
                                this.signIn();
                            }}>
                                <input
                                    className="login__login-container__main-container__form-container__form--email"
                                    type="email"
                                    placeholder="Email"
                                    value={signInForm.email}
                                    onChange={(value) => this.setState({
                                        signInForm: {
                                            email: value.target.value,
                                            password: signInForm.password
                                        }
                                    })}
                                    required />
                                <input
                                    className="login__login-container__main-container__form-container__form--password"
                                    type="password"
                                    placeholder="Password"
                                    value={signInForm.password}
                                    onChange={(value) => this.setState({
                                        signInForm: {
                                            password: value.target.value,
                                            email: signInForm.email
                                        }
                                    })}
                                    required />
                                <button
                                    className="login__login-container__main-container__form-container__form--submit">
                                    Sign In
                            </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={`login__hello-container ${!login ? 'login__hello-container--active' : 'login__hello-container--inactive'}`}>
                    <div className="login__welcome-back__main-container__text-container">
                        <span className="login__welcome-back__main-container__text-container--title">
                            Hello, stranger!
                            </span>
                        <span className="login__welcome-back__main-container__text-container--secondary">
                            Enter your personal details and start your own portfolio!
                        </span>
                    </div>
                    <div onClick={() => {
                        this.setState({
                            login: !login
                        });
                    }} className="login__welcome-back__main-container__button-container">
                        Sign Up
                    </div>
                </div>
            </div>
        );
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setUserType: (username) =>
//             dispatch(
//                 setUserAction({
//                     username
//                 })
//             )
//     };
// };

// export default connect(null, mapDispatchToProps)(Login);

export default Login

