import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pic from '../../Images/pic1.png';
import {Link} from "react-router-dom";
import "./Scrim.css";

export default function Scrim() {

    const [scrimList,setScrimList]=useState([]);

    const getScrimList = async ()=>{
        try {
            const res = await axios.get(process.env.REACT_APP_BASE_URL+"/scrim");
            setScrimList(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getScrimList();
    },[])
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

                        {scrimList.map((scrim)=>
                        (<div className="scrim-cont-2">
                            <div className="scrim-box-1">
                                <div className="scrim-box-1-img-cont">
                                    <img src={Pic} alt="" className="scrim-box-1-img" />
                                </div>
                                <div className="scrim-box-1-text-cont">
                                    <div className="scrim-title">
                                        {scrim.scrimName}
                                    </div>
                                    <div className="scrim-text-1">
                                        Date
                                    </div>
                                    <div className="scrim-text-1 scrim-text-2">
                                        {new Date(scrim.endTime.year,scrim.endTime.month,scrim.endTime.date).toString().slice(3,15)}
                                    </div>
                                    <div className="scrim-text-1">
                                        Time
                                    </div>
                                    <div className="scrim-text-1 scrim-text-2">
                                        {scrim.endTime.hour}
                                    </div>
                                    <div className="scrim-text-1">
                                        fees
                                    </div>
                                    <div className="scrim-text-1 scrim-text-2">
                                        {scrim.registrationFee} rs
                                    </div>
                                    <div className="scrim-text-1">
                                        booking
                                    </div>
                                    {scrim.status=="open" ?
                                    (<div className="scrim-text-1 scrim-text-2" style={{color:'#50c878'}}>
                                        open
                                    </div>):
                                    <div className="scrim-text-1 scrim-text-2" style={{color:'#FDDA0D'}}>
                                       {scrim.status}
                                    </div>}

                                    {scrim.status=="open" ?
                                    (<div className="scrim-btn-cont">
                                        <Link to={"/scrim/"+scrim._id} >
                                            <div className="scrim-btn">Claim Slot</div>
                                        </Link>
                                    </div>):
                                    <div className="scrim-btn-cont">
                                        <Link to={"/scrim/"+scrim._id} >
                                            <div className="scrim-btn">view details</div>
                                        </Link>
                                    </div>}
                                    
                                </div>
                            </div>
                        </div>)
                        )}

                    </div>
                </div>
            </div>
        </div>
        
    )
}
