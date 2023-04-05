import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import TestimonialContainer from "../components/TestimonialContainer"
import Footer from "../components/Footer"

//rafce

const Testimonials = () => {
  return (
    <>
        <Navbar/>
        <Hero title="Testimonial" current="Testimonial"/>
        <TestimonialContainer/>
        <Footer/>
    </>
  );
}

export default Testimonials;