import About from "./About";
import "./AboutPage.css";
import image from "/images/Me.webp";

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="title">
        <h1>/about_me</h1>
      </div>
      <div id="about-page__about--and--image">
        <div id="about-page__about--and--image--about">
          <About />
        </div>
        <div id="about-page__about--and--image--my--image">
          <img
            src={image}
            alt="This is an image of the developer of this website wearing a tan suit and green turtle neck. The developer is smiling at the camera"
          />
        </div>
      </div>
    </div>
  );
}
