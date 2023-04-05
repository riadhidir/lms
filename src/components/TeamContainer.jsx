
import TeamItem from "./TeamItem";
import Header from "./Header";
import team1 from "../assets/team-1.jpg";
import team2 from "../assets/team-2.jpg";
import team3 from "../assets/team-3.jpg";
import team4 from "../assets/team-4.jpg";
const TeamContainer = () => {
    return  ( 
        <div className="container-xxl py-5">
            <div className="container">
             <Header heading="courses" subHeading="testest"/>
                <div className="row g-4">
                    <TeamItem instructor="bougabouga1" designation="bouga1" img={team1}/>
                    <TeamItem instructor="bougabouga2" designation="bouga2" img={team2}/>
                    <TeamItem instructor="bougabouga3" designation="bouga3" img={team3}/>
                    <TeamItem instructor="bougabouga4" designation="bouga4" img={team4}/>
                </div>
            </div>
        </div>
    );



}

export default TeamContainer