import React from "react";
import { render, screen, fireEvent  } from "@testing-library/react";
import DeleteButton from "./DeleteButton";


const testId = "test-deletebutton";

const defaultProps = {
  "data-testid": testId,
  //listOfItems: []
};
const getComponent = (props = {}) =>
  render(<DeleteButton {...defaultProps} {...props} />);

test("delete button renders", () => {
  jest.spyOn(React, 'useContext').mockImplementation(() => ({
    deleteItem: () => {}
  }));

  getComponent();

  const deleteButton = screen.getByTestId(testId);

  expect(deleteButton).toBeInTheDocument();
});

test("callback fires on click of delete button", () => {
  const onClickDeleteMockFunction = jest.fn();

  jest.spyOn(React, 'useContext').mockImplementation(() => ({
    deleteItem: onClickDeleteMockFunction,
  }));

  getComponent();

  const DeleteButton = screen.getByTestId(testId);

  expect(onClickDeleteMockFunction).not.toHaveBeenCalled();

  fireEvent.click(DeleteButton);

  expect(onClickDeleteMockFunction).toHaveBeenCalled();
  
});
