import React from 'react';
import PropTypes from 'prop-types';
import { FilterIcon } from '../Icons';

const FilterButton = ({ onClick, setUpTodoItems, listOfItems, ...props }) => (
  <button
    onClick={onClick}
    className="m-1 text-white bg-blue-700 p-2.5 rounded hover:text-green-300"
    {...props}
  >
    <FilterIcon />
  </button>
);

FilterButton.propTypes = {
  onClick: PropTypes.func,
};
export default FilterButton;
