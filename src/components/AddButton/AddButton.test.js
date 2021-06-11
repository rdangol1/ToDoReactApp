import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddButton from "./AddButton";

const testId = "test-button";
const defaultProps = {
  "data-testid": testId,
};
const getComponent = (props = {}) =>
  render(<AddButton {...defaultProps} {...props} />);

test("default button", () => {
  getComponent();
  const button = screen.getByTestId(testId);
  expect(button).toBeInstanceOf(HTMLButtonElement);
  expect(button).toBeInTheDocument();
});

test("callback fires on click", () => {
  const onClick = jest.fn();
  getComponent({ onClick });
  const button = screen.getByTestId(testId);
  expect(onClick).not.toHaveBeenCalled();

  fireEvent.click(button);
  expect(onClick).toHaveBeenCalledTimes(1);
});
