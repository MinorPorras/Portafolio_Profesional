import type { ExperienceItem } from "../types/dataTypes.ts";

export const workExperiences: ExperienceItem[] = [
  {
    id: "micitt-curriculum",
    role: {
      en: "Academic Curriculum Developer (TCU)",
      es: "Desarrollador de Currículo Académico (TCU)"
    },
    company: "MICITT CECI - Universidad Hispanoamericana",
    period: "Octubre 2024 – Junio 2025",
    description: [
      {
        en: "Design and integral creation of the study plan for a course on desktop application development in VB.NET.",
        es: "Diseño y creación integral del plan de estudios para un curso de desarrollo de aplicaciones de escritorio en VB.NET."
      },
      {
        en: "Preparation of didactic material, exams, and textbooks adapted to the institution's requirements and standards.",
        es: "Elaboración de material didáctico, exámenes y libros de texto adaptados a los requerimientos y estándares de la institución."
      },
      {
        en: "Direct coordination with program managers to ensure pedagogical and technical alignment of the content.",
        es: "Coordinación directa con los encargados del programa para garantizar la alineación pedagógica y técnica del contenido."
      }
    ]
  },
  {
    id: "dtrigo-dev",
    role: {
      en: "Junior Software Developer",
      es: "Desarrollador de Software Junior"
    },
    company: "Panadería DTrigo",
    period: "Marzo 2024 – Junio 2026",
    description: [
      {
        en: "Development, maintenance, and continuous updates of a customized billing and inventory system for the business.",
        es: "Desarrollo, mantenimiento y actualización continua de un sistema personalizado de facturación e inventario para el comercio."
      },
      {
        en: "10% increase in billing process efficiency and a 15% reduction in operational errors compared to the previous system.",
        es: "Incremento del 10% en la eficiencia del proceso de facturación y reducción del 15% en errores operativos frente al sistema anterior."
      },
      {
        en: "Optimization of operational costs, generating an annual savings exceeding ₡150,000 colones.",
        es: "Optimización de costos operativos, generando un ahorro anual superior a ₡150,000 colones."
      },
      {
        en: "Improved cash control and visibility into the overall financial status of the business.",
        es: "Mejora en el control de caja y visibilidad sobre el estado financiero general del negocio."
      } 
    ]
  }
];