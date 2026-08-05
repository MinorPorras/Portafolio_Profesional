import type { ProfileInfo } from "../types/dataTypes.ts";

export const profileData: ProfileInfo = {
  name: "Minor Porras Quirós",
  role: {
    es: "Desarrollador de Software",
    en: "Software Developer"
  },
  location: "Costa Rica, San José, Escazú, San Antonio",
  about: {
    es: "Desarrollador .NET Junior con experiencia en la construcción de aplicaciones de escritorio y web utilizando WinForms, .NET Core y ASP.NET. Apasionado por el diseño de interfaces de usuario funcionales e intuitivas y la aplicación de metodologías ágiles. Destaco por mi capacidad de rápida adaptación a distintos entornos tecnológicos, marcos de trabajo y dinámicas de equipo.",
    en: "Junior .NET Developer with experience in building desktop and web applications using WinForms, .NET Core, and ASP.NET. Passionate about designing functional and intuitive user interfaces and applying agile methodologies. I excel in quickly adapting to different technological environments, frameworks, and team dynamics."
  },
  email: "minorp1415@protonmail.com",
  phone: "+506 8360 2296",
  github: "https://github.com/MinorPorras",
  education: [
    {
      degree: {
        es: "Ingeniero en Informática",
        en: "Bachelor of Science in Computer Science"
      },
      institution: "Universidad Hispanoamericana",
      period: {
        es: "2022 - Actualidad",
        en: "2022 - Present"
      }
    }
  ],
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "B2" }
  ],
  resumeUrl: "../../public/documents/CurriculumMinorPorras.pdf"
};