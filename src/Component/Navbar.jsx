import React from 'react'
import logo from '../assets/logo.png'
import navrect from '../assets/navrect.png'
const Navbar = () => {
  return (
    <div>
       <nav className="bg-blue-600 bg-[linear-gradient(271.85deg,#0D307B_-2.69%,#265CD3_101.46%)]  text-white p-4 rounded-bl-4xl  ">
        {/* <img src={navrect} alt="" className='w-full h-32' /> */}
    <div className="container mx-auto flex justify-between items-center ">
      <div className="flex items-center">
        <img src={logo} alt="ani education logo" />
      </div>
      <div className="flex-1 flex justify-center">
            <div className="flex text-2xl font-bold  items-center space-x-6">
              <a href="#" className="hover:underline">Home</a>
              <a href="#" className="hover:underline">Courses</a>
              <a href="#" className="hover:underline">Instructor</a>
              <a href="#" className="hover:underline">Contact</a>
            </div>
            <div className="flex items-center ml-60">
            <button className="bg-blue-700 px-4 py-2  rounded-full hover:bg-blue-800 transition duration-300">
              Sign In
            </button>
          </div>
      </div>
    </div>
  </nav>
  </div>
  )
}

export default Navbar