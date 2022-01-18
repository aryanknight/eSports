import React from 'react';
import Intro from '../Components/Intro/Intro';
import Match from '../Components/Match/Match';
import Merchandise from '../Components/Merchandise/Merchandise';
import Navbar from '../Components/Navbar/Navbar';
import Team from '../Components/Team/Team';
import TournamentLists from '../Components/TournamentLists/TournamentLists';
import Welcome from '../Components/Welcome/Welcome';

export default function HomePage() {
    React.useEffect(()=>{
      document.documentElement.scrollTop = 0;
      // const a=document.getElementById("circle")

      // window.onmousemove = event => {
      //     //console.log(document.documentElement.scrollTop)
      //     a.style.top =document.documentElement.scrollTop + event.clientY + 'px'
      //     a.style.left = event.clientX + 'px'
      // }

      // window.onscroll = event1 => {
      //   console.log(document.documentElement.scrollTop,a.style.top)
      //   let top=parseInt(a.style.top.slice(0,-2));
      //   let length=document.documentElement.scrollTop+top;
      //   a.style.top = top + 'px'
      // }

    },[])
    return (
    <div className="App">
        <div className="container-large">
        {/* <div id="circle" style={{position:'absolute',width:'30px',height:'30px',backgroundColor:'red',zIndex:'500'}}></div> */}
          <Navbar/>
          <Intro/>
          <Welcome/>
          <TournamentLists/>
          <Match/>
          <Team/>
          <Merchandise/>
        </div>
    </div>
    )
}
