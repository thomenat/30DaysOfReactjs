import React, { useContext } from "react";
import { TaskContext } from "./TaskContext";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const { tasks, filter } = useContext(TaskContext);

  const filteredTasks =
    filter === "All"
      ? tasks
      : tasks.filter((task) => task.status === filter);

  return (
    <div>
      {filteredTasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        filteredTasks.map((task) => <TaskItem key={task.id} task={task} />)
      )}
    </div>
  );
}
