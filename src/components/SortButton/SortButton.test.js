import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SortButton from "./SortButton";

const testId = "test-sortbutton";
const defaultProps = {
  "data-testid": testId,
};
const getComponent = (props = {}) =>
  render(<SortButton {...defaultProps} {...props} />);

test("sortbutton renders", () => {
  getComponent();

  const SortButton = screen.getByTestId(testId);

  expect(SortButton).toBeInTheDocument();
});

test("callback fires on click of sort button", () => {
  const onClickSortButtonMockFunction = jest.fn();

  getComponent({ onClick: onClickSortButtonMockFunction });

  const SortButton = screen.getByTestId(testId);
  
  expect(onClickSortButtonMockFunction).not.toHaveBeenCalled();

  fireEvent.click(SortButton);

  expect(onClickSortButtonMockFunction).toHaveBeenCalledTimes(1);
});
