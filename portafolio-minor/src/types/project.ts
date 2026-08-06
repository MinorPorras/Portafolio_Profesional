import type { LocalizedString } from "./common";

export type ProjectCategory = 
  | "fullstack" 
  | "backend" 
  | "frontend" 
  | "desktop" 
  | "tooling" 
  | "other";

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
  techStack: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  featured: boolean;
  category: ProjectCategory;
  state: ProjectState;
}