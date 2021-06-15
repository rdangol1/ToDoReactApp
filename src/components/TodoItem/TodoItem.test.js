import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoItem from "./TodoItem";

const testId = "test-todoitem";
const defaultProps = {
  "data-testid": testId,
};
const getComponent = (props = {}) =>
  render(<TodoItem {...defaultProps} {...props} />);

test(" renders todo items ", () => {
  getComponent();
  const TodoItem = screen.getByTestId(testId);
  expect(TodoItem).toBeInTheDocument();
});




