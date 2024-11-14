import Navbar from "./Navbar";
import HomePage from "./HomePage";
import ConnectPage from "./ConnectPage";
import AboutPage from "./AboutPage";
import ResumePage from "./ResumePage";
import "./App.css";
import { useRef, useEffect } from "react";

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

  useEffect(() => {
    const options = { threshold: 0.1 };
    const handleIntersection = (entries: any[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-up");
          entry.target.classList.remove("hidden");
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, options);

    const sections = [homePageRef, aboutPageRef, resumePageRef, connectPageRef];
    sections.forEach((ref) => {
      if (ref.current) {
        ref.current.classList.add("hidden");
        observer.observe(ref.current);
      }
    });
    return () => observer.disconnect();
  }, []);

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
