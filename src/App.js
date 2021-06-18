import React, { useState, useEffect, useContext } from 'react';
import FlipMove from 'react-flip-move'; 

// Our components
import TodoItem from './components/TodoItem';
import TextInput from './components/TextInput';
import AddButton from './components/AddButton';
import SortButton from './components/SortButton';
import FilterButton from './components/FilterButton';


// Contexts
import { TodoContext } from './context/TodoContext';

const App = () => {
  //using components from from provider
  const { todoItems, setTodoItems,inputValue,setInputValue } = useContext(TodoContext);

  //use to toggle between ascending and descending sort button
  const [sortButtonState, setSortButton] = useState(false);

  const handleAddTodo = () => {
    // Check if input is empty; if it is, skip the rest of the function
    if (inputValue === '') {
      return;
    }

    // This is the temporary todo item using the `inputValue`
    const temporaryTodoItem = {
      text: inputValue,
      done: false,
      createDate: new Date(),
    };

    setTodoItems([...todoItems, temporaryTodoItem]);

    // Clear the input
    setInputValue('');
  };

  // use it to retrieve that entire list from local storage
  useEffect(() => {
    const data = localStorage.getItem('todo');

    if (data) {
      setTodoItems(JSON.parse(data));
    }
  }, []);

  // use it to store that entire list from local storage
  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todoItems));
  }, [todoItems]);

  /**
   * checks to see if at any point if the user has completed all todo
   * it reveals a hidden message once the user is done with all todos
   */
  const areTodosDone = () => {
    const doneTodos = todoItems.filter((items) => items.done === true);

    if (doneTodos.length === todoItems.length || !todoItems.length) {
      return true;
    }
    return false;
  };

  /**
   * checks the the date that the todo item was created
   * if the time created is past 3 mins it ramps up
   * the priority of the item and turns the component red
   */
  const getItemPriority = (indexToCheck) => {
    const today = new Date();
    const priorityThreshold = today.setMinutes(today.getMinutes() - 3);
    const itemDate = todoItems[indexToCheck].createDate;
    const itemTimestamp = new Date(itemDate).getTime();

    if (itemTimestamp < priorityThreshold) {
      return false;
    }
    return true;
  };

  /**
   * Filters the list based on the items yet to complete and clears out completed tasks.
   */
  const filterItems = () => {
   
    const templist = todoItems.filter((items) => items.done === false);
    return templist;
  };

  /**
   * Sorting the list in descending/ascending order based on the date.
   */
  const sortItems = () => {
    const temporaryList = [...todoItems];
    for (let i = 0; i < todoItems.length; i++) {
      const convertTodate = new Date(temporaryList[i].createDate);
      temporaryList[i].createDate = convertTodate;
    }

    if (!sortButtonState) {
      onSortAsc(temporaryList);
    } else {
      onSortDes(temporaryList);
    }

    setSortButton(!sortButtonState);
  };

  /**
   * Sorting the list in ascending order
   */
  const onSortAsc = (temporaryList) => {
    temporaryList.sort((a, b) => (a.createDate > b.createDate ? 1 : -1));
    setTodoItems(temporaryList);
  };

  /**
   * Sorting the list in descending order
   */
  const onSortDes = (temporaryList) => {
    temporaryList.sort((a, b) => (a.createDate < b.createDate ? 1 : -1));
    setTodoItems(temporaryList);
  };

  

  return (
    <div className="contatiner py-20 mx-auto max-w-md">
      <div className="bg-white rounded-lg p-10 text-black shadow">
        <div
          class="bg-local p-6 rounded text-black"
          style={{
            backgroundImage: 'url(/images/background.jpeg)',
            position: 'sticky',
          }}
        >
          <legend class="bg-local py-4 rounded text-white text-2xl font-bold">
            To-do List
          </legend>
          <div className="my-4 flex">
            <TextInput
              onSubmit={handleAddTodo}
              onChange={setInputValue}
              value={inputValue}
            />
            <AddButton onClick={handleAddTodo} />
          </div>
        </div>
        <div>
          <FilterButton onClick={filterItems} />

          <SortButton onClick={sortItems} sortDesOrder={sortButtonState} />

          {areTodosDone() && (
            <div className="visible p-3 text-lg text-gray-500 font-bold">
              You are all done!!
            </div>
          )}
        </div>
        <FlipMove className="flip-wrapper my-1 ">
          {todoItems.map((item, index) => (
            <div key={item.createDate}>
              <TodoItem
                item={item}
                id={index}
                createPriority={() => getItemPriority(index)}
                setUpInputValue={setInputValue}
                setUpTodoItems={setTodoItems}
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
