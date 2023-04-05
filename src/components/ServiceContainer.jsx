import ServiceItem from "./ServiceItem";




const ServiceContainer = (props)=> {
    return(
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-4">
                <ServiceItem service ='Skilled Instructors' text= 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'/>
                <ServiceItem service ='Online Classes' text= 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'/>
                <ServiceItem service ='Home Project' text= 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'/>
                <ServiceItem service ='Book Library ' text= 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'/>
            </div>
        </div>
    </div>
       


    );

}

export default ServiceContainer