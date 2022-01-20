import React from 'react';
import { Footer } from '../Components/Footer/Footer';
import Intro from '../Components/Intro/Intro';
import Match from '../Components/Match/Match';
import Merchandise from '../Components/Merchandise/Merchandise';
import Navbar from '../Components/Navbar/Navbar';
import NavbarSmall from '../Components/Navbar/NavbarSmall';
import Team from '../Components/Team/Team';
import TournamentLists from '../Components/TournamentLists/TournamentLists';
import Welcome from '../Components/Welcome/Welcome';

export default function HomePage() {
    React.useEffect(()=>{
      document.documentElement.scrollTop = 0;
      const a=document.getElementById("circle")

      window.onmousemove = event => {
          //console.log(document.documentElement.scrollTop)
          a.style.top = event.pageY + 'px'
          a.style.left = event.pageX + 'px'
      }

      // window.onscroll = event1 => {
      //   console.log(event1)
      //   let top=parseInt(a.style.top.slice(0,-2));
      //   let length=document.documentElement.scrollTop+top;
      //   a.style.top = document.documentElement.scrollTop + 'px'
      // }

    },[])
    return (
    <div className="App">
        <div className="container-large">
        <div id="circle"></div>
          <Navbar/>
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
