import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import './App.css';
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage/>} />
      <Route exact path="/login" element={<LoginPage/>} />
      <Route exact path="/register" element={<SignupPage/>} />
    </Routes>
  );
}

export default App;
