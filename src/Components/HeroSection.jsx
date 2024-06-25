import React from "react";
import Navbar from "./Navbar";
import '../index.css';
import Hr from "./Hr";
export const HeroSection = () => {
  return (
    <>
    <div
      className="sm:h-[700px] h-[500px]"
      style={{
        background:
          "linear-gradient(80deg, black, transparent), url(https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg)",
      }}
    >
      <Navbar />
      <div className="flex flex-col justify-center items-center sm:gap-5 gap-2 md:h-[600px] h-[400px] sm:max-w-5xl mx-auto sm:p-5 p-1 text-center">
        <h1 className="sm:text-5xl text-3xl text-white font-bold">Unlimited movies, TV shows and more</h1>
        <h2 className="sm:text-3xl text-xl text-white">Watch anywhere. Cancel anytime.</h2>
        <p className="sm:text-xl text-md text-white">Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="flex flex-col md:flex-row gap-5 w-full md:h-24 justify-center items-center px-5">
            <input type="text" placeholder="Email Address" className="placeholder:text-center sm:px-5 md:py-4 py-2 rounded-md w-full sm:w-96 bg-slate-800 opacity-50 border text-white text-xl hover:border-2 hover:border-white"/>
            <button className="bg-red-600 px-5 sm:py-4 py-2 rounded-md text-xl font-bold text-white w-48 hover:bg-red-700 border hover:border-2 border-red-700 transition">Get Started</button>
        </div>
      </div>
     
    </div>
   <Hr/>
     
     </>
  );
};
