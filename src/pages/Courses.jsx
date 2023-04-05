
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import CategoriesContainer from "../components/CategoriesContainer"
import CoursesContainer from "../components/CoursesContainer"
import TestimonialContainer from "../components/TestimonialContainer"
import Footer from "../components/Footer"

function Courses() {
  return (
    <>
        <Navbar/>
        <Hero title="Courses" current= "Courses"/>
        <CategoriesContainer/>
        <CoursesContainer/>
        <TestimonialContainer/>
        <Footer/>
    </>
  )
}

export default Courses