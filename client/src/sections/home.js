import React from "react";
import axios from "axios";
import  ReactTable from 'react-table';
import 'react-table/react-table.css'

export const Home = () => {
  const [tableinfo, setTableInfo] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`http://localhost:3000/getLeavesList`)
      .then((response) => setTableInfo(response.data));
  }, []);

  const columns = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "User Id",
      accessor: "userId"
    },
    {
      Header: "Start Date",
      accessor: "startDate",
      filterable : false
    },
    {
      Header: "End Date",
      accessor: "endDate",
      filterable : false
    },
    {
      Header: "Type",
      accessor: "type",
      sortable: false,
      filterable : false
    },
    {
      Header: "Crew Id",
      accessor: "crewId",
      filterable : false,
      sortable: false,
    },
    {
      Header: "Member Note",
      accessor: "memberNote",
      sortable: false,
      filterable : false,
      sortable: false,
    },
    {
      Header: "Confirmed At",
      accessor: "confirmedAt",
      filterable : false,
      sortable: false,
    },
    {
      Header: "Created At",
      accessor: "createdAt",
      filterable : false,
      sortable: false,
    },
  ];
  return (
   <ReactTable
      columns = {columns}
      data = {tableinfo}
      defaultPageSize ={10}
      noDataText = {"Please Wait.."}
      filterable
      pivotBy={['userId']}
    >
    </ReactTable> 
  );
};
