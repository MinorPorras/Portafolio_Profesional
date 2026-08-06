import { useLanguage } from "../hooks/useLanguage";
import { aboutData } from "../data/aboutMe";
import { Icon } from "./Icon";
import profilePlaceholder from "../assets/profile-placeholder.png";

export function AboutMe() {
  const { language } = useLanguage();

  return (
    <section className="aboutMe-section" id="aboutMe">
      <h2 className="aboutMe-title">{aboutData.title[language]}</h2>
      <article className="aboutMe-Content">
        <div className="aboutMe-avatar-container">
          <img
            src={profilePlaceholder}
            alt="Minor Porras"
            className="aboutMe-avatar"
          />
        </div>
        <div className="aboutMe-info">
          <div className="aboutMe-paragraph">
            {aboutData.paragraphs.map((text) => (
              <p key={text.en.slice(0, 15)}>{text[language]}</p>
            ))}
          </div>
          <div className="aboutMe-tag-section">
            {aboutData.quickFacts.map(({ iconName, value }) => (
              <div key={iconName} className="aboutMe-fact-tag">
                <Icon name={iconName} className="social-icon" size={24} />
                <p>{value[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}
