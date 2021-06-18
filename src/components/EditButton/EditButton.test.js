import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import EditButton from "./EditButton";

const testId = "test-editbutton";
const fakeItems = [["lemon", false, "2021-06-15 20:21:47",],
["toy", false, "2021-06-15 20:21:49",]];

const defaultProps = {
  "data-testid": testId,
  indexId: 0
};
const getComponent = (props = {}) =>
  render(<EditButton {...defaultProps} {...props} />);

test("edit button renders", () => {
  jest.spyOn(React, 'useContext').mockImplementation(() => ({
    todoItems: fakeItems,
    setTodoItems: () => {}
  }));

  getComponent();

  const editButton = screen.getByTestId(`${testId}-button`);

  const input = screen.getByTestId(`${testId}-input`);

  expect(editButton).toBeInTheDocument();
  expect(input).toBeInTheDocument();

});

test("callback fires on click of edit button", () => {
  jest.spyOn(React, 'useContext').mockImplementation(() => ({
    todoItems: fakeItems,
    setTodoItems: () => {}
  }));

  getComponent();

  const editButton = screen.getByTestId(`${testId}-button`);
  const input = screen.getByTestId(`${testId}-input`);

  fireEvent.click(editButton);

  expect(input).toHaveClass("visible");
});

test("callback fires on key up", () => {
  const mockSetTodoItems = jest.fn();

  jest.spyOn(React, 'useContext').mockImplementation(() => ({
    todoItems: fakeItems,
    setTodoItems: mockSetTodoItems
  }));

  getComponent();

  const editInput = screen.getByTestId(`${testId}-input`);

  expect(mockSetTodoItems).not.toHaveBeenCalled();

  fireEvent.keyUp(editInput, { keyCode: 13 });
  expect(mockSetTodoItems).not.toHaveBeenCalled();

  fireEvent.change(editInput, { target: { value: 'test' } })
  fireEvent.keyUp(editInput, { keyCode: 13 });
    
  expect(mockSetTodoItems).toHaveBeenCalledTimes(1);
});
