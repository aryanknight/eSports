import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Merch1 from '../../Images/merch1.png';
import Merch2 from '../../Images/merch2.png';
import Merch3 from '../../Images/merch3.png';
import Merch4 from '../../Images/merch4.png';
import "./Merchandise.css";

export default function Merchandise() {
    return (
        <div className="merch-cont">
            {/* <div className="merch-parallax"></div> */}
            <div className="container-medium">
                <div className="merch">
                    <div className="merch-head-cont">
                        <div className="merch-head">Merchandise</div>
                    </div>    
                        
                    <div className="merch-bar-cont">
                        <div className="merch-bar"></div>
                        <div className="merch-bar"></div>
                        <div className="merch-bar" style={{backgroundColor:'#99273B'}}></div>
                    </div>

                    <div className="merch-tag">
                    Latest Collection In <span style={{color:'#ffc010'}}>Lowest Price!</span>
                    </div>

                    <div className="merch-cont-1">
                        <div className="merch-cont-2">
                            <div className="merch-box-1-cont">
                                <div className="merch-box-1">
                                    <div className="merch-box-1-img-cont">
                                        <img src={Merch1} alt="" className="merch-box-1-img" />
                                    </div>
                                    <div className="merch-box-1-text-cont">
                                        <div className="merch-text-1">
                                            white text t-shirt
                                        </div>
                                        <div className="merch-text-2">
                                            $45.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="merch-box-1-cont">
                                <div className="merch-box-1">
                                    <div className="merch-box-1-img-cont">
                                        <img src={Merch2} alt="" className="merch-box-1-img" />
                                    </div>
                                    <div className="merch-box-1-text-cont">
                                        <div className="merch-text-1">
                                            black text hoodie
                                        </div>
                                        <div className="merch-text-2">
                                        $56.50
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="merch-box-1-cont">
                                <div className="merch-box-1">
                                    <div className="merch-box-1-img-cont">
                                        <img src={Merch3} alt="" className="merch-box-1-img" />
                                    </div>
                                    <div className="merch-box-1-text-cont">
                                        <div className="merch-text-1">
                                            white logo t-shirt
                                        </div>
                                        <div className="merch-text-2">
                                        $45.89
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="merch-box-1-cont">
                                <div className="merch-box-1">
                                    <div className="merch-box-1-img-cont">
                                        <img src={Merch4} alt="" className="merch-box-1-img" />
                                    </div>
                                    <div className="merch-box-1-text-cont">
                                        <div className="merch-text-1">
                                            black logo hoodie 
                                        </div>
                                        <div className="merch-text-2">
                                        $99.23
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="merch-btn-cont">
                        <div className="merch-btn">Visit shop <ArrowForwardIcon style={{marginLeft:'10px',fontSize:'34px'}}/></div>
                    </div>
                    {/* <div className="merch-tag-2">
                        visit our shop for more <span style={{color:'#ffc010'}}>amazing collections</span>
                    </div> */}
                </div>
            </div>
        </div>
        
    )
}
