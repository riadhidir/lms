
import  "./styles/bootstrap.min.css";
import "./styles/style.css";

import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './pages/Home'
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";

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

]);

function App() {
  

  return (
    <>
   
    <RouterProvider router={router} />
   
    </>
    
  )
}


export default App