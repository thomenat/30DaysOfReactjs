import React from "react";
import { TaskProvider } from "./components/TaskContext";
import StatusFilter from "./components/StatusFilter";
import TaskList from "./components/TaskList";

function App() {
  return (
    <TaskProvider>
      <div style={{ padding: "1rem", maxWidth: "600px", margin: "auto" }}>
        <h1>📝 Task Status Tracker</h1>
        <StatusFilter />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
