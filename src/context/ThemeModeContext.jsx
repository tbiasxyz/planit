import { createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ThemeModeContext = createContext();

function ThemeModeProvider({ children }) {
  const [isDarkThemeMode, setIsDarkThemeMode] = useLocalStorage(
    false,
    "isDarkThemeMode"
  );

  useEffect(() => {
    if (isDarkThemeMode) {
      document.documentElement.classList.remove("light-mode");
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkThemeMode]);

  function toggleThemeMode() {
    setIsDarkThemeMode((dark) => !dark);
  }

  return (
    <ThemeModeContext.Provider value={{ isDarkThemeMode, toggleThemeMode }}>
      {children}
    </ThemeModeContext.Provider>
  );
}

function useThemeMode() {
  const themeContext = useContext(ThemeModeContext);
  if (themeContext === undefined)
    return new Error("ThemeModeContext is used outside of ThemeModeProvider");
  return themeContext;
}

export { ThemeModeProvider, useThemeMode };
