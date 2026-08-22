import App from "./App.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { LanguageProvider } from "./context/LanguageContext.tsx";
import { ErrorBoundary } from "./components/common/ErroBoundary.tsx";
import { initAnalytics } from "./lib/analytics.ts";
import { injectSpeedInsights } from "@vercel/speed-insights";


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

injectSpeedInsights();

window.addEventListener(
  "load",
  () => {
    const startPostHog = () => initAnalytics();

    if ("requestIdleCallback" in window){
      window.requestIdleCallback(startPostHog, {timeout: 2000});
    } else{
      //Fallback para safari
      setTimeout(startPostHog, 0);
    }
  },
  {once: true}
)