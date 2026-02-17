import React, { use } from "react";
import userImg from "../../assets/user-1.png";
import flagImg from "../../assets/flag.png";

const AvailablePlayer = ({ playersPromise }) => {
  const playerData = use(playersPromise);
  console.log(playerData);

  return (
    <div className="max-w-325 mx-auto grid grid-cols-1 md:grid-cols-3 mt-10 gap-6 border-2 border-orange-500">

      {
      playerData.map((player) => (<div className="card bg-base-100 shadow-sm p-5">
          <figure>
            <img src={player.player_image} alt="Shoes" className="w-100 h-75 object-cover" />
          </figure>
          <div className="mt-4">
            <div className="flex">
              <img src={userImg} alt="" />
              <h2 className="card-title ml-2 font-bold">
                {player.player_name}
              </h2>
            </div>
            <div className="flex justify-between mt-3 border-b border-gray-400 pb-2">
              <div className="flex items-center">
                <img className="ml-1.5 w-5 h-5 " src={flagImg} alt="" />
                <span className="ml-2">{player.player_country}</span>
              </div>

              <button className="btn border-none">{player.player_role}</button>
            </div>
            <div className="flex justify-between font-bold mt-2">
              <span>Rating</span>
              <span>{player.rating}</span>
            </div>
            <div className="flex justify-between mt-3">
              <span className="font-bold">{player.batting_hand}</span>
              <span className="text-gray-600">{player.bowling_role}</span>
            </div>

            <div className="card-actions flex justify-between mt-3 items-center">
              <span className="font-bold">Price: {player.price}</span>
              <button className="btn border-none">Choose Player</button>
            </div>
          </div>
        </div>
      ))
      }
    </div>
  );
};

export default AvailablePlayer;
