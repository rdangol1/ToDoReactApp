import React from "react";

const TextInput = ({ onSubmit, onChange, value }) => {
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
    />
  );
};

export default TextInput;
