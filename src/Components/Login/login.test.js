import React from "react";
import {
  render,
  fireEvent,
  screen,
  act,
} from "@testing-library/react";
import Login from "./login";
// jest.mock("./login");

// it("if form is submitted and inputs modifiable", async () => {
//   const { getByTestId } = render(<Login />);

//   fireEvent.change(getByTestId("name"), { target: { value: "testuser" } }); // invoke handleChange
//   // fireEvent.change(getByTestId("password"), { target: { value: "Ampath123" } }); // invoke handleChangeq
//   // fireEvent.submit(getByTestId("login"));
//   // expect(spy.mock.calls).toEqual([[{ name: "testuser" }]]); // Test if handleChange works
//   expect(spy).toHaveBeenCalled();

//   spy.mockClear();
// });

describe("Login render Page", () => {
  it("renders the 2 input fields and button", () => {
    const { getByTestId } = render(<Login />);
    expect(getByTestId("name")).toBeInTheDocument();
    expect(getByTestId("password")).toBeInTheDocument();
    expect(getByTestId("submit")).toBeInTheDocument();
  });
});

describe("Form behaviour", () => {
  it("should submit when form inputs contain text", async () => {
    const { getByTestId } = render(<Login />);

    await act(async () => {
      fireEvent.change(screen.getByTestId("name"), {
        target: { value: "testuser" },
      });

      fireEvent.change(screen.getByTestId("password"), {
        target: { value: "Ampath123" },
      });
    });

    await act(async () => {
      fireEvent.submit(getByTestId("login"));
    });
  });
});
