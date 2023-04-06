
import  "./styles/bootstrap.min.css";
import "./styles/style.css";

import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './pages/Home'
import About from "./pages/About";
import Courses from "./pages/Courses"
import Testimonials from "./pages/Testimonials";
import Event from "./pages/Event";
import Calendar from "./components/Calendar"

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
  ,{
    path: "/events",
    element: <Event/>
  }

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