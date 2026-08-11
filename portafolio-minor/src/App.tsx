import "./styles/App.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/aboutMe.css";
import "./styles/experience.css";
import "./styles/project.css";
import "./styles/skills.css";
import "./styles/contact.css";

import { MainNavbar } from "./components/navbar";
import Home from "./components/home";
import { AboutMe } from "./components/aboutMe";
import { Experience } from "./components/experience";
import { GlowMouseFolower } from "./components/common/GlowMouseFollower";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";
import { Contact } from "./components/contact";

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
        <Skills />
        <Contact />
      </div>
    </>
  );
}

export default App;
