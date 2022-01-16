import React from 'react';
import Pic from '../../Images/pic1.png';
import "./Match.css";

export default function Match() {
    return (
        <div className="match-cont">
            {/* <div className="match-parallax"></div> */}
            <div className="container-medium">
                <div className="match">
                    <div className="match-head-cont">
                        <div className="match-head">Matchs</div>
                    </div>    
                        
                    <div className="match-bar-cont">
                        <div className="match-bar"></div>
                        <div className="match-bar"></div>
                        <div className="match-bar" style={{backgroundColor:'#99273B'}}></div>
                    </div>

                    <div className="match-cont-1">
                        <div className="match-box-1">
                            <div className="match-box-1-img-cont">
                                <img src={Pic} alt="" className="match-box-1-img" />
                            </div>
                            <div className="match-box-1-text-cont">
                                <div className="match-text-1">
                                    Assasin Esports
                                </div>
                                <div className="match-text-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                </div>
                            </div>
                        </div>
                        <div className="match-box-2">5</div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
