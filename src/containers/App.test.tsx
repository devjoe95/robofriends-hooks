import React from "react";
import { shallow } from "enzyme";
import App from "./App";
describe("expect to render App component", () => {
  const mockStore = {
    robots: {},
    searchField: "",
  };
  // const wrapper = shallow(<App store={mockStore} />);
  test("renders App component", () => {
    // expect(wrapper.length).toEqual(1);
  });
});
