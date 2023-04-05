
import Navbar from "../components/Navbar"
import Carousel from "../components/Carousel"
import ServiceContainer from "../components/ServiceContainer"
import AboutContainer from "../components/AboutContainer"
import CategoriesContainer from "../components/CategoriesContainer"
import CoursesContainer from "../components/CoursesContainer"
import TeamContainer from "../components/TeamContainer"
import TestimonialContainer from "../components/TestimonialContainer"
import Footer from "../components/Footer"

function Home() {
  return (
    <>
        <Navbar/>
        <Carousel/>
        <ServiceContainer/>
        <AboutContainer/>
        <CategoriesContainer/>
        <CoursesContainer/>
        <TeamContainer/>
        <TestimonialContainer/>
        <Footer/>
    </>
  )
}

export default Home