import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { DateSelector } from "../index";

describe("<DateSelector />", () => {
  it("should render correctly", () => {
    const DATE_TO_USE = new Date("2016");
    const tree = renderer
      .create(<DateSelector selected={DATE_TO_USE} onChange={jest.fn()} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
