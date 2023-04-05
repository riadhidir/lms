import { useState } from 'react'

// import  Components from '

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ServiceContainer from './components/ServiceContainer'
import CategoriesContainer from './components/CategoriesContainer'
import CoursesContainer from './components/CoursesContainer'
import TeamContainer from './components/TeamContainer'
import TestimonialContainer from './components/TestimonialContainer'
function App() {
  

  return (
    <>
      <Navbar/>
      <ServiceContainer/>
      <CategoriesContainer/>
<CoursesContainer/>
<TeamContainer/>
<TestimonialContainer/>
     
      <Footer/>
    </>
    
  )
}


export default App