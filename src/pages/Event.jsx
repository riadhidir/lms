
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import EventsContainer from "../components/EventsContainer"
import Footer from "../components/Footer"

const Event = () => {
  return (
    <>
    <Navbar/>
    <Hero title="Our Events" current= "Events"/>
    <EventsContainer/>
    <Footer/>
    </>
  )
}
export default Event;