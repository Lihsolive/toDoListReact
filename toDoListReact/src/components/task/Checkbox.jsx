import PropTypes from "prop-types";
import uncheck from "../../assets/img/uncheck.svg";
import check from "../../assets/img/check.svg";

export default function Checkbox({ checked = false, onClick }) {
  return (
    <div className="checkbox" onClick={onClick}>
      {!checked && (
        <div className="checkbox-uncheck">
          <img className="checkbox-uncheck-img" src={uncheck} />
        </div>
      )}

      {checked && (
        <div className="checkbox-checked">
          <img className="checkbox-checked-img" src={check} />
        </div>
      )}
    </div>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onClick: PropTypes.func,
};
