import "./ResumePage.css";
import Experience from "./Experience";
import Card from "./Card";
export default function ResumePage() {
  return (
    <div className="resume-page">
      <div className="title">
        <h1>/experience</h1>
      </div>
      <div id="resume-page__experience">
        <Experience />
      </div>
      <div className="title">
        <h1>/projects</h1>
      </div>
      <div id="resume-page__projects">
        <Card
          title={"Twiine"}
          description={
            "Developing an app using the MERN stack that connects users with mentors, mentees, hackathon partners and industry professionals"
          }
          link={"https://github.com/TheCoderSingh/wizdom-app"}
        />
        <Card
          title={"AI Pac-Man"}
          description={
            "Developed an advanced Python-based AI agent modelled after Pac-Man that learns from its mistakes and improves gameplay strategy to achieve the highest score in new mazes with varying numbers of ghosts"
          }
          link={"https://github.com/shadmanh123/Pacman-AI-Project"}
        />
        <Card
          title={"Guess-The-Era Game"}
          description={
            "Developed a Kotlin app for the photo-based game, where users determine the year or decade of photos for points, compete against other players in real-time, and view friends' scores in a leaderboard"
          }
          link={"https://github.com/shadmanh123/GuessTheEra"}
          youtubeLink={"https://www.youtube.com/watch?v=bFwxkTvgPJg"}
        />
        <Card
          title={"Game Score Calculator"}
          description={
            "Engineered a user-friendly Java app offering users a comprehensive platform to accurately compute and monitor scores based on specific parameters inherent to each game's scoring system"
          }
          link={"https://github.com/shadmanh123/Game_Score_Calculator"}
        />
        <Card
          title={"Trip Planner"}
          description={
            "Constructed a database using MySQL to plan travel itineraries, including attractions, currencies, and scheduling options, while providing information on accommodations and risk assessment for a tailored trip experience"
          }
          link={
            "https://github.com/shadmanh123/Trip-Planner-Database/tree/main"
          }
        />
      </div>
    </div>
  );
}
