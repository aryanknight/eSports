import React from 'react';
import { Footer } from '../Components/Footer/Footer';
import LoggedNavbar from '../Components/Navbar/LoggedNavbar';
import { useSelector } from 'react-redux';
import Navbar from '../Components/Navbar/Navbar';
import NavbarSmall from '../Components/Navbar/NavbarSmall';
import Scrim from '../Components/Scrim/Scrim';
import BookSlot from '../Components/Scrim/BookSlot';

export default function BookSlotPage() {

  const currentUser=useSelector(state=>state.user.currentUser);

  React.useEffect(()=>{
    document.documentElement.scrollTop = 0;
    const a=document.getElementById("circle")

    window.onmousemove = event => {
      a.style.top = event.pageY + 'px'
      a.style.left = event.pageX + 'px'
    }

  },[]);

  return (
    <div className="App">
        <div className="container-large">
        <div id="circle"></div>
          {currentUser?<LoggedNavbar/>:<Navbar/>}
          <NavbarSmall/>
          <BookSlot/>
          <Footer/>
        </div>
    </div>
    )
}
