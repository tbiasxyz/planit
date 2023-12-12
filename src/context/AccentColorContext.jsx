import { createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { ThemeContext } from "styled-components";

const AccentColorContext = createContext();

function AccentColorProvider({ children }) {
  const [accentColor, setAccentColor] = useLocalStorage(
    "purple",
    "planitAccentColor"
  );

  useEffect(() => {
    if (accentColor) {
      const rootElementClasslist = document.documentElement.classList;
      const classArray = [...rootElementClasslist]?.filter((cl) =>
        cl.startsWith("accent")
      );
      rootElementClasslist.remove(...classArray);

      document.documentElement.classList.add(`accent-${accentColor}`);
    }
  }, [accentColor]);

  const toggleAccentColor = (color) => {
    setAccentColor(color);
  };

  return (
    <AccentColorContext.Provider value={{ accentColor, toggleAccentColor }}>
      {children}
    </AccentColorContext.Provider>
  );
}

function useAccentColor() {
  const accentContext = useContext(AccentColorContext);
  if (ThemeContext === undefined)
    throw new Error(
      "AccentColorContext is used outside of AccentColorProvider"
    );
  return accentContext;
}

export { AccentColorProvider, useAccentColor };
