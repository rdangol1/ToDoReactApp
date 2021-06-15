import React,{useState} from "react";
import PropTypes from "prop-types";
import { SortIconAsc, SortIconDes } from "../Icons";
import { render } from "@testing-library/react";

const SortButton =({ setUpTodoItems, listOfItems, ...props})=>{

  //use to toggle between ascending and descending sort button
  const [SortButtonState, setSortButton] = useState(false);
    /**
     * Sorting the list in descending order based on the date.
     */
    const onSort = () => {
      const temporaryList = [...listOfItems];
      for (let i = 0; i < listOfItems.length; i++) {
        const convertTodate = new Date(temporaryList[i].createDate);
        temporaryList[i].createDate = convertTodate;
      }
      if(!SortButtonState){
        onSortAsc(temporaryList);
      }
      else{
        onSortDes(temporaryList);
      }

      setSortButton(!SortButtonState);
    };
    const onSortAsc = (temporaryList) => {
      temporaryList.sort((a, b) => (a.createDate > b.createDate ? 1 : -1));
      setUpTodoItems(temporaryList);
    };
    const onSortDes = (temporaryList) => {
      temporaryList.sort((a, b) => (a.createDate < b.createDate ? 1 : -1));
      setUpTodoItems(temporaryList);
    };

    return(
        <button
          onClick={onSort }
          className="m-3 text-white bg-purple-300 p-2.5 rounded hover:text-green-300"
          {...props}>
           {SortButtonState ?  <SortIconDes /> : <SortIconAsc /> }
        </button>
    )
}
SortButton.propTypes = {
    listOfItems: PropTypes.array,
    setUpTodoItems: PropTypes.func,
    onSort: PropTypes.func,
    onSortDes:PropTypes.func,
    onSortAsc:PropTypes.func
};
export default SortButton;




