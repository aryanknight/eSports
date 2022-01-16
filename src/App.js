import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import './App.css';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage/>} />
    </Routes>
  );
}

export default App;
