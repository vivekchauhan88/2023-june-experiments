import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import "./styles.css";
import ToggleTheme from "./ToggleTheme";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      <ToggleTheme />
    </ThemeContext.Provider>
  );
}

export default App;
