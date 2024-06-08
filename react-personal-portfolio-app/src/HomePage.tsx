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
    <div className="homepage">
      <h1 id="title">Shadman Hossain</h1>
      <h2 id="description">
        A
        <TextTransition
          springConfig={presets.wobbly}
          style={{ margin: "0 4px" }}
          inline
        >
          {ROLES[roleIndex % ROLES.length]}
        </TextTransition>
        Developer
      </h2>
    </div>
  );
}
