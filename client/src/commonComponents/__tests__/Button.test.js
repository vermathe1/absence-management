import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { Button, Input, DateSelector } from "../index";

describe("<Button />", () => {
  it("should render correctly", () => {
    const tree = renderer
      .create(<Button text="a" onClick={jest.fn()} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should call onClick when clicked on a Button", () => {
    const onButtonClickMock = jest.fn();
    const headings = ["a", "b", "c"];
    const wrapper = shallow(<Button text="a" onClick={onButtonClickMock} />);
    wrapper.find("button").simulate("click");
    expect(onButtonClickMock).toHaveBeenCalledTimes(1);
    expect(onButtonClickMock).toHaveBeenCalled();
  });
});
