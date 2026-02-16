import React, { use } from "react";
import userImg from "../../assets/user-1.png"
import flagImg from "../../assets/flag.png"

const AvailablePlayer = ({ playersPromise }) => {
  const playersData = use(playersPromise);
  console.log(playersData);

  return (
    <div className="max-w-325 mx-auto">
      <div className="card bg-base-100 w-96 shadow-sm p-5">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="mt-4">
         <div className="flex">
            <img src={userImg} alt="" /><h2 className="card-title ml-2">Mostafizur Rahman</h2>
         </div>
         <div className="flex justify-between mt-3">
            <div className="flex gap-2 mt-2">
                <img className="ml-1.5 text-gray-400" src={flagImg} alt="" />
                <span>Bangladesh</span>
            </div>

            <button className="btn border-none">All-Rounder</button>
         </div>
            



          <div className="card-actions justify-end mt-3">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailablePlayer;
