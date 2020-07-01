import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { Table } from "../components/Table";
import { columns } from "../tableColumns";

describe("<Table />", () => {
  it("should render correctly", () => {
    const tree = renderer
      .create(
        <Table
          columns={columns}
          data={[]}
          defaultPageSize={10}
          noDataText="test"
          filterable
          pivotBy={["userId"]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
