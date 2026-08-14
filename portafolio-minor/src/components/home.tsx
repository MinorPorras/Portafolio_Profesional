import { useLanguage } from "../hooks/useLanguage";
import { heroData } from "../data/home";
import { Icon } from "./common/Icon";
import { useInView } from "../hooks/useInView";

export function Home() {
  const { language } = useLanguage();
  const { ref, inView } = useInView();

  const countRedes = heroData.redes.length;

  return (
    <section
      className={`hero-section reveal ${inView ? "reveal-visible" : ""}`}
      id="home"
      ref={ref}
    >
      <h1 className="hero-title section-title">
        {heroData.greeting[language]}
      </h1>
      <h2 className="hero-role">{heroData.role[language]}</h2>
      <p className="hero-tagline">{heroData.tagline[language]}</p>

      <div className="hero-social-section">
        {heroData.redes.map(
          ({ url, iconName, iconColorClass, user }, index) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-link glassBackground`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <Icon name={iconName} className={`${iconColorClass}`} size={24} />
              {user}
            </a>
          ),
        )}
        <a
          href="/documents/CurriculumMinorPorras.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link glassBackground"
          style={{ animationDelay: `${countRedes * 80}ms` }}
        >
          <Icon name="education" className="icon-blue" size={24} />
          {language === "es" ? "Ver mi CV" : "View my CV"}
        </a>
        <a
          href="#contact"
          className="social-link glassBackground"
          style={{ animationDelay: `${(countRedes + 1) * 80}ms` }}
        >
          <Icon name="mail" className={`icon-primary`} size={24} />
          {language === "es" ? "Contáctame" : "Contact Me"}
        </a>
      </div>
    </section>
  );
}

export default Home;
