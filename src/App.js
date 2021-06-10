import React, { useState, useEffect } from "react";
import classnames from "classnames";
import FlipMove from "react-flip-move";

// Our components
import TodoItem from "./components/TodoItem";

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

  useEffect(() => {
    const data = localStorage.getItem("todo");

    if (data) {
      setTodoItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoItems));
  });

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
      done: false,
      createDate: getDate(),
    };
    // Add the temporary todo item to the existing list of todos
    setTodoItems([...todoItems, temporaryTodoItem]);

    // Clear the input
    setInputValue("");
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

  const getDate = () => {
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
    temporaryList.sort((a, b) => (a.createDate > b.createDate ? 1 : -1));
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
  return (
    <div className="contatiner py-20 mx-auto max-w-md ">
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
          <button onClick={clear} className="ml-5 rounded">
            Clear
          </button>
        </div>
        <button onClick={sortItems} className="m-1">
          Sort Items
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
