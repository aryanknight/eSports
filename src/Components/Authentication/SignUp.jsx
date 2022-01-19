import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Logo from '../../Images/text.png';
import './Authentication.css';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'
// import { connect } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
// import Web3 from "web3";


const SignupPage = ({ signup, isAuthenticated }) => {
    // const [enteredEmail, setEnteredEmail] = useState("");
    // const [enteredPassword, setEnteredPassword] = useState("");
    // const [enteredName, setEnteredName] = useState("");
    // const [enteredNumber, setEnteredNumber] = useState("");
    // const [enteredEthAddress, setEnteredEthAddress] = useState("");
    // const [enteredBTCAddress, setEnteredBtcAddress] = useState("");
    // const [enteredConfirmPassword, setEnteredconfirmPassword] = useState("");

    // const [checkETHaddress, setcheckETHaddress] = useState(false)

    // const emailChangeHandler = (event) => {
    //     setEnteredEmail(event.target.value)
    // }
    // const passwordChangeHandler = (event) => {
    //     setEnteredPassword(event.target.value)
    // }
    // const confirmpasswordChangeHandler = (event) => {
    //     setEnteredconfirmPassword(event.target.value)
    // }
    // const nameChangeHandler = (event) => {
    //     setEnteredName(event.target.value)
    // }
    // const numberChangeHandler = (event) => {
    //     setEnteredNumber(event.target.value)
    // }
    // const ethaddressChangeHandler = (event) => {
    //     setEnteredEthAddress(event.target.value)
    //     setcheckETHaddress(Web3.utils.isAddress(event.target.value))
    // }
    // const btcaddressChangeHandler = (event) => {
    //     setEnteredBtcAddress(event.target.value)
    // }

    // const [formIsValid, setFormValid] = useState(false)
    // const [checkedMark, setCheckedMark] = useState(true)



    // const handleChangeCheckedMark = (event) => {
    //     setCheckedMark(event.target.checked)
    // }

    // useEffect(() => {
    //     //Adding Debounce
    //     const identifier = setTimeout(() => {
    //         setFormValid(
    //             enteredEmail.includes('@') &&
    //             enteredEmail.trim().length > 0 &&
    //             enteredNumber.length >= 10 &&
    //             checkETHaddress &&
    //             enteredPassword.length > 0 &&
    //             enteredConfirmPassword === enteredPassword &&
    //             checkedMark
    //         )
    //     }, 500)

    //     return () => {
    //         clearTimeout(identifier)
    //     }
    // }, [enteredEmail, enteredNumber, checkETHaddress, enteredPassword, enteredConfirmPassword, checkedMark])

    // console.log(enteredEmail.includes('@'), enteredEmail.trim().length > 0, enteredNumber.length >= 10,
    //     checkETHaddress, enteredPassword.length > 0, enteredConfirmPassword === enteredPassword, checkedMark)

    // const history = useNavigate();

    // const onFormSubmitHandler = async (e) => {
    //     e.preventDefault();
    //     await signup(enteredEmail, enteredPassword, enteredName, enteredBTCAddress, enteredEthAddress, enteredNumber);
    //     history('/login')
    // };

    // if (isAuthenticated) {
    //     return <Navigate to="/bidding" />;
    // }

    return (
        <div className='signup'>
            <div className="signup-cont">
                <div className="signup-left">
                    <div className="signup-cont-1">

                        <div className="signup-img-cont">
                            <Link to="/">
                                < img src={Logo} className="signup-img" />
                            </Link>
                        </div>
                        
                        <form action method="post" className='signup-form' style={{width:'100%'}} autoComplete='off' >

                            <div className="signup-head" style={{padding:'0rem 1rem'}}>Register</div>
                            
                            <div className="login-para signup-para" style={{padding:'0rem 1rem'}}>Create New Clover Esports Account</div>
                            
                            <div className="signup-email">
                                <div className="signup-subhead">Email</div>
                                <div className="signup-cred-cont">
                                    <input className='signup-input' required />
                                </div>
                            </div>

                            <div className="signup-cont-2">
                                <div className="signup-subhead">Team Name</div>
                                <div className="signup-cred-cont">
                                    <input className='signup-input' required />
                                </div>
                            </div>

                            <div className="signup-cont-2">
                                <div className="signup-subhead">Captain Name</div>
                                <div className="signup-cred-cont">
                                    <input className='signup-input' required />
                                </div>
                            </div>


                            <div className="signup-cont-2">
                                <div className="signup-subhead">Password</div>
                                <div className="signup-cred-cont">
                                    <input className='signup-input' required />
                                </div>
                            </div>

                            <div className="signup-cont-2">
                                <div className="signup-subhead">Confirm Password</div>
                                <div className="signup-cred-cont">
                                    <input className='signup-input' required  />
                                </div>
                            </div>
                            {/* {!(enteredConfirmPassword === enteredPassword) ? (<>
                                <Alert severity="error">Password and Confirm Password are not matching!</Alert>
                            </>) : (<></>)} */}

                            {true
                                ? (<>
                                <div className="signup-btn-cont">
                                    <button name="submit" type="submit" style={{width:'100%'}}className='login-btn'>Register</button>
                                </div>
                                    
                                </>)
                                : (<>
                                    <button name="submit" type="submit" className='login-btn' disabled>Register</button>
                                </>) 
                            }

                        </form>

                        <div className="login-para" style={{padding:'0rem 1rem',color:'black',width:'80%'}}>Are you already Registered?
                            <Link to="/login">
                                <span style={{ color: 'yellow', fontWeight:'bold',cursor: 'pointer' }}> Login</span>
                            </Link>
                        </div>

                        {/* <div className="or">OR</div>

                        <div className="or-option">
                            <div className="option">Facebook</div>
                            <div className="option">Google</div>
                        </div> */}
                        <div className="policies" style={{ marginTop: '1rem', paddingBottom: '1rem' }}>
                            <Link to="/terms">
                                <div className="policy" style={{ color: 'yellow', fontWeight:'bold',cursor: 'pointer' }}>Terms&Condition</div>
                            </Link>
                            <Link to="/privacy-policy">
                                <div className="policy" style={{ color: 'yellow', fontWeight:'bold',cursor: 'pointer' }}>Privacy Policy</div>
                            </Link>
                            {/* <Link to="/terms">
                                <div className="policy">Help</div>
                            </Link> */}
                        </div>

                        {/* <div className="login-copyright">
                            © 2021 SOWLOW. All Rights Reserved.
                        </div> */}
                    </div>


                </div>
            </div >
        </div >
    )
}

export default SignupPage;
