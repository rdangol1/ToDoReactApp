import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TextInput from "./TextInput";

const testId = "test-input";
const defaultProps = {
  "data-testid": testId,
};
const getComponent = (props = {}) =>
  render(<TextInput {...defaultProps} {...props} />);

test("input renders", () => {
  getComponent();
  const input = screen.getByTestId(testId);
  expect(input).toBeInTheDocument();
});


test("callback fires on change", () => {
  const onChangeMockFunction = jest.fn();
  getComponent({ onChange: onChangeMockFunction });
  const input = screen.getByTestId(testId);
  
  expect(onChangeMockFunction).not.toHaveBeenCalled();

  fireEvent.change(input,{target:{value:"itemx"}})
  expect(typeof 'value').toBe('string');
  expect(input.value).toBe("itemx")
  
  expect(onChangeMockFunction).toHaveBeenCalledTimes(1);
});


test("callback fires on key up", () => {
    const onKeyUpMockFunction = jest.fn();

    getComponent({ onKeyUp: onKeyUpMockFunction });

    const keyUp = screen.getByTestId(testId);

    expect(onKeyUpMockFunction).not.toHaveBeenCalled();

    fireEvent.keyUp(keyUp, {key:'Enter', code:13});

    expect(onKeyUpMockFunction).toHaveBeenCalledTimes(1);
});






