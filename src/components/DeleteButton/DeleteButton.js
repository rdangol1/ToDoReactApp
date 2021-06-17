import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { DeleteIcon } from '../Icons';
import { TodoContext} from '../../context/TodoContext';

const DeleteButton = ({indexId, ...props
}) => {
  const { deleteItem } = useContext(TodoContext);

  /**
   * Delete item from todo list
   */
  return (
    <button
      onClick={() => deleteItem(indexId)}
      className="text-red-600 float-right rounded-md p-0.5 "
      {...props}
    >
      <DeleteIcon />
    </button>
  );
};
DeleteButton.propTypes = {
  
  indexId: PropTypes.number,
 
};

export default DeleteButton;
