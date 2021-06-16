import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SortIconAsc, SortIconDes } from '../Icons';
import { render } from '@testing-library/react';

const SortButton = ({ onClick, sortDesOrder, ...props }) => (
  <button
    onClick={onClick}
    className="m-3 text-white bg-red-400 p-2.5 rounded hover:text-gray-300"
    {...props}
  >
    {sortDesOrder ? <SortIconDes /> : <SortIconAsc />}
  </button>
);

SortButton.propTypes = {
  onClick: PropTypes.func,
  sortDesOrder: PropTypes.bool,
};

export default SortButton;
