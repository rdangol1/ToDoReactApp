import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddButton from "./AddButton";

const testId = "test-button";
const defaultProps = {
  "data-testid": testId,
};
const getComponent = (props = {}) =>
  render(<AddButton {...defaultProps} {...props} />);


test(" add button renders", () => {
  getComponent();

  const button = screen.getByTestId(testId);

  expect(button).toBeInTheDocument();
});

test("callback fires on click of add button", () => {
  const onClickMockFunction = jest.fn();

  getComponent({ onClick: onClickMockFunction });

  const button = screen.getByTestId(testId);
  
  expect(onClickMockFunction).not.toHaveBeenCalled();

  fireEvent.click(button);

  expect(onClickMockFunction).toHaveBeenCalledTimes(1);
});
