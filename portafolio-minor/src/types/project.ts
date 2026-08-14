import type { LocalizedString, TechPillsData } from "./common";


export type ProjectStateEs = "completado" | "en-progreso" | "planeado";
export type ProjectStateEn = "completed" | "in-progress" | "planned";

export interface ProjectState {
  es: ProjectStateEs;
  en: ProjectStateEn;
}

export interface Project {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  imageLocation: string;
  techStack: TechPillsData[];
  githubUrl?: string;
  liveDemoUrl?: string;
  featured: boolean;
  categories: ProjectCategory[];
  state: ProjectState;
}

export type ProjectCategory =
  | "fullstack"
  | "backend"
  | "frontend"
  | "desktop"
  | "web"
  | "tooling"
  | "other";

export interface ProjectsCardProps {
  project: Project;
  index: number;
}