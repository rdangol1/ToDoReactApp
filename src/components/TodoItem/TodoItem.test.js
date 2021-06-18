import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoItem from "./TodoItem";

const testId = "test-todoitem";
const defaultProps = {
  "data-testid": testId,
  item: {
    done: false,
    text: "Test item",
    createDate: "2021-06-15T19:42:03.678Z"
  },
  createPriority: () => {},
  listOfItems: [],
  indextoEdit: 0,
  id: "abc",
};

const getComponent = (props = {}) =>
  render(<TodoItem {...defaultProps} {...props} />);

test("renders todo items ", () => {
  jest.spyOn(React, 'useContext').mockImplementation(() => ({
    name: 'this is a mock context return value'
  }));
  
  getComponent();
  const TodoItem = screen.getByTestId(testId);
  expect(TodoItem).toBeInTheDocument();
});




