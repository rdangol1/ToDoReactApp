import React from "react";
import PropTypes from 'prop-types';
import { DeleteIcon } from "../Icons";

const DeleteButton =({setUpInputValue, setUpTodoItems, indexId, listOfItems, ...props}) =>{
    /**
   * Delete item from todo list
   */
    const onDelete = (indexToDelete) => {
        const tmpTodoList = [
          ...listOfItems.slice(0, indexToDelete),
          ...listOfItems.slice(indexToDelete + 1, listOfItems.length),
        ];
        setTodoItems(tmpTodoList);
      };

    return(
        <button
        onClick={ () => onDelete(indexId)}
        className="text-red-600 float-right rounded-md p-0.5 "
        {...props}>
            <DeleteIcon />
        </button>
    )
}
DeleteButton.propTypes = {
    setUpInputValue: PropTypes.func,
};
DeleteButton.propTypes = {
    setUpTodoItems: PropTypes.func,
};
DeleteButton.propTypes = {
    indexId: PropTypes.number,
};
DeleteButton.propTypes = {
    listOfItems: PropTypes.array,
};

export default DeleteButton;