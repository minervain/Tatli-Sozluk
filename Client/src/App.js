import { Routes, Route } from "react-router-dom";
import LeaderBoard from "./Pages/LeadetBoard/LeaderBoard.js";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home.js";
import UserDetail from "./Pages/User/UserDetail.js";
import Flow from "./Pages/Yemek/Flow.js";
import FlowDetail from "./Pages/Yemek/FlowDetail.js";
import FlowDetayTarif from "./Pages/Yemek/FlowDetayTarif.js";
import Haber from "./Pages/Haber/Haber.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Leaderboard" element={<LeaderBoard />} />
        <Route path="/userdetay/:id" element={<UserDetail />} />
        <Route path="/flow" element={<Flow />} />
        <Route path="/flowDetay/:strCategory" element={<FlowDetail />} />
        <Route path="/flowDetay/strCategory/:id" element={<FlowDetayTarif />} />
        <Route path="/haber" element={<Haber />} />





      </Routes>
    </div>
  );
}

export default App;
