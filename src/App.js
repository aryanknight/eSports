import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import './App.css';
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {useJwt} from 'react-jwt';
import { reset } from "./Redux/userRedux";
import React from "react";
import ScrimPage from "./Pages/ScrimPage";
import MyAccountPage from "./Pages/MyAccountPage";
import BookSlotPage from "./Pages/BookSlotPage";

function App() {
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log(currentUser?.accessToken)
  let token = currentUser?.accessToken;
  const { decodedToken, isExpired } = useJwt(token);
  console.log(decodedToken,isExpired);
  const dispatch =useDispatch();

  React.useEffect(()=>{
    console.log(decodedToken,isExpired);
    if (decodedToken && isExpired || currentUser && !currentUser?.accessToken) {
      console.log(currentUser)
      dispatch(reset());
    }
  },[decodedToken,isExpired]);

  return (
    <Routes>
      <Route exact path="/" element={<HomePage/>} />
      <Route exact path="/login" element={<LoginPage/>} />
      <Route exact path="/register" element={<SignupPage/>} />
      <Route exact path="/scrim" element={<ScrimPage/>} />
      <Route exact path="/account" element={<MyAccountPage/>} />
      <Route exact path="/scrim/:scrimId" element={<BookSlotPage/>} />
    </Routes>
  );
}

export default App;
