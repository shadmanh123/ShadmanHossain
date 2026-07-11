import "./App.css";
import Header from "./Header";
import Hero from "./Hero";
import Experience from "./Experience";
import ProjectIndex from "./ProjectIndex";
import CompetitionEducation from "./CompetitionEducation";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Experience />
      <ProjectIndex />
      <CompetitionEducation />
      <Footer />
    </div>
  );
}

export default App;
