import Checkbox from "./Checkbox";
import PropTypes from 'prop-types';
import trashIcon from "../assets/icons/trash.svg"
import penIcon from "../assets/icons/pen.svg"

export default function Task({name,done, onToggle, onTrash}) {
  return (
    <div className={"task" + (done ? ' done' : '')}>
      <Checkbox checked={done} onClick={() => onToggle(!done)} />
      <div className="task-name">
      <span>{name}</span>
      </div>
      <button className="trash-icon" onClick={onTrash}>
        <img src={trashIcon} />
      </button>
      <button className="pen-icon">
        <img src={penIcon} />
      </button>
    </div>
  );
}

Task.propTypes = {
  name: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.is,
  onTrash: PropTypes.func.is
};
