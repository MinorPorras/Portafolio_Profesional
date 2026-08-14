import { useState } from "react";
import { useLanguage } from "../hooks/useLanguage";
import type { ExperienceItemProps } from "../types";
import { Icon } from "./common/Icon";

export function TimelineItem({ data, index }: ExperienceItemProps) {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const { id, role, company, period, description, techPills } = data;

  return (
    <div key={id} id={id} className="timeline-item">
      <div className="timeline-dot" />

      <details
        className="timeline-content glassBackground"
        style={{ animationDelay: `${index * 80}ms` }}
        onToggle={(e) => setIsOpen(e.currentTarget.open)}
      >
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
              <li key={text[language].slice(0, 15)}>{text[language]}</li>
            ))}
          </ul>

          <div className="timeline-techpills-container">
            {techPills.map(({ value, iconName, iconClassName }, pillIndex) => (
              <span
                key={value}
                className={`tech-pill ${isOpen ? "tech-pill-rise" : ""}`}
                style={{ animationDelay: `${pillIndex * 60}ms` }}
              >
                <Icon name={iconName} className={iconClassName} size={24} />
                {value}
              </span>
            ))}
          </div>
        </div>
      </details>
    </div>
  );
}
