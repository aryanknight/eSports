import React from 'react';
import SignUp from '../Components/Authentication/SignUp';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function SignupPage() {
  const currentUser = useSelector((state) => state.user.currentUser);
    React.useEffect(()=>{
      document.documentElement.scrollTop = 0;
      const a=document.getElementById("circle")

      window.onmousemove = event => {
          a.style.top = event.pageY + 'px'
          a.style.left = event.pageX + 'px'
      }

    },[])

    if(currentUser){
      return <Navigate to="/"/>
    }
    return (
    <div className="App">
        <div className="container-large">
        <div id="circle"></div>
          <SignUp/>
        </div>
    </div>
    )
}