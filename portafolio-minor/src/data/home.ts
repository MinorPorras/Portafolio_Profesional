import type { HomeProps } from "../types/home";

export const heroData: HomeProps = {
  greeting: {
    es: "Hola, soy Minor Porras",
    en: "Hi, I'm Minor Porras",
  },
  role: {
    es: "Estudiante de último año & Desarrollador Full-Stack (Java/Spring Boot, .NET, React) | En búsqueda de pasantía",
    en: "Final-Year CS Student & Full-Stack Developer (Java/Spring Boot, .NET, React) | Seeking International Internship",
  },
  tagline: {
    es: "Diseño APIs escalables y aplicaciones web con Clean Architecture y DDD. Con una sólida base en .NET, me especializo activamente en Java/Spring Boot para entregar soluciones empresariales robustas y código limpio.",
    en: "I build scalable APIs and web apps using Clean Architecture and DDD. With a strong .NET foundation, I am actively specializing in Java/Spring Boot to deliver robust enterprise solutions and clean code.",
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
