import type { Skill } from '../types/dataTypes.ts';

export const Skills: Skill[] = [
  // Frameworks y Librerías (category: "frontend" o "backend")
  { name: { es: "ASP.NET", en: "ASP.NET" }, category: "backend", iconName: "aspnet" },
  { name: { es: ".NET Core", en: ".NET Core" }, category: "backend", iconName: "dotnet" },
  { name: { es: "Entity Framework Core", en: "Entity Framework Core" }, category: "backend", iconName: "efcore" },
  { name: { es: "WinForms", en: "WinForms" }, category: "frontend", iconName: "windows" },
  { name: { es: "React", en: "React" }, category: "frontend", iconName: "react" },
  { name: { es: "Bootstrap", en: "Bootstrap" }, category: "frontend", iconName: "bootstrap" },
  { name: { es: "Syncfusion", en: "Syncfusion" }, category: "frontend", iconName: "syncfusion" },
  { name: { es: "GUNA2", en: "GUNA2" }, category: "frontend", iconName: "guna" },
  { name: { es: "GSAP", en: "GSAP" }, category: "frontend", iconName: "gsap" },

  // Lenguajes
  { name: { es: "C#", en: "C#" }, category: "backend", iconName: "csharp" },
  { name: { es: "VB.NET", en: "VB.NET" }, category: "backend", iconName: "dotnet" },
  { name: { es: "TypeScript", en: "TypeScript" }, category: "backend", iconName: "typescript" },
  { name: { es: "JavaScript", en: "JavaScript" }, category: "frontend", iconName: "javascript" },
  { name: { es: "SQL", en: "SQL" }, category: "database", iconName: "sql" },

  // Bases de datos
  { name: { es: "SQL Server", en: "SQL Server" }, category: "database", iconName: "sqlserver" },
  { name: { es: "Oracle DB", en: "Oracle DB" }, category: "database", iconName: "oracle" },
  { name: { es: "PostgreSQL", en: "PostgreSQL" }, category: "database", iconName: "postgresql" },
  { name: { es: "SQLite", en: "SQLite" }, category: "database", iconName: "sqlite" },

  // Herramientas y Entornos
  { name: { es: "Git", en: "Git" }, category: "tools", iconName: "git" },
  { name: { es: "GitHub", en: "GitHub" }, category: "tools", iconName: "github" },
  { name: { es: "Visual Studio", en: "Visual Studio" }, category: "tools", iconName: "visualstudio" },
  { name: { es: "VS Code", en: "VS Code" }, category: "tools", iconName: "vscode" },
  { name: { es: "Jetbrains Rider", en: "Jetbrains Rider" }, category: "tools", iconName: "rider" },
  { name: { es: "SSMS", en: "SSMS" }, category: "tools", iconName: "ssms" },
  { name: { es: "DBeaver", en: "DBeaver" }, category: "tools", iconName: "dbeaver" },
  { name: { es: "NuGet", en: "NuGet" }, category: "tools", iconName: "nuget" },
  { name: { es: "npm", en: "npm" }, category: "tools", iconName: "npm" },
  { name: { es: "pnpm", en: "pnpm" }, category: "tools", iconName: "pnpm" },
  { name: { es: "Linux", en: "Linux" }, category: "tools", iconName: "linux" },

  // Soft Skills (category: "soft-skills")
  { name: { es: "Comunicación asertiva", en: "Assertive communication" }, category: "soft-skills" },
  { name: { es: "Trabajo en equipo", en: "Teamwork" }, category: "soft-skills" },
  { name: { es: "Resolución de problemas", en: "Problem solving" }, category: "soft-skills" },
  { name: { es: "Adaptabilidad a nuevos entornos", en: "Adaptability" }, category: "soft-skills" },
  { name: { es: "Gestión del tiempo", en: "Time management" }, category: "soft-skills" }
];