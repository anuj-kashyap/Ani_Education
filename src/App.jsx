import { useState } from 'react'
import './index.css'
import Home from './pages/Home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Course from './pages/Course'
import Instructor from './pages/Instructor'


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Course' element={<Course/>}/>
        <Route path='/Instructor' element={<Instructor/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
