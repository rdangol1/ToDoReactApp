import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckBox from "./CheckBox";

const testId = "test-checkboxtoggel";
const defaultProps = {
  "data-testid": testId,
};
const getComponent = (props = {}) =>
  render(<CheckBox {...defaultProps} {...props} />);

test("check box renders", () => {
  getComponent();

  const CheckBox = screen.getByTestId(testId);

  expect(CheckBox).toBeInTheDocument();
});

test(" renders on click onToggle ", () => {
    const onClickMockFunction = jest.fn();
  
    getComponent({ onClick: onClickMockFunction });
  
    const checkedbox = screen.getByTestId(testId); 
  
    fireEvent.click(checkedbox);
    expect(onClickMockFunction).toHaveBeenCalledTimes(1);
});

// test("cheking the state of the checkbox", () => {
//     const onClickMockFunction = jest.fn();

//     getComponent({ onChecked: onClickMockFunction });

//     const checkedbox = screen.getByTestId(testId);
    
//     fireEvent.checked(checkedbox);

//     expect(find('[htmlFor="label]')).toHaveClass("line-through");

// });