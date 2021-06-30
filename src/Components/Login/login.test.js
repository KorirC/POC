import React from "react";
import { render, fireEvent, screen, act } from "@testing-library/react";
import Login from "./login";

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
      fireEvent.submit(getByTestId("submit"));
    });
  });
});
