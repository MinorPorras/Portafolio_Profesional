import type { IconName, LocalizedString } from "./common";

export type skillCategory =
  | "database"
  | "backend"
  | "frontend"
  | "tools"
  | "soft-skills"
  | "other";

export interface skillData {
  name: LocalizedString;
  category: skillCategory;
  iconName: IconName;
  iconColorClass: string;
}
