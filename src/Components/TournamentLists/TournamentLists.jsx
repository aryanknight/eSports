import React from 'react';
import Img1 from '../../Images/img1.png';
import Arrow from '../../Images/arrow.png'
import bg3 from '../../Images/bg3.jpg'
import "./TournamentLists.css";

export default function TournamentLists() {
    return (
        <div className="tournament-lists-cont">
            <div className="tournament-lists-parallax"></div>
            <div className="container-medium">
                <div className="tournament-lists">
                    <div className="tournament-lists-left">
                        <img src={bg3} id="tournament-lists-img-1"/>
                        <img src={Img1} id="tournament-lists-img-2"/>
                    </div>
                    <div className="tournament-lists-right">
                        <div className="tournament-lists-head-cont">
                            <div className="tournament-lists-head">See What Lies Beyond</div>
                        </div>    
                        
                        <div className="tournament-lists-bar-cont">
                            <div className="tournament-lists-bar"></div>
                            <div className="tournament-lists-bar"></div>
                            <div className="tournament-lists-bar" style={{backgroundColor:'#99273B'}}></div>
                        </div>

                        <div className="tournament-lists-cont-1">
                            <div className="tournament-lists-para">
                                Praesent a ornare metus. Etiam luctus arcu a neque venenatis, quis hendrerit mi maximus. Proin tincidunt tellus
                            </div>
                            <div className="tournament-lists-sub-text">
                                <div className="tournament-lists-pts"><img src={Arrow} style={{marginRight:'10px'}}/>Duis scelerisque nunc ac massa efficitur pulvinar.</div>
                                <div className="tournament-lists-pts"><img src={Arrow} style={{marginRight:'10px'}}/>Vivamus eget nisi scelerisque, iaculis risus vel, molestie risus.</div>
                                <div className="tournament-lists-pts"><img src={Arrow} style={{marginRight:'10px'}}/>Aliquam nec sapien vitae dui dapibus blandit.</div>
                                <div className="tournament-lists-pts"><img src={Arrow} style={{marginRight:'10px'}}/>Aliquam nec sapien vitae dui dapibus blandit.</div>
                            </div>
                            <div className="tournament-lists-btn">
                                Tournament Lists
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
        
    )
}
