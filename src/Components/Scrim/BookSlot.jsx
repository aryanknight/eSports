import { Alert, Avatar, CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import "./BookSlot.css";


let selectedSlot;
export default function BookSlot() {
    
    const {scrimId} =useParams();
    const currentUser = useSelector((state) => state.user.currentUser);
    const [scrimData,setScrimData]=useState({});
    const [scrimBtn,setScrimBtn]=useState();
    const [reqStatus,setReqStatus]=useState({state:false,severity:null,msg:null});

    const getScrimDetails= async () =>{
        const res = await axios.get(process.env.REACT_APP_BASE_URL+"/scrim/"+scrimId);
        setScrimData(res.data);
        
        const startTime = new Date();
        const endTime = new Date (res.data.endTime.year,
            res.data.endTime.month,
            res.data.endTime.date,
            res.data.endTime.hour,
            res.data.endTime.min,
            res.data.endTime.sec);

        if(endTime-startTime-(1000*60*60*2)>0){

            if(currentUser && res.data?.playerList?.find((player)=>player.email==currentUser.email)){
                setScrimBtn(
                    <div className="book-slot-btn-cont" onClick={cancelSlot}>
                        <div className="book-slot-btn">Cancel Slot</div>
                    </div>
                );
            }else{
                if(res.data.remainingSlots==0){
                    setScrimBtn(
                        <div className="book-slot-btn-cont">
                            <div className="book-slot-btn"  style={{backgroundColor:"#FFBF00"}}>Fully Booked</div>
                        </div>
                    );
                }else{
                    setScrimBtn(
                        <div className="book-slot-btn-cont" onClick={bookSlot}>
                            <div className="book-slot-btn" style={{backgroundColor:"#50c878"}}>Book Slot</div>
                        </div>
                    );
                }      
            }
        }else{
            setScrimBtn(
                <div className="book-slot-btn-cont">
                    <div className="book-slot-btn"  style={{backgroundColor:"#FFBF00"}}>Booking Closed</div>
                </div>
            );
        }
        deSelectSlotNo();
    }

    const selectSlotNo = (e) =>{
        if(selectedSlot){
            const slot = document.getElementById(selectedSlot);
            slot.style.backgroundColor="#50c878"
        }
        const slot = document.getElementById(e.target.id);
        slot.style.backgroundColor="#ff033e"
        selectedSlot=e.target.id
        console.log(selectedSlot);
    }

    const deSelectSlotNo = (e) =>{
        const slots = document.getElementsByClassName("slot-no");
        try {
            if(slots){
                for(let i=0;i<=slots.length;i++){
                    let slot=document.getElementsByClassName("slot-no")[i];
                    slot.style.backgroundColor="#50c878";
                }
            }   
        } catch (error) {
            console.log(error)
        }
        selectedSlot=null;
    }

    const bookSlot = async () => {
        console.log(selectedSlot);
        if(selectedSlot){
            setScrimBtn(
                <div className="book-slot-btn-cont">
                    <div className="book-slot-btn"><CircularProgress/></div>
                </div>
            );
            try {
                
                const userScrimData={
                    id:scrimId,
                    userId:currentUser._id,
                    teamName:currentUser.teamName,
                    email:currentUser.email,
                    slotNo:selectedSlot,
                    teamLogo:currentUser?.logoImg?.imgLink
                }
                const res = await axios.post(process.env.REACT_APP_BASE_URL+"/scrim/slot/book/"+currentUser._id,userScrimData,
                {
                    headers:{ 'token' : currentUser.accessToken }
                });
                if(res.status==201){
                    setReqStatus({state:true,severity:"success",msg:"Successfully Booked The Slot"});
                    setScrimBtn(
                        <div className="book-slot-btn-cont" onClick={cancelSlot}>
                            <div className="book-slot-btn">Cancel Slot</div>
                        </div>
                    );
                }
            } catch (error) {
    
                console.log(error);
                setReqStatus({state:true,severity:"error",msg:"Some Error Occured. Please try again."})
                setScrimBtn(
                    <div className="book-slot-btn-cont" onClick={bookSlot}>
                        <div className="book-slot-btn" style={{backgroundColor:"#50c878"}}>bookSlot</div>
                    </div>
                );
    
            }
            getScrimDetails();    
        }else{
            alert("Please select a slot")
        }
        
    }

    const cancelSlot = async () => {
        setScrimBtn(
            <div className="book-slot-btn-cont" >
                <div className="book-slot-btn"><CircularProgress/></div>
            </div>
        );
        try {
            
            const userScrimData={
                id:scrimId,
                userId:currentUser._id,
                email:currentUser.email
            }
            const res = await axios.patch(process.env.REACT_APP_BASE_URL+"/scrim/slot/cancel"+currentUser._id,userScrimData,
            {
                headers:{ 'token' : currentUser.accessToken }
            });
            if(res.status==200){
                setReqStatus({state:true,severity:"success",msg:"Slot Cancelled"});
                setScrimBtn(
                    <div className="book-slot-btn-cont" onClick={bookSlot}>
                        <div className="book-slot-btn" style={{backgroundColor:"#50c878"}}>Book Slot</div>
                    </div>
                );
            }

        } catch (error) {

            setReqStatus({state:true,severity:"error",msg:"Some Error Occured. Please try again."});
            setScrimBtn(
                <div className="book-slot-btn-cont" onClick={cancelSlot}>
                    <div className="book-slot-btn">cancel Slot</div>
                </div>
            );

        }
        getScrimDetails();
    }

    useEffect(()=>{
        getScrimDetails();
        //checkUserScrimStatus();
    },[])

    useEffect(()=>{
        console.log(selectedSlot);
        //checkUserScrimStatus();
    },[selectedSlot])
    return (
        <div className="book-slot-cont">
            <div className="container-medium">
                <div className="book-slot">
                    <div className="book-slot-head-cont">
                        <div className="book-slot-head">Knight Match</div>
                    </div>    
                        
                    <div className="book-slot-bar-cont">
                        <div className="book-slot-bar"></div>
                        <div className="book-slot-bar"></div>
                        <div className="book-slot-bar" style={{backgroundColor:'#99273B'}}></div>
                    </div>

                    <div className="book-slot-cont-1">
                        
                        <div className="book-slot-cont-2">

                            <div className="book-slot-box-1">
                                
                                <div className="book-slot-box-1-img-cont">
                                    <img src={scrimData?.logoImg?.imgLink} alt="" className="book-slot-box-1-img" />
                                </div>

                                <div className="book-slot-box-1-text-cont">
                                   <div className="book-slot-box-1-text">Total Slots</div>
                                   <div className="book-slot-box-1-text ab">{scrimData?.totalSlots}</div>
                                   <div className="book-slot-box-1-text">Remaining Slots</div>
                                   <div className="book-slot-box-1-text ab">{scrimData?.remainingSlots}</div>
                                   <div className="book-slot-box-1-text">Slot booking</div>
                                   <div className="book-slot-box-1-text ab" style={{color:'#50c878'}}>{scrimData?.status}</div>
                                   {/* <div className="book-slot-box-1-text"></div>
                                   <div className="book-slot-box-1-text"></div> */}
                                </div>

                                <div className="slot-booking-area">
                                <div className="book-slot-title" onClick={e=>console.log(selectedSlot)}>Available Slots</div>
                                {
                                    currentUser && !scrimData?.playerList?.find((player)=>player.email==currentUser.email) ?
                                    scrimData?.slotsToOccupy?.map(slot=>
                                        slot!=1 && slot!=2 ? (
                                        <div className="slot-no-cont">
                                            <div className="slot-no" id={slot} onClick={selectSlotNo}>
                                                {slot}
                                            </div>
                                        </div>
                                    ):(<></>)) : (<></>)
                                }
                                    
                                    
                                </div>

                                <div className="book-slot-btn-cont" style={{padding:'0rem 1rem'}}>
                                    {reqStatus.state && <Alert severity={reqStatus.severity}>{reqStatus.msg}</Alert>}
                                </div>

                                {currentUser ? 
                                (scrimBtn):
                                <div className="book-slot-btn-cont">
                                    <Link to="/login">
                                        <div className="book-slot-btn">login to Claim Slot</div>
                                    </Link>    
                                </div>}

                            </div>
                            
                            <div className="book-slot-box-2">

                                <div className="book-slot-title">scrim Match details</div>
                                
                                <div className="book-slot-box-2-text-cont">
                                    <div className="book-slot-box-2-text-1">
                                       match Date
                                    </div>
                                    <div className="book-slot-box-2-text-1 ab bc" style={{color:'#50c878'}}>
                                        {new Date(scrimData?.endTime?.year,scrimData?.endTime?.month,scrimData?.endTime?.date).toString().slice(0,15)}
                                    </div>
                                </div>
                                <div className="book-slot-box-2-text-cont">
                                    <div className="book-slot-box-2-text-1">
                                        match time
                                    </div>
                                    <div className="book-slot-box-2-text-1 ab bc" style={{color:'#50c878'}}>
                                        {scrimData?.endTime?.hour}
                                    </div>
                                </div>
                                <div className="book-slot-box-2-text-cont">
                                    <div className="book-slot-box-2-text-1">
                                        prize pool
                                    </div>
                                    <div className="book-slot-box-2-text-1 ab bc" style={{color:'#50c878'}}>
                                        {scrimData?.prizePool} rs
                                    </div>
                                </div>
                                <div className="book-slot-box-2-text-cont">
                                    <div className="book-slot-box-2-text-1">
                                        registration fee
                                    </div>
                                    <div className="book-slot-box-2-text-1 ab bc" style={{color:'#50c878'}}>
                                        {scrimData?.registrationFee} rs
                                    </div>
                                </div>
            
                                <div className="book-slot-title" style={{marginTop:'40px'}}>Match rules</div>
                                
                                <div className="book-slot-rules-cont">
                                    <div className="rules">1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
                                    <div className="rules">2. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                    <div className="rules">3. Ut enim ad minim veniam, quis nostrud exercitation</div>
                                    <div className="rules">4. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</div>
                                    <div className="rules">5. Ut enim ad minim veniam, quis nostrud exercitation</div>
                                </div>

                                <div className="book-slot-title" style={{marginTop:'40px'}}>Team Lists</div>

                                <div className="book-slot-table-cont">
                                    <div className="book-slot-table-row">
                                        <div className="book-slot-table-head">
                                            Team Logo
                                        </div>
                                        <div className="book-slot-table-head">
                                            Team Name
                                        </div>
                                        <div className="book-slot-table-head">
                                            Slot Allocated
                                        </div>
                                    </div>

                                    {scrimData?.playerList?.map((team)=>(
                                        <div className="book-slot-table-row">
                                            <div className="book-slot-table-col">
                                                <Avatar src={team?.teamLogo}/>
                                            </div>
                                            <div className="book-slot-table-col">
                                                {team?.teamName}
                                            </div>
                                            <div className="book-slot-table-col">
                                                {team.slotNo}
                                            </div>
                                        </div>
                                    ))}

                                </div>
                                         
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        
    )
}
