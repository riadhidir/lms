import GetInTuch from "./GetInTuch";
import Map from "./Map";
import ContactForm from "./ContactForm"

// import ContactForm from "./ContactForm"

const ContactContainer = (props) => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h6 className="section-title bg-white text-center text-primary px-3">Contact Us</h6>
                            <h1 className="mb-5">Contact For Any Query</h1>
                        </div>

                        <div className="row g-4">
                            <GetInTuch />
                            <Map />
                            <ContactForm /> 


                        </div>

                    </div>
                </div>
        
    );

}

export default ContactContainer