import React from 'react'
import girl from '../assets/girl 1.png'


const Hero = () => {
  return (
    <div className="bg-blue-900  text-white p-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-1/2">
          <div>
            <h1 className="text-5xl font-bold mb-4">Learning</h1>
            <h2 className="text-3xl mb-4">Without Limits</h2>
            <p className="mb-4">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>
            <button className="bg-white text-blue-900 px-4 py-2 rounded-full inline-flex items-center">
              50+ Courses
              <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <button className="mt-4 bg-white text-blue-900 px-4 py-2 rounded-full">
            Free Trial
          </button>
          <div className="flex justify-between mt-8">
            <div className="bg-gray-100 p-4 rounded-lg text-blue-900 w-1/4">
              <h3 className="font-bold mb-2">Expert Instructor</h3>
              <p>Learn from industry leaders. Gain practical skills with expert instructions. Elevate your knowledge and excel.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-blue-900 w-1/4">
              <h3 className="font-bold mb-2">24/7 Support</h3>
              <p>Access support anytime, anywhere 24/7 assistance for uninterrupted learning.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-blue-900 w-1/4">
              <h3 className="font-bold mb-2">Lifetime access</h3>
              <p>Enjoy Lifetime Access. Explore new topics, master skills, and grow at your own pace.</p>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src={girl}
            alt="Student"
            className="rounded-full w-[1280px] h-[870px] top-[-28px] left-[2px] rounded-bl-[132px] float-right"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero