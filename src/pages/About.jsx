
import Navbar from "../components/Navbar"

import ServiceContainer from "../components/ServiceContainer"
import Hero from "../components/Hero"
import AboutContainer from "../components/AboutContainer"

import TeamContainer from "../components/TeamContainer"

import Footer from "../components/Footer"

function About() {
  return (
    <>
        <Navbar/>
        <Hero title="About Us" current= "About"/>
        <ServiceContainer/>
        <AboutContainer/>
        <TeamContainer/>
        <Footer/>
    </>
  )
}

export default About