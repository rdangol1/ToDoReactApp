import React from "react";
import { render, screen, fireEvent  } from "@testing-library/react";
import DeleteButton from "./DeleteButton";


const testId = "test-deletebutton";

const defaultProps = {
  "data-testid": testId,
};
const getComponent = (props = {}) =>
  render(<DeleteButton {...defaultProps} {...props} />);

test("Delete button renders", () => {
  getComponent();

  const deleteButton = screen.getByTestId(testId);

  expect(deleteButton).toBeInTheDocument();
});

test("callback fires on click of delete button", () => {
  const onClickDeleteMockFunction = jest.fn();

  getComponent({ onClick: onClickDeleteMockFunction });

  const DeleteButton = screen.getByTestId(testId);

  expect(onClickDeleteMockFunction).not.toHaveBeenCalled();

  fireEvent.click(DeleteButton);

  expect(onClickDeleteMockFunction).toHaveBeenCalledTimes(1);
  
});
