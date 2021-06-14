import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoItem from "./TodoItem";

const testId = "test-TodoItem";
const defaultProps = {
  "data-testid": testId,
};
// const getComponent = (props = {}) =>
//   render(<TodoItem {...defaultProps} {...props} />);

// test(" renders", () => {
//   getComponent();
//   const TodoItem = screen.getByTestId(testId);
//   expect(TodoItem).toBeInTheDocument();
// });

// test("delete button renders", () => {
//     getComponent();
//     const deleteButton = screen.getByTestId(testId);
//     expect(deleteButton).toBeInTheDocument();

// });

// test("delete button render "), () => {
//     const onDeleteMockFunction =jest.fn();
//     getComponent({ onDelete : onDeleteMockFunction});
//     const deleteButton =screen.getByTestId(testId);

//     expect(onDeleteMockFunction).not.toHaveBeenCalled();

//     fireEvent.click(deleteButton);
//     expect(onDeleteMockFunction).toHaveBeenCalledTimes(1);
    
// }