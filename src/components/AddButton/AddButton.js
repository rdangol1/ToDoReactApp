import React from "react";
import PropTypes from "prop-types";

const AddButton = ({ onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      className="bg-green-400 rounded-full text-white w-10 h-10 ring-4 ring-green-200"
      {...props}
    >
      +
    </button>
  );
};

AddButton.propTypes = {
  onClick: PropTypes.func,
};

export default AddButton;
