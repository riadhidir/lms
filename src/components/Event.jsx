const Course  = (props) => {
return(
    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="course-item bg-light">
                    <div className="position-relative overflow-hidden">
                        <img className="img-fluid" src={props.img} alt="" />
                        <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                            <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{borderRadius: "30px 0 0 30px"}}>Read More</a>
                            <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{borderRadius: "0 30px 30px 0"}}>Join Now</a>
                        </div>
                    </div>
                    <div className="text-center p-4 pb-0">
                        <h3 className="mb-0">{props.title}</h3>
                        <div className="mb-3">
                            <hr/>
                        </div>
                        <h5 className="mb-4 h6">{props.description}</h5>
                    </div>
                    <div className="d-flex border-top">
                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2"></i>{props.tutor}</small>
                        <small className="flex-fill text-center py-2"><i className="bi bi-calendar-week-fill me-2" style={{color: "#06bbcc"}}></i>{props.date} </small>    
                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2"></i>{props.duration}Hrs</small>
                    </div>
                </div>
            </div>
);
}
export default Course ;