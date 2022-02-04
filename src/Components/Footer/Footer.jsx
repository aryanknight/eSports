import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Images/text.png';
import './Footer.css';

export function Footer() {
    return (
        <div className='footer-1'>
            <div className="container-medium">
                <div className="footer-cont">
                    <div className="footer-left">
                        <img src={Logo} id="footer-logo" />
                        <div className="footer-text">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.
                        </div>
                        <div className="copyright-cont" style={{color:'black',fontWeight:'bold',marginTop:'40px'}}>
                        Copyright @ 2021 Clover Esports. All rights reserved
                        </div>
                    </div>
                    <div className="footer-right">
                        <div className="footer-right-cont">
                            <div className="footer-head" style={{color:'black'}}>
                                Social links
                            </div>
                            <div className="footer-list">
                                <ul>
                                    <Link to="/">
                                        <li className="footer-list">instagram</li>
                                    </Link>
                                    <Link to="/faq">
                                        <li className="footer-list">youtube</li>
                                    </Link>
                                    <Link to="/terms">
                                        <li className="footer-list">facebook</li>
                                    </Link>
                                    <Link to="/privacy-policy">
                                        <li className="footer-list">discord</li>
                                    </Link>
                                    <Link to="/bidding">
                                        <li className="footer-list">telegram</li>
                                    </Link>
                                </ul>
                            </div>
                        </div>

                        <div className="footer-right-cont">
                            <div className="footer-head" style={{color:'black'}}>
                                Pages
                            </div>
                            <div className="footer-list">
                                <ul>
                                    <Link to="/">
                                        <li className="footer-list">Home</li>
                                    </Link>
                                    <Link to="/faq">
                                        <li className="footer-list">FAQ</li>
                                    </Link>
                                    <Link to="/terms">
                                        <li className="footer-list">Terms & Conditions</li>
                                    </Link>
                                    <Link to="/privacy-policy">
                                        <li className="footer-list">Privacy Policy</li>
                                    </Link>
                                    <Link to="/bidding">
                                        <li className="footer-list">Help</li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export function Footer2() {
    return (
        <div className='footer-2'>
            <div className="container-medium">
                <div className="footer-cont">
                    <div className="footer-left">
                        <img src={Logo} id="footer-logo" />
                        <div className="footer-text">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.
                        </div>
                        <div className="copyright-cont" style={{color:'black',fontWeight:'bold',marginTop:'40px'}}>
                        Copyright @ 2021 Clover Esports. All rights reserved
                        </div>
                    </div>
                    <div className="footer-right">
                        <div className="footer-right-cont">
                            <div className="footer-head" style={{color:'black'}}>
                                Social links
                            </div>
                            <div className="footer-list">
                                <ul>
                                    <Link to="/">
                                        <li className="footer-list">instagram</li>
                                    </Link>
                                    <Link to="/faq">
                                        <li className="footer-list">youtube</li>
                                    </Link>
                                    <Link to="/terms">
                                        <li className="footer-list">facebook</li>
                                    </Link>
                                    <Link to="/privacy-policy">
                                        <li className="footer-list">discord</li>
                                    </Link>
                                    <Link to="/bidding">
                                        <li className="footer-list">telegram</li>
                                    </Link>
                                </ul>
                            </div>
                        </div>

                        <div className="footer-right-cont">
                            <div className="footer-head" style={{color:'black'}}>
                                Pages
                            </div>
                            <div className="footer-list">
                                <ul>
                                    <Link to="/">
                                        <li className="footer-list">Home</li>
                                    </Link>
                                    <Link to="/faq">
                                        <li className="footer-list">FAQ</li>
                                    </Link>
                                    <Link to="/terms">
                                        <li className="footer-list">Terms & Conditions</li>
                                    </Link>
                                    <Link to="/privacy-policy">
                                        <li className="footer-list">Privacy Policy</li>
                                    </Link>
                                    <Link to="/bidding">
                                        <li className="footer-list">Help</li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}
