import React from "react";
import BannerImg from "../../assets/bg-shadow.png";
import BannerMain from "../../assets/banner-main.png";

const Banner = () => {
  return (
    <div className="mt-10">
      <div
        className="max-w-325 mx-auto bg-black bg-cover bg-no-repeat rounded-3xl py-16 flex flex-col items-center justify-center text-center mt-8"
        style={{ backgroundImage: `url(${BannerImg})` }}
      >
        <img src={BannerMain} alt="" className="mb-6 w-64 md:w-auto" />

        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-white font-bold text-4xl">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="text-gray-200 font-medium text-2xl mt-4">
            Beyond Boundaries Beyond Limits
          </p>

          <button className="btn btn-primary bg-[#E7FE29] text-black mt-6 font-bold rounded-lg">
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
