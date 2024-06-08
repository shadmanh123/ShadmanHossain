import About from "./About";
import "./AboutPage.css";
import image from "./assets/images/Me.jpg";

export default function AboutPage() {
  return (
    <div className="aboutpage">
      <div id="about">
        <About />
      </div>
      <div id="my-image">
        <img
          src={image}
          alt="This is an image of the developer of this website wearing a tan suit and green turtle neck. The developer is smiling at the camera"
        />
      </div>
    </div>
  );
}
