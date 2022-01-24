import React from 'react';
import Logo from '../../Images/text.png';
import { Link , useNavigate } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { reset } from '../../Redux/userRedux';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "./Navbar.css";

export default function LoggedNavbar() {
    
    const dispatch=useDispatch();
    const Navigate=useNavigate();

    const handleLogout = () => {
        dispatch(reset());
        setAnchorEl(null);
        window.location.reload();
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
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
                            <div className="nav-btn-cont"  onClick={handleClick}>
                                My account
                            </div>
                        </div>

                        
                    </div>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        style={{marginTop:'10px'}}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </div>
            </div>
        </div>    
    )
}
