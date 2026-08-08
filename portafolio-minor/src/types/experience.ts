import type { LocalizedString, techPillsData } from "./common";

export interface experience{
  title: LocalizedString;
  items: ExperienceItem[];
}

export interface ExperienceItem {
  id: string;
  role: LocalizedString;
  company: string;
  period: LocalizedString;
  description: LocalizedString[];
  techPills: techPillsData[];
}