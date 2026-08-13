import type { Project } from "../types/project";
import sfCommonImage from "../assets/projectImages/sfCommonImage.avif";
import lpCondoBazuImage from "../assets/projectImages/lpCondoBazuImage.avif";
import tecnoCoreImage from "../assets/projectImages/tecnoCoreImage.avif";
import preguntadosImage from "../assets/projectImages/preguntadosImage.avif";
import projectImageFallback from "../assets/projectImages/projectImageFallback.svg";

export const projects: Project[] = [
  {
    id: "Sistema-Facturacion-Common",
    title: {
      en: "Common Billing System",
      es: "Sistema de Facturación Common",
    },
    description: {
      en: "Common Billing System developed for Dtrigo Bakery, allowing complete management of sales points, cash flows, invoice printing and more. As well as inventory control and customer/supplier management, label printing and many customization options.",
      es: "Sistema ERP de facturación desarrollado para el comercio Dtrigo Panadería, que permite la gestión completa de puntos de venta, flujos de caja, impresión de facturas, control de inventarios, gestión de clientes/proveedores e impresión de etiquetas con múltiples opciones de personalización.",
    },
    imageLocation: sfCommonImage,
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
      en: "This is a project for a landing page for a condominium, with the main objective of displaying relevant information about the condominium, its services and characteristics. The landing page is designed to be attractive and easy to navigate, with a focus on the user experience. Additionally, it features translation functions to English and Spanish, as well as a contact form for users to submit queries or information requests.",
      es: "Landing page para un condominio enfocada en presentar sus servicios, características e información relevante con un diseño atractivo e intuitivo. Incluye soporte multi-idioma (español e inglés) y formulario de contacto funcional.",
    },
    imageLocation: lpCondoBazuImage,
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
      en: "Integral web application for managing sales points (POS), inventory control, and e-commerce. Includes a shopping cart module, user/role management, product catalog, and statistical administration dashboard.",
      es: "Aplicación web integral para la gestión de puntos de venta (POS), control de inventario y comercio electrónico. Incluye módulo de carrito de compras, gestión de usuarios/roles, catálogo de productos y dashboard estadístico de administración.",
    },
    imageLocation: tecnoCoreImage,
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
      en: "Desktop application for academic evaluations in trivia format. It includes role management (teacher/student), audio support (.wav), permission control, and report generation in Word and Excel integrated with MS Access.",
      es: "Aplicación de escritorio para evaluaciones académicas en formato trivia. Cuenta con gestión de roles (docente/estudiante), soporte de audio (.wav), control de permisos y generación de reportes en Word y Excel integrados con MS Access.",
    },
    imageLocation: preguntadosImage,
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
        value: "React",
        iconName: "react",
        iconClassName: "icon-cyan",
      },
      {
        value: "WinForms",
        iconName: "winform",
        iconClassName: "icon-cyan",
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
