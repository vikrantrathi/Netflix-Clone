import React from "react";
import v3 from "../images/v3.mp4";
const Watch = () => {
  return (
    <div className="w-full bg-black">
      <div className=" md:p-20 flex flex-col md:flex-row max-w-7xl mx-auto md:gap-10 gap-5 p-5">
        <div className="flex-1 flex flex-col gap-5 justify-center ">
          <h1 className="md:text-6xl text-3xl font-bold text-white">
          Watch everywhere
          </h1>
          <p className="text-2xl text-white">
          Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <video autoPlay={true} muted loop className="md:h-96 h-72 w-full">
            <source src={v3} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Watch;
