export type Theme = "light" | "dark";

export type Language = "en" | "es";

export interface Project {
    id: string;
    title: string;
    description: string;
    TechStack: string[];
    githubUrl?: string;
    liveDemoUrl?: string;
    featured: boolean;
    category: "fullstack" | "backend" | "desktop" | "tooling" | "other";
}

export interface TechSkill{
    name: string;
    category: "frontend" | "backend" | "database" | "tools" | "other";
    iconName?: string;
}