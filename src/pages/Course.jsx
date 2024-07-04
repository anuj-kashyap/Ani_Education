import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Hero1 from '../Component/hero_section/Hero1'
import Know_us from '../Component/Know_us'
import Courses1 from '../Component/course_section/Courses1'
import Category from '../Component/Category'
import Teacher from '../Component/Teacher'
import InTouch from '../Component/InTouch'

function Course() {
  return (
    <div>
        <Navbar/>
        <Hero1/>
        <Know_us/>
        <Courses1/>
        <Category/>
        <Teacher/>
        <InTouch/>
        <Footer/>
        
    </div>
  )
}

export default Course