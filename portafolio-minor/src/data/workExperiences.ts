import type { experience } from "../types/experience.ts";

export const experienceData: experience = {
  title: {
    es: "Experiencia laboral",
    en: "Work experience",
  },
  items: [
    {
      id: "dtrigo-dev",
      role: {
        en: "Junior Software Developer",
        es: "Desarrollador de Software Junior",
      },
      company: "Panadería D'Trigo",
      period: {
        es: "Marzo 2024 – Junio 2026",
        en: "March 2024 - June 2026",
      },
      description: [
        {
          en: "Developed and implemented a customized billing and inventory system in VB.NET and SQLite, managing the complete development cycle.",
          es: "Desarrollé e implementé un sistema personalizado de facturación e inventario en VB.NET y SQLite, gestionando el ciclo completo de desarrollo.",
        },
        {
          en: "Technical Impact: Optimized queries and UI flow, increasing billing efficiency by 10%.",
          es: "Impacto técnico: Optimización de consultas y flujo de UI que aumentó la eficiencia de facturación en un 10%.",
        },
        {
          en: "Reduced manual operational errors by 15%, generating an annual savings exceeding ₡150,000 colones.",
          es: "Reducción del 15% en errores operativos manuales, generando un ahorro anual superior a ₡150,000 colones.",
        },
      ],
      techPills: [
        { value: "VB.NET", iconName: "vbnet", iconClassName: "icon-purple" },
        { value: "C#", iconName: "csharp", iconClassName: "icon-purple" },
        { value: "SQLite", iconName: "sqlite", iconClassName: "icon-cyan" },
        { value: "WinForms", iconName: "winform", iconClassName: "icon-blue" },
        { value: "GUNA2", iconName: "guna", iconClassName: "icon-purple" },
        { value: "Syncfusion", iconName: "syncfusion", iconClassName: "icon-blue" },
        { value: "Velopack", iconName: "velopack", iconClassName: "icon-yellow" },
      ],
    },
    {
      id: "condominio-bazu-freelance",
      role: {
        en: "Frontend Web Developer (Freelance)",
        es: "Desarrollador Web Frontend (Freelance)",
      },
      company: "Condominio Bazú",
      period: {
        es: "Diciembre 2025 – Enero 2026",
        en: "December 2025 - January 2026",
      },
      description: [
        {
          en: "End-to-end freelance project (design to production deployment) with deliverable-based dedication.",
          es: "Proyecto freelance de alcance completo (diseño a despliegue en producción) con dedicación por entregables.",
        },
        {
          en: "Developed a Single Page Application (SPA) in React and TypeScript, integrating GSAP animations and custom CSS.",
          es: "Desarrollé una Single Page Application (SPA) en React y TypeScript, integrando animaciones con GSAP y CSS personalizado.",
        },
        {
          en: "Technical Impact: SEO and performance optimization (Core Web Vitals) to maximize potential client conversion.",
          es: "Impacto técnico: Optimización SEO y de rendimiento (Core Web Vitals) para maximizar la conversión de clientes potenciales.",
        },
      ],
      techPills: [
        { value: "React", iconName: "react", iconClassName: "icon-cyan" },
        { value: "TypeScript", iconName: "typescript", iconClassName: "icon-blue" },
        { value: "Vite", iconName: "vite", iconClassName: "icon-purple" },
        { value: "GSAP", iconName: "gsap", iconClassName: "icon-green" },
        { value: "Vercel", iconName: "vercel", iconClassName: "icon-blwh" },
      ],
    },
    {
      id: "micitt-curriculum",
      role: {
        en: "Academic Curriculum Developer (TCU)",
        es: "Desarrollador de Currículo Académico (TCU)",
      },
      company: "MICITT CECI - Universidad Hispanoamericana",
      period: {
        es: "Octubre 2024 – Junio 2025",
        en: "October 2024 - June 2025",
      },
      description: [
        {
          en: "Integral design of the study plan and didactic material for desktop application development in VB.NET, aligned with academic standards.",
          es: "Diseño integral del plan de estudios y material didáctico para el desarrollo de aplicaciones de escritorio en VB.NET, alineado a estándares académicos.",
        },
        {
          en: "Creation of practical evaluations, detailed technical documentation, and coordination with faculty to ensure the program's pedagogical quality.",
          es: "Elaboración de evaluaciones prácticas, documentación técnica detallada y coordinación con docentes para garantizar la calidad pedagógica del programa.",
        },
      ],
      techPills: [
        { value: "VB.NET", iconName: "vbnet", iconClassName: "icon-purple" },
        { value: "Visual Studio", iconName: "visualstudio", iconClassName: "icon-purple" },
        { value: "WinForms", iconName: "winform", iconClassName: "icon-blue" },
      ],
    },
  ],
};