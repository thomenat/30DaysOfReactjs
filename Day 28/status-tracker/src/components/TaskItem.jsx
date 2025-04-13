import React, { useContext } from "react";
import { TaskContext } from "./TaskContext";

export default function TaskItem({ task }) {
  const { updateStatus } = useContext(TaskContext);

  const statuses = ["Pending", "In Progress", "Done"];

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "1rem",
        marginBottom: "0.5rem",
      }}
    >
      <strong>{task.title}</strong>
      <p>Status: {task.status}</p>
      <select
        value={task.status}
        onChange={(e) => updateStatus(task.id, e.target.value)}
      >
        {statuses.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
}
