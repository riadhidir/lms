
import  "./styles/bootstrap.min.css";
import "./styles/style.css";

import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './pages/Home'
import About from "./pages/About";
import Courses from "./pages/Courses"

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
    element: <Home/>,
  },

]);

function App() {
  

  return (
    <>
   
    <RouterProvider router={router} />
   
    </>
    
  )
}


export default App