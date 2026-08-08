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
  |"vscode"
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
  | "timemanage";

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

export type usedTech = "ASP.NET"
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

export interface techPillsData {
  value: usedTech;
  className: string;
}