import './App.css'
import ButtonWithTooltip from './ButtonWithTooltip'

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center", marginTop: "50px" }}>
      <h1>React Portals: Tooltip</h1>
      <ButtonWithTooltip text="Hello! I am a tooltip." />
      <ButtonWithTooltip text="Another tooltip example!" />
    </div>
  );
}



export default App
