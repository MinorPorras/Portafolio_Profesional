import { useMemo } from "react";
import { useLanguage } from "../hooks/useLanguage";
import type { FilterOptions, SkillCategory } from "../types";
import { useFilter } from "../hooks/useFilter";
import { SkillsData } from "../data/skills";
import { CategoryFilter } from "./common/CategoryFilter";
import { Icon } from "./common/Icon";

export function Skills() {
  const { language } = useLanguage();

  const filterOptions = useMemo<FilterOptions<SkillCategory>[]>(
    () => [
      { id: "all", label: language === "es" ? "Todos" : "All" },
      {
        id: "database",
        label: language === "es" ? "Base de datos" : "Database",
      },
      { id: "backend", label: "Backend" },
      { id: "frontend", label: "Frontend" },
      { id: "tools", label: language === "es" ? "Herramientas" : "Tools" },
      {
        id: "soft-skills",
        label: language === "es" ? "Habilidades blandas" : "Soft skills",
      },
      { id: "other", label: language === "es" ? "Otros" : "Other" },
    ],
    [language],
  );

  const { filteredItems, toggleCategory, isCategorySelected } = useFilter(
    SkillsData,
    (skill) => (Array.isArray(skill.category) ? skill.category : [skill.category]),
  );

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">{language === "es" ? "Habilidades" : "Skills"}</h2>
      <CategoryFilter
        options={filterOptions}
        isCategorySelected={isCategorySelected}
        onToggleCategory={toggleCategory}
      />
      <div className="skills-grid">
        {filteredItems.map((skill) => (
          <div key={skill.iconName} className="skill-card">
            <Icon
              name={skill.iconName}
              className={`skill-card-icon ${skill.iconColorClass ?? ""}`}
              size={24}
            />
            <span>{skill.name[language]}</span>
          </div>
        ))}
      </div>
    </section>
  );
}