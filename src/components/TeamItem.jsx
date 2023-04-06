import { Link } from "react-router-dom";
const TeamItem = (props) => {
return (

                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item bg-light">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src={props.img} alt="" />
                        </div>
                        <div className="position-relative d-flex justify-content-center" style={{marginTop: "-23px"}}>
                            <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                <Link className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                        <div className="text-center p-4">
                            <h5 className="mb-0">{props.instructor}</h5>
                            <small>{props.designation}</small>
                        </div>
                    </div>
                </div>
               
            
    );
}

export default TeamItem;