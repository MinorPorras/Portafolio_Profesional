import type { LocalizedString, SocialMediaLink } from "./common";

export type SkillCategory = 
  | "frontend" 
  | "backend" 
  | "database" 
  | "tools" 
  | "soft-skills" 
  | "other";

export interface Skill {
  name: LocalizedString;
  category: SkillCategory;
  iconName?: string;
}

export interface Education {
  degree: LocalizedString;
  institution: string;
  period: LocalizedString;
}

export interface LanguageProficiency {
  name: string;
  level: string; // Ej: "B2", "Nativo"
}

export interface ProfileInfo {
  name: string;
  role: LocalizedString;
  location: string;
  about: LocalizedString;
  email: string;
  phone: string;
  socialMedia: SocialMediaLink[];
  education: Education[];
  languages: LanguageProficiency[];
  resumeUrl: string;
}