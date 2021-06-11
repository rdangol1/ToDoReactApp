import React from "react";

const AddButton = ({ handleAddTodo, ...props }) => {
  return (
    <button
      onClick={handleAddTodo}
      type="submit"
      className="bg-green-400 rounded-full text-white w-10 h-10 ring-4 ring-green-200"
      {...props}
    >
      +
    </button>
  );
};
export default AddButton;
