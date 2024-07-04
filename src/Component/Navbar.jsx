import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-blue-950 '>
    <nav className="relative bg-[linear-gradient(201.85deg,#0D307B_-2.69%,#265CD3_101.46%)] text-white py-6 px-8 rounded-bl-[120px]">
      <div className="container mx-auto flex justify-between items-center h-32">
        <div className="flex items-center ml-8">
          <img src={logo} alt="ANI Education logo" className="h-16 w-auto" />
        </div>
        <div className="flex items-center space-x-8">
          <Link to='/' className="text-lg font-semibold hover:underline">Home</Link>
          <Link to='/Course' className="text-lg font-semibold hover:underline">Courses</Link>
          <Link to='/Instructor' className="text-lg font-semibold hover:underline">Instructor</Link>
          <Link to='/Contact' className="text-lg font-semibold hover:underline">Contact</Link>
        </div>
        <button className="ml-6 bg-blue-700 px-4 py-2 rounded-full hover:bg-blue-800 transition duration-300">
          Sign In
        </button>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
