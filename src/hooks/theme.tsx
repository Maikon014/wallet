import React, {createContext, useState, useContext} from 'react';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface IThemeContext {
  toggleTheme(): void;
  theme: ITheme; 
}

interface ITheme {
  title: string;

  colors: {
    primary: string,
    secondary: string,
    tertiary: string,

    white:string; 
    black: string;
    gray: string;

    info: string;
    success: string;
    warning:string;
  }
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC = ({children}) => {
  const [theme, setTheme] = useState<ITheme>(() => {
    const themeSaved = localStorage.getItem('@wallet:theme')

    if(themeSaved) {
      return JSON.parse(themeSaved)
    }else{
      return dark
    }
  });

  const toggleTheme = () => {
    if(theme.title === 'dark'){
      setTheme(light);
      localStorage.setItem('@wallet:theme', JSON.stringify(light));
    }else{
      setTheme(dark);
      localStorage.setItem('@wallet:theme', JSON.stringify(dark));
    }
  };
  return (
    <ThemeContext.Provider value={{toggleTheme, theme}}>
      {children}
    </ThemeContext.Provider>
  )
}

function useTheme(): IThemeContext {
  const Context = useContext(ThemeContext);

  return Context;
}

export {ThemeProvider, useTheme};