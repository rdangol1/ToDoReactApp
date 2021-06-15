import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import EditButton from "./EditButton";

const testId = "test-editbutton";

const defaultProps = {
  "data-testid": testId,
  listOfItems: [["lemon", false, "2021-06-15 20:21:47",],
                ["toy", false, "2021-06-15 20:21:49",]],
  indexId: 0
};
const getComponent = (props = {}) =>
  render(<EditButton {...defaultProps} {...props} />);

test("Edit button renders", () => {
  getComponent();

  const editButton = screen.getByTestId(testId);

  expect(editButton).toBeInTheDocument();
});

test("callback fires on click of edit button", () => {
  const onClickEditMockFunction = jest.fn();
  const setUpInputValue = jest.fn();

  getComponent({ setUpTodoItems : onClickEditMockFunction, setUpInputValue });

  const editButton = screen.getByTestId(testId);

  expect(onClickEditMockFunction).not.toHaveBeenCalled();

  fireEvent.click(editButton);

  expect(onClickEditMockFunction).toHaveBeenCalledWith([defaultProps.listOfItems[1]]);
  
});