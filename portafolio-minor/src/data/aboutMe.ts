import type { AboutData } from "../types/about";

export const aboutData: AboutData = {
  title: {
    es: "Sobre Mí",
    en: "About Me",
  },
  // Dividido en párrafos para fácil renderizado (<p>{paragraph[language]}</p>)
  paragraphs: [
    {
      es: "Soy estudiante de último año de Ingeniería en Informática en la Universidad Hispanoamericana y Desarrollador Full-Stack con experiencia en soluciones empresariales. Me apasiona construir APIs escalables y aplicaciones web aplicando Clean Architecture y DDD. Con una sólida base en el ecosistema .NET (C#), me estoy especializando activamente en Java y Spring Boot para entregar soluciones robustas y prepararme para roles en equipos de desarrollo globales.",
      en: "I am a final-year Computer Science student at Universidad Hispanoamericana and a Full-Stack Developer with experience in enterprise solutions. I am passionate about building scalable APIs and web applications applying Clean Architecture and DDD. With a strong foundation in the .NET ecosystem (C#), I am actively specializing in Java and Spring Boot to deliver robust solutions and prepare for roles in global development teams.",
    },
    {
      es: "Cuento con experiencia comprobada en el desarrollo de software empresarial (sistemas de facturación e inventario) y aplicaciones web modernas. Mi enfoque va más allá de que el código funcione: busco optimizar procesos (logrando mejoras del 10% en eficiencia y reducción del 15% en errores operativos) e integrar arquitecturas sólidas con diversos motores de bases de datos como PostgreSQL, SQL Server y SQLite.",
      en: "I have proven experience in developing enterprise software (billing and inventory systems) and modern web applications. My focus goes beyond making code work: I aim to optimize processes (achieving 10% efficiency improvements and 15% operational error reduction) and integrate solid architectures with diverse database engines like PostgreSQL, SQL Server, and SQLite.",
    },
    {
      es: "Me destaco por mi rápida adaptación a nuevos entornos tecnológicos y stacks de desarrollo. Valoro el trabajo en equipo, la comunicación asertiva en entornos bilingües y la resolución estructurada de problemas, buscando siempre entregar valor real y medible, con el objetivo de crecer profesionalmente en una pasantía internacional.",
      en: "I stand out for my rapid adaptation to new tech environments and development stacks. I value teamwork, assertive communication in bilingual settings, and structured problem-solving, always aiming to deliver real, measurable value, with the goal of growing professionally in an international internship.",
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
        es: "Último año de Ingeniería en Informática (Graduación 2027)",
        en: "Final-Year B.S. in Computer Science (Expected 2027)",
      },
    },
    {
      iconName: "languages",
      value: {
        es: "Inglés B2 (Competencia Profesional)",
        en: "English B2 (Professional Working Proficiency)",
      },
    },
  ],
};

export default aboutData;