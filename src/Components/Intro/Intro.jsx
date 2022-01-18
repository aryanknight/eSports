import React from 'react';
import { Link } from 'react-router-dom';
import "./Intro.css";

export default function Intro() {
    return (
        <div className="intro-cont">
            <div className="container-medium">
                <div className="intro">
                <div className="intro-left">
                    <div data-aos="fade-up-right" data-aos-duration="2000" style={{padding:'1rem',width:'100%'}}>
                        <div className="intro-head">
                            Welcome to <br/><span style={{color:'#FF033E'}}>Clover</span> <br/>Gaming Zone
                        </div>
                        {/* <div className="intro-text">
                            A blockchain based auction platform that rewards you for being the lowest unique bidder. 
                        </div> */}
                        <div className="intro-button-cont">
                            <Link to="/bidding">
                                <button className="intro-button">
                                    Register Now
                                </button>
                            </Link>
                            {/* <button id="how-bid-btn">
                                How Do I Bid
                            </button> */}
                        </div>
                        
                    </div>
                </div>
                {/* <div className="intro-right">
                    <img src={LandingImg} id="landing-img"/>
                </div> */}
                </div>
            </div>
        </div>
        
    )
}
