import React, { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";
import './style.css';

function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

const ThemedApp = () => {
  const { theme } = useContext(ThemeContext); // Get theme from context

  return (
    <div
      className={`App ${theme === "light" ? "light-mode" : "dark-mode"}`}
    >
      <h1>Theme Switcher App</h1>
      <ThemeToggle />
    </div>
  );
};

export default App;
