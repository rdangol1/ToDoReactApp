import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { DeleteIcon } from '../Icons';

// Context
import { TodoContext } from '../../context/TodoContext';

const DeleteButton = ({
  setUpInputValue,
  setUpTodoItems,
  indexId,
  listOfItems,
  ...props
}) => {
  const { deleteItem } = useContext(TodoContext);

  /**
   * Delete item from todo list
   */
  // const onDelete = (indexToDelete) => {
  //   const tmpTodoList = [
  //     ...listOfItems.slice(0, indexToDelete),
  //     ...listOfItems.slice(indexToDelete + 1, listOfItems.length),
  //   ];
  //   setUpTodoItems(tmpTodoList);
  // };

  return (
    <button
      onClick={() => deleteItem(indexId)}
      className="text-red-600 float-right rounded-md p-0.5 "
      {...props}
    >
      <DeleteIcon />
    </button>
  );
};
DeleteButton.propTypes = {
  setUpInputValue: PropTypes.func,
  setUpTodoItems: PropTypes.func,
  indexId: PropTypes.number,
  listOfItems: PropTypes.array,
};

export default DeleteButton;
