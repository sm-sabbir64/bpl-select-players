import { Suspense } from "react";
import "./App.css";
import AvailablePlayer from "./components/AvailablePlayers/AvailablePlayer";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

const fetchPlayer = async () => {
  const res = await fetch("/players.json")
  return res.json()
}

function App() {
  
  const playersPromise = fetchPlayer()
  return (
    <>
      <Navbar></Navbar>

     <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
     <AvailablePlayer playersPromise={playersPromise}></AvailablePlayer>
     </Suspense>

      <SelectedPlayers></SelectedPlayers>
    </>
  );
}

export default App;
