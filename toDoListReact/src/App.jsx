import { useState } from "react";
import "./App.css";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);
  function addTask(name) {
    setTasks(prev => {
      return [...prev, {name:name, done:false}];
    });
  }
  return (
    <main>
      <TaskForm onAdd = {addTask}/>
      <Task />
    </main>
  );
}

export default App;
