import type { Project } from "../types/project";
import sfCommonFull from "../assets/projectImages/sfCommonFull.avif";
import sfCommonThumbnail from "../assets/projectImages/sfCommonThumbnail.avif";
import lpCondoBazuFull from "../assets/projectImages/lpCondoBazuFull.avif";
import tecnoCoreFull from "../assets/projectImages/tecnoCoreFull.avif";
import preguntadosFull from "../assets/projectImages/preguntadosFull.avif";
import projectImageFallback from "../assets/projectImages/projectImageFallback.svg";

export const projects: Project[] = [
  {
    id: "Sistema-Facturacion-Common",
    title: {
      en: "Common Billing System",
      es: "Sistema de Facturación Common",
    },
    description: {
      en: "Billing and inventory system in production (21 releases) for D'Trigo Bakery. Manages POS, cash registers, accounts receivable, and PDF reports, achieving a 10% increase in efficiency and a 15% reduction in operational errors.",
      es: "Sistema de facturación e inventario en producción (21 releases) para D'Trigo Panadería. Gestiona puntos de venta, arqueos de caja, cuentas por cobrar y reportes PDF, logrando un aumento del 10% en eficiencia y reducción del 15% en errores operativos.",
    },
    imageLocation: sfCommonThumbnail,
    imageFullLocation: sfCommonFull,
    techStack: [
      {
        value: "VB.NET",
        iconName: "vbnet",
        iconClassName: "icon-purple",
      },
      {
        value: "SQLite",
        iconName: "sqlite",
        iconClassName: "icon-cyan",
      },
      {
        value: "WinForms",
        iconName: "winform",
        iconClassName: "icon-cyan",
      },
      {
        value: "Syncfusion",
        iconName: "syncfusion",
        iconClassName: "icon-blue",
      },
      {
        value: "GUNA2",
        iconName: "guna",
        iconClassName: "icon-purple",
      },
      {
        value: "Velopack",
        iconName: "velopack",
        iconClassName: "icon-yellow",
      },
    ],
    githubUrl: "https://github.com/MinorPorras/SistemaFacturacionCommon",
    liveDemoUrl: "",
    featured: true,
    categories: ["desktop", "fullstack"],
    state: {
      es: "completado",
      en: "completed",
    },
  },
  {
    id: "Landing-Condo-bazu",
    title: {
      en: "Landing page Condominio Bazú",
      es: "Página de destino Condominio Bazú",
    },
    description: {
      en: "Responsive SPA optimized for SEO and conversion with Bootstrap 5 components customized for the client's brand identity. Features fluid GSAP animations, multi-language support (ES/EN), and a functional contact form with form validation.",
      es: "SPA responsive optimizada para SEO y conversión con componentes de Bootstrap 5 personalizados según la identidad de marca del cliente. Incluye animaciones fluidas con GSAP, soporte multi-idioma (ES/EN) y formulario de contacto funcional con validación.",
    },
    imageLocation: lpCondoBazuFull,
    techStack: [
      {
        value: "React",
        iconName: "react",
        iconClassName: "icon-cyan",
      },
      {
        value: "TypeScript",
        iconName: "typescript",
        iconClassName: "icon-blue",
      },
      {
        value: "Vite",
        iconName: "vite",
        iconClassName: "icon-blue",
      },
      {
        value: "HTML5",
        iconName: "html5",
        iconClassName: "icon-orange",
      },
      {
        value: "CSS3",
        iconName: "css3",
        iconClassName: "icon-blue",
      },
      {
        value: "Bootstrap",
        iconName: "bootstrap",
        iconClassName: "icon-purple",
      },
      {
        value: "GSAP",
        iconName: "gsap",
        iconClassName: "icon-primary",
      },
      {
        value: "Vercel",
        iconName: "vercel",
        iconClassName: "icon-blwh",
      },
      {
        value: "Posthog",
        iconName: "posthog",
        iconClassName: "icon-blue",
      },
    ],
    githubUrl: "https://github.com/MinorPorras/LP_Condominio_Bazu",
    liveDemoUrl: "https://condominiobazu.netlify.app/",
    featured: true,
    categories: ["frontend", "web"],
    state: {
      es: "completado",
      en: "completed",
    },
  },
  {
    id: "tecnocore-sales-inventory",
    title: {
      en: "Tecno Core",
      es: "Tecno Core",
    },
    description: {
      en: "Clean full-stack architecture with secure authentication (JWT) and role management (Admin/Client). Implementation of repository patterns, shopping cart, and automated database migrations with EF Core and .NET 9.",
      es: "Arquitectura limpia full-stack con autenticación segura (JWT) y gestión de roles (Admin/Cliente). Implementación de patrones de repositorio, carrito de compras y migraciones de base de datos automatizadas con EF Core y .NET 9.",
    },
    imageLocation: tecnoCoreFull,
    techStack: [
      {
        value: ".NET Core",
        iconName: "dotnet",
        iconClassName: "icon-purple",
      },
      {
        value: "EF Core",
        iconName: "efcore",
        iconClassName: "icon-purple",
      },
      {
        value: "SQL Server",
        iconName: "sqlserver",
        iconClassName: "icon-cyan",
      },
      {
        value: "Bootstrap",
        iconName: "bootstrap",
        iconClassName: "icon-purple",
      },
      {
        value: "jQuery",
        iconName: "jquery",
        iconClassName: "icon-blue",
      },
      {
        value: "C#",
        iconName: "csharp",
        iconClassName: "icon-purple",
      },
    ],
    githubUrl: "https://github.com/MinorPorras/TecnoCore-VentasDeElectronicos",
    liveDemoUrl: "",
    featured: true,
    categories: ["fullstack", "web"],
    state: {
      es: "completado",
      en: "completed",
    },
  },
  {
    id: "pf-preguntados",
    title: {
      en: "PF Preguntados",
      es: "PF Preguntados",
    },
    description: {
      en: "Educational trivia platform with multimedia support and Role-Based Access Control (RBAC). Automation of detailed academic reports (Word/Excel/PDF) via MS Office Interop for performance analysis.",
      es: "Plataforma de trivia educativa con soporte multimedia y sistema de control de acceso basado en roles (RBAC). Automatización de reportes académicos detallados (Word/Excel/PDF) mediante MS Office Interop para análisis de rendimiento.",
    },
    imageLocation: preguntadosFull,
    techStack: [
      {
        value: "VB.NET",
        iconName: "vbnet",
        iconClassName: "icon-purple",
      },
      {
        value: ".NET Framework",
        iconName: "netframework",
        iconClassName: "icon-purple",
      },
      {
        value: "WinForms",
        iconName: "winform",
        iconClassName: "icon-cyan",
      },
      {
        value: "Microsoft Access",
        iconName: "access",
        iconClassName: "icon-red",
      },
      {
        value: "OLEDB / ODBC",
        iconName: "oledb",
        iconClassName: "icon-blue",
      },
      {
        value: "MS Office Interop",
        iconName: "officeinterop",
        iconClassName: "icon-orange",
      },
    ],
    githubUrl: "https://github.com/MinorPorras/PF_Preguntados",
    featured: true,
    categories: ["desktop"],
    state: {
      es: "completado",
      en: "completed",
    },
  },
  {
    id: "arcon-erp",
    title: {
      en: "Arcon ERP",
      es: "Arcon ERP",
    },
    description: {
      en: "Modular ERP system focused on centralized inventory management, electronic invoicing, and administrative control. Designed under clean architecture and high availability principles.",
      es: "Sistema ERP modular enfocado en la gestión centralizada de inventarios, facturación electrónica y control administrativo. Diseñado bajo arquitectura limpia y principios de alta disponibilidad.",
    },
    imageLocation: projectImageFallback,
    techStack: [
      {
        value: "C#",
        iconName: "csharp",
        iconClassName: "icon-purple",
      },
      {
        value: ".NET Core",
        iconName: "dotnet",
        iconClassName: "icon-purple",
      },
      {
        value: "SQLite",
        iconName: "sqlite",
        iconClassName: "icon-cyan",
      },
      {
        value: "PostgreSQL",
        iconName: "postgresql",
        iconClassName: "icon-blue",
      },
      {
        value: "Blazor",
        iconName: "blazor",
        iconClassName: "icon-purple",
      },
    ],
    state: {
      es: "planeado",
      en: "planned",
    },
    featured: false,
    categories: ["fullstack", "desktop"],
  },
  {
    id: "lime-music",
    title: {
      en: "Lime Music",
      es: "Lime Music",
    },
    description: {
      en: "Music player and local library manager with an integrated interactive virtual pet. Offers multi-platform support, audio metadata reading, device library synchronization, synchronized lyrics, and a personalized user experience.",
      es: "Reproductor de música y gestor de biblioteca local con mascota virtual interactiva integrada. Ofrece soporte multiplataforma, lectura de metadatos de audio, sincronización de bibliotecas, letras sincronizadas y experiencia personalizada.",
    },
    imageLocation: projectImageFallback,
    techStack: [
      {
        value: "C#",
        iconName: "csharp",
        iconClassName: "icon-purple",
      },
      {
        value: ".NET Core",
        iconName: "dotnet",
        iconClassName: "icon-purple",
      },
      {
        value: "Avalonia",
        iconName: "avalonia",
        iconClassName: "icon-purple",
      },
    ],
    featured: false,
    categories: ["fullstack", "desktop"],
    state: {
      es: "planeado",
      en: "planned",
    },
  },
];
