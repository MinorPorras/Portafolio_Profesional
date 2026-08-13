import { useLanguage } from "../hooks/useLanguage";
import { experienceData } from "../data/workExperiences";
import { Icon } from "./common/Icon";

export function Experience() {
  const { language } = useLanguage();

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title experience-title">{experienceData.title[language]}</h2>
      <div className="timeline-container">
        {experienceData.items.map(
          ({ id, role, company, period, description, techPills }) => (
            <div key={id} id={id} className="timeline-item">
              <div className="timeline-dot" />

              <details className="timeline-content glassBackground">
                <summary className="timeline-header">
                  <div className="timeline-title-group">
                    <h3>{role[language]}</h3>
                    <span className="timeline-company">{company}</span>
                  </div>
                  <span className="timeline-date">{period[language]}</span>
                </summary>

                <div className="timeline-body">
                  <ul className="timeline-description">
                    {description.map((text) => (
                      <li key={text[language].slice(0, 15)}>
                        {text[language]}
                      </li>
                    ))}
                  </ul>

                  <div className="timeline-techpills-container">
                    {techPills.map(({value, iconName, iconClassName}) => (
                      <span key={value} className={`tech-pill`}>
                        <Icon
                          name={iconName}
                          className={iconClassName}
                          size={24}
                        />
                        {value}
                      </span>
                    ))}
                  </div>
                </div>
              </details>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
