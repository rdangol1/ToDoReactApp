import React from "react";
import PropTypes from "prop-types";
import { FilterIcon } from "../Icons";


const FilterButton =({ setUpTodoItems, listOfItems, ...props})=>{
    /**
     * Filters the list based on the items yet to complete and clears out completed tasks.
     */
     const onClear = () => {
        const tempList = listOfItems.filter((items) => items.done === false);
        setUpTodoItems(tempList);
      };
    return(
        <button
        onClick={onClear}
        className="m-1 text-white bg-blue-700 p-2.5 rounded hover:text-green-300"
        {...props}>
            <FilterIcon />
        </button>
    )
}
FilterButton.propTypes = {
    listOfItems: PropTypes.array,
    setUpTodoItems: PropTypes.func,
    onClear: PropTypes.func,
};
export default FilterButton;