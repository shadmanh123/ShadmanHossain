import "./Card.css";
import githubIcon from "./assets/images/GitHubIcon.png";
import youtubeIcon from "./assets/images/YouTubeIcon.png";
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
  return (
    <div className="card">
      <div className="card__contents">
        <div className="card__contents__front">
          <div className="card__contents__front__content">
            <h1>{title}</h1>
            <p>Hover Me</p>
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
