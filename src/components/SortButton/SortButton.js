import React from "react";
import PropTypes from "prop-types";
import { SortIcon } from "../Icons";

const SortButton =({ setUpTodoItems, listOfItems, ...props})=>{
    /**
     * Sorting the list in Descending order based on the date.
     */
    const onSort = () => {
        const temporaryList = [...listOfItems];
        for (let i = 0; i < listOfItems.length; i++) {
          const convertTodate = new Date(temporaryList[i].createDate);
          temporaryList[i].createDate = convertTodate;
        }
        temporaryList.sort((a, b) => (a.createDate < b.createDate ? 1 : -1));
        setUpTodoItems(temporaryList);
    
        for (let i = 0; i < listOfItems.length; i++) {
          const convertTodate = temporaryList[i].createDate;
          const ItemDate = JSON.parse(
            JSON.stringify(
              convertTodate.getFullYear() +
                "-" +
                (convertTodate.getMonth() + 1) +
                "-" +
                convertTodate.getDate() +
                " " +
                convertTodate.getHours() +
                ":" +
                convertTodate.getMinutes() +
                ":" +
                convertTodate.getSeconds()
            )
          );
    
          temporaryList[i].createDate = ItemDate;
        }
        setUpTodoItems(temporaryList);
    };
    return(
        <button
        onClick={onSort}
        className="m-3 text-white bg-purple-300 p-2.5 rounded hover:text-green-300"
        {...props}>
            <SortIcon />
        </button>
    )
}
SortButton.propTypes = {
    listOfItems: PropTypes.array,
};
SortButton.propTypes = {
    setUpTodoItems: PropTypes.func,
};
SortButton.propTypes = {
    onSort: PropTypes.func,
};
export default SortButton;




