import { useMemo, useState } from "react";
import { projects } from "../data/projects";
import { useFilter } from "../hooks/useFilter";
import { useInView } from "../hooks/useInView";
import { useLanguage } from "../hooks/useLanguage";
import type { FilterOptions, ProjectCategory } from "../types";
import { CategoryFilter } from "./common/CategoryFilter";
import { ProjectsCard } from "./projectsCard";

export function Projects() {
  const { language } = useLanguage();
  const [filterVersion, setFilterVersion] = useState(0);
  const { ref, inView } = useInView();

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

  const handleToggleCategory = (category: ProjectCategory | "all") => {
    toggleCategory(category);
    setFilterVersion((v) => v + 1);
  };

  return (
    <section
      id="projects"
      className={`project-section reveal ${inView ? "reveal-visible" : ""}`}
      ref={ref}
    >
      <h2 className="section-title">
        {language === "es" ? "Proyectos destacados" : "Featured projects"}
      </h2>

      <CategoryFilter
        options={filterOptions}
        isCategorySelected={isCategorySelected}
        onToggleCategory={handleToggleCategory}
      />

      <div className="projects-grid" key={filterVersion}>
        {filteredItems.map((project, index) => (
          <ProjectsCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
