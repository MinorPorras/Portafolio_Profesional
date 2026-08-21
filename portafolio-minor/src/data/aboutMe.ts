import type { AboutData } from "../types/about";

export const aboutData: AboutData = {
  title: {
    es: "Sobre Mí",
    en: "About Me",
  },
  // Dividido en párrafos para fácil renderizado (<p>{paragraph[language]}</p>)
  paragraphs: [
    {
      es: "Soy estudiante de Ingeniería en Informática en la Universidad Hispanoamericana y Desarrollador .NET Junior con ~3 años de experiencia combinada. Me apasiona construir soluciones full-stack de principio a fin, transformando necesidades de negocio en aplicaciones funcionales, escalables y de código limpio, utilizando C#, .NET, React y TypeScript.",
      en: "I am a Computer Science student at Universidad Hispanoamericana and a Junior .NET Developer with ~3 years of combined experience. I am passionate about building end-to-end full-stack solutions, turning business needs into functional, scalable, and clean-code applications using C#, .NET, React, and TypeScript.",
    },
    {
      es: "Cuento con experiencia comprobada en el desarrollo de software empresarial (sistemas de facturación e inventario) y web moderno. Mi enfoque va más allá de que el código funcione: busco optimizar procesos (logrando mejoras del 10% en eficiencia y reducción del 15% en errores) e integrar arquitecturas sólidas con diversos motores de bases de datos como SQL Server, PostgreSQL, Oracle Database y SQLite.",
      en: "I have proven experience in developing enterprise software (billing and inventory systems) and modern web applications. My focus goes beyond making code work: I aim to optimize processes (achieving 10% efficiency improvements and 15% error reduction) and integrate solid architectures with diverse database engines like SQL Server, PostgreSQL, Oracle Database and SQLite.",
    },
    {
      es: "Me destaco por mi rápida adaptación a nuevos entornos tecnológicos y mi compromiso con las metodologías ágiles (Scrum, Kanban). Valoro el trabajo en equipo, la comunicación asertiva y la resolución estructurada de problemas para entregar valor real y medible en cada proyecto que emprendo.",
      en: "I stand out for my rapid adaptation to new tech environments and my commitment to agile methodologies (Scrum, Kanban). I value teamwork, assertive communication, and structured problem-solving to deliver real, measurable value in every project I undertake.",
    },
  ],
  // Puntos clave para mostrar en formato de badges o tarjetas cortas al lado de la bio
  quickFacts: [
    {
      iconName: "location",
      value: {
        es: "Escazú, San José, Costa Rica",
        en: "Escazú, San José, Costa Rica",
      },
    },
    {
      iconName: "education",
      value: {
        es: "Ingeniería en Informática 2022–2027 (En curso)",
        en: "B.S. in Computer Science 2022–2027 (In progress)",
      },
    },
    {
      iconName: "languages",
      value: {
        es: "Inglés B2 (Intermedio Alto)",
        en: "English B2 (Upper-Intermediate)",
      },
    },
  ],
};

export default aboutData;
