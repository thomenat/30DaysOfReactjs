import { useContext } from 'react'
import { ThemeProvider, ThemeContext } from './ThemeContext'
import ThemeToggle from './ThemeToggle'
import './style.css'

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <div
        className="App"
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
    </ThemeProvider>
  );
}

export default App
