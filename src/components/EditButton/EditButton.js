import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { EditIcon } from '../Icons';
import classnames from 'classnames';
import { TodoContext } from '../../context/TodoContext';

const EditButton = ({
    indexId,
    ...props
}) => {

    /**
     * Edits item from todo list an puts the todo text back into the input field
     */
    
    const {todoItems, setTodoItems} = useContext(TodoContext);

    // sets the value that the user input into the input text field
    const[editToggle, setEditToggle] = useState(false);

     // sets the value that the user input into the input text field
    const [editInputValue, setEditInputValue] = useState('');
    
    const inputvisibility = classnames({
        hidden: !editToggle, 
        visible: editToggle,
    });

    const onClick = () =>{
        setEditToggle(!editToggle);
        setEditInputValue(todoItems[indexId].text);
    }

    const pressKeyUp = (event) => {
        if (event.keyCode === 13) {
            const templist =[...todoItems];
           
            let tempItem = {...templist[indexId]}
            
            tempItem.text = editInputValue;
            
            templist[indexId] =tempItem;

            setTodoItems(templist);
            
            setEditInputValue('')
            
            setEditToggle(!editToggle);
        }
    }
    return (
        <div>
            <button
                onClick={onClick}
                className="text-red-600 float-right mr-3 rounded-md p-0.5"
                {...props}
            >
                <EditIcon />
            </button>
            <br>
            </br>
            <input
                type="text"
                className= {inputvisibility}
                onChange={(event) => setEditInputValue(event.target.value)}
                onKeyUp={pressKeyUp}
                value={editInputValue}
            />
        </div>
    );
};
EditButton.propTypes = {
    
    indexId: PropTypes.number,

};

export default EditButton;
