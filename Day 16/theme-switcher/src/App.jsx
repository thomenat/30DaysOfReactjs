import React, { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";

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
      style={{
        backgroundColor: theme === "light" ? "#ffffff" : "#333333",
        color: theme === "light" ? "#000000" : "#ffffff",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      <h1>Theme Switcher App</h1>
      <ThemeToggle />
    </div>
  );
};

export default App;
