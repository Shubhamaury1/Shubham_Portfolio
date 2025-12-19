import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import ScrollToTopButton from "./Component/ScrollToTopButton";
import Home from './Page/Home.jsx'
import Experience from './Page/Experience.jsx'
import Education from './Page/Education.jsx'
import Project from './Page/Project.jsx'
import ContactMe from './Page/ContactMe.jsx'
import Navbar from './Component/Navbar.jsx'

function App() {

  return (
   <BrowserRouter>
   <Navbar/>
    <ScrollToTopButton /> 
   <div className="text-center text-2xl text-sky-900">
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/education' element={<Education/>}/>
      <Route path='/experience' element={<Experience/>}/>
      <Route path='/projects' element={<Project/>}/>
      <Route path='/contactme' element={<ContactMe/>}/>
    </Routes>
   </div>
    
   </BrowserRouter>
  )
}

export default App
