import React, { useState, useEffect } from "react";
import classnames from "classnames";


const AddButton =({handleAddTodo}) => {

    return(
        <button
            onClick={handleAddTodo}
            type="submit"
            className="bg-green-400 rounded-full text-white w-10 h-10 ring-4 ring-green-200"
            >
            +
        </button>
    )
}
export default AddButton;