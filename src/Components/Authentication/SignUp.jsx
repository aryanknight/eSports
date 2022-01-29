import React, { useState, useEffect } from 'react';
import Logo from '../../Images/text.png';
import './Authentication.css';
import { Link } from 'react-router-dom';
import { useNavigate , Navigate} from "react-router-dom";
import FileBase64 from 'react-file-base64';
import { Alert } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../Redux/apiCalls';
import { setError } from '../../Redux/userRedux';


const SignupPage = () => {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const [enteredTeamName, setTeamName] = useState("");
    const [enteredCaptName, setCaptName] = useState("");
    const [logoImg, setLogoImg] = useState("");
    const [enteredConfirmPassword, setEnteredconfirmPassword] = useState("");
    const [errMessage,setErrMessage]=useState({state:false,msg:null});
    const [imgErr,setImgErr]=useState({state:false,msg:null});
    const [imgName,setImgName]=useState(null);

    const navigate=useNavigate();
    const dispatch=useDispatch();
    const isFetching = useSelector((state) => state.user.isFetching);
    const error = useSelector((state) => state.user.error);
    const currentUser = useSelector((state) => state.user.currentUser);

    const checkImg = (e)=> {
        if(e.type.includes("image")){
            if(e.file.size<=1000000){
                setLogoImg(e.base64);
                setImgName(e.name.slice(0,20)+"...")
                setImgErr(
                    {
                        state:false,
                        msg:null
                    });
            }else{
                setImgErr(
                    {
                        state:true,
                        msg:"File size must be less than 1mb"
                    });    
            }
        }else{
            setImgErr(
                {
                    state:true,
                    msg:"Upload Only PNG/JPG"
                });
        }
    }

    const checkForm = () => {

        if( enteredEmail.length>0    && 
            enteredPassword.length>0 && 
            enteredTeamName.length>0 && 
            enteredCaptName.length>0 && 
            enteredConfirmPassword.length>0
            )
        {
            if(enteredEmail.includes('@')){
                if(enteredPassword.length>5){
                    if(enteredPassword==enteredConfirmPassword){
                        if(logoImg.length>0){
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
                                    msg:"Please Select a Logo"
                                });
                            return false;
                        }
                    }else{
                        setErrMessage(
                            {
                                state:true,
                                msg:"Passwords do not match"
                            });
                        return false;
                    }
                }else{
                    setErrMessage(
                        {
                            state:true,
                            msg:"Password is too short (Min Length : 6 Letters)"
                        });
                    return false;
                }
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
    }

    const submitForm = async (e) =>{
        e.preventDefault()
        const state=checkForm();
        if(state){
            const userData={
                teamName: enteredTeamName,
                email: enteredEmail.trim(),
                captName: enteredCaptName,
                password: enteredPassword,
                imageData: logoImg
            }
            try {
                const res = await register(dispatch,userData);
                if(res=='success'){
                    navigate("/")
                }
            } catch (error) {
                console.log(error)
            }
        }
    }

    React.useEffect(()=>{
        dispatch(setError());
    },[])

    if(currentUser){
      return <Navigate to="/"/>
    }

    return (
        <div className='signup'>
            <div className="signup-cont">
                <div className="signup-left">
                    <div className="signup-cont-1">

                        <div className="signup-img-cont">
                            <Link to="/">
                                < img src={Logo} className="signup-img" />
                            </Link>
                        </div>
                        
                        <form action method="post" className='signup-form' style={{width:'100%'}} autoComplete='off' >

                            <div className="signup-head" style={{padding:'0rem 1rem'}}>Register</div>
                            
                            <div className="login-para signup-para" style={{padding:'0rem 1rem'}}>Create New Clover Esports Account</div>
                            
                            <div className="signup-email">
                                <div className="signup-subhead">Email</div>
                                <div className="signup-cred-cont">
                                    <input className='signup-input' onChange={(e)=>setEnteredEmail(e.target.value) } required />
                                </div>
                            </div>

                            <div className="signup-cont-2">
                                <div className="signup-subhead">Team Name</div>
                                <div className="signup-cred-cont">
                                    <input className='signup-input' onChange={(e)=>setTeamName(e.target.value)} required />
                                </div>
                            </div>

                            <div className="signup-cont-2">
                                <div className="signup-subhead">Captain Name</div>
                                <div className="signup-cred-cont">
                                    <input className='signup-input' onChange={(e)=>setCaptName(e.target.value)} required />
                                </div>
                            </div>


                            <div className="signup-cont-2">
                                <div className="signup-subhead">Password</div>
                                <div className="signup-cred-cont">
                                    <input className='signup-input' onChange={(e)=>setEnteredPassword(e.target.value) } required />
                                </div>
                            </div>

                            <div className="signup-cont-2">
                                <div className="signup-subhead">Confirm Password</div>
                                <div className="signup-cred-cont">
                                    <input className='signup-input' onChange={(e)=>setEnteredconfirmPassword(e.target.value)} required  />
                                </div>
                            </div>

                            <div className="signup-cont-2 upload-logo-cont">
                                <div className="signup-subhead">Upload Logo</div>
                                <div className="signup-cred-cont" style={{paddingTop:'2rem'}}>
                                    <label className='img-upload'> Choose Image File
                                        <FileBase64 required onDone={e=>checkImg(e)}  />
                                    </label>
                                    <span style={{marginLeft:'10px',color:'white'}}>
                                        {imgName}
                                    </span>
                                </div>
                            </div>

                                {imgErr.state ? (<div className="signup-cont-2 signup-err-cont">
                                    <Alert severity="error" style={{width:'100%'}} >{imgErr.msg}</Alert>
                                </div>) : (<></>)}

                                {error ? (<div className="signup-cont-2 signup-err-cont">
                                    <Alert severity="error" style={{width:'100%'}} >Error occured please try again</Alert>
                                </div>) : (<></>)}
                            
                                {errMessage.state ? (<div className="signup-cont-2 signup-err-cont">
                                    <Alert severity="error" style={{width:'100%'}} >{errMessage.msg}</Alert>
                                </div>) : (<></>)}
                            
                            {!isFetching
                                ? (<>
                                <div className="signup-btn-cont">
                                    <button name="submit" type="submit" onClick={e=>submitForm(e)} style={{width:'100%'}}className='login-btn'>Register</button>
                                </div>
                                    
                                </>)
                                : (<>
                                    <button name="submit" type="submit" className='login-btn' disabled>Register</button>
                                </>) 
                            }

                        </form>

                        <div className="login-para" style={{padding:'0rem 1rem',color:'white',width:'80%'}}>Are you already Registered?
                            <Link to="/login">
                                <span style={{ color: '#ff033e', fontWeight:'bolder',cursor: 'pointer' }}> Login</span>
                            </Link>
                        </div>

                        {/* <div className="or">OR</div>

                        <div className="or-option">
                            <div className="option">Facebook</div>
                            <div className="option">Google</div>
                        </div> */}
                        
                        {/* <div className="policies" style={{ marginTop: '1rem', paddingBottom: '1rem' }}>
                            <Link to="/terms">
                                <div className="policy" style={{ color: 'yellow', fontWeight:'bold',cursor: 'pointer' }}>Terms&Condition</div>
                            </Link>
                            <Link to="/privacy-policy">
                                <div className="policy" style={{ color: 'yellow', fontWeight:'bold',cursor: 'pointer' }}>Privacy Policy</div>
                            </Link>
                            <Link to="/terms">
                                <div className="policy">Help</div>
                            </Link>
                        </div> */}

                        {/* <div className="login-copyright">
                            © 2021 SOWLOW. All Rights Reserved.
                        </div> */}
                    </div>


                </div>
            </div >
        </div >
    )
}

export default SignupPage;
