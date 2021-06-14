import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import EditButton from "./EditButton";

const testId = "test-editbutton";

const defaultProps = {
  "data-testid": testId,
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

  getComponent({ onClick: onClickEditMockFunction });

  const editButton = screen.getByTestId(testId);

  expect(onClickEditMockFunction).not.toHaveBeenCalled();

  fireEvent.click(editButton);

  expect(onClickEditMockFunction).toHaveBeenCalledTimes(1);
  
});