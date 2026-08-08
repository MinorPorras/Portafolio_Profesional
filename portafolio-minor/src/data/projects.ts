import type { Project } from "../types/project";


export const projects: Project[] = [
    {
        id: "Sistema-Facturacion-Common",
        title: {
            en: "Common Billing System",
            es: "Sistema de Facturación Common"
        },
        description: {
            en: "Common Billing System developed for Dtrigo Bakery, allowing complete management of sales points, cash flows, invoice printing and more. As well as inventory control and customer/supplier management, label printing and many customization options.",
            es: "Sistema ERP de facturación desarrollado para el comercio Dtrigo Panadería, que permite la gestión completa de puntos de ventas, flujos de cajas, impresion de facturas y más. Así como el control de inventarios y la gestión de clientes y proveedores, impresión de etiquetas y muchas opciones de personalización."
        },
        techStack: ["VB.NET", "SQLite", "Windows Forms", "SyncFusion", "Velopack"],
        githubUrl: "https://github.com/MinorPorras/SistemaFacturacionCommon",
        liveDemoUrl: '',
        featured: true,
        category: "fullstack",
        state: {
            es: "completado",
            en: "completed"
        }
    },
    {
        id: "Landing-Condo-bazu",
        title: {
            en: "Landing page Condominio Bazú",
            es: "Página de destino Condominio Bazú"
        },
        description: {
            en: "This is a project for a landing page for a condominium, with the main objective of displaying relevant information about the condominium, its services and characteristics. The landing page is designed to be attractive and easy to navigate, with a focus on the user experience. Additionally, it features translation functions to English and Spanish, as well as a contact form for users to submit queries or information requests.",
            es: "Se trata de un proyecto de una landing page para un condominio, que tiene como objetivo principal mostrar información relevante sobre el condominio, sus servicios y características. La landing page está diseñada para ser atractiva y fácil de navegar, con un enfoque en la experiencia del usuario. Además presenta funciones de traducción al inglés y español, así como un formulario de contacto para que los usuarios puedan enviar consultas o solicitudes de información."
        },
        techStack: ["React", "TypeScript", "Vite", "HTML5", "CSS3", "Bootstrap", "GSAP"],
        githubUrl: "https://github.com/MinorPorras/LP_Condominio_Bazu",
        liveDemoUrl: "https://condominiobazu.netlify.app/",
        featured: false,
        category: "frontend",
        state: {
            es: "completado",
            en: "completed"
        }
    },
    {
        id: 'tecnocore-sales-inventory',
        title: {
            en: "Tecno Core - Sales and Inventory System",
            es: "Tecno Core - Sistema de Ventas e Inventario"
        },
        description: {
            en: "Integral web application for managing sales points (POS), inventory control, and e-commerce. Includes a shopping cart module, user/role management, product catalog, and statistical administration dashboard.",
            es: "Aplicación web integral para la gestión de puntos de venta (POS), control de inventario y comercio electrónico. Incluye módulo de carrito de compras, gestión de usuarios/roles, catálogo de productos y dashboard estadístico de administración."
        },
        techStack: ['.NET 9', 'ASP.NET Core MVC', 'EF Core', 'SQL Server', 'Bootstrap 5', 'jQuery', 'C#'],
        githubUrl: 'https://github.com/MinorPorras/TecnoCore-VentasDeElectronicos',
        liveDemoUrl: '',
        featured: true,
        category: 'fullstack',
        state: {
            es: "completado",
            en: "completed"
        }
    },
    {
        id: "pf-preguntados",
        title: {
            en: "PF Preguntados - Sistema Evaluativo Trivia",
            es: "PF Preguntados - Sistema Evaluativo Trivia"
        },
        description: {
            en: "Desktop application for academic evaluations in trivia format. It includes role management (teacher/student), audio support (.wav), permission control, and report generation in Word and Excel integrated with MS Access.",
            es: "Aplicación de escritorio para evaluaciones académicas en formato trivia. Cuenta con gestión de roles (docente/estudiante), soporte de audio (.wav), control de permisos y generación de reportes en Word y Excel integrados con MS Access."
        },
        techStack: [
            "VB.NET",
            ".NET / WinForms",
            "Microsoft Access",
            "OLEDB / ODBC",
            "MS Office Interop"
        ],
        githubUrl: "https://github.com/MinorPorras/PF_Preguntados", // Reemplaza con la URL de tu repositorio
        featured: true,
        category: "desktop",
        state: {
            es: "completado",
            en: "completed"
        }
    },
    {
        id: 'arcon-erp',
        title: {
            en: "Arcon - Enterprise Resource Planning",
            es: "Arcon - Planificación de Recursos Empresariales"
        },
        description: {
            en: "Modular ERP system focused on centralized inventory management, electronic invoicing, and administrative control. Designed under a clean architecture and principles of high availability.",
            es: "Sistema ERP modular enfocado en la gestión centralizada de inventarios, facturación electrónica y control administrativo. Diseñado bajo arquitectura limpia y principios de alta disponibilidad."
        },
        techStack: ['C#', '.NET', 'SQLite / PostgreSQL', 'React / WinForms'],
        state: {
            es: "planeado",
            en: "planned"
        },
        featured: true,
        category: 'fullstack',
    },
    {
        id: 'lime-music',
        title: {
            en: "Lime Music",
            es: "Lime Music"
        },
        description: {
            en: "Music player and local library manager with an integrated interactive virtual pet. Offers multi-platform support, audio metadata reading, library synchronization between devices, synchronized lyrics, and a personalized user experience.",
            es: "Reproductor de música y gestor de biblioteca local con una mascota virtual interactiva integrada. Ofrece soporte multiplataforma, lectura de metadatos de audio, sincronización de bibliotecas entre dispositivos, letras sincronizadas y una experiencia de usuario personalizada."
        },
        techStack: ['C#', '.NET', 'Avalonia UI', 'Audio APIs'],
        featured: false,
        category: 'fullstack',
                state: {
            es: "planeado",
            en: "planned"
        },
    },
]