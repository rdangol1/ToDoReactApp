import React, { useState } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import EditButton from "../EditButton";
import DeleteButton from "../DeleteButton";

const TodoItem = ({
  id,
  onToggle,
  onDelete,
  label,
  defaultCompleted,
  onEdit,
  createPriority,
  createDate,
  value,
  setUpInputValue,
  setUpTodoItems,
  getTodoItems,
  listOfItems,
  ...props

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
    "border-b-2 p-2 bg-blue-100 m-1 rounded-md": createPriority,
    "border-b-2 p-2 bg-red-100 m-1 rounded-md": !createPriority,
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
        {...props}
      />
      <label className={classname} htmlFor={id}>
        {label}
        
      </label>
      <br></br>

      <label className="text-gray-400 text-sm" htmlFor={id}>
        {createDate}
      </label>

      <DeleteButton
      setUpInputValue = {setUpInputValue}
      setUpTodoItems= {setUpTodoItems}
      indexId ={value} />

      <EditButton 
      setUpInputValue = {setUpInputValue}
      setUpTodoItems= {setUpTodoItems}
      indexId ={value}
      listOfItems ={listOfItems}/>
    </div>
    
  );
};

TodoItem.propTypes = {
  id: PropTypes.string,
};
TodoItem.propTypes = {
  label: PropTypes.string,
};
TodoItem.propTypes = {
  onToggle: PropTypes.func,
};
TodoItem.propTypes = {
  onDelete: PropTypes.func,
};
TodoItem.propTypes = {
  onEdit: PropTypes.func,
};
TodoItem.propTypes = {
  createPriority: PropTypes.func,
};
TodoItem.propTypes = {
  createDate: PropTypes.func,
};
TodoItem.propTypes = {
  defaultCompleted: PropTypes.bool,
};
TodoItem.propTypes = {
  getTodoItems: PropTypes.func,
};

export default TodoItem;
