import React,{ useState }  from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

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
  ...props
}) => {

   /**
   * This state is used to hold if the checkbox for the todo item
   * is checked or not
   */
  const [isChecked, setIsChecked] = useState(defaultCompleted);

  const checkBoxToggleStatus =(toggle) =>{
    setIsChecked(toggle)
  }
 
  const classCharecter = classnames({
    "border-b-2 p-2 bg-blue-100 m-1 rounded-md": createPriority,
    "border-b-2 p-2 bg-red-100 m-1 rounded-md": !createPriority,
  });

  /**
   * Classnames to conditionally be applied to the `label`
   */
  const classname = classnames({
    "text-gray-600": !isChecked, // If checkbox is not checked
    "line-through": isChecked, // If checkbox is checked
    "text-gray-300": isChecked, // If checkbox is checked
});

  return (
    <div className={classCharecter}>
      <CheckBox
      id ={id} 
      defaultCompleted={defaultCompleted}
      setUpTodoItems= {setUpTodoItems}
      indexId ={value}
      listOfItems ={listOfItems}
      Checked={isChecked}
      checkBoxToggleStatus={checkBoxToggleStatus}/>

      <label 
      className={classname} 
      htmlFor={id}
      {...props}>
          {label}
      </label>

      <br></br>

      <label className="text-gray-400 text-sm" htmlFor={id}
      {...props}>
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
  onClick: PropTypes.func,
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


export default TodoItem;
