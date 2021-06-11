import React from "react";


const TextInput =({ handleAddTodo, settingInput, inputValueToSet}) => {

    const handleKeyUp = (event) => {
        if (event.keyCode === 13) {
          event.preventDefault();
          handleAddTodo();
        }
    };
    return(
        <input
            type="text"
            className="p-2 border-2 border-gray-200 rounded-md mr-2 flex-1"
            onChange={(event) => settingInput(event.target.value)}
            onKeyUp={handleKeyUp}
            value={inputValueToSet}
        />
    )
}
export default TextInput;
