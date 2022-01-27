import React, { useState, useEffect } from 'react';
import './Authentication.css';
import Logo from '../../Images/text.png';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { login } from '../../Redux/apiCalls';
import { useNavigate } from "react-router-dom";
import { Alert } from '@mui/material';
import { reset, setError } from '../../Redux/userRedux';


const Login = () => {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const history=useNavigate()

    const currentUser = useSelector((state) => state.user.currentUser);
    let isFetching = useSelector((state) => state.user.isFetching);
    const error = useSelector((state) => state.user.error);

    const dispatch =useDispatch();

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value)
    }

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value)
    }

    const onFormSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const res= await login(dispatch,{email:enteredEmail,password:enteredPassword});
            if(res!="error")
                history("/");
        } catch (error) {
            console.log(error)
        }
        
    };
    
    React.useEffect(()=>{
        dispatch(setError());
    },[])

    if(currentUser){
        return <Navigate to="/"/>
    }
    
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
                            <div className="login-para" onClick={e=>{console.log(currentUser)}}>Access the Clover Account using your email and passcode.</div>

                            <div className="login-subhead">Email or Username</div>
                            <div className="cred-cont">
                                <input className='login-input' onChange={emailChangeHandler} required placeholder="youremail@gmail.com" />
                            </div>
                            <div className="login-subhead">
                                <div className="login-subhead-1">Password</div>
                                <Link to="/reset">
                                    <div className="login-subhead-2">Forgot Password?</div>
                                </Link>
                            </div>
                            <div className="cred-cont">
                                <input className='login-input' onChange={passwordChangeHandler} required placeholder="Password" type="password"  />
                            </div>

                            {!isFetching
                                ? <button onClick={onFormSubmitHandler} className='login-btn'>Sign in</button>
                                : <button className='login-btn' disabled>Sign in</button>
                            }

                            {error &&
                                <div className="login-alert-cont">
                                    <Alert severity="error">Wrong email or password</Alert>
                                </div>
                            }

                        </form>
                        <div className="login-para">New on our platform?
                            <Link to="/register">
                                <span style={{ color: '#FF033E',fontWeight:'bold', cursor: 'pointer' }}> Create an account</span>
                            </Link>
                        </div>

                       

                        <div className="policies">
                            <Link to="/terms">
                                <div className="policy">Terms&Condition</div>
                            </Link>
                            <Link to="/privacy-policy">
                                <div className="policy">Privacy Policy</div>
                            </Link>


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

export default Login;
