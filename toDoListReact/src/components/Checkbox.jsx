import { useState } from "react";
import PropTypes from 'prop-types'

export default function Checkbox({defaultChecked = false}) {
    const [checked, setChecked] = useState(defaultChecked);

    Checkbox.propTypes = {
        defaultChecked: PropTypes.bool,
      };

  return (
    <div>
        {!checked && (
      <div className="checkbox-uncheck">
        <svg viewBox="0 0 87 91" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M84.0918 2.34961C59.9252 1.47894 35.7 2.23627 11.6349 4.6136C6.79065 5.09227 5.91199 6.6096 5.83385 10.2816C5.56305 22.9323 -2.71828 75.3336 5.93118 83.1363C11.5858 88.2376 27.4473 80.3256 83.9265 88.5096C84.8052 88.6363 85.0212 9.69094 84.0918 2.34961Z"
            stroke="#fff"
          />
        </svg>
      </div>
        )}

        {checked && (
      <div className="checkbox-checked">
        <svg
          viewBox="0 0 120 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M34.4285 46.389C41.4191 58.6797 45.7018 72.4998 46.8885 86.5889C53.5871 48.8463 81.2445 15.529 117.11 1.99966"
            stroke="#fff"
          />
          <path
            d="M3.11632 19.1149C21.2657 24.1269 38.3497 21.9309 87.6923 18.8629C92.919 45.2242 94.115 72.3801 91.2257 99.0989C25.5003 95.9722 15.2963 108.583 6.04701 101.164C-4.18632 92.9577 8.93098 20.7216 3.11632 19.1149Z"
            stroke="#fff"
          />
        </svg>
      </div>
        )}
    </div>
  );
}
