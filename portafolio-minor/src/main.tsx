import App from "./App.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { LanguageProvider } from "./context/LanguageContext.tsx";
import { ErrorBoundary } from "./components/common/ErroBoundary.tsx";

import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <LanguageProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  </StrictMode>,
);
