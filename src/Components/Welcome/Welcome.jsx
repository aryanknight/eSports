import React from 'react';
import Icon1 from '../../Images/icon1.png'
import "./Welcome.css";

export default function Welcome() {
    return (
        <div className="welcome-cont">
            <div className="welcome-parallax"></div>
            <div className="container-medium">
                <div className="welcome">
                    <div className="welcome-head-cont">
                        <div className="welcome-head">The Best BGMI Arena On <br/><span style={{color:'#99273B'}}>The Planet!</span></div>
                    </div>    
                        <div className="welcome-bar-cont">
                            <div className="welcome-bar"></div>
                            <div className="welcome-bar"></div>
                            <div className="welcome-bar" style={{backgroundColor:'#99273B'}}></div>
                        </div>

                        <div className="welcome-cont-1">
                            <div className="welcome-box-cont">
                                <img src={Icon1} alt="" className="welcome-box-img" />
                                <div className="welcome-box-head">Live Streaming</div>
                                <div className="welcome-box-para">Praesent a ornare metus. Etiam luctus arcu a neque venenatis, quis hendrerit mi maximus.</div>
                            </div>
                            <div className="welcome-box-cont">
                                <img src={Icon1} alt="" className="welcome-box-img" />
                                <div className="welcome-box-head">Great Tournaments</div>
                                <div className="welcome-box-para">Praesent a ornare metus. Etiam luctus arcu a neque venenatis, quis hendrerit mi maximus.</div>
                            </div>
                            <div className="welcome-box-cont">
                                <img src={Icon1} alt="" className="welcome-box-img" />
                                <div className="welcome-box-head">Daily scrims</div>
                                <div className="welcome-box-para">Praesent a ornare metus. Etiam luctus arcu a neque venenatis, quis hendrerit mi maximus.</div>
                            </div>
                            <div className="welcome-box-cont">
                                <img src={Icon1} alt="" className="welcome-box-img" />
                                <div className="welcome-box-head">giveaways</div>
                                <div className="welcome-box-para">Praesent a ornare metus. Etiam luctus arcu a neque venenatis, quis hendrerit mi maximus.</div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        
    )
}
