import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='bg-blue-950'>
      <nav className="relative bg-[linear-gradient(201.85deg,#0D307B_-2.69%,#265CD3_101.46%)] text-white py-6 px-8 rounded-bl-[120px]">
        <div className="container mx-auto flex justify-between items-center h-32">
          <div className="flex items-center ml-8">
            <img src={logo} alt="ANI Education logo" className="h-16 w-auto" />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to='/' className="text-lg font-semibold hover:underline">Home</Link>
            <Link to='/Course' className="text-lg font-semibold hover:underline">Courses</Link>
            <Link to='/Instructor' className="text-lg font-semibold hover:underline">Instructor</Link>
            <Link to='/Contact' className="text-lg font-semibold hover:underline">Contact</Link>
          </div>
          <button className="hidden md:block ml-6 bg-blue-700 px-4 py-2 rounded-full hover:bg-blue-800 transition duration-300">
            Sign In
          </button>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-2xl focus:outline-none">
              <FaBars />
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="flex flex-col items-center justify-center z-50">
            {/* <button onClick={toggleMenu} className="absolute top-6 right-6 text-3xl text-white focus:outline-none">
              <FaTimes />
            </button> */}
            <Link to='/' className="text-2xl font-semibold hover:underline py-2" onClick={toggleMenu}>Home</Link>
            <Link to='/Course' className="text-2xl font-semibold hover:underline py-2" onClick={toggleMenu}>Courses</Link>
            <Link to='/Instructor' className="text-2xl font-semibold hover:underline py-2" onClick={toggleMenu}>Instructor</Link>
            <Link to='/Contact' className="text-2xl font-semibold hover:underline py-2" onClick={toggleMenu}>Contact</Link>
            <button className="mt-6 text-blue-700 bg-white px-6 py-3 rounded-full hover:bg-blue-800 transition duration-300" onClick={toggleMenu}>
              Sign In
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
