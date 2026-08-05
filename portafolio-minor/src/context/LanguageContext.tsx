import { useEffect, useState } from "react";
import { LanguageContext } from "../hooks/useLanguage";
import type { Language } from "../types";


export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>(() => {
        const saved = localStorage.getItem("language") as Language;
        if (saved && (saved === "en" || saved === "es")) {
            return saved;
        }
        return "es";
    });

    useEffect(() => {
        localStorage.setItem("language", language);
        document.documentElement.setAttribute("lang", language);
    }, [language]);

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "en" ? "es" : "en"));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}