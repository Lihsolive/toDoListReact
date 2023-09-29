import { useState } from "react";
import PropTypes from "prop-types";

export default function TaskForm({ onAdd }) {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  function handlesubmit(ev) {
    ev.preventDefault();
    onAdd(taskName, taskDescription);
    setTaskName("");
    setTaskDescription("");
  }
  return (
    <form className="task-form" onSubmit={handlesubmit}>
      <input className="task-name"
        type="text"
        value={taskName}
        onChange={(ev) => setTaskName(ev.target.value)}
        placeholder="New task name"
      />
      <input className="task-description"
        type="text"
        value={taskDescription}
        onChange={(ev) => setTaskDescription(ev.target.value)}
        placeholder="Task description"
      />
      <button className="button-add">+</button>
    </form>
  );
}
TaskForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
