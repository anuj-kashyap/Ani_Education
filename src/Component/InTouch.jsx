import React, { useState } from 'react'
import rect from '../assets/Rectangle 20.png'

const InTouch = () => {
  const [email, setEmail] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
      /
      console.log('Email submitted:', email)
    setEmail('')
  }
  return (
    <div>
      <div className='bg-blue-950 pt-40'>
        <div className="bg-gray-300 px w-full h-[471px] top-[4061px] rounded-[92px_0px_92px_0px]">
          <div className="relative">
            <img src={rect} alt="" className='mx-auto pt-14' />
            <div className="absolute inset-0 flex flex-col  items-center justify-center text-white z-10">
              <h2 className="text-6xl font-bold mb-4">Keep In Touch</h2>
              <p className="text-base font-normal mb-4 text-center max-w-">
                Stay Connected With Us For Updates, Support, And Assistance Anytime
              </p>
              <form onSubmit={handleSubmit} className="flex w-full max-w-md px-4">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="flex-grow p-2 rounded-xl bg-gray-300 text-black focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-blue-900 px-4 py-2 rounded-xl font-semibold ml-4" // added ml-4 for margin
                >
                  Sent
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default InTouch