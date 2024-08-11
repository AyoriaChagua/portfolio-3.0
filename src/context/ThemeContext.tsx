import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type ThemeContextType = {
    theme: themeMode;
    handleChangeMode: ()=> void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({children} : {children: ReactNode}) => {
    const [theme, settTheme] = useState<themeMode>("dark");

    useEffect(() => {
        if(theme === "dark") document.querySelector("html")?.classList.add("dark");
        else document.querySelector("html")?.classList.remove("dark");
    }, [theme]);

    const handleChangeMode = () => {
        settTheme(prevState => prevState === "light" ? "dark": "light");
    }
    return (
        <ThemeContext.Provider value={{theme, handleChangeMode}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if(context === undefined) throw new Error("useTheme must be used within a ThemeProvider");
    return context
}