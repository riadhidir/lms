

const ContactDetails = (props)=> {
    return(
        <div className="d-flex align-items-center mb-3">
                        <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{width: '50px', height: '50px'}}>
                            <i className={`fa ${props.icon} text-white`}></i>
                        </div>
                        <div className="ms-3">
                            <h5 className="text-primary">{props.title}</h5>
                            <p className="mb-0">{props.detail}</p>
                        </div>
                    </div> 
                           

);

}

export default ContactDetails