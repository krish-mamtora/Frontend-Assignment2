import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeToggle = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  return (
     <div>
        <input
          type="checkbox"
          checked={darkTheme}
          onChange={toggleTheme}
        />

      <p >{darkTheme ? "Dark Theme" : "Light Theme"}</p>
    </div>
  );
};

export default ThemeToggle;