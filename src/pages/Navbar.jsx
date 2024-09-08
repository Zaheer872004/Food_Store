import * as React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-slate-700 text-black p-4">
      
      {/* Left section */}
      <div className="flex items-center gap-x-4">
        <img
          className="w-20 h-20 rounded-full"
          src="https://imgs.search.brave.com/zHS4YHtQaOPR5ctFznVr6zTh_SpuaZOCdsPu-mFVJBo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzYwLzQ3LzM2/LzM2MF9GXzc2MDQ3/MzY3NV9VOTJqZHI2/UVVFa2xCOW51NkVD/Qlg5ZWg0Wk9NUkp0/Zi5qcGc"
          alt="Salimar Hotel"
        />
        <p className="text-white font-medium tracking-wide">Salimar Hotel</p>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-x-4">
        {/* Menu items */}
        <Link to="/home" className="text-white hover:text-gray-300">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

