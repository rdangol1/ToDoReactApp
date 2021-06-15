import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DateComponent from "./DateComponent";

const testId = "test-datecomponent";

const defaultProps = {
  "data-testid": testId,
  date: "2021-06-15T19:42:03.678Z"
};

const getComponent = (props = {}) =>
  render(<DateComponent { ...defaultProps} {...props} />);

test("date component renders properly", () => {
  getComponent();
    const dateComponent = screen.getByTestId(testId);
    expect(dateComponent).toBeInTheDocument();
    expect(dateComponent.textContent).toEqual('2021-6-15 13:42:3');
});