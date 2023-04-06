import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import NotFound from '../components/NotFound'

function N_404() {
  return (
   <>
      <Navbar/>
      <Hero title="Not Found" current="404"/>
      <NotFound/>
      <Footer/>
   </>
  )
}

export default N_404