

import Course from './Course';
import Header from './Header';

import course_1 from  '../assets/course-1.jpg';
import course_2 from  '../assets/course-2.jpg';
import course_3 from  '../assets/course-3.jpg';
const CourseContainer = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <Header  heading="Courses" subHeading="Popular Courses"/>
                <div className="row g-4 justify-content-center">
            
                    <Course price={125} raters={123} title="Web Design & Development Course for Beginners" tutor="john doe" duration={1.5} availablePlaces={30} img={course_1}/>
                    <Course price={125} raters={123} title="Web Design & Development Course for Beginners" tutor="john doe" duration={1.5} availablePlaces={30} img={course_2}/>
                    <Course price={125} raters={123} title="Web Design & Development Course for Beginners" tutor="john doe" duration={1.5} availablePlaces={30} img={course_3}/>
           
                </div>
            </div>
    </div>
    );
}

export default CourseContainer;