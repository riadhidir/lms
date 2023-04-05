
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
            </div>
        </div>
    );
 
}

export default Carousel;