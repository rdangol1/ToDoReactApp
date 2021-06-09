import React, { useCallback, useState, useEffect } from "react";
import classnames from "classnames";
import { render } from "@testing-library/react";
import { renderIntoDocument } from "react-dom/test-utils";

const TodoItem = ({ id, onToggle, onDelete, label, defaultCompleted, onEdit }) => {
  /**
   * This state is used to hold if the checkbox for the todo item
   * is checked or not
   */
  const [isChecked, setIsChecked] = useState(defaultCompleted);
  //const [CompletedList, setCompletedList] = useState(false);
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

  return (
    <div className="border-b-2 p-2">
      <input
        onChange={handleClick}
        className="mr-5"
        type="checkbox"
        id={id}
        name={id}
        checked={isChecked}
      />
      <label className={classname} for={id}>
        {label}
      </label>
      <button onClick={onDelete} className="text-red-600 float-right">
        Delete
      </button>
      <button onClick={onEdit} className="text-red-600 float-right mr-3">
        Edit
      </button>
    </div>
  );
};

const App = () => {
  /**
   * This sets up the todo state and sets the default todos
   * NOTE: Anything inside of the ()'s of `useState` will be
   * the default value for that piece of state, in this case
   * referring to `todoItems`
   */

  const [todoItems, setTodoItems] = useState([
    {
      text: "Item #1",
      defaultCompleted: true,
      done: true,
      rememberMe: false
      // TODO: Add something like `done` to store if a todo is complete
    },
    {
      text: "Item #2",
      defaultCompleted: false,
      done: false,
      rememberMe: false
    },
  ]);
  const addToLocalStorage = (todoItemList) =>{
    localStorage.setItem('todo',todoItemList);
    
  }
  const getFromLocalStorage =() =>{
    localStorage.getItem('todo');
   
  }
  getFromLocalStorage();
  
  /**
   * This piece of state holds the current value of the user's
   * input to the "new todo" input
   */
  const [inputValue, setInputValue] = useState("");
  /**
   * This function is called any time a todo is checked or unchecked
   * NOTE: All this does right now is log to the console, but we
   * might do something with this down the road
   */
  const checkboxToggled = (indexToToggle) => {
    // TODO: use something like the index to set the `checked` state true or false
    const temporaryList =[... todoItems];
    let tempItem ={... temporaryList[indexToToggle]};
    tempItem.done =!tempItem.done;
    temporaryList[indexToToggle]=tempItem;
    setTodoItems(temporaryList);
  }
  const areYouDone =() =>{
    const tempList=todoItems.filter(items => items.done == true)

    if((tempList.length == todoItems.length) || (!todoItems.length)){
      return true;
    }
    return false; 
  };
  
  const clear=() =>{
    const tempList=todoItems.filter(items => items.done === false)
    setTodoItems(tempList);
    
  };

  /**
   * This function is called when the user clicks on the "+" button
   * to add a todo to the list
   */
    const handleAddTodo = () => {
    // Check if input is empty; if it is, skip the rest of the function
    if (inputValue === "") {
      return;
    }

    // This is the temporary todo item using the `inputValue`
    const temporaryTodoItem = {
      text: inputValue,
      defaultCompleted: false,
      done:false,
      
    };
    // Add the temporary todo item to the existing list of todos
    setTodoItems([...todoItems, temporaryTodoItem]);

    // Clear the input
    setInputValue("");
    addToLocalStorage(todoItems);
  };

  /**
   * Check if enter
   */
  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      handleAddTodo();
    }
  };

  const getDate =() => {
    const today = new Date();
    const TodoMonth = today.getMonth + 1;
    const TodoDay =today.getDate;
    const TodoYear =today.getFullYear;
    const ItemDate = TodoMonth +'/' + TodoDay +'/'+TodoYear;
  }

  /**
   * Delete item from todo list
   */
  const deleteItem = (indexToDelete) => {
    const tmpTodoList = [
      ...todoItems.slice(0, indexToDelete),
      ...todoItems.slice(indexToDelete + 1, todoItems.length),
    ];
    setTodoItems(tmpTodoList);
    addToLocalStorage(todoItems);
  };

  const editItem =(indexToEdit) =>{
    const tempList = [
      ...todoItems.slice(0, indexToEdit),
      ...todoItems.slice(indexToEdit + 1, todoItems.length),
    ];
    setInputValue(todoItems[indexToEdit].text)
    setTodoItems(tempList);
    addToLocalStorage(todoItems);
  }
  const classFeatures = classnames({
    "hidden":!areYouDone(),
    "visible":areYouDone()
  })
  return (
    <div className="contatiner py-20 mx-auto max-w-md">
      <div className="bg-white rounded-lg p-10 text-black shadow">
        <legend>Todo List</legend>
        
        <div className="my-4 flex">
          <input
            type="text"
            className="p-2 border-2 border-gray-200 rounded-md mr-2 flex-1"
            onChange={(event) => setInputValue(event.target.value)}
            onKeyUp={handleKeyUp}
            value={inputValue}
          />
          <button
            onClick={handleAddTodo}
            type="submit"
            className="bg-green-400 rounded-full text-white w-10 h-10 ring-4 ring-green-200"
          >
            +
          </button>
          <button onClick={clear} className = "ml-5" >Clear</button>
          
        </div>
        
        <div className={classFeatures}>Yay!! you are all done</div> 
        
        {todoItems.map((item, index) => (
          <TodoItem
            key={item.text}
            id={index}
            value={index}
            label={item.text}
            defaultCompleted={item.defaultCompleted}
            onToggle={() => checkboxToggled(index)}
            onDelete={() => deleteItem(index)}
            onEdit={() => editItem(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;



 
 /*   if((!todoItems.length)||(elementState == true)){
   
    setCompletedList(!CompletedList);
  }
  const classFeature = classnames({
   "visible":!CompletedList,
   "hidden": CompletedList,
   
  });    */

