import React from "react";
import { shallow } from "enzyme";
import CardList from "./CardList";
import Card from "./Card";

describe("expect to render CardList component", () => {
  const mockRobots = [
    { id: 5, name: "", email: "" },
    { id: 10, name: "", email: "" },
    { id: 7, name: "", email: "" },
    { id: 7, name: "", email: "" },
  ];
  const wrapper = shallow(<CardList robots={mockRobots} />);
  test("expect to render 4 card component", () => {
    expect(wrapper.find(Card)).toHaveLength(4);
  });
  test("expect to matching CardList snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
