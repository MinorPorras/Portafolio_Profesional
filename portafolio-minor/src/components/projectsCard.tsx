import { useLanguage } from "../hooks/useLanguage";
import type { ProjectsCardProps } from "../types/project";
import { Icon } from "./common/Icon";

const STATE_COLOR_MAP: Record<string, string> = {
  completed: "project-card-state-completed",
  "in-progress": "project-card-state-in-progress",
  planned: "project-card-state-planned",
};

export function ProjectsCard({ project }: ProjectsCardProps) {
  const { language } = useLanguage();

  const stateColorClass = STATE_COLOR_MAP[project.state.en] ?? "";

  const state = project.state[language].charAt(0).toUpperCase() + project.state[language].slice(1);

  return (
    <article className="project-card glassBackground">
      <div className="project-card-header">
        <h3 className="project-card-title">{project.title[language]}</h3>
        <span className={`project-card-state ${stateColorClass}`}>
          {state}
        </span>
      </div>

      <div className="project-card-body">
        <img
          src={project.imageLocation}
          alt={`Imagen ${project.title[language]}`}
          loading="lazy"
          decoding="async"
          className="project-card-img"
        />
        <p className="project-card-text">{project.description[language]}</p>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-btn project-card-btn-github"
          >
            <Icon
              name="github"
              className="social-icon social-icon-github"
              size={24}
            />
            {language === "es" ? "Código fuente" : "Source code"}
          </a>
        )}

        {project.liveDemoUrl && (
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-btn project-card-btn-demo"
          >
            <Icon
              name="demo"
              className="social-icon social-icon-demo"
              size={24}
            />
            Live demo
          </a>
        )}
      </div>

      <div className="project-card-footer">
        {project.techStack.map((tech) => (
          <span className="tech-pill" key={tech.value}>
            <Icon
              name={tech.iconName}
              className={tech.iconClassName}
              size={24}
            />
            {tech.value}
          </span>
        ))}
      </div>
    </article>
  );
}