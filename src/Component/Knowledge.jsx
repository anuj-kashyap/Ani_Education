import React from 'react'
import professor from '../assets/professor.png'
const Knowledge = () => {
  return (
    <div><div className="bg-[rgba(217,217,217,0.26)] p-10 mb-10 mt-10 rounded-bl-3xl flex items-center ml-5 mr-5 mx-auto">
      <div className="flex-shrink-0 mr-8">
        <div className="rounded-3xl overflow-hidden shadow-lg" style={{ width: '300px', height: '400px' }}>
          <img
            src={professor}
            alt="Professional man"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex-grow">
        <h2 className="text-5xl text-center font-bold text-blue-900 mb-2">Knowledge From</h2>
        <h3 className="text-4xl text-center font-semibold text-blue-700 mb-4">The Best Minds</h3>
        <p className="text-sm text-right text--600 mb-4">
          Our Courses Are Led By Industry Experts Who Are Dedicated To Your Success. Each Instructor
          Brings A Wealth Of Real-World Experience And Deep Knowledge In Their Field, Ensuring You
          Receive The Highest Quality Education. With Guidance From Seasoned Professionals, You'll
          Gain Practical Skills And Valuable Insights That Can Be Immediately Applied To Elevate
          Your Career. Our Commitment Is To Provide You With The Tools And Knowledge You Need To Achieve
          Your Goals. Learn From The Best To Become The Best, And Embark On A
          Learning Journey That Is Both Enriching And Transformative.
        </p>
      </div>
    </div></div>
  )
}

export default Knowledge