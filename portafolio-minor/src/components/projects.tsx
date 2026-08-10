import { useMemo } from "react";
import { projects } from "../data/projects";
import { useFilter } from "../hooks/useFilter";
import { useLanguage } from "../hooks/useLanguage";
import type { FilterOptions, ProjectCategory } from "../types";
import { CategoryFilter } from "./common/CategoryFilter";
import { ProjectsCard } from "./projectsCard";

export function Projects() {
  const { language } = useLanguage();

  const filterOptions = useMemo<FilterOptions<ProjectCategory>[]>(
    () => [
      { id: "all", label: language === "es" ? "Todos" : "All" },
      { id: "fullstack", label: "Fullstack" },
      { id: "backend", label: "Backend" },
      { id: "frontend", label: "Frontend" },
      { id: "desktop", label: "Desktop" },
      { id: "web", label: "Web" },
      { id: "tooling", label: language === "es" ? "Herramientas" : "Tooling" },
      { id: "other", label: language === "es" ? "Otros" : "Other" },
    ],
    [language],
  );

  const { filteredItems, toggleCategory, isCategorySelected } = useFilter(
    projects,
    (project) => project.categories,
  );

  return (
    <section id="projects" className="project-section">
      <h2 className="section-title">
        {language === "es" ? "Proyectos destacados" : "Featured projects"}
      </h2>

      <CategoryFilter
        options={filterOptions}
        isCategorySelected={isCategorySelected}
        onToggleCategory={toggleCategory}
      />

      <div className="projects-grid">
        {filteredItems.map((project) => (
          <ProjectsCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
