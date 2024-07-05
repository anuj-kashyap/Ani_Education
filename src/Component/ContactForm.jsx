import React from 'react';
import logo from '../assets/logo.png';

const ContactForm = () => {
  return (
    <div className="bg-blue-950 flex items-center justify-center p-4 rounded-bl-[150px] min-h-screen">
      
        
        
        <div className="md:w-1/2 text-white mb-8 md:mb-0 md:pr-8 order-2 md:order-1 ml-20">
          <div className="mb-8">
            <img src={logo} alt="ANI Education" className="mb-4" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span className="text-2xl">Info@markletechandmedia.com</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span className="text-2xl">+91 1234 567 890</span>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 mr-2 mt-1 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span className="text-2xl">
                A, 52, Som Bazar Rd, Chowk, Vikas Nagar,
                <br />
                Uttam Nagar, East, New Delhi, Delhi, 110059
              </span>
            </div>
          </div>
        </div>
        
        
        <div className="md:w-1/2 md:pl-8 order-1 md:order-2 mr-20">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-[500px] p-3 rounded-full bg-gray-200 text-gray-800"
            />
            <input
              type="tel"
              placeholder="Ph No."
              className="w-[500px] p-3 rounded-full bg-gray-200 text-gray-800"
            />
            <input
              type="email"
              placeholder="Email ID"
              className="w-[500px] p-3 rounded-full bg-gray-200 text-gray-800"
            />
            <textarea
              placeholder="Leave a Message"
              className="w-[500px] p-3 rounded-3xl bg-gray-200 text-gray-800 h-48"
            ></textarea>
            <div>
            <button
              type="submit"
              className="bg-white text-blue-900 font-bold py-2 ml-44 px-8 rounded-full hover:bg-blue-100 transition duration-300"
            >
              Submit
            </button>
            </div>
          </form>
        </div>
      
    </div>
  );
};

export default ContactForm;
