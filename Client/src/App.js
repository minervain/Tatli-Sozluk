import {  Routes, Route } from "react-router-dom";
import LeaderBoard from "./Pages/LeaderBoard";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import UserDetail from "./Pages/UserDetail.js";
import Flow from "./Pages/Flow.js";

function App() {
  return (
    <div className="App">
        <Navbar/>
            <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Leaderboard" element={<LeaderBoard />} />
        <Route path="/userdetay/:id" element={<UserDetail />} />
        <Route path="/flow" element={<Flow />} />


      </Routes>
         </div>
  );
}

export default App;
