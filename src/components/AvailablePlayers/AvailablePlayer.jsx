import React, { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";


const AvailablePlayer = ({ playersPromise, setAvailableBalance }) => {
  const playerData = use(playersPromise);
  console.log(playerData);

  return (
    <div className="max-w-325 mx-auto grid grid-cols-1 md:grid-cols-3 mt-10 gap-6 border-2 border-orange-500">

      {
      playerData?.map((player)=><PlayerCard setAvailableBalance={setAvailableBalance} key={player.player_name} player={player}></PlayerCard>)
      }
    </div>
  );
};

export default AvailablePlayer;
