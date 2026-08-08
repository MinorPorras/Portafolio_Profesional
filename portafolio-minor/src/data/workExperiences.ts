import type { experience } from "../types/experience.ts";

export const experienceData: experience = {
  title: {
    es: "Experiencia laboral",
    en: "Work experience",
  },
  items: [
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
          en: "Design and integral creation of the study plan for a course on desktop application development in VB.NET.",
          es: "Diseño y creación integral del plan de estudios para un curso de desarrollo de aplicaciones de escritorio en VB.NET.",
        },
        {
          en: "Preparation of didactic material, exams, and textbooks adapted to the institution's requirements and standards.",
          es: "Elaboración de material didáctico, exámenes y libros de texto adaptados a los requerimientos y estándares de la institución.",
        },
        {
          en: "Direct coordination with program managers to ensure pedagogical and technical alignment of the content.",
          es: "Coordinación directa con los encargados del programa para garantizar la alineación pedagógica y técnica del contenido.",
        },
      ],
      techPills: [
        {
          value: "VB.NET",
          className: "simple-techPill-vbnet",
        },
        {
          value: "Visual Studio",
          className: "simple-techPill-visualstudio",
        },
        {
          value: "NuGet",
          className: "simple-techPill-nuget",
        },
        {
          value: "WinForms",
          className: "simple-techPill-winform",
        },
      ],
    },
    {
      id: "dtrigo-dev",
      role: {
        en: "Junior Software Developer",
        es: "Desarrollador de Software Junior",
      },
      company: "Panadería DTrigo",
      period: {
        es: "Marzo 2024 – Junio 2026",
        en: "March 2024 - June 2026",
      },
      description: [
        {
          en: "Development, maintenance, and continuous updates of a customized billing and inventory system for the business.",
          es: "Desarrollo, mantenimiento y actualización continua de un sistema personalizado de facturación e inventario para el comercio.",
        },
        {
          en: "10% increase in billing process efficiency and a 15% reduction in operational errors compared to the previous system.",
          es: "Incremento del 10% en la eficiencia del proceso de facturación y reducción del 15% en errores operativos frente al sistema anterior.",
        },
        {
          en: "Optimization of operational costs, generating an annual savings exceeding ₡150,000 colones.",
          es: "Optimización de costos operativos, generando un ahorro anual superior a ₡150,000 colones.",
        },
        {
          en: "Improved cash control and visibility into the overall financial status of the business.",
          es: "Mejora en el control de caja y visibilidad sobre el estado financiero general del negocio.",
        },
      ],
      techPills: [
        {
          value: "VB.NET",
          className: "simple-techPill-vbnet",
        },
        {
          value: "C#",
          className: "simple-techPill-csharp",
        },
        {
          value: "Visual Studio",
          className: "simple-techPill-visualstudio",
        },
        {
          value: "NuGet",
          className: "simple-techPill-nuget",
        },
        {
          value: "WinForms",
          className: "simple-techPill-winform",
        },
        {
          value: "Velopack",
          className: "simple-techPill-velopack",
        },
        {
          value: "GUNA2",
          className: "simple-techPill-guna",
        },
        {
          value: "Syncfusion",
          className: "simple-techPill-syncfusion",
        },
        {
          value: "SQLite",
          className: "simple-techPill-sqlite",
        },
      ],
    },
  ],
};
