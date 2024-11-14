import { useState, useEffect } from "react";
import "./HomePage.css";
import TextTransition, { presets } from "react-text-transition";

const ROLES = ["Frontend", "Backend", "Software"];

export default function HomePage() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setRoleIndex((roleIndex) => roleIndex + 1),
      2000
    );
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="home-page">
      <h1 id="home-page__title">Shadman Hossain</h1>
      <h2 id="home-page__description">
        A{" "}
        <TextTransition
          springConfig={presets.stiff}
          style={{ margin: "0 4px" }}
          inline
        >
          {ROLES[roleIndex % ROLES.length]}
        </TextTransition>{" "}
        Developer
      </h2>
    </div>
  );
}
