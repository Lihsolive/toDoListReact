import { useState } from "react";
import PropTypes from 'prop-types';

export default function TaskForm({ onAdd }) {
  const [taskName, setTaskName] = useState("");

  function handlesubmit(ev) {
    ev.preventDefault();
    onAdd(taskName)
    setTaskName('')
  }
  return (
    <form onSubmit={handlesubmit}>
      <input
        type="text"
        value={taskName}
        onChange={ev => setTaskName(ev.target.value)}
        placeholder="New task"
      />
      <button>+</button>
    </form>
  );
}
TaskForm.propTypes = {
  onAdd: PropTypes.func.isRequired
}