import "./Card.css";

interface CardProps {
  title: string;
  description: string;
}

export default function Card({ title, description }: CardProps) {
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
        </div>
      </div>
    </div>
  );
}
