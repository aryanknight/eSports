import React from 'react';
import Pic from '../../Images/pic1.png';
import Pic2 from '../../Images/pic2.png';
import Pic3 from '../../Images/pic3.png';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./Scrim.css";

export default function Scrim() {
    return (
        <div className="scrim-cont">
            <div className="container-medium">
                <div className="scrim">
                    <div className="scrim-head-cont">
                        <div className="scrim-head">Scrim</div>
                    </div>    
                        
                    <div className="scrim-bar-cont">
                        <div className="scrim-bar"></div>
                        <div className="scrim-bar"></div>
                        <div className="scrim-bar" style={{backgroundColor:'#99273B'}}></div>
                    </div>

                    <div className="scrim-cont-1">
                        <div className="scrim-cont-2">
                            <div className="scrim-box-1">
                                <div className="scrim-box-1-img-cont">
                                    <img src={Pic} alt="" className="scrim-box-1-img" />
                                </div>
                                <div className="scrim-box-1-text-cont">
                                    {/* <div className="scrim-text-1">
                                        Assasin
                                    </div> */}
                                    <div className="scrim-date">
                                        7 Jan 2022
                                    </div>
                                    <div className="scrim-time">
                                        3 PM
                                    </div>
                                    <div className="scrim-btn-cont">
                                        <div className="scrim-btn">Claim Slot</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="scrim-cont-2">
                            <div className="scrim-box-1">
                                <div className="scrim-box-1-img-cont">
                                    <img src={Pic2} alt="" className="scrim-box-1-img" />
                                </div>
                                <div className="scrim-box-1-text-cont">
                                    {/* <div className="scrim-text-1">
                                        Assasin
                                    </div> */}
                                    <div className="scrim-date">
                                        7 Jan 2022
                                    </div>
                                    <div className="scrim-time">
                                        3 PM
                                    </div>
                                    <div className="scrim-btn-cont">
                                        <div className="scrim-btn">Claim Slot</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="scrim-cont-2">
                            <div className="scrim-box-1">
                                <div className="scrim-box-1-img-cont">
                                    <img src={Pic3} alt="" className="scrim-box-1-img" />
                                </div>
                                <div className="scrim-box-1-text-cont">
                                    {/* <div className="scrim-text-1">
                                        Assasin
                                    </div> */}
                                    <div className="scrim-date">
                                        7 Jan 2022
                                    </div>
                                    <div className="scrim-time">
                                        3 PM
                                    </div>
                                    <div className="scrim-btn-cont">
                                        <div className="scrim-btn">Claim Slot</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="scrim-cont-2">
                            <div className="scrim-box-1">
                                <div className="scrim-box-1-img-cont">
                                    <img src={Pic2} alt="" className="scrim-box-1-img" />
                                </div>
                                <div className="scrim-box-1-text-cont">
                                    {/* <div className="scrim-text-1">
                                        Assasin
                                    </div> */}
                                    <div className="scrim-date">
                                        7 Jan 2022
                                    </div>
                                    <div className="scrim-time">
                                        3 PM
                                    </div>
                                    <div className="scrim-btn-cont">
                                        <div className="scrim-btn">Claim Slot</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="scrim-cont-2">
                            <div className="scrim-box-1">
                                <div className="scrim-box-1-img-cont">
                                    <img src={Pic} alt="" className="scrim-box-1-img" />
                                </div>
                                <div className="scrim-box-1-text-cont">
                                    {/* <div className="scrim-text-1">
                                        Assasin
                                    </div> */}
                                    <div className="scrim-date">
                                        7 Jan 2022
                                    </div>
                                    <div className="scrim-time">
                                        3 PM
                                    </div>
                                    <div className="scrim-btn-cont">
                                        <div className="scrim-btn">Claim Slot</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="scrim-cont-2">
                            <div className="scrim-box-1">
                                <div className="scrim-box-1-img-cont">
                                    <img src={Pic3} alt="" className="scrim-box-1-img" />
                                </div>
                                <div className="scrim-box-1-text-cont">
                                    {/* <div className="scrim-text-1">
                                        Assasin
                                    </div> */}
                                    <div className="scrim-date">
                                        7 Jan 2022
                                    </div>
                                    <div className="scrim-time">
                                        3 PM
                                    </div>
                                    <div className="scrim-btn-cont">
                                        <div className="scrim-btn">Claim Slot</div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="scrim-box-2">
                                <div className="scrim-time">
                                    03:50
                                </div>
                                <div className="scrim-date">
                                    1st April 2022
                                </div>
                                <div className="scrim-icons" >
                                    <YouTubeIcon style={{fontSize:"60px"}}/>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
