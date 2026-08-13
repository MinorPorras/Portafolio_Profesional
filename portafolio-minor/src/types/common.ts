import type { ReactNode } from "react";

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
  | "education"
  | "aspnet"
  | "dotnet"
  | "efcore"
  | "winform"
  | "react"
  | "bootstrap"
  | "syncfusion"
  | "guna"
  | "gsap"
  | "velopack"
  | "csharp"
  | "vbnet"
  | "typescript"
  | "javascript"
  | "sql"
  | "sqlserver"
  | "oracle"
  | "postgresql"
  | "sqlite"
  | "git"
  | "visualstudio"
  | "vscode"
  | "rider"
  | "ssms"
  | "dbeaver"
  | "nuget"
  | "npm"
  | "pnpm"
  | "linux"
  | "assertivecom"
  | "teamwork"
  | "problemsolving"
  | "adaptability"
  | "timemanage"
  | "demo"
  | "html5"
  | "css3"
  | "vite"
  | "jquery"
  | "netframework"
  | "access"
  | "oledb"
  | "officeinterop"
  | "avalonia"
  | "phone";

export interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export interface IconDefinition {
  viewBox: string;
  content: ReactNode;
}

export interface SocialMediaLink {
  platform: SocialPlatform;
  url: string;
  iconName: IconName;
  iconColorClass: string
  user: string;
}

export type LocalizedString = Record<Language, string>;

export type NavbarItem = {
  name: Record<Language, string>;
  href: string;
};

export type UsedTech =
  | "ASP.NET"
  | ".NET Core"
  | "EF Core"
  | "WinForms"
  | "React"
  | "Bootstrap"
  | "Syncfusion"
  | "GUNA2"
  | "GSAP"
  | "Velopack"
  | "C#"
  | "VB.NET"
  | "TypeScript"
  | "JavaScript"
  | "SQL Server"
  | "Oracle DB"
  | "PostgreSQL"
  | "SQLite"
  | "GitHub"
  | "Visual Studio"
  | "VS Code"
  | "Jetbrains Rider"
  | "SSMS"
  | "DBeaver"
  | "NuGet"
  | "npm"
  | "pnpm"
  | "linux"
  | "HTML5"
  | "CSS3"
  | "Vite"
  | "jQuery"
  | ".NET Framework"
  | "Microsoft Access"
  | "OLEDB / ODBC"
  | "MS Office Interop"
  | "Avalonia";

export interface TechPillsData {
  value: UsedTech;
  iconName: IconName;
  iconClassName: string;
}

export interface FilterOptions<T extends string> {
  id: T | "all";
  label: string;
}

export interface CategoryFilterProps<T extends string> {
  options: FilterOptions<T>[];
  isCategorySelected: (category: T | "all") => boolean;
  onToggleCategory: (category: T | "all") => void;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string;
}

export interface ContactRequestBody {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  honeypot?: string;
  startTime?: number;
}

export interface ImageModalProps{
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  altText: string;
}