import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FilterButton from "./FilterButton";

const testId = "test-filterbutton";
const defaultProps = {
  "data-testid": testId,
};
const getComponent = (props = {}) =>
  render(<FilterButton {...defaultProps} {...props} />);

test("sortbutton renders", () => {
  getComponent();

  const FilterButton = screen.getByTestId(testId);

  expect(FilterButton).toBeInTheDocument();
});

test("callback fires on click of sort button", () => {
  const onClickFilterButtonMockFunction = jest.fn();

  getComponent({ onClick: onClickFilterButtonMockFunction });

  const FilterButton = screen.getByTestId(testId);
  
  expect(onClickFilterButtonMockFunction).not.toHaveBeenCalled();

  fireEvent.click(FilterButton);

  expect(onClickFilterButtonMockFunction).toHaveBeenCalledTimes(1);
});