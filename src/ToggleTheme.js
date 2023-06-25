import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ToggleTheme() {
  const [theme, toggleTheme] = useContext(ThemeContext);

  return (
    <div className={`${theme}`}>
      <button onClick={toggleTheme}>{theme}</button>
    </div>
  );
}

export default ToggleTheme;
