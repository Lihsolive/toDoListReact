import Checkbox from "./Checkbox";
import PropTypes from 'prop-types';

export default function Task({name,done, onToggle}) {
  return (
    <div className="task">
      <Checkbox checked={done} onClick={() => onToggle(!done)} />
      {name}
    </div>
  );
}

Task.propTypes = {
  name: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.is
};
