import type { experience } from "../types/experience.ts";

export const experienceData: experience = {
  title: {
    es: "Experiencia Laboral",
    en: "Professional Experience",
  },
  items: [
    {
      id: "dtrigo-dev",
      role: {
        en: "Software Developer",
        es: "Desarrollador de Software",
      },
      company: "Panadería D'Trigo",
      period: {
        es: "Marzo 2024 – Junio 2026",
        en: "March 2024 - June 2026",
      },
      description: [
        {
          en: "Spearheaded the end-to-end development and continuous maintenance of a custom billing and inventory management system, ensuring high availability in a production environment spanding 3 years.",
          es: "Lideré el desarrollo de principio a fin y el mantenimiento continuo de un sistema personalizado de facturación e inventario, garantizando alta disponibilidad en un entorno de producción a lo largo 3 años.",
        },
        {
          en: "Technical Impact: Optimized database queries and refined UI workflows, increasing overall billing efficiency by 10%.",
          es: "Impacto técnico: Optimización de consultas a la base de datos y refinamiento de flujos de UI, aumentando la eficiencia general de facturación en un 10%.",
        },
        {
          en: "Reduced manual operational errors by 15%, yielding annual savings exceeding ₡150,000 colones through automated validations.",
          es: "Reducción del 15% en errores operativos manuales, generando un ahorro anual superior a ₡150,000 colones mediante validaciones automatizadas.",
        },
      ],
      techPills: [
        { value: "C#", iconName: "csharp", iconClassName: "icon-purple" },
        { value: "VB.NET", iconName: "vbnet", iconClassName: "icon-purple" },
        { value: "SQLite", iconName: "sqlite", iconClassName: "icon-cyan" },
        { value: "WinForms", iconName: "winform", iconClassName: "icon-blue" },
        {
          value: "Syncfusion",
          iconName: "syncfusion",
          iconClassName: "icon-blue",
        },
        {
          value: "Velopack",
          iconName: "velopack",
          iconClassName: "icon-yellow",
        },
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
          en: "Architected and deployed a responsive Single Page Application (SPA) from design to production, managing the full project lifecycle independently.",
          es: "Arquitecté y desplegué una Single Page Application (SPA) responsiva desde el diseño hasta producción, gestionando el ciclo completo del proyecto de forma independiente.",
        },
        {
          en: "Developed the core application using React and TypeScript, integrating advanced GSAP animations and a custom, scalable CSS architecture.",
          es: "Desarrollé el núcleo de la aplicación con React y TypeScript, integrando animaciones avanzadas con GSAP y una arquitectura CSS personalizada y escalable.",
        },
        {
          en: "Technical Impact: Executed SEO and Core Web Vitals performance optimizations, significantly improving load times and maximizing potential client conversion rates.",
          es: "Impacto técnico: Ejecución de optimizaciones de rendimiento SEO y Core Web Vitals, mejorando significativamente los tiempos de carga y maximizando la conversión de clientes potenciales.",
        },
      ],
      techPills: [
        { value: "React", iconName: "react", iconClassName: "icon-cyan" },
        {
          value: "TypeScript",
          iconName: "typescript",
          iconClassName: "icon-blue",
        },
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
          en: "Designed comprehensive study plans and technical didactic materials for desktop application development, aligning with industry and academic standards.",
          es: "Diseñé planes de estudio integrales y material didáctico técnico para el desarrollo de aplicaciones de escritorio, alineados con estándares académicos y de la industria.",
        },
        {
          en: "Authored practical evaluations and detailed technical documentation, coordinating with faculty to ensure the program's pedagogical quality and technical rigor.",
          es: "Redacté evaluaciones prácticas y documentación técnica detallada, coordinando con el cuerpo docente para garantizar la calidad pedagógica y el rigor técnico del programa.",
        },
      ],
      techPills: [
        { value: "VB.NET", iconName: "vbnet", iconClassName: "icon-purple" },
        {
          value: "Visual Studio",
          iconName: "visualstudio",
          iconClassName: "icon-purple",
        },
        { value: "WinForms", iconName: "winform", iconClassName: "icon-blue" },
        {
          value: "Technical Writing",
          iconName: "document",
          iconClassName: "icon-primary",
        },
      ],
    },
  ],
};
