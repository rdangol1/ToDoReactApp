import React from "react";
import PropTypes from "prop-types";
import { EditIcon } from "../Icons";

const EditButton =({setUpInputValue, setUpTodoItems, indexId, listOfItems, ...props}) =>{
    const editItem = (indexToEdit) => {

        const tempList = [
            ...listOfItems.slice(0, indexToEdit),
            ...listOfItems.slice(indexToEdit + 1, listOfItems.length),
        ];
        setUpInputValue(listOfItems[indexToEdit].text);
        setUpTodoItems(tempList);
    };
    return(
        <button
        onClick={ () => editItem(indexId)}
        className="text-red-600 float-right mr-3 rounded-md p-0.5"
        {...props}>
            <EditIcon />
        </button>
    );
}
EditButton.propTypes = {
    setUpInputValue: PropTypes.func,
};
EditButton.propTypes = {
    setUpTodoItems: PropTypes.func,
};
EditButton.propTypes = {
    indexId: PropTypes.number,
};
  
export default EditButton;
  