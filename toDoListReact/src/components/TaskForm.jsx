import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Substitua "#root" pelo id do elemento raiz do seu aplicativo

export default function TaskForm({ onAdd }) {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleSubmit(ev) {
    ev.preventDefault();
    onAdd(taskName, taskDescription);
    setTaskName("");
    setTaskDescription("");
    setModalIsOpen(false);
  }

  return (
    <div>
       <button onClick={() => setModalIsOpen(true)} className="button-add" >+</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className="meu-modal">
        <form className="task-form" onSubmit={handleSubmit}>
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
      </Modal>
    </div>
  );
}

TaskForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
