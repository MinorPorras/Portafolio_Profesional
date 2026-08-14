import { useMemo, useState } from "react";
import { useLanguage } from "../hooks/useLanguage";
import type { FilterOptions, SkillCategory } from "../types";
import { useFilter } from "../hooks/useFilter";
import { SkillsData } from "../data/skills";
import { CategoryFilter } from "./common/CategoryFilter";
import { Icon } from "./common/Icon";
import { useInView } from "../hooks/useInView";

export function Skills() {
  const { language } = useLanguage();
  const { ref, inView } = useInView();

  const [filterVersion, setFilterVersion] = useState(0);

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
    (skill) =>
      Array.isArray(skill.category) ? skill.category : [skill.category],
  );

  const handleToggleCategory = (category: SkillCategory | "all") => {
    toggleCategory(category);
    setFilterVersion((v) => v + 1);
  };

  return (
    <section
      id="skills"
      className={`skills-section reveal ${inView ? "reveal-visible" : ""}`}
      ref={ref}
    >
      <h2 className="section-title">
        {language === "es" ? "Habilidades" : "Skills"}
      </h2>
      <CategoryFilter
        options={filterOptions}
        isCategorySelected={isCategorySelected}
        onToggleCategory={handleToggleCategory}
      />
      <div className="skills-grid" key={filterVersion}>
        {filteredItems.map((skill, index) => (
          <div
            key={skill.iconName}
            className="skill-card glassBackground"
            style={{ animationDelay: `${index * 80}ms` }}
          >
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
