import React from "react";
import Form from "./CreatePerson";
import { render, fireEvent } from "@testing-library/react";
// import { renderHook } from "@testing-library/react-hooks";

// describe("using react-hooks for testing", () => {
//   it("create person", () => {
//     const { result } = renderHook(() => CreatePerson());
//     expect(result.current.givenName).toBeUndefined();
//   });
// });
describe("Create Person", () => {
  test("checks the input value", () => {
    
    const { getByTestId } = render(<Form />);

    fireEvent.change(getByTestId("gname"), {
      target: { value: "Jack" },
    });
    fireEvent.change(getByTestId("fname"), {
      target: { value: "Test" },
    });
    fireEvent.submit(getByTestId("form"));

    expect(getByTestId("gname").value).toBe("Jack");
    expect(getByTestId("fname").value).toBe("Test");
  });
});
