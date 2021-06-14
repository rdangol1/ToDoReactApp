import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import EditButton from "./EditButton";

const testId = "test-editbutton";
const defaultProps = {
  "data-testid": testId,
};
const getComponent = (props = {}) =>
  render(<EditButton {...defaultProps} {...props} />);

test("button renders", () => {
  getComponent();
  const editbutton = screen.getByTestId(testId);
  expect(editbutton).toBeInTheDocument();
});

test("callback fires on click", () => {
  const onClickEditMockFunction = jest.fn();
  getComponent({ onClick: onClickEditMockFunction });
  const editbutton = screen.getByTestId(testId);
  expect(onClickEditMockFunction).not.toHaveBeenCalled();

  fireEvent.click(editbutton);

  expect(onClickEditMockFunction).toHaveBeenCalledTimes(1);
});