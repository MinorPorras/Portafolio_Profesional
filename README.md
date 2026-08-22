# Portafolio Profesional — Minor Porras

[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/MinorPorras/Portafolio_Profesional)

Portafolio personal construido con **React 19 + TypeScript + Vite**, sin
librerías de UI: todo el CSS es propio. Incluye idioma **ES/EN**, tema
**claro/oscuro** y un **formulario de contacto** que envía correos mediante
una función serverless en Netlify (Resend).

**Sitio en vivo:** <https://minorporras.netlify.app>

## Estado del proyecto

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](https://minorporras.vercel.app)
![GitHub license](https://img.shields.io/github/license/MinorPorras/Portafolio_Profesional?style=for-the-badge)
![GitHub top language](https://img.shields.io/github/languages/top/MinorPorras/Portafolio_Profesional?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/MinorPorras/Portafolio_Profesional?style=for-the-badge)

## Stack tecnológico

![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-package%20manager-F69220?style=for-the-badge&logo=pnpm&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-sin%20frameworks-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-deploy-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
![Resend](https://img.shields.io/badge/Resend-email%20API-000000?style=for-the-badge)

## Features

![i18n](https://img.shields.io/badge/i18n-ES%20%7C%20EN-6F42C1?style=for-the-badge)
![Tema](https://img.shields.io/badge/🌗-claro%2Foscuro-333333?style=for-the-badge)
![Serverless](https://img.shields.io/badge/Serverless-Netlify%20Functions-00C7B7?style=for-the-badge)
![Anti-spam](https://img.shields.io/badge/Anti--spam-honeypot%20%2B%20time%20filter-red?style=for-the-badge)
![UI libs](https://img.shields.io/badge/UI%20libs-0%20dependencias-brightgreen?style=for-the-badge)
![Responsive](https://img.shields.io/badge/Responsive-mobile%20first-blue?style=for-the-badge)

## Características

- i18n bilingüe (ES/EN) mediante Context.
- Tema claro/oscuro con preferencia persistida.
- Sistema de iconos SVG propio, tipado con TypeScript (`IconName`).
- Formulario con anti-spam (honeypot + filtro de tiempo) y envío serverless.
- Diseño responsive con CSS artesanal.

## Stack

React 19 · TypeScript · Vite · pnpm · Netlify Functions · Resend

## Estructura

src/
├── components/ # Secciones de la página
│ └── common/ # Icon, CategoryFilter, GlowMouseFollower
├── context/ # ThemeContext / LanguageContext
├── data/ # Contenido separado de la vista
├── hooks/ # useLanguage, useTheme, etc.
├── styles/ # CSS por sección
└── types/ # Contratos de tipos compartidos

## Ejecución local

```bash
git clone https://github.com/MinorPorras/Portafolio_Profesional.git
cd Portafolio_Profesional/portafolio-minor
pnpm install
pnpm dev        # desarrollo
pnpm build      # producción
```

El formulario requiere la variable de entorno RESEND_API_KEY configurada en Netlify o como agregarla localmente para desarrollo en el .env.

Adicionalmente para testeos del funcionamiento de las serverless functions se debe de hacer uso del netlify-cli por medio del uso del comando:

```bash
pnpm install netlify-cli -g
netlify dev
```
