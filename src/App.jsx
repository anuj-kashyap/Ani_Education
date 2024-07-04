import { useState } from 'react'
import './index.css'
import Home from './pages/Home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Course from './pages/Course'
import Instructor from './pages/Instructor'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Course' element={<Course/>}/>
        <Route path='/Instructor' element={<Instructor/>}/>
      </Routes>
      <Footer/>
    </Router>
      
    </>
  )
}

export default App
