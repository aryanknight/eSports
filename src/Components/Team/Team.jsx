import React from 'react';
import Pic from '../../Images/pic1.png';
import Pic2 from '../../Images/pic2.png';
import Pic3 from '../../Images/pic3.png';
import "./Team.css";

export default function Team() {
    return (
        <div className="team-cont">
            <div className="team-parallax"></div>
            <div className="container-medium">
                <div className="team">
                    <div className="team-head-cont">
                        <div className="team-head">team</div>
                    </div>    
                        
                    <div className="team-bar-cont">
                        <div className="team-bar"></div>
                        <div className="team-bar"></div>
                        <div className="team-bar" style={{backgroundColor:'#99273B'}}></div>
                    </div>

                    <div className="team-cont-1">
                        <div className="team-cont-2">
                            <div className="team-box-1-cont">
                                <div className="team-box-1">
                                    <div className="team-box-1-img-cont">
                                        <img src={Pic} alt="" className="team-box-1-img" />
                                    </div>
                                    <div className="team-box-1-text-cont">
                                        <div className="team-text-1">
                                            Jhon
                                        </div>
                                        <div className="team-text-2">
                                            CEO
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="team-box-1-cont">
                                <div className="team-box-1">
                                    <div className="team-box-1-img-cont">
                                        <img src={Pic2} alt="" className="team-box-1-img" />
                                    </div>
                                    <div className="team-box-1-text-cont">
                                        <div className="team-text-1">
                                            hasbulla
                                        </div>
                                        <div className="team-text-2">
                                            coo
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="team-box-1-cont">
                                <div className="team-box-1">
                                    <div className="team-box-1-img-cont">
                                        <img src={Pic} alt="" className="team-box-1-img" />
                                    </div>
                                    <div className="team-box-1-text-cont">
                                        <div className="team-text-1">
                                            sam
                                        </div>
                                        <div className="team-text-2">
                                            cto
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="team-box-1-cont">
                                <div className="team-box-1">
                                    <div className="team-box-1-img-cont">
                                        <img src={Pic3} alt="" className="team-box-1-img" />
                                    </div>
                                    <div className="team-box-1-text-cont">
                                        <div className="team-text-1">
                                            Rohan
                                        </div>
                                        <div className="team-text-2">
                                            developer
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="team-cont-2">
                            <div className="team-box-1">
                                <div className="team-box-1-img-cont">
                                    <img src={Pic2} alt="" className="team-box-1-img" />
                                </div>
                                <div className="team-box-1-text-cont">
                                    <div className="team-text-1">
                                        Theninja
                                    </div>
                                    <div className="team-text-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    </div>
                                </div>
                            </div>
                            <div className="team-box-2">
                                <div className="team-time">
                                    03:50
                                </div>
                                <div className="team-date">
                                    1st April 2022
                                </div>
                                <div className="team-icons" >
                                    <YouTubeIcon style={{fontSize:"60px"}}/>
                                </div>
                            </div>
                        </div>

                        <div className="team-cont-2">
                            <div className="team-box-1">
                                <div className="team-box-1-img-cont">
                                    <img src={Pic3} alt="" className="team-box-1-img" />
                                </div>
                                <div className="team-box-1-text-cont">
                                    <div className="team-text-1">
                                        Bluereign
                                    </div>
                                    <div className="team-text-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    </div>
                                </div>
                            </div>
                            <div className="team-box-2">
                                <div className="team-time">
                                    03:50
                                </div>
                                <div className="team-date">
                                    1st April 2022
                                </div>
                                <div className="team-icons" >
                                    <YouTubeIcon style={{fontSize:"60px"}}/>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
        
    )
}
