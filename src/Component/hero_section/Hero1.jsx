import React from 'react';
import girl2 from '../../assets/girl2.png';
import flare from '../../assets/flare.png'
import rect3 from '../../assets/Rectangle 1.png'

const Hero1 = () => {
  return (
    <section className="relative bg-blue-950 text-white px-8 rounded-bl-[150px] overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="text-9xl ml-32 font-bold gap-6 mb-4">B e s t</h1>
          <h1 className='text-5xl ml-32 font-bold mb-4'>Online Courses</h1>
          <h1 className="text-5xl ml-32 font-bold mb-4">From Ani Education</h1>
          <p className="text-lg ml-32 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <div className="flex items-center space-x-4">
            <button className="bg-white ml-32 px-4 py-2 rounded-full hover:bg-blue-800 transition duration-300 text-black ">
              50+ Courses
            </button>
            <button className="bg-white ml-32 px-4 py-2 rounded-full hover:bg-blue-800 transition duration-300 text-black mr-28">
              Free Trail
            </button>
          </div>
        </div>
        <div className="md:w-1/4 md:mt-10 relative ">
        
          <img
            src={rect3}
            alt="Background shape"
            className='absolute z-10 bottom-60 left-1/2 transform -translate-x-1/2  h-auto'
          />
          <img
            src={flare}
            alt="Light flare effect"
            className='absolute w-[600px] h-[550px] top-[-130px] right-[-1px] z-20'
          />
          <img
            src={girl2}
            alt="Student with books"
            className="rounded-lg z-30 relative right-[-20px]"
          />
          
        </div>
      </div>
    </section>
  );
}

export default Hero1;
