import React from 'react';
import navImg from "../../assets/logo.png";
import dollarImg from "../../assets/images.jpg";

const Navbar = () => {
    return (
        <div className="navbar max-w-325 mx-auto bg-base-100 shadow-sm gap-12 mt-11">
        <div className="flex-1">
          <a className="text-xl">
            <img className="w-15 h-15" src={navImg} alt="" />
          </a>
        </div>
          <div className='flex items-center gap-12'>
            <p className='text-gray-700 p-3 text-[18px]'>Home</p>
            <p className='text-gray-700 p-3 text-[18px]'>Fixture</p>
            <p className='text-gray-700 p-3 text-[18px]'>Team</p>
            <p className='text-gray-700 p-3 text-[18px]'>Schedules</p>
          </div>
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg p-3">
          <p className="font-bold ">0 <span>Coin</span></p>
          <img className="w-5.5 h-5.5" src={dollarImg} alt="" />
        </div>
      </div>
    );
};

export default Navbar;