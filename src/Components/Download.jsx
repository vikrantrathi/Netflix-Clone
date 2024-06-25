import React from "react";
import v2 from "../images/v2.mp4";
const Download = () => {
  return (
    <div className="w-full bg-black">
      <div className=" md:p-20 p-5 flex flex-col md:flex-row-reverse max-w-7xl mx-auto md:gap-10 gap-5">
        <div className="flex-1 flex flex-col gap-5 justify-center ">
          <h1 className="md:text-6xl text-3xl font-bold text-white">Download your shows to watch offline</h1>
          <p className="text-2xl text-white">
          Save your favourites easily and always have something to watch.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <video autoPlay={true} muted loop className=" md:h-96 h-72">
            <source src={v2} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Download;
