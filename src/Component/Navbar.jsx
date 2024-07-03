import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="relative bg-[linear-gradient(271.85deg,#0D307B_-2.69%,#265CD3_101.46%)] text-white py-6 px-8 rounded-bl-full">
      <div className="container mx-auto flex justify-between items-center h-32">
        <div className="flex items-center ml-8">
          <img src={logo} alt="ANI Education logo" className="h-16 w-auto" />
        </div>
        <div className="flex items-center space-x-8">
          <a href="#" className="text-lg font-semibold hover:underline">Home</a>
          <a href="#" className="text-lg font-semibold hover:underline">Courses</a>
          <a href="#" className="text-lg font-semibold hover:underline">Instructor</a>
          <a href="#" className="text-lg font-semibold hover:underline">Contact</a>
        </div>
        <button className="ml-6 bg-blue-700 px-4 py-2 rounded-full hover:bg-blue-800 transition duration-300">
          Sign In
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
