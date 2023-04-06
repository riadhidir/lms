
import  "./styles/bootstrap.min.css";
import "./styles/style.css";
import "../src/lib/animate/animate.min.css";

import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './pages/Home'
import About from "./pages/About";
import Courses from "./pages/Courses"
import Testimonials from "./pages/Testimonials";
import Event from "./pages/Event";
import Calendar from "./components/Calendar"
import N_404 from "./pages/N_404";
import Contact from './pages/Contact'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/courses",
    element: <Courses/>,
  },
  {
    path: "/testimonial",
    element: <Testimonials/>,
  },
  {
    path : "/contact",
    element: <Contact/>
  }
  ,{
    path: "/events",
    element: <Event/>
  }
  ,{ 	path: '/404',
   	element: <N_404/>}


]);

function App() {
  

  return (
    <>
   
    <RouterProvider router={router} />
    {/* <Calendar/> */}
   
    </>
    
  )
}


export default App