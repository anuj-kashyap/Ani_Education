import { useState } from 'react'
import './index.css'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import FeatureCards from './Component/FeatureCard'
import Courses from './Component/Courses'
import Knowledge from './Component/Knowledge'
import Testimonial from './Component/Testimonial'


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Navbar/>
      <Hero/>
      <FeatureCards/>
      <Courses/>
      <Knowledge/>
      <Testimonial/>
      
    </>
  )
}

export default App
