import React, { useState, useEffect } from "react";
import classnames from "classnames";
import FlipMove from "react-flip-move";

// Our components
import TodoItem from "./components/TodoItem";
import TextInput from "./components/TextInput";
import AddButton from "./components/AddButton";

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
  const [todoItems, setTodoItems] = useState([
    {
      text: "Item #1",
      defaultCompleted: true,
      done: true,
      createDate: "2021-03-02 10:11:15",
      // TODO: Add something like `done` to store if a todo is complete
    },
    {
      text: "Item #2",
      defaultCompleted: false,
      done: false,
      createDate: "2021-04-15 12:16:15",
    },
  ]);
  const handleAddTodo = () => {
    // Check if input is empty; if it is, skip the rest of the function
    if (inputValue === "") {
      return;
    }

    // This is the temporary todo item using the `inputValue`
    const temporaryTodoItem = {
      text: inputValue,
      defaultCompleted: false,
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


  const checkboxToggled = (indexToToggle) => {
    // TODO: use something like the index to set the `checked` state true or false
    const temporaryList = [...todoItems];
    let tempItem = { ...temporaryList[indexToToggle] };
    tempItem.done = !tempItem.done;
    temporaryList[indexToToggle] = tempItem;
    setTodoItems(temporaryList);
  };
  
  const areYouDone = () => {
    const tempList = todoItems.filter((items) => items.done === true);

    if (tempList.length === todoItems.length || !todoItems.length) {
      return true;
    }
    return false;
  };

  const clear = () => {
    const tempList = todoItems.filter((items) => items.done === false);
    setTodoItems(tempList);
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

  const sortItems = () => {
    const temporaryList = [...todoItems];
    for (let i = 0; i < todoItems.length; i++) {
      const convertTodate = new Date(temporaryList[i].createDate);
      temporaryList[i].createDate = convertTodate;
    }
    temporaryList.sort((a, b) => (a.createDate < b.createDate ? 1 : -1));
    setTodoItems(temporaryList);

    for (let i = 0; i < todoItems.length; i++) {
      const convertTodate = temporaryList[i].createDate;
      const ItemDate = JSON.parse(
        JSON.stringify(
          convertTodate.getFullYear() +
            "-" +
            (convertTodate.getMonth() + 1) +
            "-" +
            convertTodate.getDate() +
            " " +
            convertTodate.getHours() +
            ":" +
            convertTodate.getMinutes() +
            ":" +
            convertTodate.getSeconds()
        )
      );

      temporaryList[i].createDate = ItemDate;
    }
    setTodoItems(temporaryList);
  };

  /**
   * Delete item from todo list
   */
  const deleteItem = (indexToDelete) => {
    const tmpTodoList = [
      ...todoItems.slice(0, indexToDelete),
      ...todoItems.slice(indexToDelete + 1, todoItems.length),
    ];
    setTodoItems(tmpTodoList);
  };

  const editItem = (indexToEdit) => {
    const tempList = [
      ...todoItems.slice(0, indexToEdit),
      ...todoItems.slice(indexToEdit + 1, todoItems.length),
    ];
    setInputValue(todoItems[indexToEdit].text);
    setTodoItems(tempList);
  };

  const classFeatures = classnames({
    hidden: !areYouDone(),
    visible: areYouDone(),
  });

  const setUpInputValue = (inputTofill) =>{
    setInputValue(inputTofill);
  }
  return (
    <div className="contatiner py-20 mx-auto max-w-md ">
      <div className="bg-white rounded-lg p-10 text-black shadow">

        <legend>Todo List</legend>

        <div className="my-4 flex">
          <TextInput
            handleAddTodo={handleAddTodo}
            settingInput ={setUpInputValue} 
            inputValueToSet ={inputValue}/>
          <AddButton 
            handleAddTodo={handleAddTodo}
            />
          <button onClick={clear} className="ml-5 rounded">
            Clear
          </button>
        </div>

        <button onClick={sortItems} className="m-1">
          Sort Latest
        </button>

        <div className={classFeatures}>Yay!! you are all done</div>

        <FlipMove className="flip-wrapper my-1 ">

          {todoItems.map((item, index) => (
            <div key={item.text}>
              <TodoItem
                id={index}
                value={index}
                label={item.text}
                createDate={item.createDate}
                defaultCompleted={item.defaultCompleted}
                onToggle={() => checkboxToggled(index)}
                onDelete={() => deleteItem(index)}
                onEdit={() => editItem(index)}
                createPriority={() => getItemPriority(index)}
              />
            </div>
          ))}
        </FlipMove>
      </div>
    </div>
  );
};

export default App;
