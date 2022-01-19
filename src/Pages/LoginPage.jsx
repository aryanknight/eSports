import React from 'react';
import Login from '../Components/Authentication/Login';

export default function LoginPage() {
    React.useEffect(()=>{
      document.documentElement.scrollTop = 0;
      const a=document.getElementById("circle")

      window.onmousemove = event => {
          a.style.top = event.pageY + 'px'
          a.style.left = event.pageX + 'px'
      }

    },[])
    return (
    <div className="App">
        <div className="container-large">
        <div id="circle"></div>
          <Login/>
        </div>
    </div>
    )
}
