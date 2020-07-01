import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

export const Table = ({
  columns,
  data,
  defaultPageSize,
  noDataText,
  filterable,
  pivotBy,
}) => {
  return (
    <ReactTable
      columns={columns}
      data={data}
      defaultPageSize={10}
      noDataText={"Theres no data in the given date!!"}
      filterable
      pivotBy={["userId"]}
    ></ReactTable>
  );
};
