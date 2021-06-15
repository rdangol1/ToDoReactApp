import React from "react"
import classnames from "classnames";
import PropTypes from "prop-types";

const CheckBox = ({defaultCompleted, setUpTodoItems, id, listOfItems, indexId, label, onToggle, checked, "data-testid": testId, ...props}) =>{

    /**
     * This function is fired when the checkbox for the todo item
     * is clicked
     */
    const handleOnChange = () => {
        // Call `onToggle` function
        // TODO: use something like the index to set the `checked` state true or false
        const temporaryList = [...listOfItems];
        let tempItem = { ...temporaryList[indexId] };
        tempItem.done = !tempItem.done;
        temporaryList[indexId] = tempItem;
        setUpTodoItems(temporaryList);

        // Make checked state opposite its value and update the state
        onToggle(!checked);
    };

    /**
     * Classnames to conditionally be applied to the `label`
     */
    const classname = classnames({
        "text-gray-600": !checked, // If checkbox is not checked
        "line-through": checked, // If checkbox is checked
        "text-gray-300": checked, // If checkbox is checked
    });
    
    return (
        <div>
            <input
                onChange={handleOnChange}
                className="mr-5"
                type="checkbox"
                id={id}
                name={id}
                checked={checked}
                data-testid={`${testId}-input`}
            />
            <label
                className={classname} 
                htmlFor={id}
                data-testid={`${testId}-label`}
            >
                {label}
            </label>
        </div>
       
    )
}
CheckBox.propTypes = {
    onToggle: PropTypes.func,
    defaultCompleted: PropTypes.bool,
    label: PropTypes.string,
    id: PropTypes.string,
    checkBoxToggleStatus: PropTypes.func,
    setUpTodoItems: PropTypes.func,
    Checked: PropTypes.bool,
    listOfItems: PropTypes.array,
    Checked: PropTypes.bool,
};

CheckBox.defaultProps = {
    checkBoxToggleStatus: () => {},
    listOfItems: [],
    setUpTodoItems: () => {}
}


export default CheckBox;
