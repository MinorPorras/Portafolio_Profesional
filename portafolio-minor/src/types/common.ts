export type Theme = "light" | "dark";

export type Language = "en" | "es";

export type SocialPlatform =
  | "github"
  | "linkedin"
  | "twitter"
  | "facebook"
  | "instagram"
  | "youtube"
  | "tiktok"
  | "other";

export type IconName = 
  | "github" 
  | "linkedin"  
  | "languages" 
  | "location" 
  | "education";

export interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export interface IconDefinition {
  viewBox: string;
  path: React.ReactNode;
}


export interface SocialMediaLink {
  platform: SocialPlatform;
  url: string;
  iconName: IconName;
  user: string;
}

export type LocalizedString = Record<Language, string>;

export type navbarItem = {
  name: Record<Language, string>;
  href: string;
};