import React, { useState } from 'react';
//import '../css/OverlayOptions.css'; // Import CSS for styling
import white from '../images/white.png';

const Scrollbar = ({ options, setSelectedOverlay }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (overlay) => {
    setSelectedOption(overlay);
    setSelectedOverlay(overlay);
  };

  return (
    <div className="overlay-options">
      <div
          className={`overlay-option ${selectedOption === null ? 'selected' : ''}`}
          onClick={() => handleOptionClick(null)}
        >
          <img
            src={white}
            alt="Holding"
            draggable="false"
            className="option-image"
          />
      </div>
      {options.map((option) => {
        return (
          <div
            className={`overlay-option ${selectedOption === option ? 'selected' : ''}`}
            onClick={() => handleOptionClick(option)}
          >
            <img
              src={option}
              alt="Holding"
              draggable="false"
              className="option-image"
            />
          </div>
        )
      })
      }
      </div>
  );
};

export default Scrollbar;