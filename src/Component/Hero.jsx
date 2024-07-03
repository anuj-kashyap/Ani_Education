import React from 'react';
import girl from '../assets/girl 1.png'; // Ensure you have the correct path to your image

const Hero = () => {
  return (
    <section className="relative bg-blue-900 text-white px-8 rounded-bl-[200px]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="text-8xl font-bold mb-4">Learning</h1>
          <h1 className="text-6xl font-bold mb-4"> Without Limits</h1>
          
          <p className="text-lg mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-700 px-4 py-2 rounded-full hover:bg-blue-800 transition duration-300">
              50+ Courses
            </button>
            <button className="bg-blue-700 px-4 py-2 rounded-full hover:bg-blue-800 transition duration-300">
              Free Trail
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img src={girl} alt="Hero" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
