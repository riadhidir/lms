import Testimonial from "./testimonial";
import Header from "./Header";
import { Splide,SplideTrack } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import testimonial_1 from "../assets/testimonial-1.jpg";
import testimonial_2 from "../assets/testimonial-2.jpg";
import testimonial_3 from "../assets/testimonial-3.jpg";
import testimonial_4 from "../assets/testimonial-4.jpg";
const TestimonialContainer = () => {
    const slideOptions={
        perPage:3,
       focus:'center',
        arrows:false,
        pading:10,
        type:"loop",
        rewind:true,
        // rewindByDrag:true,
        speed:1000,
        
        snape:true,
        drag:true,
        trimSpace:false,
        gap:40,
        resetProgress:true,
        wheel:true,
        updateOnMove:true
        // omitEnd:false
    }
    return (
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <Header heading="Testimonial" subHeading="Our Students Say!" />
                <div className=" testimonial-carousel position-relative">
                    <Splide aria-label="My Favorite Images" hasTrack={ false } options={slideOptions}>
                    <SplideTrack>
                    <Testimonial
                        client="john doe"
                        profession="profession"
                        text="Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit."
                        img={testimonial_1}
                    />
                    <Testimonial
                        client="john doe"
                        profession="profession"
                        text="Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit."
                        img={testimonial_2}
                    />
                    <Testimonial
                        client="john doe"
                        profession="profession"
                        text="Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit."
                        img={testimonial_3}
                    />
                    <Testimonial
                        client="john doe"
                        profession="profession"
                        text="Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit."
                        img={testimonial_4}
                    /></SplideTrack>
                    </Splide>
                </div>
            </div>
        </div>
    );
};

export default TestimonialContainer;
