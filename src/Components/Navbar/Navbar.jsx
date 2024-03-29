import React from 'react';
import Logo from '../../Images/text.png';
import { Link , useNavigate } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { reset } from '../../Redux/userRedux';
import Avatar from '@mui/material/Avatar';
import "./Navbar.css";

export default function Navbar() {
    
    React.useEffect(()=>{
        window.addEventListener("scroll",function(){
            const nav=document.getElementsByClassName("navbar-cont")[0];
            if(window.scrollY>0){
                if(nav?.style){
                    nav.style.boxShadow="0 7px 13px 0 rgb(0 0 0 / 10%)";
                    nav.style.backgroundColor="black";
                }
            }else{
                if(nav?.style){
                    nav.style.boxShadow="none";
                    nav.style.backgroundColor="#ffffff00";
                }
            }
        });
    },[])
    

    return (
        <div className="navbar-cont" id="lg-nav">
            <div className="container-medium">
                <div className="navbar">
                    <div className="navbar-logo">
                        <Link to="/">
                            <img src={Logo} id="nav-logo"/>
                        </Link>
                    </div>
                    <div className="navbar-menu">
                        <div className="nav-item"><a href='https://www.google.com'>About us</a></div>
                        <div className="nav-item"><a href="/scrim">scrim</a></div>
                        <div className="nav-item"><a href="#roadmap">tournament</a></div>
                        <div className="nav-item"><a href='#how'>merchandise</a></div>
                        
                        <div className="nav-item">
                            <Link to="/login"> 
                                <div className="nav-btn-cont">
                                    login
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>    
    )
}
