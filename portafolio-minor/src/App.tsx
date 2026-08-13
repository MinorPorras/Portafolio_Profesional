import { useState, useEffect } from "react";
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
import { GlowMouseFollower } from "./components/common/GlowMouseFollower";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";
import { Contact } from "./components/contact";
import { useLanguage } from "./hooks/useLanguage";

function App() {
  const { language } = useLanguage();
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => setShowScroll(window.scrollY > 400);

    window.addEventListener("scroll", checkScrollTop, { passive: true });
    checkScrollTop();

    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const isEs = language === "es";
    document.documentElement.lang = language;
    document.title = isEs
      ? "Minor Porras | Desarrollador de software .NET y WEB"
      : "Minor Porras | .NET & web software developer";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        isEs
          ? "Portafolio profesional de Minor Porras: desarrollador de software especializado en el ecosistema .NET, C#, SQL y desarrollo web."
          : "Minor Porras' professional portfolio: software developer specialized in the .NET ecosystem, C#, SQL and web development.",
      );
  }, [language]);

  return (
    <>
      <GlowMouseFollower />
      <MainNavbar />
      <div className="app-content">
        <Home />
        <AboutMe />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>

      {/* Botón de volver arriba */}
      <button
        className={`scroll-top-btn ${showScroll ? "visible" : ""}`}
        onClick={scrollTop}
        aria-label="Volver arriba"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
      </button>
    </>
  );
}

export default App;
