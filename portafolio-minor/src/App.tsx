import "./styles/App.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/aboutMe.css";
import "./styles/experience.css";
import "./styles/project.css"

import { MainNavbar } from "./components/navbar";
import Home from "./components/home";
import { AboutMe } from "./components/aboutMe";
import { Experience } from "./components/experience";
import { GlowMouseFolower } from "./components/common/GlowMouseFollower";
import { Projects } from "./components/projects";

function App() {
  return (
    <>
      <GlowMouseFolower />
      <MainNavbar />
      <div className="app-content">
        <Home />
        <AboutMe />
        <Experience />
        <Projects />
      </div>
    </>
  );
}

export default App;
