import { useState } from "react";
import { useLanguage } from "../hooks/useLanguage";
import type { ProjectsCardProps } from "../types/project";
import { Icon } from "./common/Icon";
import { ImageModal } from "./common/imageModal.tsx";

const STATE_COLOR_MAP: Record<string, string> = {
  completed: "project-card-state-completed",
  "in-progress": "project-card-state-in-progress",
  planned: "project-card-state-planned",
};

export function ProjectsCard({ project, index }: ProjectsCardProps) {
  const { language } = useLanguage();
  const [isImageOpen, setIsImageOpen] = useState(false);

  const stateColorClass = STATE_COLOR_MAP[project.state.en] ?? "";

  const state =
    project.state[language].charAt(0).toUpperCase() +
    project.state[language].slice(1);

  return (
    <article
      className="project-card glassBackground"
      style={{ animationDelay: `${(index ?? 0) * 70}ms` }}
    >
      <div className="project-card-header">
        <h3 className="project-card-title">{project.title[language]}</h3>
        <span className={`project-card-state ${stateColorClass}`}>{state}</span>
      </div>

      <div className="project-card-body">
        <button
          type="button"
          className="project-card-img-btn"
          onClick={() => setIsImageOpen(true)}
          aria-label={
            language === "es"
              ? `Ampliar imagen de ${project.title[language]}`
              : `Enlarge image of ${project.title[language]}`
          }
        >
          <img
            src={project.imageLocation}
            alt={`Imagen ${project.title[language]}`}
            loading="lazy"
            decoding="async"
            className="project-card-img"
          />
        </button>
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
        {project.techStack.map((tech, index) => (
          <span
            className="tech-pill"
            key={tech.value}
            style={{ animationDelay: `${(index ?? 0) * 70}ms` }}
          >
            <Icon
              name={tech.iconName}
              className={tech.iconClassName}
              size={24}
            />
            {tech.value}
          </span>
        ))}
      </div>

      <ImageModal
        isOpen={isImageOpen}
        onClose={() => setIsImageOpen(false)}
        imageUrl={project.imageLocation}
        altText={`Imagen ${project.title[language]}`}
      />
    </article>
  );
}
