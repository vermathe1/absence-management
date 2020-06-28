import React from "react";
import  ReactTable from 'react-table';
import 'react-table/react-table.css'
import { useState } from "react"
import { useActiveTab } from '../customHooks'
import { Tab } from '../commonComponents'

export const Home = () => {
  const [activeTab, setActiveTab] = React.useState('TotalList');
   const tableinfo =  useActiveTab(activeTab);
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
    
    <div>
      <Tab headings={["TotalList","Vacation","Sickness"]} onTabClick={(tab)=>setActiveTab(tab)}/>
      <ReactTable
        columns = {columns}
        data = {tableinfo}
        defaultPageSize ={10}
        noDataText = {"Please Wait.."}
        filterable
        pivotBy={['userId']}
      >
      </ReactTable> 
    </div>
  
  );
};