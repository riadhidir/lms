

const Header = (props) => {
    return (  
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">{props.heading}</h6>
            <h1 className="mb-5">{props.subHeading}</h1>
        </div>);
}

export default Header;