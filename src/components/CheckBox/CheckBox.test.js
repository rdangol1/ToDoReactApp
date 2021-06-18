import React from "react";
import { render, renderHook, screen, fireEvent } from "@testing-library/react";
import CheckBox from "./CheckBox";
import { TodoContext } from '../../context/TodoContext';

const testId = "test-checkboxtoggle";
const fakeItems = [["lemon", false, "2021-06-15 20:21:47",],
["toy", false, "2021-06-15 20:21:49",]];
const defaultProps = {
  "data-testid": testId,
};

const getComponent = (props = {}) =>
  render(<CheckBox {...defaultProps} {...props} />);

test("check box renders", () => {
  jest.spyOn(React, 'useContext').mockImplementation(() => ({
    todoItems: fakeItems,
    setTodoItems: () => {}
  }));

  getComponent();
  const CheckBox = screen.getByTestId(`${testId}-input`);
  expect(CheckBox).toBeInTheDocument();
});

test("renders on click ontoggle ", () => {
  jest.spyOn(React, 'useContext').mockImplementation(() => ({
    todoItems: fakeItems,
    setTodoItems: () => {}
  }));
  const onClickMockFunction = jest.fn();
  getComponent({ onToggle: onClickMockFunction });
  const checkedbox = screen.getByTestId(`${testId}-input`);
  fireEvent.click(checkedbox);
  expect(onClickMockFunction).toHaveBeenCalledTimes(1);
});

test("checking the state of the checkbox", () => {
  jest.spyOn(React, 'useContext').mockImplementation(() => ({
    todoItems: fakeItems,
    setTodoItems: () => {}
  }));

  const onClickMockFunction = jest.fn();

  getComponent({ onToggle: onClickMockFunction, checked: true});

  const checkedbox = screen.getByTestId(`${testId}-input`);
  
  fireEvent.click(checkedbox);

  const label = screen.getByTestId(`${testId}-label`)

  expect(label).toHaveClass("line-through");
});