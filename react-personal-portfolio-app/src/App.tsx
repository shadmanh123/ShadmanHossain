import Navbar from "./Navbar";
import HomePage from "./HomePage";
import ContactCard from "./ContactCard";
import AboutPage from "./AboutPage";
import ResumePage from "./ResumePage";
import "./App.css";
import { useRef } from "react";

function App() {
  const homePageRef = useRef<HTMLDivElement>(null);
  const aboutPageRef = useRef<HTMLDivElement>(null);
  const resumePageRef = useRef<HTMLDivElement>(null);
  const contactCardRef = useRef<HTMLDivElement>(null);

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
      case "contact":
        contactCardRef.current?.scrollIntoView({ behavior: "smooth" });
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
      <div ref={contactCardRef} id="contact">
        <ContactCard />
      </div>
    </>
  );
}

export default App;
