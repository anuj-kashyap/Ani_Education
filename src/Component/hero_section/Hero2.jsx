import React from 'react';
import man from '../../assets/man.png';
import flare from '../../assets/flare.png'
import rect3 from '../../assets/Rectangle 1.png'

const Hero = () => {
  return (
    <section className="relative bg-blue-950 text-white px-8 rounded-bl-[150px] overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="text-8xl ml-32 font-bold mb-4">Learning</h1>
          <h1 className="text-6xl ml-32 font-bold mb-4"> Without Limits</h1>
          <p className="text-lg ml-32 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <div className="flex items-center ml-32 space-x-4">
            <button className="bg-white px-4 py-2 rounded-full hover:bg-blue-800 transition duration-300 text-black ">
              50+ Courses
            </button>
            <button className="bg-white px-4 py-2 rounded-full hover:bg-blue-800 transition duration-300 text-black mr-28">
              Free Trail
            </button>
          </div>
        </div>
        <div className="w-full md:mt-10 relative ">
        
          <img
            src={rect3}
            alt="Background shape"
            className='absolute z-10 bottom-60 right-[-20px] left-1/2 transform -translate-x-1/2  h-auto'
          />
          <img
            src={flare}
            alt="Light flare effect"
            className='absolute w-[600px] h-[550px] top-[-130px] right-[-4px] z-20'
          />
          <img
            src={man}
            alt="Student with books"
            className="rounded-lg z-30 relative right-[-400px] w-full md:w-1/2 "
          />
          
        </div>
      </div>
    </section>
  );
}

export default Hero;