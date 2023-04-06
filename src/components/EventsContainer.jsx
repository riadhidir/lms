

import Event from './Event';
import Header from './Header';
import event_1 from  '../assets/event-1.jpg';
import event_2 from  '../assets/event-2.jpg';
import event_3 from  '../assets/event-3.jpg';
import event_4 from  '../assets/event-4.jpg';
const EventContainer = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <Header heading="Events" subHeading="Upcoming Events"/>
                <div className="row g-4 justify-content-center">
                    <Event   title="Web Design & Development Course for Beginners" description="lorem ipsum lorem ipsum" tutor="john doe" date="2001-09-11" duration={1.5}  img={event_1}/>
                    <Event   title="Web Design & Development Course for Beginners" description="lorem ipsum lorem ipsum" tutor="john doe" date="2001-09-11" duration={1.5}  img={event_2}/>
                    <Event   title="Web Design & Development Course for Beginners" description="lorem ipsum lorem ipsum" tutor="john doe" date="2001-09-11" duration={1.5}  img={event_3}/>
                    <Event   title="Web Design & Development Course for Beginners" description="lorem ipsum lorem ipsum" tutor="john doe" date="2001-09-11" duration={1.5}  img={event_4}/>
                    <Event   title="Web Design & Development Course for Beginners" description="lorem ipsum lorem ipsum" tutor="john doe" date="2001-09-11" duration={1.5}  img={event_3}/>
                </div>
            </div>
    </div>
    );
}

export default EventContainer;