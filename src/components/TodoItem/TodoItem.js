import React,{ useState, useRef, useEffect }  from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import DateComponent from "../DateComponent";
import CheckBox from "../CheckBox";
import EditButton from "../EditButton";
import DeleteButton from "../DeleteButton";

const TodoItem = ({
  id,
  label,
  defaultCompleted,
  createPriority,
  createDate,
  value,
  setUpInputValue,
  setUpTodoItems,
  listOfItems,
  setUpEditstate,
  editState,
  indextoEdit,
  ...props
}) => {

   /**
   * This state is used to hold if the checkbox for the todo item
   * is checked or not
   */
  const [isChecked, setIsChecked] = useState(defaultCompleted);

  //function to set the state of the checkbox
  const checkBoxToggleStatus =(toggle) =>{
    setIsChecked(toggle)
  }
  //function the set the color of the todo item
  const classCharecter = classnames({
    "border-b-2 p-2 bg-gradient-to-r from-white via-blue-100 to-blue-200 m-1 rounded-md": createPriority(),
    "border-b-2 p-2 bg-gradient-to-r from-white via-red-100 to-red-200 m-1 rounded-md": !createPriority(),
  });

  return (
    <div className={classCharecter}>
      <CheckBox
      id={id} 
      defaultCompleted={defaultCompleted}
      setUpTodoItems={setUpTodoItems}
      indexId={value}
      listOfItems={listOfItems}
      checked={isChecked}
      onToggle={checkBoxToggleStatus}
      label={label}
     />
      <label className="text-gray-400 text-sm" htmlFor={id}
      {...props}>
      <DateComponent date={createDate} />
      </label>

      <DeleteButton
      setUpInputValue = {setUpInputValue}
      setUpTodoItems= {setUpTodoItems}
      listOfItems={listOfItems}
      indexId ={value} />

      <EditButton 
      setUpInputValue={setUpInputValue}
      setUpTodoItems={setUpTodoItems}
      indexId={value}
      listOfItems={listOfItems}
      setUpEditstate={setUpEditstate}
      editState={editState}
     />
    </div>
    
  );
};

TodoItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  createPriority: PropTypes.func,
  createDate: PropTypes.func,
  defaultCompleted: PropTypes.bool,
  setUpEditstate: PropTypes.func,
};

export default TodoItem;
