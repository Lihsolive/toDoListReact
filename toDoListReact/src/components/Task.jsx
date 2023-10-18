import Checkbox from "./Checkbox";
import PropTypes from "prop-types";
import trashIcon from "../assets/icons/trash.svg";
import penIcon from "../assets/icons/pen.svg";
import { useState } from "react";
import "../App.css";

export default function Task({ name, description, done, onToggle, onTrash, onRename}) {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="container">
      <div className={"task" + (done ? " done" : "")}>
        <Checkbox checked={done} onClick={() => onToggle(!done)} />
        {!editMode && (
          <div className="task-name">
            <h2>
              <span className="name">{name}</span>
            </h2>
            <p className="description">{description}</p>
          </div>
        )}
        {editMode && (
          <form onSubmit={(ev) => {
              ev.preventDefault();
              setEditMode(false); }}>
            <input type="text" value={name} onChange={(ev) => onRename(ev.target.value)} onBlur={() => setEditMode(false)}/>
          </form> )}
        <button className="trash-icon" onClick={onTrash}>
          <img src={trashIcon} />
        </button>
        <button
          className="pen-icon"
          onClick={() => setEditMode((prev) => !prev)}>
          <img src={penIcon} />
        </button>
      </div>
    </div>
  )}
Task.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onTrash: PropTypes.func.isRequired,
  onRename: PropTypes.func.isRequired,
};
