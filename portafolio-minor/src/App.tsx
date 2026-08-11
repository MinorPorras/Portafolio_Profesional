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
import { GlowMouseFolower } from "./components/common/GlowMouseFollower";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";
import { Contact } from "./components/contact";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  // Detectar el scroll para mostrar u ocultar el botón
  useEffect(() => {
    const checkScrollTop = () => {
      // Muestra el botón si el usuario baja más de 400px
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    // Limpiar el event listener cuando el componente se desmonte
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  // Función para subir suavemente
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
