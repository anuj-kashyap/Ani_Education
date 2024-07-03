import { useState } from 'react'
import './index.css'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import FeatureCards from './Component/FeatureCard'
import Courses from './Component/Courses'
import Knowledge from './Component/Knowledge'
import Testimonial from './Component/Testimonial'
import Footer from './Component/Footer'
import InTouch from './Component/InTouch'


function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <FeatureCards/>
      <Courses/>
      <Knowledge/>
      <Testimonial/>
      <InTouch/>
      <Footer/>
      
    </>
  )
}

export default App
