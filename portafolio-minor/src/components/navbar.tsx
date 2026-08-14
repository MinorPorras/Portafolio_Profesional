import { useState } from "react";
import navBarItems from "../data/navbarItems";
import { useLanguage } from "../hooks/useLanguage";
import { useTheme } from "../hooks/useTheme";
import { useScrollSpy } from "../hooks/useScrollSpy";

const SECTIONS_IDS = navBarItems.map((item) => item.href.slice(1));

export function MainNavbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const activeId = useScrollSpy(SECTIONS_IDS);

  if (!navBarItems || navBarItems.length === 0) {
    return null;
  }

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const themeBtnText =
    language === "en"
      ? `${theme === "light" ? "Dark" : "Light"} mode`
      : `Modo ${theme === "light" ? "oscuro" : "claro"}`;

  const languageBtnText = language === "en" ? "Español" : "English";

  return (
    <nav className={`navbar ${theme}`}>
      <button
        className="hamburger-btn"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span className={`hamburger-line ${isOpen ? "open" : ""}`}></span>
        <span className={`hamburger-line ${isOpen ? "open" : ""}`}></span>
        <span className={`hamburger-line ${isOpen ? "open" : ""}`}></span>
      </button>
      {isOpen && <div className="navbar-overlay" onClick={closeMenu} />}
      <ul className={`navbar-list ${isOpen ? "is-open" : ""} glassBackground`}>
        {navBarItems.map((item) => {
          const isActive = item.href.slice(1) === activeId;
          return (
            <li key={item.href} className="navbar-item">
              <a
                href={item.href}
                onClick={closeMenu}
                aria-current={isActive ? "location" : undefined}
              >
                {item.name[language]}
              </a>
            </li>
          );
        })}
        <li className="navbar-button-item">
          <button onClick={toggleTheme} className="toggleButton">
            {themeBtnText}
          </button>
        </li>
        <li className="navbar-button-item">
          <button onClick={toggleLanguage} className="toggleButton">
            {languageBtnText}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavbar;
