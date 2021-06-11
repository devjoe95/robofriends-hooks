import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";
describe("expect to render Card component", () => {
  const mockUser = { id: 5, name: "", email: "" };
  const wrapper = shallow(<Card user={mockUser} />); 
  test("expect to render card component", () => {
    expect(wrapper.length).toEqual(1);
  });
  test("expect to matching Card snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
