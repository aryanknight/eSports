import { Avatar, Paper, TextField, Alert, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import FileBase64 from 'react-file-base64';
import './UserPanel.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setError } from '../../Redux/userRedux';
import { update, updatePass } from '../../Redux/apiCalls';
import {Navigate } from 'react-router-dom';

const UserPanel = () => {

    const dispatch = useDispatch();

    const currentUser= useSelector((state) => state.user.currentUser);
    let isFetching = useSelector((state) => state.user.isFetching);
    const error = useSelector((state) => state.user.error);
    
    const [userData,setUserData] = useState({teamName:"" , captName:"" , email:"", logoImg:""});
    const [imgDetails,setImgDetails] = useState({state:false,msg:""});
    const [errMessage,setErrMessage]=useState({state:false,msg:null});
    const [success,setSuccess]=useState(false);

    const [userPass,setUserPass]=useState({password:"",newPassword:"",reTypePassword:""});
    const [passErrMessage,setPassErrMessage]=useState({state:false,msg:null});
    const [passSuccessMessage,setPassSuccessMessage]=useState({state:false,msg:null});

    const setImg =(e)=>{
        if(e.type.includes("image")){
            if(e.file.size<=1000000){
                setUserData({...userData,logoImg:e.base64});
                setImgDetails({state:true,msg:e.name.slice(0,20)+"..."});
                console.log(e)
            }else{
                setImgDetails({state:true,msg:"File size should be less than 1mb"});
            }
        }else{
            setImgDetails({state:true,msg:"File must be png/jpg"})
        }
    }; 

    const checkForm = () => {

        if( userData.teamName.length>0 && 
            userData.captName.length>0 && 
            userData.email.length>0    && 
            userData.logoImg.length>0  
            )
        {
            if(userData.email.includes('@')){
                setErrMessage(
                    {
                        state:false,
                        msg:null
                    });
                return true;
            }else{
                setErrMessage(
                    {
                        state:true,
                        msg:"Please enter a valid email"
                    });
                return false;
            }
        }else{
            setErrMessage(
            {
                state:true,
                msg:"Please fill all the fields"
            });
            return false;
        }
        
    };

    const submitForm = async (e) =>{
        e.preventDefault()
        const state=checkForm();
        if(state){
            const newUserData={
                teamName: userData.teamName,
                email: userData.email,
                captName: userData.captName,
                logoImg: userData.logoImg.includes("data:image") && userData.logoImg.includes("base64") ? userData.logoImg :null
            }
            console.log(newUserData)
            try {
                const res = await update(dispatch,userData,currentUser?._id,currentUser.accessToken);
                if(res=='success'){
                    setSuccess(true);
                }
            } catch (error) {
                console.log(error)
            }
        }
    };

    const checkPass = () => {
        if( userPass.password.length>0     && 
            userPass.newPassword.length>0  && 
            userPass.reTypePassword.length>0 
            )
        {
            if( userPass.password.length>5     && 
                userPass.newPassword.length>5  && 
                userPass.reTypePassword.length>5 
                )
            {
                if(userPass.newPassword == userPass.reTypePassword ){
                    setPassErrMessage(
                        {
                            state:false,
                            msg:null
                        });
                    return true;
                }else{
                    setPassErrMessage(
                        {
                            state:true,
                            msg:"Passwords do not match."
                        });
                    return false;
                }
            }else{
                setPassErrMessage(
                    {
                        state:true,
                        msg:"Minimum password length is of 6 characters"
                    });
                return false;
            }
            
        }else{
            setPassErrMessage(
            {
                state:true,
                msg:"Please fill all the fields."
            });
            return false;
        }
    };

    const submitPass = async (e) =>{
        e.preventDefault()
        const state=checkPass();
        console.log(state);
        if(state){
            try {
                const res = await updatePass(dispatch,
                    {
                        password:userPass.password,
                        newPassword:userPass.newPassword
                    },
                    currentUser?._id,currentUser.accessToken);

                if(res=='success'){
                    setPassSuccessMessage({state:true,msg:"Password changed successfully"});
                }else{
                    setPassErrMessage({state:true,msg:"Error occoured please try again"})
                }
            } catch (error) {
                console.log(error)
            }
        }
    };

    useEffect(()=>{
        setUserData({
            teamName:currentUser?.teamName,
            captName:currentUser?.captName,
            email:currentUser?.email,
            logoImg:currentUser?.logoImg.imgLink
        });
        dispatch(setError());
    },[]);

    const onReset = () => {
        setUserData({
            teamName:currentUser.teamName,
            captName:currentUser.captName,
            email:currentUser.email,
            logoImg:currentUser.logoImg.imgLink
        });
    }

    if(!currentUser){
        return <Navigate to="/login"/>
    }

    return (
        <div className='panel'>
            <div className="container-medium">
                <div className="panel-cont">
                    <Paper elevation={3}>
                        <form method="post" autoComplete='off' >
                            <div className="panel-cont-1">
                                <label className='panel-img-upload'>
                                    <FileBase64 required onDone={(e)=>setImg(e)}  />
                                    <Avatar sx={{ width: 80, height: 80 }} src={userData.logoImg} style={{ marginRight: '20px' , cursor:'pointer'}} />
                                </label>
                                
                                <div>
                                    <div className="panel-user-name">
                                    Change logo here
                                    </div>
                                    {/* <div className="panel-user-email">
                                        aryan@gmail.com
                                    </div> */}
                                    {/* <div className="panel-user-email">
                                        Change logo here
                                    </div> */}
                                    
                                    {imgDetails.state ? 
                                    (<div className="panel-user-email">
                                        {imgDetails.msg}
                                     </div>):(<></>)}

                                </div>
                            </div>
                            
                            <div className="panel-cont-2">
                                <div className="panel-head">
                                    Personal Information
                                </div>
                                {/* <div className="panel-para">
                                    Basic info, like your name and address, that you can edit.
                                </div> */}
                            </div>
                            <div className="panel-cont-3">

                                <div className="user-detail-cont">
                                    <div className="panel-detail-head">
                                        Team Name
                                    </div>
                                    <div className="panel-detail-val">
                                        <input required type="text" value={userData.teamName} 
                                        onChange={(e)=>setUserData({...userData,teamName:e.target.value})} 
                                        className='panel-input' autoComplete='off'/>
                                    </div>
                                </div>

                                <div className="user-detail-cont">
                                    <div className="panel-detail-head">
                                        Captain Name
                                    </div>
                                    <div className="panel-detail-val">
                                        <input required type="text" value={userData.captName} 
                                        onChange={(e)=>setUserData({...userData,captName:e.target.value})}
                                        className='panel-input' autoComplete='false' />
                                    </div>
                                </div>

                                <div className="user-detail-cont">
                                    <div className="panel-detail-head">
                                        Email
                                    </div>
                                    <div className="panel-detail-val">
                                        <input required type="text" value={userData.email}
                                        onChange={(e)=>setUserData({...userData,email:e.target.value})}
                                        className='panel-input' />
                                    </div>
                                </div>

                                {success ? (<div className="user-detail-cont">
                                    <Alert severity="success" style={{marginBottom:'20px',width:'100%'}} >Changs saved successfully</Alert>
                                </div>):(<></>)}

                                {error ? (<div className="user-detail-cont">
                                    <Alert severity="error" style={{marginBottom:'20px',width:'100%'}} >Error occured please try again</Alert>
                                </div>):(<></>)}

                                {errMessage.state ? (<div className="user-detail-cont">
                                    <Alert severity="error" style={{marginBottom:'20px',width:'100%'}} >{errMessage.msg}</Alert>
                                </div>):(<></>)}

                                <div className="panel-btn-cont">
                                    {!isFetching ? (<>
                                        <button className="panel-btn-1" name="submit" onClick={submitForm} type="submit" > Save Changes </button>
                                    </>) : (<>
                                        <button className="panel-btn-1" name="submit" type="submit" disabled > <CircularProgress/> </button>
                                    </>)}
                                    <button className="panel-btn-2"  onClick={onReset}> Reset </button>
                                </div>
                                
                            </div>
                        </form>
                        {/* <UpdatePassword /> */}
                        <div className="panel-cont-2" >
                            <div className="panel-head">
                                Security
                            </div>
                            {/* <div className="panel-para">
                                Basic Security Settings.
                            </div> */}
                        </div>
                        <div className="panel-cont-3">
                            <div className="user-detail-cont" >
                                <div className="panel-detail-head">
                                    Type Old Password
                                </div>
                                <div className="panel-detail-val">
                                    <input required type="text" 
                                    onChange={(e)=>setUserPass({...userPass,password:e.target.value})} 
                                    className='panel-input' />
                                </div>
                            </div>

                            <div className="user-detail-cont">
                                <div className="panel-detail-head">
                                    Type New Password
                                </div>
                                <div className="panel-detail-val">
                                    <input required type="text"
                                    onChange={(e)=>setUserPass({...userPass,newPassword:e.target.value})}
                                    className='panel-input' />
                                </div>
                            </div>

                            <div className="user-detail-cont">
                                <div className="panel-detail-head">
                                    Retype New Password
                                </div>
                                <div className="panel-detail-val">
                                    <input required type="text"
                                    onChange={(e)=>setUserPass({...userPass,reTypePassword:e.target.value})}
                                    className='panel-input' />
                                </div>
                            </div>
                            
                            {passErrMessage.state ? 
                            (<div className="panel-btn-cont">
                                <Alert severity='error' style={{minWidth:'30%',marginBottom:'10px'}}>{passErrMessage.msg}</Alert>
                            </div>):(<></>)}

                            {passSuccessMessage.state ? 
                            (<div className="panel-btn-cont">
                                <Alert style={{minWidth:'30%',marginBottom:'10px'}}>{passSuccessMessage.msg}</Alert>
                            </div>):(<></>)}
                            
                            <div className="panel-btn-cont">
                                <div className="panel-btn-1" onClick={submitPass} style={{ width: '100%' }}>
                                    Change Password
                                </div>
                            </div>
                        </div>
                    </Paper>
                </div>
            </div>
        </div >
    )
}


export default UserPanel;
