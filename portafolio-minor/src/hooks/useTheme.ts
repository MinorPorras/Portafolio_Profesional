import { createContext, useContext } from "react";
import type { Theme } from "../types/common";

export interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context){
        throw new Error("useTheme debe de ser usado dentro de un ThemeProvider")
    }
    return context;
}