import React from 'react'
// import Hero2 from '../Component/hero_section/Hero2'
import InTouch from '../Component/InTouch'
import MeetOurInstructors from '../Component/MeetOurInstructors'
import WhyLearnFromUs from '../Component/WhyLearnFormUs'
import TopInstructors from '../Component/TopInstructors'
import Community from '../Component/Community'
import Hero2 from '../Component/hero_section/Hero2'

function Instructor() {
  return (
    <div>
        {/* <Navbar/> */}
        {/* <Hero2/> */}
        <Hero2/>
        <MeetOurInstructors/>
        <WhyLearnFromUs/>
        <TopInstructors/>
        <Community/>
        {/* <InTouch/> */}

        
    </div>
  )
}

export default Instructor