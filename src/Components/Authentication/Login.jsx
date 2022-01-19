import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import './Authentication.css';
import Logo from '../../Images/text.png';
// import { Checkbox, FormControlLabel } from '@mui/material';
import { Link, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import { login } from "../../actions/auth";


const Login = ({ login, isAuthenticated }) => {
    // const [enteredEmail, setEnteredEmail] = useState("");
    // const [enteredPassword, setEnteredPassword] = useState("");
    // const [formIsValid, setFormValid] = useState(false)

    // const emailChangeHandler = (event) => {
    //     setEnteredEmail(event.target.value)
    // }
    // const passwordChangeHandler = (event) => {
    //     setEnteredPassword(event.target.value)
    // }
    // useEffect(() => {
    //     //Adding Debounce
    //     const identifier = setTimeout(() => {
    //         setFormValid(
    //             enteredEmail.includes('@') && enteredPassword.length > 0 && enteredEmail.trim().length > 0
    //         )
    //     }, 500)

    //     return () => {
    //         clearTimeout(identifier)
    //     }
    // }, [enteredEmail, enteredPassword])

    // const onFormSubmitHandler = async (e) => {
    //     e.preventDefault();
    //     login(enteredEmail, enteredPassword);
    // };

    //Redirect if logged in
    // if (isAuthenticated) {
    //     return <Navigate to="/bidding" />;
    // }

    return (
        <div className='login'>
            <div className="login-cont">
                <div className="login-left">
                    <div className="login-cont-1">
                        <Link to="/">
                            < img src={Logo} className="login-img" />
                        </Link>
                        <form action method="post">
                            <div className="login-head">Sign-In</div>
                            <div className="login-para">Access the Clover Account using your email and passcode.</div>

                            <div className="login-subhead">Email or Username</div>
                            <div className="cred-cont">
                                <input className='login-input' required placeholder="youremail@gmail.com" />
                            </div>
                            <div className="login-subhead">
                                <div className="login-subhead-1">Password</div>
                                <Link to="/reset">
                                    <div className="login-subhead-2">Forgot Password?</div>
                                </Link>
                            </div>
                            <div className="cred-cont">
                                <input className='login-input' required placeholder="Password" type="password"  />
                            </div>

                            {true
                                ? <button name="submit" type="submit" className='login-btn'>Sign in</button>
                                : <button name="submit" type="submit" className='login-btn' disabled>Sign in</button>
                            }

                        </form>
                        <div className="login-para">New on our platform?
                            <Link to="/register">
                                <span style={{ color: '#FF033E',fontWeight:'bold', cursor: 'pointer' }}> Create an account</span>
                            </Link>
                        </div>

                        {/* <div className="or">OR</div>

                        <div className="or-option">
                            <div className="option">Facebook</div>
                            <div className="option">Google</div>
                        </div> */}

                        <div className="policies">
                            <Link to="/terms">
                                <div className="policy">Terms&Condition</div>
                            </Link>
                            <Link to="/privacy-policy">
                                <div className="policy">Privacy Policy</div>
                            </Link>
                            {/* <Link to="/terms">
                                <div className="policy">Help</div>
                            </Link> */}


                        </div>
                        <div className="login-copyright">
                            © 2021 Clover Esports. All Rights Reserved.
                        </div>
                    </div>


                </div>
                <div className="login-right">
                </div>
            </div>
        </div >
    )
};

// Login.propTypes = {
//     login: PropTypes.func.isRequired,
//     isAuthenticated: PropTypes.bool,
// };

// const mapStateToProps = (state) => ({
//     isAuthenticated: state.auth.isAuthenticated,
// });

export default Login;
