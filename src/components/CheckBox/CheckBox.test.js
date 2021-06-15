import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import CheckBox from "./CheckBox";

const testId = "test-checkboxtoggle";
const defaultProps = {
  "data-testid": testId,
};
const getComponent = (props = {}) =>
  render(<CheckBox {...defaultProps} {...props} />);

test("check box renders", () => {
  getComponent();

  const CheckBox = screen.getByTestId(`${testId}-input`);

  expect(CheckBox).toBeInTheDocument();
});

test(" renders on click onToggle ", () => {
    const onClickMockFunction = jest.fn();
  
    getComponent({ onToggle: onClickMockFunction });
  
    const checkedbox = screen.getByTestId(`${testId}-input`);
  
    fireEvent.click(checkedbox);
    expect(onClickMockFunction).toHaveBeenCalledTimes(1);
});

test("cheking the state of the checkbox", () => {
    const onClickMockFunction = jest.fn();

    getComponent({ onToggle: onClickMockFunction, checked: true });

    const checkedbox = screen.getByTestId(`${testId}-input`);
    
    fireEvent.click(checkedbox);

    const label = screen.getByTestId(`${testId}-label`)

    expect(label).toHaveClass("line-through");

});