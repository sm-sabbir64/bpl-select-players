import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayer from "./components/AvailablePlayers/AvailablePlayer";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

const fetchPlayer = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(6000000000)

  const playersPromise = fetchPlayer();
  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className="max-w-325 mx-auto flex justify-between items-center border-2 border-orange-500 mt-6">
        <h1 className="font-bold text-2xl">Available player</h1>

        <div className="font-bold">
          <button
            onClick={() => setToggle(true)}
            className={`border border-gray-200 py-3 px-4 rounded-l-xl border-r-0 ${toggle === true ? "bg-[#E7FE29]" : ""}`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`border border-gray-200 py-3 px-4 rounded-r-xl border-l-0 ${toggle === false ? "bg-[#E7FE29]" : ""}`}
          >
            Selected <span>(0)</span>
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <AvailablePlayer setAvailableBalance={setAvailableBalance} playersPromise={playersPromise}></AvailablePlayer>
        </Suspense>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </>
  );
}

export default App;
