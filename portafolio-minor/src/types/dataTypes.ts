import type { Language } from "./appTypes";

export type socialMediaLink = {
    platform: "github" | "linkedin" | "twitter" | "facebook" | "instagram" | "youtube" | "tiktok" | "other";
    url: string;
    Icon: React.FC<{ size?: number; className?: string }>;
    user: string;
}

export type HomeProps = {
    greeting: Record<Language, string>;
    role: Record<Language, string>;
    tagline: Record<Language, string>;
    redes: socialMediaLink[];
    ctaButtons: {
        primary: {
        es: "Ver Proyectos",
        en: "View Projects"
        },
        secondary: {
        es: "Descargar CV",
        en: "Download CV"
        },
        contact: {
        es: "Contactar",
        en: "Contact Me"
        }
    }
}

export type ProjectStateEs = "completado" | "en-progreso" | "planeado";
export type ProjectStateEn = "completed" | "in-progress" | "planned";

export interface Project {
    id: string;
    title: Record<Language, string>;
    description: Record<Language, string>;
    techStack: string[];
    githubUrl?: string;
    liveDemoUrl?: string;
    featured: boolean;
    category: "fullstack" | "backend" | "frontend" | "desktop" | "tooling" | "other";
    state: {
        es: ProjectStateEs;
        en: ProjectStateEn;
    };
}

export interface Skill {
    name: Record<Language, string>;
    category: "frontend" | "backend" | "database" | "tools" | "soft-skills" | "other";
    iconName?: string;
}

export interface education {
    degree: Record<Language, string>;
    institution: string;
    period: Record<Language, string>;
}

export interface languageProficiency {
    name: string;
    level: string;
}

export interface ProfileInfo {
  name: string;
  role: Record<Language, string>;
  location: string;
  about: Record<Language, string>;
  email: string;
  phone: string;
  socialMedia: socialMediaLink[];
  education: education[];
  languages: languageProficiency[];
  resumeUrl: string;
}

export interface ExperienceItem {
  id: string;
  role: Record<Language, string>;
  company: string;
  period: string;
  description: Record<Language, string>[];
}