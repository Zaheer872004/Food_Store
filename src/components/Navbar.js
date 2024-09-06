import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <img
          src="path-to-your-logo.png"
          alt="Brand Logo"
          className="w-10 h-auto mr-3"
        />
        <span className="text-xl font-bold">Your Brand</span>
      </div>
      <div className="flex items-center space-x-6">
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about-us" className="hover:underline">About Us</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/famous-store" className="hover:underline">Famous Store</Link>
        </div>
        <div className="flex space-x-3">
          <button className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-gray-800">Login</button>
          <button className="bg-white text-gray-800 px-4 py-2 rounded hover:bg-gray-200">Signup</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
