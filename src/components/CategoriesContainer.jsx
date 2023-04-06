
import Header from "./Header"
import Category from "./Category";
import cat_1 from "../assets/cat-1.jpg"; 
import cat_2 from "../assets/cat-2.jpg"; 
import cat_3 from "../assets/cat-3.jpg"; 
import cat_4 from "../assets/cat-4.jpg"; 

const CategoriesContainer = () => {
return (
<div className="container-xxl py-5 category">
        <div className="container">
            <Header heading="Categories" subHeading="Courses Categories"/>
            <div className="row g-3">
                <div className="col-lg-7 col-md-6">
                    <div className="row g-3">
                        <Category category="Web Design" courseNumber={49} place="col-lg-12 col-md-12" img={cat_1} delay="0.1s"/>
                        <Category category="Graphic Design" courseNumber={49} place="col-lg-6 col-md-12" img={cat_2} delay="0.3s"/>
                        <Category category="Video Editing" courseNumber={49} place="col-lg-6 col-md-12" img={cat_3} delay="0.5s"/>
                    </div>
                </div>
                <Category category="Online Marketing" courseNumber={49} place="col-lg-5 col-md-6" img={cat_4} delay="0.7s" styles={{minHeight: "350px"}}/>
            </div>
        </div>
    </div>);

}
export default CategoriesContainer;