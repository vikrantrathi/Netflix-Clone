import React from "react";
import kids from "../images/children.png";
const Kids = () => {
  return (
    <div className="w-full bg-black">
      <div className=" md:p-20 p-5 flex flex-col md:flex-row-reverse max-w-7xl mx-auto md:gap-10 gap-5">
        <div className="flex-1 flex flex-col gap-5 justify-center ">
          <h1 className="md:text-6xl text-3xl font-bold text-white">
            Create profiles for kids
          </h1>
          <p className="text-2xl text-white">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img src={kids} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Kids;
