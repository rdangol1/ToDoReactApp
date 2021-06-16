import React, { createContext } from 'react';

export const TodoContext = createContext({
  todoItems: [],
  deleteItem: () => {},
});

const TodoContextProvider = ({ children }) => {
  const value = {
    todoItems: [],
    deleteItem: (index) => console.log(`Deleted item ${index}`),
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoContextProvider;
