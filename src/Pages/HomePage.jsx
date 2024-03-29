import React from 'react';
import { Footer } from '../Components/Footer/Footer';
import LoggedNavbar from '../Components/Navbar/LoggedNavbar';
import { useSelector } from 'react-redux';
import Intro from '../Components/Intro/Intro';
import Match from '../Components/Match/Match';
import Merchandise from '../Components/Merchandise/Merchandise';
import Navbar from '../Components/Navbar/Navbar';
import NavbarSmall from '../Components/Navbar/NavbarSmall';
import Team from '../Components/Team/Team';
import TournamentLists from '../Components/TournamentLists/TournamentLists';
import Welcome from '../Components/Welcome/Welcome';

export default function HomePage() {

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
          <Intro/>
          <Welcome/>
          <TournamentLists/>
          <Match/>
          <Team/>
          <Merchandise/>
          <Footer/>
        </div>
    </div>
    )
}
