import { GithubIcon } from "../components/icons/GithubIcon";
import { LinkedinIcon } from "../components/icons/linkedinIcon";
import type { HomeProps } from "../types/dataTypes";

export const heroData: HomeProps = {
  greeting: {
    es: "Hola, soy Minor Porras",
    en: "Hi, I'm Minor Porras"
  },
  role: {
    es: "Desarrollador de Software",
    en: "Software Developer"
  },
  tagline: {
    es: "Especializado en el ecosistema .NET, desarrollo web y de escritorio. Construyo soluciones escalables enfocadas en rendimiento e interfaces intuitivas.",
    en: "Specialized in the .NET ecosystem, web, and desktop development. Building scalable solutions with a focus on performance and intuitive user interfaces."
  },
  redes: [
    {
        platform: 'github',
        url: "https://github.com/MinorPorras",
        Icon: GithubIcon,
        user: "MinorPorras"
    },
    {
        platform: 'linkedin',
        url: "https://www.linkedin.com/in/minor-porras-266372311/",
        Icon: LinkedinIcon,
        user: "Minor Porras Varela"
    }
  ],
  ctaButtons: {
    primary: {
      es: "Ver Proyectos",
      en: "View Projects"
    },
    secondary: {
      es: "Descargar CV",
      en: "Download CV"
    },
    contact: {
      es: "Contactar",
      en: "Contact Me"
    }
  }
};




