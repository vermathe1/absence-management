import React from "react";
import { useState } from "react";
import { useActiveTab } from "../../customHooks";
import axios from "axios";
import styles from "../../styles/home.module.css";
import { columns } from "./tableColumns";
import { Table, DownlaodIcalButton, Filter, DateRange } from "./components";
import { Input } from "../../commonComponents";

export const Home = () => {
  const [activeTab, setActiveTab] = React.useState("TotalList");
  const [startDate, setStartDate] = React.useState(new Date(`01/29/2017`));
  const [endDate, setEndDate] = React.useState(new Date());
  const [dateCheckbox, setdateCheckbox] = React.useState(false);
  const tableinfo = useActiveTab(activeTab, dateCheckbox, startDate, endDate);

  const downlaodICAL = () => {
    axios({
      url: "http://localhost:3000/",
      method: "GET",
      responseType: "blob",
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "event.ics");
      document.body.appendChild(link);
      link.click();
    });
  };
  const handleChangeChk = () => {
    setdateCheckbox(!dateCheckbox);
    setActiveTab("TotalList");
  };

  return (
    <div className={styles.main}>
      <header className={styles.header}>Absence Management Tool</header>
      <section className={styles.tabsection}>
        <div className={styles.downlaodSection}>
          <DownlaodIcalButton
            onClick={downlaodICAL}
            text={"Downlaod ICALfile"}
          />
          <Filter
            headings={["TotalList", "Vacation", "Sickness"]}
            activeTab={activeTab}
            onTabClick={(tab) => setActiveTab(tab)}
          />
        </div>
        <section className={styles.calendarSection}>
          <div>
            Start Date :{" "}
            <DateRange
              selected={startDate}
              setDate={(date) => {
                setStartDate(date);
              }}
            />{" "}
          </div>
          <div>
            End Date :{" "}
            <DateRange
              selected={endDate}
              setDate={(date) => setEndDate(date)}
            />
          </div>
          <div>
            <Input
              type="checkbox"
              defaultChecked={dateCheckbox}
              onChange={handleChangeChk}
            />
            Consider Date Range
          </div>
        </section>
      </section>
      <section className={styles.contentSection}>
        <Table
          columns={columns}
          data={tableinfo}
          defaultPageSize={10}
          noDataText={"Theres no data in the given date!!"}
          filterable
          pivotBy={["userId"]}
        />
      </section>
    </div>
  );
};
