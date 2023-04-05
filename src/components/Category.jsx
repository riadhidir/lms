
const Category = (props) => {

    return (
      
        <div className={`${props.place} wow zoomIn`} data-wow-delay={props.delay} style={props.styles}>
            <a className="position-relative d-block overflow-hidden" href="">
                <img className="img-fluid" src={props.img} alt=""/>
                <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: "1px"}}>
                    <h5 className="m-0">{props.category}</h5>
                    <small className="text-primary">{props.courseNumber}</small>
                </div>
            </a>
        </div>
    );
}

export default Category;