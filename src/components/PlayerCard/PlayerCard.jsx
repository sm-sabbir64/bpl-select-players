import React, { useState } from "react";
import userImg from "../../assets/user-1.png";
import flagImg from "../../assets/flag.png";

const PlayerCard = ({ player,setAvailableBalance }) => {
    const [isSelected, setSelected] = useState(false)
  return (
    <div className="card bg-base-100 shadow-sm p-5">
      <figure>
        <img
          src={player.player_image}
          alt="Shoes"
          className="w-100 h-75 object-cover"
        />
      </figure>
      <div className="mt-4">
        <div className="flex">
          <img src={userImg} alt="" />
          <h2 className="card-title ml-2 font-bold">{player.player_name}</h2>
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
          <button disabled={isSelected} onClick={()=>setSelected(true)} className="btn border-none">{isSelected?"Selected":"Choose Player"}</button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
