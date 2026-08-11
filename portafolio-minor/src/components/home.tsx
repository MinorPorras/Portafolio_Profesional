import { useLanguage } from "../hooks/useLanguage";
import { heroData } from "../data/home";
import { Icon } from "./common/Icon";

export function Home() {
  const { language } = useLanguage();

  return (
    <section className="hero-section" id="home">
      <h1 className="hero-title section-title">
        {heroData.greeting[language]}
      </h1>
      <h2 className="hero-role">{heroData.role[language]}</h2>
      <p className="hero-tagline">{heroData.tagline[language]}</p>

      <div className="hero-social-section">
        {heroData.redes.map(({ url, iconName, iconColorClass, user }) => (
          <a
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <Icon
              name={iconName}
              className={`social-icon ${iconColorClass}`}
              size={24}
            />
            {user}
          </a>
        ))}
        <a href="#contact" className="hero-cta-btn social-link">
          <Icon
            name="phone"
            className={`social-icon icon-primary`}
            size={24}
          />
          {language === "es" ? "Contáctame" : "Contact Me"}
        </a>
      </div>
    </section>
  );
}

export default Home;
