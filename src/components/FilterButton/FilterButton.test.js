import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FilterButton from "./FilterButton";

const testId = "test-filterbutton";
const defaultProps = {
  "data-testid": testId,
  // listOfItems: [["lemon", false, "2021-06-15 20:21:47",],
  //               ["toy", true, "2021-06-15 20:21:49",]],
};
const getComponent = (props = {}) =>
  render(<FilterButton {...defaultProps} {...props} />);

test(" filter button renders", () => {
  getComponent();

  const FilterButton = screen.getByTestId(testId);

  expect(FilterButton).toBeInTheDocument();
});

test("callback fires on click of filter button", () => {
  const onClickFilterButtonMockFunction = jest.fn();

  getComponent({ onClick: onClickFilterButtonMockFunction });

  const FilterButton = screen.getByTestId(testId);
  
  expect(onClickFilterButtonMockFunction).not.toHaveBeenCalled();

  fireEvent.click(FilterButton);
  // const tempList = defaultProps.listOfItems.filter((items) => items.done === false)
  expect(onClickFilterButtonMockFunction).toHaveBeenCalledTimes(1);
});