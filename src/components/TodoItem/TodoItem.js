import React, { useState } from "react";
import classnames from "classnames";

const TodoItem = ({
  id,
  onToggle,
  onDelete,
  label,
  defaultCompleted,
  onEdit,
  createPriority,
  createDate,
}) => {
  /**
   * This state is used to hold if the checkbox for the todo item
   * is checked or not
   */
  const [isChecked, setIsChecked] = useState(defaultCompleted);

  /**
   * This function is fired when the checkbox for the todo item
   * is clicked
   */
  const handleClick = () => {
    // Make checked state opposite its value and update the state
    setIsChecked(!isChecked);

    // Call `onToggle` function from props
    onToggle();
  };
  /**
   * Classnames to conditionally be applied to the `label`
   */
  const classname = classnames({
    "text-gray-600": !isChecked, // If checkbox is not checked
    "line-through": isChecked, // If checkbox is checked
    "text-gray-300": isChecked, // If checkbox is checked
  });

  const classCharecter = classnames({
    "border-b-2 p-2 bg-blue-100 m-1 rounded-md": createPriority(),
    "border-b-2 p-2 bg-red-100 m-1 rounded-md": !createPriority(),
  });

  return (
    <div className={classCharecter}>
      <input
        onChange={handleClick}
        className="mr-5"
        type="checkbox"
        id={id}
        name={id}
        checked={isChecked}
      />
      <label className={classname} htmlFor={id}>
        {label}
      </label>
      <br></br>
      <label className="text-gray-400 text-sm" htmlFor={id}>
        {createDate}
      </label>
      <button
        onClick={onDelete}
        className="text-red-600 float-right rounded-md p-0.5 ">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
      </button>
      <button
        onClick={onEdit}
        className="text-red-600 float-right mr-3 rounded-md p-0.5">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      </button>
    </div>
  );
};

export default TodoItem;
