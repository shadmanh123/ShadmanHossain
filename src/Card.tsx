import "./Card.css";
import { useState, useEffect } from "react";
import githubIcon from "/images/GitHubIcon.webp";
import youtubeIcon from "/images/YouTubeIcon.webp";
interface CardProps {
  title: string;
  description: string;
  link: string;
  youtubeLink?: string;
}

export default function Card({
  title,
  description,
  link,
  youtubeLink,
}: CardProps) {
  const [hoverText, setHoverText] = useState("Hover Me");
  useEffect(() => {
    //Function to update text based on screen width
    const updateText = () => {
      if (window.innerWidth <= 800) {
        setHoverText("Tap Me"); //Mobile
      } else {
        setHoverText("Hover Me"); //Desktop
      }
    };
    updateText();
    window.addEventListener("resize", updateText); //Listen for screen resize
    return () => window.removeEventListener("resize", updateText); //Cleanup
  }, []);
  return (
    <div className="card">
      <div className="card__contents">
        <div className="card__contents__front">
          <div className="card__contents__front__content">
            <h1>{title}</h1>
            <p>{hoverText}</p>
          </div>
        </div>
        <div className="card__contents__back">
          <div className="card__contents__back__image">
            <div className="card__contents__back__image__circle"></div>
            <div
              className="card__contents__back__image__circle"
              id="right"
            ></div>
            <div
              className="card__contents__back__image__circle"
              id="bottom"
            ></div>
          </div>
          <div className="card__contents__back__content">
            <div className="description-content">
              <p>{description}</p>
            </div>
          </div>
          <div className="card__contents__back__links">
            <div className="card__contents__back__links__icon">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub icon"></img>
              </a>
              {youtubeLink && (
                <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
                  <img src={youtubeIcon} alt="YouTube icon"></img>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
