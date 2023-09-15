import { useEffect, useState } from "react";
import "./App.css";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length == 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(tasks);
  }, []);

  function addTask(name) {
    setTasks((prev) => {
      return [...prev, { name: name, done: false }];
    });
  }
  return (
    <main>
      <TaskForm onAdd={addTask} />
      {tasks.map((task, index) => (
        <Task key={index} {...task} />
      ))}
    </main>
  );
}

export default App;
