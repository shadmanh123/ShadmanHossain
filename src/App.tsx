import "./App.css";
import { MatrixRain } from "./effects";
import Header from "./Header";
import Hero from "./Hero";
import Experience from "./Experience";
import ProjectIndex from "./ProjectIndex";
import CompetitionEducation from "./CompetitionEducation";
import Footer from "./Footer";

function App() {
  return (
    <>
      <MatrixRain />
      <div className="app">
        <Header />
        <main>
          <Hero />
          <Experience />
          <ProjectIndex />
          <CompetitionEducation />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
