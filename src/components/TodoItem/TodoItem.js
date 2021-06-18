import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import DateComponent from '../DateComponent';
import CheckBox from '../CheckBox';
import EditButton from '../EditButton';
import DeleteButton from '../DeleteButton';

const TodoItem = ({
  item,
  createPriority,
  setUpInputValue,
  setUpTodoItems,
  listOfItems,
  indextoEdit,
  id,
  ...props
}) => {
  const { done, text, createDate } = item;

  /**
   * This state is used to hold if the checkbox for the todo item
   * is checked or not
   */
  const [isChecked, setIsChecked] = useState(done);

  //function the set the color of the todo item
  const classCharecter = classnames({
    'border-b-2 p-2 bg-gradient-to-r from-white via-blue-100 to-blue-200 m-1 rounded-md':
      createPriority(),
    'border-b-2 p-2 bg-gradient-to-r from-white via-red-100 to-red-200 m-1 rounded-md':
      !createPriority(),
  });

  return (
    <div className={classCharecter}>
      <CheckBox
        id={id}
        defaultCompleted={done}
        indexId={id}
        checked={isChecked}
        onToggle={setIsChecked}
        label={text}
      />
      <label className="text-gray-400 text-sm" htmlFor={id} {...props}>
        <DateComponent date={createDate} />
      </label>
      <div>
      <DeleteButton
        indexId={id}
      />

      <EditButton
        indexId={id}
      />

      </div>
      
    </div>
   );
};

TodoItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  createPriority: PropTypes.func,
  createDate: PropTypes.func,
  defaultCompleted: PropTypes.bool,
  
};

export default TodoItem;
