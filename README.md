# 💼 Professional Portfolio — Minor Porras

[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/MinorPorras/Portafolio_Profesional)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](https://minorporras.vercel.app)
![GitHub license](https://img.shields.io/github/license/MinorPorras/Portafolio_Profesional?style=for-the-badge)
![GitHub top language](https://img.shields.io/github/languages/top/MinorPorras/Portafolio_Profesional?style=for-the-badge&logo=typescript)

Welcome to the source code of my professional portfolio. This project is a high-performance, fully responsive Single Page Application (SPA) built from scratch to showcase my technical expertise, professional experience, and software engineering principles. 

Designed with a **zero-dependency UI approach** (100% custom CSS), strict TypeScript typing, and modern serverless architecture, it reflects my commitment to writing clean, maintainable, and scalable code.

🌐 **Live Demo:** [minorporras.vercel.app](https://minorporras.vercel.app)

---

## ✨ Key Features & Technical Decisions

- **Zero-Dependency UI:** Built entirely with custom CSS (no Tailwind, Bootstrap, or Material UI). This demonstrates deep mastery of modern CSS, responsive design, and performance optimization without relying on heavy third-party libraries.
- **Strict Type Safety:** Developed 100% in TypeScript. Includes a custom, strictly typed SVG icon system (using `IconName` union types) to guarantee type safety and prevent runtime errors across the entire application.
- **Advanced State Management:** Custom React Context API implementation for seamless, persistent Light/Dark theme toggling and bilingual (ES/EN) internationalization (i18n) with `localStorage` persistence.
- **Serverless Architecture:** Integrated contact form powered by Netlify Functions and the Resend API. Features robust, multi-layer anti-spam mechanisms (honeypot fields and time-based submission filtering) to ensure reliability.
- **Performance First:** Optimized for Core Web Vitals. Utilizes Vite for lightning-fast builds, code splitting, and minimal bundle size.
- **Separation of Concerns:** Content and data are strictly isolated from presentation logic, making the application highly maintainable and easy to scale.

---

## 🛠️ Tech Stack

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Custom%20No%20Frameworks-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
![Resend](https://img.shields.io/badge/Resend-000000?style=for-the-badge&logo=resend&logoColor=white)

---

## 📂 Project Structure

The codebase follows a modular, feature-based architecture to ensure scalability:
```
src/
├── components/ # Modular, reusable UI components (e.g., Icon, CategoryFilter)
├── context/ # Global state management (ThemeContext, LanguageContext)
├── data/ # Separation of concerns: content isolated from presentation logic
├── hooks/ # Custom React hooks for reusable logic (useTheme, useLanguage)
├── styles/ # Modular, section-specific CSS files
└── types/ # Shared TypeScript interfaces and strict type definitions
```
---

## 🚀 Getting Started (Local Development)

Follow these steps to run the project on your local machine.

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io/) package manager (`npm install -g pnpm`)

### 1. Clone the repository
```bash
git clone https://github.com/MinorPorras/Portafolio_Profesional.git
cd Portafolio_Profesional/portafolio-minor
```
### 2. Install dependencies
```bash
pnpm install
```
### 3. Configure Environment Variables
Create a .env file in the root directory and add your Resend API key (required for the contact form to function locally):
```
RESEND_API_KEY=your_resend_api_key_here
```
### 4. Run Development Server
```bash
pnpm install
```
The application will be available at http://localhost:5173.
### 5. Testing Serverless Functions Locally (Optional)
To test the Netlify Functions (contact form) locally, install the Netlify CLI and run:
```bash
pnpm install -g netlify-cli
netlify dev
```
### 6. Build for Production
```bash
pnpm build
pnpm preview
```
## 🤝 Contributing & Feedback
Although this is a personal portfolio project, I am always open to feedback, suggestions, or discussions about clean code and architecture. Feel free to open an Issue or a Pull Request.

💡 Developed with ❤️, strict TypeScript, and lots of ☕ by [Minor Porras](https://github.com/MinorPorras)  
> [LinkedIn](https://www.linkedin.com/in/minor-porras/) | [Live Portfolio](https://minorporras.vercel.app)




