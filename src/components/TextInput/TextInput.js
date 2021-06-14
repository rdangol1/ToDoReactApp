import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ onSubmit, onChange, value, ...props }) => {
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
      onKeyUp={() => handleKeyUp}
      value={value}
      {...props}
    />
  );
};

TextInput.propTypes = {
  onSubmit: PropTypes.func,
};

TextInput.propTypes = {
  onChange: PropTypes.func,
};

TextInput.propTypes = {
  value: PropTypes.string,
};

TextInput.propTypes = {
  onKeyUp: PropTypes.func,
};

TextInput.propTypes = {
  handleKeyUp: PropTypes.func,
};

export default TextInput;
