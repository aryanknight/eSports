import React from 'react';
import SignUp from '../Components/Authentication/SignUp';

export default function SignupPage() {
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
          <SignUp/>
        </div>
    </div>
    )
}