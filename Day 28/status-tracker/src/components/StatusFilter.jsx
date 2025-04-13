import React, { useContext } from "react";
import { TaskContext } from "./TaskContext";

export default function StatusFilter() {
  const { filter, setFilter } = useContext(TaskContext);
  const options = ["All", "Pending", "In Progress", "Done"];

  return (
    <div style={{ marginBottom: "1rem" }}>
      <label htmlFor="status-filter">Filter by Status: </label>
      <select
        id="status-filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        {options.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
}
