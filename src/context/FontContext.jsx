import { createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const FontContext = createContext();

function FontContextProvider({ children }) {
  const [font, setFont] = useLocalStorage("Poppins", "planitFont");

  useEffect(() => {
    const rootElementClassLists = document.documentElement.classList;
    const classArray = [...rootElementClassLists]?.filter((cl) =>
      cl.startsWith("font")
    );
    rootElementClassLists.remove(...classArray);
    document.documentElement.classList.add(`font-${font.toLowerCase()}`);
  }, [font]);

  const toggleFont = (font) => {
    setFont(font);
  };
  return (
    <FontContext.Provider value={{ font, toggleFont }}>
      {children}
    </FontContext.Provider>
  );
}

function useFont() {
  const fontContext = useContext(FontContext);
  if (fontContext === undefined)
    throw new Error("FontContext is used outside of FontContextProvider");
  return fontContext;
}

export { useFont, FontContextProvider };
