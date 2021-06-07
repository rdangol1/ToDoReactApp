import React, { useState } from "react";
import classnames from "classnames";

const TodoItem = ({ key,onToggle, label, defaultCompleted, deleteItem}) => {
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

  return (
    <div className="border-b-2 p-2">
      <input
        onClick={handleClick}
        className="mr-5"
        type="checkbox"
        id={key}
        checked={isChecked}
      />
      <label className={classname} id={key}>
        {label}
      </label>
      <button onClick={() => deleteItem(key)} className="text-red-600 float-right" id={key} >Delete</button>
      
      
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
    },
    {
      text: "Item #2",
      defaultCompleted: false,
    },
  ]);

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
  const checkboxToggled = () => {
    console.log("A checkbox was toggled");
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
    };
    // Add the temporary todo item to the existing list of todos
    setTodoItems([...todoItems, temporaryTodoItem]);

    // Clear the input
    setInputValue("");
  };
  const deleteItem = (props) => {
    let newlist = todoItems.filter((item) => item.props !== props);
    setTodoItems(newlist);
    
  };

  return (
    <div className="contatiner py-20 mx-auto max-w-md">
      <div className="bg-white rounded-lg p-10 text-black shadow">
        <legend>Todo List</legend>
        <div className="my-4 flex">
          <input
            type="text"
            className="p-2 border-2 border-gray-200 rounded-md mr-2 flex-1"
            onChange={(event) => setInputValue(event.target.value)}
            value={inputValue}
          />
          <button
            onClick={handleAddTodo}
            type="submit"
            className="bg-green-400 rounded-full text-white w-10 h-10 ring-4 ring-green-200"
          >
            +
          </button>
        </div>
        {todoItems.map((item, index) => (
          <TodoItem
            key={index}
            label={item.text}
            defaultCompleted={item.defaultCompleted}
            onToggle={checkboxToggled}
            deleteItem={deleteItem} 
          />
        ))}
      </div>
    </div>
  );
};

export default App;
