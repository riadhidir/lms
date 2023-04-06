
import TeamItem from "./TeamItem";
import Header from "./Header";
import team1 from "../assets/team-1.jpg";
import team2 from "../assets/team-2.jpg";
import team3 from "../assets/team-3.jpg";
import team4 from "../assets/team-4.jpg";
// import team5 from "../assets/p1.png";
// import team6 from "../assets/p2.png";
// import team7 from "../assets/p3.png";
// import team8 from "../assets/p4.png";

const TeamContainer = () => {
    return  ( 
        <div className="container-xxl py-5">
            <div className="container">
             <Header heading="INSTRUCTORS" subHeading="Expert Instructors"/>
                <div className="row g-4">
                    <TeamItem instructor="bougabouga1" designation="bouga1" img={team1}/>
                    <TeamItem instructor="bougabouga2" designation="bouga2" img={team2}/>
                    <TeamItem instructor="jeffrey dahmer" designation="Cannibal" img={team3}/>
                    <TeamItem instructor="bougabouga4" designation="bouga4" img={team4}/>
                    {/* <TeamItem instructor="bougabouga1" designation="bouga1" img={team8}/>
                    <TeamItem instructor="bougabouga2" designation="bouga2" img={team7}/>
                    <TeamItem instructor="jeffrey dahmer" designation="Cannibal" img={team5}/>
                    <TeamItem instructor="bougabouga4" designation="bouga4" img={team6}/> */}
                </div>
            </div>
        </div>
    );



}

export default TeamContainer