import { createContext, useContext } from "react";
import type { Language } from "../types/common";


export interface LanguageContextProps {
    language: Language;
    toggleLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context){
        throw new Error("useLanguage debe de ser usado dentro de un LanguageProvider")
    }
    return context;
}