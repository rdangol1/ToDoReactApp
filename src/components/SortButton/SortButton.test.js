import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SortButton from "./SortButton";

const testId = "test-sortbutton";
const defaultProps = {
  "data-testid": testId,
  listOfItems: [["lemon", false, "2021-06-15 20:21:47",],
                ["toy", false, "2021-06-15 20:21:49",]],

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

  getComponent({ setUpTodoItems: onClickSortButtonMockFunction });

  const SortButton = screen.getByTestId(testId);
  
  expect(onClickSortButtonMockFunction).not.toHaveBeenCalled();

  fireEvent.click(SortButton);

  const sortedAsc = defaultProps.listOfItems.sort((a, b) => (a.createDate > b.createDate ? 1 : -1));
  expect(onClickSortButtonMockFunction).toHaveBeenCalledWith(sortedAsc);

  fireEvent.click(SortButton);
  const sortedDes = defaultProps.listOfItems.sort((a, b) => (a.createDate < b.createDate ? 1 : -1));
  expect(onClickSortButtonMockFunction).toHaveBeenCalledWith(sortedDes);
});
