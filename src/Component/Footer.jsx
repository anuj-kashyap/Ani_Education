import React from 'react';
import logo from '../assets/logo.png'; // Make sure to update this with the correct path to your logo

const Footer = () => {
  return (
    <div className="bg-blue-900 text-white py-12 px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:mb-0 md:w-1/4">
          <img src={logo} alt="ANI Education" className="mb-4" />
          <p className="text-sm leading-relaxed">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
          </p>
        </div>
        <div className="md:w-1/6">
          <h2 className="text-lg font-bold mb-4">Company</h2>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-gray-300">About Us</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-300">Services</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-300">Community</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-300">Testimonials</a></li>
          </ul>
        </div>
        <div className="md:w-1/6">
          <h2 className="text-lg font-bold mb-4">Support</h2>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-gray-300">Help Center</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-300">Tweet Us</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-300">Webinars</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-300">Feedback</a></li>
          </ul>
        </div>
        <div className="md:w-1/6">
          <h2 className="text-lg font-bold mb-4">Links</h2>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-gray-300">Courses</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-300">Become Teacher</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-300">Service</a></li>
          </ul>
        </div>
        <div className="md:w-1/4">
          <h2 className="text-lg font-bold mb-4">Contact Us</h2>
          <ul>
            <li className="mb-2">91+123 4545 66454</li>
            <li className="mb-2">Markle@Gmail.Com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
