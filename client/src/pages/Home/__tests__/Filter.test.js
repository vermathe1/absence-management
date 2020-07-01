import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { Filter, Tab } from "../components/Filter";

describe("<Filter />", () => {
  it("should render correctly", () => {
    const tree = renderer
      .create(
        <Filter
          headings={["a", "b", "c"]}
          activeTab="a"
          onTabClick={jest.fn()}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should render Tab with props from Filter", () => {
    const mockFunction = () => null;
    const wrapper = shallow(
      <Filter
        headings={["a", "b", "c"]}
        activeTab="a"
        onTabClick={mockFunction}
      />
    );
    expect(wrapper.find(Tab).props()).toEqual({
      headings: ["a", "b", "c"],
      active: "a",
      onTabClick: mockFunction,
    });
  });
});
describe("<Tab />", () => {
  it("should render correctly", () => {
    const tree = renderer
      .create(
        <Tab headings={["a", "b", "c"]} active="a" onTabClick={jest.fn()} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render list of tabs from headings", () => {
    const headings = ["a", "b", "c"];
    const wrapper = shallow(
      <Tab headings={headings} active="a" onTabClick={jest.fn()} />
    );

    expect(wrapper.find("li")).toHaveLength(headings.length);
    headings.forEach((heading, index) => {
      expect(wrapper.find("a").get(index).props.children).toBe(heading);
    });
  });

  it("should call onTabClick when clicked on a Tab", () => {
    const onTabClickMock = jest.fn();
    const headings = ["a", "b", "c"];
    const wrapper = shallow(
      <Tab headings={headings} active="a" onTabClick={onTabClickMock} />
    );
    wrapper.find("li").at(0).simulate("click");
    expect(onTabClickMock).toHaveBeenCalledTimes(1);
    expect(onTabClickMock).toHaveBeenCalledWith(headings[0]);
  });
});
