import React, { createContext, useContext, useState } from 'react';

export const TodoContext = createContext({
});

const TodoContextProvider = ({ children }) => {
 
  // use to update the list and its components
  const [todoItems, setTodoItems] = useState([]);

  // sets the value that the user input into the input text field
  const [inputValue, setInputValue] = useState('');

  function deleteItem(index) {
    const tmpTodoList = [
      ...todoItems.slice(0, index),
      ...todoItems.slice(index + 1, todoItems.length),
    ];
    
    setTodoItems(tmpTodoList);
  }

  return (
  <TodoContext.Provider 
    value={{todoItems,
            inputValue,
            setTodoItems,
            setInputValue,
            deleteItem, 
            }}>
    
    {children}
  </TodoContext.Provider>
  );
};

export default TodoContextProvider;
