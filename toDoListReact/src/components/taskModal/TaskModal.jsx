import { useState } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import btnAdd from "../../assets/icons/btn-add.svg";
import btnCheckAdd from "../../assets/icons/btn-check-add.svg";
import "./TaskModal.css";

Modal.setAppElement("#root"); // Substitua "#root" pelo id do elemento raiz do seu aplicativo

export default function TaskModal({ onAdd }) {
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
      <button onClick={() => setModalIsOpen(true)} className="btn-add">
        <img src={btnAdd} />
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <form className="task-form" onSubmit={handleSubmit}>
          <h1>New Task</h1>
          <input
            className="task-name"
            type="text"
            value={taskName}
            onChange={(ev) => setTaskName(ev.target.value)}
            placeholder="New task name"
          />
          <textarea
            className="task-description"
            type="message"
            value={taskDescription}
            onChange={(ev) => setTaskDescription(ev.target.value)}
            placeholder="Task description"
          />
          <button className="btn-add-modal">
            <img src={btnCheckAdd} />
          </button>
        </form>
      </Modal>
    </div>
  );
}

TaskModal.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
