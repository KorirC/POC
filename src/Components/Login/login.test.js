import React from "react";
import { render, fireEvent, screen, } from "@testing-library/react";
// import Button from "./login";
import Form from "./login";

describe("Login render Page", () => {
  it("renders the 2 input fields and button", () => {
    const { getByTestId } = render(<Form />);
    expect(getByTestId("name")).toBeInTheDocument();
    expect(getByTestId("password")).toBeInTheDocument();
    expect(getByTestId("submit")).toBeInTheDocument();
  });
});

describe("Form behaviour", () => {
  it("should submit when form inputs contain text", async () => {
    const mocksubmit = jest.fn();
    const { getByTestId } = render(<Form onSubmit={mocksubmit}/>);
    const name = screen.getByTestId("name");
    fireEvent.change(name, {
      target: { value: "testuser" },
    });
    expect(name.value).toBe("testuser");

    fireEvent.change(screen.getByTestId("password"), {
      target: { value: "Ampath123" },
    });
    fireEvent.submit(getByTestId("login"));
   
    // expect(mocksubmit).toHaveBeenCalledTimes(20)
  });

  // it("button", async () => {
  //   const mocksubmit = jest.fn();
    
  //    render(<Button onClick={mocksubmit}>h</Button>);
  //    const button= screen.getByText(/Test/i)
  //   expect(button).toBeInTheDocument();
  //   fireEvent.click(button)
   
  //   // expect(mocksubmit).toHaveBeenCalledTimes(20)
  // });

});
