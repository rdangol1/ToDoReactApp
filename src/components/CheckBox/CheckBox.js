import React from "react"
import classnames from "classnames";
import PropTypes from "prop-types";

const CheckBox = ({defaultCompleted, setUpTodoItems, indexId, id, listOfItems, label, checkBoxToggleStatus, Checked, ...props}) =>{

  /**
   * This function is fired when the checkbox for the todo item
   * is clicked
   */
    const onClick = () => {
        // Make checked state opposite its value and update the state
        checkBoxToggleStatus(!Checked);
    
        // Call `onToggle` function from props
        onToggle();
    };

    const onToggle = (indexToToggle) => {
        // TODO: use something like the index to set the `checked` state true or false
        const temporaryList = [...listOfItems];
        let tempItem = { ...temporaryList[indexToToggle] };
        tempItem.done = !tempItem.done;
        temporaryList[indexToToggle] = tempItem;
        setUpTodoItems(temporaryList);
    };

    return(
        <div>
            <input
            onClick={onClick}
            className="mr-5"
            type="checkbox"
            id={id}
            name={id}
            onChecked={Checked}
            {...props}/>
        </div>
       
    )
}
CheckBox.propTypes = {
    onToggle: PropTypes.func,
  };
CheckBox.propTypes = {
defaultCompleted: PropTypes.bool,
};
CheckBox.propTypes = {
    label: PropTypes.string,
};
CheckBox.propTypes = {
    id: PropTypes.string,
  };
  

export default CheckBox;
