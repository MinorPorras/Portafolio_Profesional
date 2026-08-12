# 💼 Portafolio Profesional — Minor Porras

Portafolio personal construido con **React 19 + TypeScript + Vite**, sin
librerías de UI: todo el CSS es propio. Incluye idioma **ES/EN**, tema
**claro/oscuro** y un **formulario de contacto** que envía correos mediante
una función serverless en Netlify (Resend).

🔗 **Sitio en vivo:** <https://minorporras.netlify.app>

## ✨ Características

- i18n bilingüe (ES/EN) mediante Context.
- Tema claro/oscuro con preferencia persistida.
- Sistema de iconos SVG propio, tipado con TypeScript (`IconName`).
- Formulario con anti-spam (honeypot + filtro de tiempo) y envío serverless.
- Diseño responsive con CSS artesanal.

## Stack

React 19 · TypeScript · Vite · pnpm · Netlify Functions · Resend

## Estructura

src/
├── components/   # Secciones de la página
│   └── common/   # Icon, CategoryFilter, GlowMouseFollower
├── context/      # ThemeContext / LanguageContext
├── data/         # Contenido separado de la vista
├── hooks/        # useLanguage, useTheme, etc.
├── styles/       # CSS por sección
└── types/        # Contratos de tipos compartidos

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

``` bash
pnpm install netlify-cli -g
netlify dev
```
