import type { AboutData } from "../types/about";

export const aboutData: AboutData = {
  title: {
    es: "Sobre Mí",
    en: "About Me"
  },
  // Dividido en párrafos para fácil renderizado (<p>{paragraph[language]}</p>)
  paragraphs: [
    {
      es: "Soy estudiante de Ingeniería en Informática en la Universidad Hispanoamericana y Desarrollador .NET Junior. Me apasiona transformar requerimientos complejos en aplicaciones funcionales, estructuradas y mantenibles, utilizando principalmente C#, .NET Core, ASP.NET y React.",
      en: "I am a Computer Science student at Universidad Hispanoamericana and a Junior .NET Developer. I am passionate about turning complex requirements into functional, structured, and maintainable applications, mainly using C#, .NET Core, ASP.NET, and React."
    },
    {
      es: "Tengo experiencia en el diseño y desarrollo de software tanto web como de escritorio (WinForms con suites como Syncfusion y GUNA2), integrando arquitecturas sólidas de bases de datos relacionales con SQL Server, Oracle DB y PostgreSQL.",
      en: "I have experience designing and developing both web and desktop software (WinForms with suites like Syncfusion and GUNA2), integrating solid relational database architectures using SQL Server, Oracle DB, and PostgreSQL."
    },
    {
      es: "Me destaco por mi capacidad de rápida adaptación a nuevos entornos tecnológicos y metodologías ágiles. Valoro el trabajo en equipo, la comunicación asertiva y la resolución estructurada de problemas en cada proyecto que emprendo.",
      en: "I stand out for my ability to quickly adapt to new tech environments and agile methodologies. I value teamwork, assertive communication, and structured problem-solving in every project I undertake."
    }
  ],
  // Puntos clave para mostrar en formato de badges o tarjetas cortas al lado de la bio
  quickFacts: [
    {
      iconName: "location",
      value: { es: "San José, Costa Rica", en: "San José, Costa Rica"}
    },
    {
      iconName: "education",
      value: { es: "Ingeniería en Informática (En curso)", en: "B.S. in Computer Science (In progress)" }
    },
    {
      iconName: "languages",
      value: { es: "B2 (Intermedio Alto)", en: "B2 (Upper-Intermediate)" }
    }
  ]
};

export default aboutData;