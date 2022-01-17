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
    },[])
    return (
    <div className="App">
        <div className="container-large">
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
