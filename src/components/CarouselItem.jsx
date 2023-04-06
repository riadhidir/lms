import { SplideSlide } from "@splidejs/react-splide";
import  '../styles/temp.css';
import { Link } from "react-router-dom";

const CarouselItem = (props) => {
    return(
        <SplideSlide>
            <div className="owl-carousel-item position-relative">
                    <img className="img-fluid" src={props.img} alt="" />
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: "rgba(24, 29, 56, .7)"}}>
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-sm-10 col-lg-8">
                                    <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Best Online Courses</h5>
                                    <h1 className="display-3 text-white animated slideInDown">{props.title}</h1>
                                    <p className="fs-5 text-white mb-4 pb-2">{props.text}</p>
                                    <Link href="404" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</Link>
                                    <Link href="404" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </SplideSlide>
    );
}
export default CarouselItem;