import React from "react";
import v1 from "../images/v1.mp4";
const Enjoy = () => {
  return (
    <div className="w-full bg-black">
      <div className=" sm:p-20 p-5  flex flex-col md:flex-row md:max-w-7xl  mx-auto gap-5 sm:gap-10">
        <div className="flex-1 flex flex-col gap-5 justify-center">
          <h1 className="md:text-6xl text-3xl font-bold text-white">
            Download your shows to watch offline
          </h1>
          <p className="text-2xl text-white">
            Save your favourites easily and always have something to watch.
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <video autoPlay={true} muted loop className="sm:h-96 h-72 w-full">
            <source src={v1} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Enjoy;
