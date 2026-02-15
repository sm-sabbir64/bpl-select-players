import React from 'react';
import navImg from "../../assets/logo.png";
import dollarImg from "../../assets/images.jpg";

const Navbar = () => {
    return (
        <div className="navbar max-w-325 mx-auto bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="text-xl">
            <img className="w-15 h-15" src={navImg} alt="" />
          </a>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-lg">60000</span>
          <span className="text-lg">Coin</span>
          <img className="w-5.5 h-5.5" src={dollarImg} alt="" />
        </div>
      </div>
    );
};

export default Navbar;