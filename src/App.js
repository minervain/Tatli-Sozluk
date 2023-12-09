import {  Routes, Route } from "react-router-dom";
import LeaderBoard from "./Pages/LeaderBoard";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      
        <Navbar/>
            <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Leaderboard" element={<LeaderBoard />} />
      </Routes>
         </div>
  );
}

export default App;
