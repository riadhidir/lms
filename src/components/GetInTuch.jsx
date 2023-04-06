
import ContactDetails from "./ContactDetails"
const GetInTuch = (props)=> {
    return(
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <h5>Get In Touch</h5>
                    <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                 
                    <ContactDetails icon ='fa-map-marker-alt' title= 'Office' detail="123 Street, New York, USA"/>
                             <ContactDetails icon ='fa-phone-alt' title= 'Mobile' detail="012 345 67890"/>
                             <ContactDetails icon ='fa-envelope-open' title= 'Email' detail="info@example.com"/>
                            
                    
         </div>

);

}

export default GetInTuch