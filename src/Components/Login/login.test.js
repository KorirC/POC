import React from "react";
import { shallow } from "enzyme";
import Login from "./login";

describe("Test case for testing login", () => {
  let wrapper;
  test("username check", () => {
    wrapper = shallow(<Login />);
    wrapper.find("#name").simulate("onChange", {
      target: { name: "username", value: "testuser" },
    });
    expect(wrapper.state("username")).toEqual("testuser");
  });
});
