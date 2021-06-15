import React, { useState, useEffect } from "react";
import classnames from "classnames";
import FlipMove from "react-flip-move";

// Our components
import TodoItem from "./components/TodoItem";
import TextInput from "./components/TextInput";
import AddButton from "./components/AddButton";
import SortButton from "./components/SortButton";
import FilterButton from "./components/FilterButton";

/**
 * Components to componinitize
 * - Save todo button
 * - Text input
 */
const App = () => {
  /**
   * This sets up the todo state and sets the default todos
   * NOTE: Anything inside of the ()'s of `useState` will be
   * the default value for that piece of state, in this case
   * referring to `todoItems`
   */
  const [inputValue, setInputValue] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  const handleAddTodo = () => {
    // Check if input is empty; if it is, skip the rest of the function
    if (inputValue === "") {
      return;
    }

    // This is the temporary todo item using the `inputValue`
    const temporaryTodoItem = {
      text: inputValue,
      done: false,
      createDate: getEntireDate(),
    };
    // Add the temporary todo item to the existing list of todos
    setTodoItems([...todoItems, temporaryTodoItem]);

    // Clear the input
    setUpInputValue("");
  };

  const getEntireDate = () => {
    var today = new Date();
    const ItemDate = JSON.parse(
      JSON.stringify(
        today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate() +
          " " +
          today.getHours() +
          ":" +
          today.getMinutes() +
          ":" +
          today.getSeconds()
      )
    );
    return ItemDate;
  };

  useEffect(() => {
    const data = localStorage.getItem("todo");

    if (data) {
      setTodoItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoItems));
  });

 

  const areYouDone = () => {
    const tempList = todoItems.filter((items) => items.done === true);

    if (tempList.length === todoItems.length || !todoItems.length) {
      return true;
    }
    return false;
  };



  const getItemPriority = (indexToCheck) => {
    const today = new Date();
    const event = today.setMinutes(today.getMinutes() - 3);

    const itemDate = todoItems[indexToCheck].createDate;

    const itemDates = new Date(itemDate).getTime();

    if (itemDates < event) {
      return false;
    }
    return true;
  };



  const classFeatures = classnames({
    hidden: !areYouDone(),
    visible: areYouDone(),
  });

  const setUpInputValue = (inputTofill) => {
    setInputValue(inputTofill);
  };

  const setUpTodoItems = (temporaryList) =>{
    setTodoItems(temporaryList);
  }
 
  return (
    <div className="contatiner py-20 mx-auto max-w-md">
      <div className="bg-white rounded-lg p-10 text-black shadow">
        <legend>Todo List</legend>

        <div className="my-4 flex">
          <TextInput
            onSubmit={handleAddTodo}
            onChange={setUpInputValue}
            value={inputValue}
          />
          <AddButton onClick={handleAddTodo} />
        </div>

        <div>
          <FilterButton 
          setUpTodoItems= {setUpTodoItems}
          listOfItems={todoItems}/>

          <SortButton
          setUpTodoItems= {setUpTodoItems}
          listOfItems={todoItems}/> 
          
          <div className={classFeatures}>Yay!! You are all done</div>
        </div>
        <FlipMove className="flip-wrapper my-1 ">
          {todoItems.map((item, index) => (
            <div key={item.text}>
              <TodoItem
                id={index}
                value={index}
                label={item.text}
                createDate={item.createDate}
                defaultCompleted={item.done}
                createPriority={() => getItemPriority(index)}
                setUpInputValue={ setUpInputValue}
                setUpTodoItems ={setUpTodoItems}
                listOfItems={todoItems}
                
              />
            </div>
          ))}
        </FlipMove>
      </div>
    </div>
  );
};

export default App;
