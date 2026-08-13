import { useLanguage } from "../hooks/useLanguage";
import { aboutData } from "../data/aboutMe";
import { Icon } from "./common/Icon";
import profilePlaceholder from "../assets/profile-placeholder.png";

export function AboutMe() {
  const { language } = useLanguage();

  return (
    <section className="aboutMe-section" id="aboutMe">
      <h2 className="section-title aboutMe-title">{aboutData.title[language]}</h2>
      <article className="aboutMe-Content">
        <div className="aboutMe-avatar-container">
          <img
            src={profilePlaceholder}
            alt="Minor Porras"
            className="aboutMe-avatar"
          />
        </div>
        <div className="aboutMe-bio glassBackground">
          {aboutData.paragraphs.map((text, index) => (
            <p
              key={index}
              className={index === 0 ? "bio-lead" : "bio-paragraph"}
            >
              {text[language]}
            </p>
          ))}
        </div>
        <div className="aboutMe-tag-section">
          {aboutData.quickFacts.map(({ iconName, value }) => (
            <div
              key={iconName}
              className={`aboutMe-fact-tag glassBackground aboutMe-fact-tag-${iconName}`}
            >
              <Icon
                name={iconName}
                className={`tagline-icon tagline-icon-${iconName}`}
                size={20}
              />
              <p>{value[language]}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
