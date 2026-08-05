import { useState } from "react";
import navBarItems from "../data/navbarItems";
import { useLanguage } from "../hooks/useLanguage";
import { useTheme } from "../hooks/useTheme";

export function MainNavbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false); // Assuming you have a state for menu open/close

  if (!navBarItems || navBarItems.length === 0) {
    return null; // or render a fallback UI
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
      <ul className={`navbar-list ${isOpen ? "is-open" : ""}`}>
        {navBarItems.map((item) => (
          <li key={item.href} className="navbar-item">
            <a href={item.href}>{item.name[language]}</a>
          </li>
        ))}
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
