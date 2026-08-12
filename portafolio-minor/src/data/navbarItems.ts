import type { NavbarItem } from "../types/common";

export const navbarItems: NavbarItem[] = [
    {
        name: {
            en: "Home",
            es: "Inicio"
        },
        href: "#home"
    },
    {
        name: {
            en: "About me",
            es: "Sobre mi"
        },
        href: "#aboutMe"
    },
    {
        name: {
            en: "Experience",
            es: "Experiencia"
        },
        href: "#experience"
    },      
    {
        name: {
            en: "Projects",
            es: "Proyectos"
        },
        href: "#projects"
    },
    {
        name: {
            en: "Skills",
            es: "Habilidades"
        },
        href: "#skills"
    },
    {
        name: {
            en: "Contact",
            es: "Contacto"
        },
        href: "#contact"
    }
]

export default navbarItems;