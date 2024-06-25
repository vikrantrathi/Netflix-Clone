import React from "react";
import { Link } from 'react-router-dom';
import logo from "../images/Netflix_Logo_PMS.png";
const Navbar = () => {
  return (
    <header className="max-w-7xl mx-auto z-10"> 
      <nav className="flex justify-between items-center p-2">
        <div>
          <img src={logo} alt="" className="sm:h-20 h-12" />
        </div>
        <div className="flex md:gap-5 gap-2 justify-center items-center">
            <div>
                <select className="sm:px-5 px-1 sm:py-2 py-1 rounded-md bg-slate-900 opacity-70 text-white sm:font-semibold border">
                    <option value="">Eng</option>
                </select>
            </div>
            <div> 
                <Link to={"/login"}>
                <button className="bg-red-600 sm:px-3 px-1 sm:py-2 py-1 text-white sm:font-semibold rounded-md hover:bg-red-700 transition border-red-500 border-2" >Sign In</button>
            </Link>
            </div>
           
          
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
