
import { Splide,SplideTrack } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

import CarouselItem from "./CarouselItem";
import carousel_1 from "../assets/carousel-1.jpg";
import carousel_2 from "../assets/carousel-2.jpg";
const Carousel = () => {
    const slideOptions={
        perPage:1,
       focus:'center',
        arrows:true,
        pading:10,
        type:"loop",
        rewind:true,
        // rewindByDrag:true,
        speed:1000,
        snape:true,
        trimSpace:true,
        gap:0,

        resetProgress:true,
        // wheel:true,
        autoPlay:true,
        updateOnMove:true
        // omitEnd:false
    }
    return (
        <div className="container-fluid p-0 mb-5">
            <div className="owl-carousel header-carousel position-relative">

                <Splide aria-label="My Favorite Images" hasTrack={ false } options={slideOptions}>
                    <SplideTrack>
                        <CarouselItem img={carousel_1} title="Get Educated Online From Your Home" text="Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr."/>
                        <CarouselItem img={carousel_2} title="The Best Online Learning Platform" text="Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr."/>
                    </SplideTrack>
                </Splide>
            {/* <div className="owl-carousel-item position-relative">
                <img className="img-fluid" src="img/carousel-1.jpg" alt="" />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style="background: rgba(24, 29, 56, .7);">
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-sm-10 col-lg-8">
                                <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Best Online Courses</h5>
                                <h1 className="display-3 text-white animated slideInDown">The Best Online Learning Platform</h1>
                                <p className="fs-5 text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.</p>
                                <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="owl-carousel-item position-relative">
                <img className="img-fluid" src="img/carousel-2.jpg" alt="" />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style="background: rgba(24, 29, 56, .7);">
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-sm-10 col-lg-8">
                                <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Best Online Courses</h5>
                                <h1 className="display-3 text-white animated slideInDown">Get Educated Online From Your Home</h1>
                                <p className="fs-5 text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.</p>
                                <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            </div>
        </div>
    );
 
}

export default Carousel;