import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { Input } from "../index";

describe("<Input />", () => {
  it("should render correctly", () => {
    const tree = renderer
      .create(
        <Input type="checkbox" defaultChecked="false" onChange={jest.fn()} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should call onClick when onChange of a input", () => {
    const onInputChangeMock = jest.fn();
    const wrapper = shallow(
      <Input type="checkbox" onChange={onInputChangeMock} />
    );
    wrapper.find("input").simulate("change");
    expect(onInputChangeMock).toHaveBeenCalledTimes(1);
    expect(onInputChangeMock).toHaveBeenCalled();
  });
});
