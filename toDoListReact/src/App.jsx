import { useEffect, useState } from "react";
import Task from "../src/components/task/Task";
import TaskModal from "../src/components/taskModal/TaskModal";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(tasks);
  }, []);
  function addTask(name, description) {
    if (!name.trim()) {
      // alert("adicione uma descrição para a tarefa")
      return;
    }
    setTasks((prev) => {
      return [...prev, { name: name, description: description, done: false }];
    });
  }
  function removeTask(indexToRemove) {
    setTasks((prev) => {
      return prev.filter((taskObject, index) => index !== indexToRemove);
    });
  }
  function updateTaskDone(taskIndex, newDone) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  }
  const numberComplete = tasks.filter((t) => t.done).length;
  const numberTotal = tasks.length;
  function getMessage() {
    const perentage = (numberComplete / numberTotal) * 100;
    if (perentage === 0) {
      return "Try to do at least one! 🙏";
    }
    if (perentage === 100) {
      return "Nice job for today!  🥳";
    }
    return "Keep it going   💪";
  }
  function renameTask(index, newName) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[index].name = newName;
      return newTasks;
    });
  }
  return (
    <main>
      <h2 className="principal-title">{getMessage()}</h2>
      <div className="container-btn-count">
        <button className="btn-count">
          {numberComplete}/{numberTotal}
        </button>
      </div>
      <TaskModal onAdd={addTask} />
      <div className="container">
        {tasks.map((task, index) => (
          <Task
            key={index}
            {...task}
            onRename={(newName) => renameTask(index, newName)}
            onTrash={() => removeTask(index)}
            onToggle={(done) => updateTaskDone(index, done)}
          />
        ))}
      </div>
    </main>
  );
}
export default App;
