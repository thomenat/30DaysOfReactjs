import React, { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

    const [tasks, setTasks] = useState([
    { id: 1, title: "Learn useContext", status: "Pending" },
    { id: 2, title: "Build Day 28 project", status: "In Progress" },
  ]);

  const [filter, setFilter] = useState("All");

  const updateStatus = (id, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, updateStatus, filter, setFilter }}>
      {children}
    </TaskContext.Provider>
  );
};
