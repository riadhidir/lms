import ServiceItem from "./ServiceItem";




const ServiceContainer = (props)=> {
    return(
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-4">
                <ServiceItem service ='Skilled Instructors' text= 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam' icon="fa-graduation-cap"/>
                <ServiceItem service ='Online Classes' text= 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam' icon="fa-globe"/>
                <ServiceItem service ='Home Project' text= 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam' icon="fa-home"/>
                <ServiceItem service ='Book Library' text= 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam' icon="fa-book-open"/>
            </div>
        </div>
    </div>

    
       


    );

}

export default ServiceContainer