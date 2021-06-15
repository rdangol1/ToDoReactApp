import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ onSubmit, onChange, value, ...props }) => {
  /**
   * If the user presses enter it prevent the deafualt course 
   * of events and cretes a new toto item
   */

  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      onSubmit();
    }
  };
  return (
    <input
      type="text"
      className="p-2 border-2 border-gray-200 rounded-md mr-2 flex-1"
      onChange={(event) => onChange(event.target.value)}
      onKeyUp={handleKeyUp}
      value={value}
      {...props}
    />
  );
};

TextInput.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
  onKeyUp: PropTypes.func,
  handleKeyUp: PropTypes.func,
};

export default TextInput;
