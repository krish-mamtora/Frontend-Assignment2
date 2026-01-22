import { createContext , useState , ReactNode, Children } from "react";

const ThemeContext = createContext(null);

const ThemeProvider  = ({children})=>{
    const [darkTheme , setdarktheme] = useState(false);

    const toggleTheme = () => {
        setdarktheme((Theme) => !Theme);
    };

    return (
        <ThemeContext.Provider value = {{darkTheme , toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export {ThemeProvider  , ThemeContext};

