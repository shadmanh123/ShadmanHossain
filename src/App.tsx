import Navbar from "./Navbar";
import HomePage from "./HomePage";
import ConnectPage from "./ConnectPage";
import AboutPage from "./AboutPage";
import ResumePage from "./ResumePage";
import "./App.css";
import { useRef } from "react";

function App() {
  const homePageRef = useRef<HTMLDivElement>(null);
  const aboutPageRef = useRef<HTMLDivElement>(null);
  const resumePageRef = useRef<HTMLDivElement>(null);
  const connectPageRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string): void => {
    switch (section) {
      case "home":
        homePageRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        aboutPageRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "resume":
        resumePageRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "connect":
        connectPageRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };
  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <div className="app">
        <div ref={homePageRef}>
          <HomePage />
        </div>
        <div ref={aboutPageRef}>
          <AboutPage />
        </div>
        <div ref={resumePageRef}>
          <ResumePage />
        </div>
      </div>
      <footer>
        <p>
          <div ref={connectPageRef} id="contact">
            <ConnectPage />
          </div>
          Built and Designed by Shadman Hossain. <br /> All Rights Reserved.
          &copy;
        </p>
      </footer>
    </>
  );
}

export default App;
