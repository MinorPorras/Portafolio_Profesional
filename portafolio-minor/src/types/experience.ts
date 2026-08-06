import type { LocalizedString } from "./common";

export interface ExperienceItem {
  id: string;
  role: LocalizedString;
  company: string;
  period: string;
  description: LocalizedString[];
}