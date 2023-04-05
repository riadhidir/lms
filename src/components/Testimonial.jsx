import { SplideSlide } from "@splidejs/react-splide";
import  '../styles/temp.css';
const Testimonial = (props) => {

    
    return ( 
     
        <SplideSlide>  <div className="testimonial-item text-center">
                <img className="border rounded-circle p-2 mx-auto mb-3" src={props.img} style={{Width: "80px" ,height: "80px"}}/>
                <h5 className="mb-0">{props.client}</h5>
                <p>{props.profession}</p>
                <div className="testimonial-text bg-light text-center p-4">
                    <p className="mb-0">{props.text}</p>
                </div>
            </div> </SplideSlide>
    
            );
}
export default Testimonial;