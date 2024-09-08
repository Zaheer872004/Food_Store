import * as React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Router> {/* Wrap your application with Router in a higher component */}
      <div className="flex justify-between items-center bg-slate-700 text-black p-4">
        
        {/* Left section */}
        <div className="flex items-center gap-x-4">
          <div className="">
          <img
            className="w-20 h-20 rounded-full ml-5"
            src="https://imgs.search.brave.com/zHS4YHtQaOPR5ctFznVr6zTh_SpuaZOCdsPu-mFVJBo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzYwLzQ3LzM2/LzM2MF9GXzc2MDQ3/MzY3NV9VOTJqZHI2/UVVFa2xCOW51NkVD/Qlg5ZWg0Wk9NUkp0/Zi5qcGc"
            alt="Salimar Hotel"
          />
          <p className="text-white font-bold tracking-wide ">Salimar Hotel</p>
          </div>
        </div>

        {/* Middle section */}
        <div className="flex items-center gap-x-4">
          {/* Menu items */}
          <Link to="/home" className="text-white hover:text-gray-300 ">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
          <Link to="/top-restaurant" className="text-white hover:text-gray-300">
            Top Restaurant
          </Link>
        </div>
        
        {/* Right section */}
        <div>
          <p className="text-black hover:text-gray-300 bg-orange-300 rounded-md p-2 mr-12">SignUp/Login</p>
        </div>
      </div>
    </Router>
  );
};

export default Navbar;
