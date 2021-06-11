import React, { useState } from "react";
import classnames from "classnames";
import {DeleteIcon} from "../Icons";
import {EditIcon} from "../Icons";

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
        <DeleteIcon />
      </button>
      <button
        onClick={onEdit}
        className="text-red-600 float-right mr-3 rounded-md p-0.5">
        <EditIcon />
      </button>
    </div>
  );
};

export default TodoItem;
