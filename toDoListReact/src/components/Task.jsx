import Checkbox from "./Checkbox";
import PropTypes from "prop-types";
import trashIcon from "../assets/icons/trash.svg";
import penIcon from "../assets/icons/pen.svg";
import { useState } from "react";

export default function Task({ name, done, onToggle, onTrash, onRename }) {
  const [editMode, setEditMode] = useState(false);
  return (
    <div className={"task" + (done ? " done" : "")}>
      <Checkbox checked={done} onClick={() => onToggle(!done)} />
      {!editMode && (
      <div className="task-name">
        <span>{name}</span>
      </div>
      )}
      {editMode && (
        <form onSubmit={ev => {ev.preventDefault(); setEditMode(false)}}>
          <input type="text" value={name} 
                  onChange={ev => onRename(ev.target.value)}
                  onBlur={() => setEditMode(false)} />
        </form>
      )}
      <button className="trash-icon" onClick={onTrash}>
        <img src={trashIcon} />
      </button>
      <button className="pen-icon" onClick={() => setEditMode(prev => !prev)}>
        <img src={penIcon} />
      </button>
    </div>
  );
}

Task.propTypes = {
  name: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.is,
  onTrash: PropTypes.func.is,
  onRename: PropTypes.func.is
};
