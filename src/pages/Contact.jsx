
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ContactContainer from "../components/ContactContainer"
import Footer from "../components/Footer"


function Contact() {
    return (
      <>
          <Navbar/>
          <Hero title="Contact Us" current= "Contact"/>
          <ContactContainer/>
          <Footer/>
      </>
    )
  }
  
export default Contact;