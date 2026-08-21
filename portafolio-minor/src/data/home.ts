import type { HomeProps } from "../types/home";

export const heroData: HomeProps = {
  greeting: {
    es: "Hola, soy Minor Porras",
    en: "Hi, I'm Minor Porras",
  },
  role: {
    es: "Desarrollador .NET & Full-Stack Junior",
    en: "Junior .NET & Full-Stack Developer",
  },
  tagline: {
    es: "Desarrollo soluciones full-stack de principio a fin (C#, VB.NET, React). Enfocado en la optimización de procesos, código limpio y la reducción de errores operativos para generar impacto real.",
    en: "I build end-to-end full-stack solutions (C#, VB.NET, React). Focused on process optimization, clean code, and reducing operational errors to deliver real business impact.",
  },
  redes: [
    {
      platform: "github",
      url: "https://github.com/MinorPorras",
      iconName: "github",
      iconColorClass: "icon-blwh",
      user: "MinorPorras",
    },
    {
      platform: "linkedin",
      url: "https://www.linkedin.com/in/minor-porras/",
      iconName: "linkedin",
      iconColorClass: "icon-cyan",
      user: "Minor Porras",
    },
  ],
  ctaButtons: {
    primary: {
      es: "Ver Proyectos",
      en: "View Projects",
    },
    secondary: {
      es: "Descargar CV",
      en: "Download CV",
    },
    contact: {
      es: "Contactar",
      en: "Contact Me",
    },
  },
};
