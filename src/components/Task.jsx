import Checkbox from "./Checkbox";
import PropTypes from 'prop-types';

export default function Task({name,done}) {
  return (
    <div className="task">
      <Checkbox defaultChecked={done}/>
      {name}
    </div>
  );
}

Task.propTypes = {
  name: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired
};
