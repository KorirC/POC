import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Login from "./login";

it("if form is submitted and inputs modifiable", () => {
    const spy = jest.fn();
//   const mockSubmit = jest.fn(<Login />);
  const  {getByTestId}  = render(<Login onSubmit={spy} />);

  fireEvent.change(getByTestId("name"), { target: { value: "testuser" } }); // invoke handleChange
  fireEvent.change(getByTestId("password"), { target: { value: 'Ampath123' } }); // invoke handleChangeq
  fireEvent.submit(getByTestId("login"));
  expect(spy).toHaveBeenCalled();
  expect(spy.mock.calls).toEqual([[{name: 'testuser'}]]); // Test if handleChange works
  spy.mockClear();
});
