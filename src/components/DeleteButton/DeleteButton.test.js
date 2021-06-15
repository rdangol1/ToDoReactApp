import React from "react";
import { render, screen, fireEvent  } from "@testing-library/react";
import DeleteButton from "./DeleteButton";


const testId = "test-deletebutton";

const defaultProps = {
  "data-testid": testId,
  listOfItems: []
};
const getComponent = (props = {}) =>
  render(<DeleteButton {...defaultProps} {...props} />);

test("delete button renders", () => {
  getComponent();

  const deleteButton = screen.getByTestId(testId);

  expect(deleteButton).toBeInTheDocument();
});

test("callback fires on click of delete button", () => {
  const onClickDeleteMockFunction = jest.fn();

  getComponent({ setUpTodoItems: onClickDeleteMockFunction });

  const DeleteButton = screen.getByTestId(testId);

  expect(onClickDeleteMockFunction).not.toHaveBeenCalled();

  fireEvent.click(DeleteButton);

  expect(onClickDeleteMockFunction).toHaveBeenCalledWith([]);
  
});
