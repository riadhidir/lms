
import Header from "./Header"
import Category from "./Category";
import cat_1 from "../assets/cat-1.jpg"; 
import cat_2 from "../assets/cat-2.jpg"; 
import cat_3 from "../assets/cat-3.jpg"; 
import cat_4 from "../assets/cat-4.jpg"; 
	//URL to image, image name, and
     
const CategoriesContainer = () => {
return (
<div className="container-xxl py-5 category">
        <div className="container">
            <Header heading="Categories" subHeading="Courses Categories"/>
            {/* <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Categories</h6>
                <h1 className="mb-5">Courses Categories</h1>
            </div> */}
            <div className="row g-3">
                <div className="col-lg-7 col-md-6">
                    <div className="row g-3">
                        {/* <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                            <a className="position-relative d-block overflow-hidden" href="">
                                <img className="img-fluid" src={cat_1} alt=""/>
                                <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: "1px;"}}>
                                    <h5 className="m-0">Web Design</h5>
                                    <small className="text-primary">49 Courses</small>
                                </div>
                            </a>
                        </div> */}

                        <Category category="Web Design" courseNumber={49} place="col-lg-12 col-md-12" img={cat_1} delay="0.1s"/>
                        <Category category="Graphic Design" courseNumber={49} place="col-lg-6 col-md-12" img={cat_2} delay="0.3s"/>

                        <Category category="Video Editing" courseNumber={49} place="col-lg-6 col-md-12" img={cat_3} delay="0.5s"/>

                        {/* <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                            <a className="position-relative d-block overflow-hidden" href="">
                                <img className="img-fluid" src={cat_2} alt=""/>
                                <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: "1px;"}}>
                                    <h5 className="m-0">Graphic Design</h5>
                                    <small className="text-primary">49 Courses</small>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                            <a className="position-relative d-block overflow-hidden" href="">
                                <img className="img-fluid" src={cat_3} alt=""/>
                                <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: "1px"}}>
                                    <h5 className="m-0">Video Editing</h5>
                                    <small className="text-primary">49 Courses</small>
                                </div>
                            </a>
                        </div> */}
                    </div>
                </div>
                {/* <div className="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{minHeight: "350px"}}>
                    <a className="position-relative d-block h-100 overflow-hidden" href="">
                        <img className="img-fluid position-absolute w-100 h-100" src={cat_4} alt="" style={{objectFit: "cover"}}/>
                        <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin:  "1px"}}>
                            <h5 className="m-0">Online Marketing</h5>
                            <small className="text-primary">49 Courses</small>
                        </div>
                    </a>
                </div> */}
                <Category category="Online Marketing" courseNumber={49} place="col-lg-5 col-md-6" img={cat_4} delay="0.7s" styles={{minHeight: "350px"}}/>

            </div>
        </div>
    </div>);

}
export default CategoriesContainer;