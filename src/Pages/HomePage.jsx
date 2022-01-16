import React from 'react';
import Intro from '../Components/Intro/Intro';
import Navbar from '../Components/Navbar/Navbar';
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
        </div>
    </div>
    )
}
