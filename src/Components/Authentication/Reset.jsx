import React from 'react';
import TextField from '@mui/material/TextField';
import Crypto from '../../Images/crypto.png';
import './Authentication.css';
import Logo from '../../Images/logo.png';
import { Link } from 'react-router-dom';


export default function Reset() {
    return (
        <div className='login'>
            <div className="login-cont">
                <div className="login-left">
                    <div className="login-cont-1">
                        <Link to="/">
                            < img src={Logo} className="login-img" />
                        </Link>
                        <div className="login-head">Reset Password</div>
                        <div className="login-para">If you forgot your password, well, then we’ll email you instructions to reset your password.</div>
                        
                        <div className="login-subhead">
                            <div className="login-subhead-1">Email</div>
                            <div className="login-subhead-2">Need Help</div>
                        </div>
                        <div className="cred-cont">
                            <TextField fullWidth={true} required placeholder="Email"/>
                        </div>

                        <div className="login-btn">
                            Send Reset Link
                        </div>

                        <div className="login-para">
                            <Link to="/login">
                                <span style={{color:'#ff8a73',cursor:'pointer'}}>
                                    Return to Login
                                </span>
                            </Link>
                        </div>

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
                        
                    </div>

                   
                </div>
                <div className="login-right">
                    <img src={Crypto} alt="" className="crypto-img" />
                </div>
            </div>
        </div>
    )
}
