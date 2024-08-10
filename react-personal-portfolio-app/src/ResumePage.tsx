import "./ResumePage.css";
import Experience from "./Experience";
export default function ResumePage() {
  return (
    <div className="resume-page">
      <div id="resume-page__experience--title">
        <h1>/experience</h1>
      </div>
      <div id="resume-page__experience">
        <Experience />
      </div>
      <div id="resume-page__projects--title">
        <h1>/projects</h1>
      </div>
    </div>
  );
}
