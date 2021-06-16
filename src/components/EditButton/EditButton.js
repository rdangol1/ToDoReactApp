import React from 'react';
import PropTypes from 'prop-types';
import { EditIcon } from '../Icons';

const EditButton = ({
    setUpInputValue,
    setUpTodoItems,
    indexId,
    listOfItems,
    indextoEdit,
    ...props
}) => {
    /**
     * Edits item from todo list an puts the todo text back into the input field
     */
    const onEdit = (indexToEdit) => {
        //setUpEditstate(!editState);

        setUpInputValue(listOfItems[indexToEdit].text);

        const tempList = [
            ...listOfItems.slice(0, indexToEdit),
            ...listOfItems.slice(indexToEdit + 1, listOfItems.length),
        ];
        setUpTodoItems(tempList);

        //indextoEdit(indexId);
    };
    return (
        <button
            onClick={() => onEdit(indexId)}
            className="text-red-600 float-right mr-3 rounded-md p-0.5"
            {...props}
        >
            <EditIcon />
        </button>
    );
};
EditButton.propTypes = {
    setUpInputValue: PropTypes.func,
    setUpTodoItems: PropTypes.func,
    indexId: PropTypes.number,
    listOfItems: PropTypes.array,
    onEdit: PropTypes.func,
    indexToEdit: PropTypes.number,
};

export default EditButton;
