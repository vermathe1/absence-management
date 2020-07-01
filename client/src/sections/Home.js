import React from 'react';
import ReactTable from 'react-table';
import { useState } from 'react';
import { useActiveTab } from '../customHooks';
import { Tab } from '../commonComponents';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import styles from '../styles/home.module.css';
import { columns } from '../tableColumns'
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import 'react-table/react-table.css';

export const Home = () => {
  const [activeTab, setActiveTab] = React.useState('TotalList');
  const [startDate, setStartDate] = React.useState(new Date(`01/29/2017`));
  const [endDate, setEndDate] = React.useState(new Date());
  const [dateCheckbox, setdateCheckbox] = React.useState(false);
  const tableinfo = useActiveTab(activeTab, dateCheckbox, startDate, endDate);

  const downlaodICAL = () => {
    axios({
      url: 'http://localhost:3000/',
      method: 'GET',
      responseType: 'blob'
    }).then(response => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'event.ics');
      document.body.appendChild(link);
      link.click();
    });
  };
  const handleChangeChk = () => {
    setdateCheckbox(!dateCheckbox);
    setActiveTab('TotalList');
  };

  return (
    <div className={styles.main}>
      <header className={styles.header}>Absence Management Tool</header>
      <section className={styles.tabsection}>
        <div className={styles.downlaodSection}>
          <button className={styles.button} onClick={() => downlaodICAL()}>
            Downlaod ICALfile
          </button>
          <Tab
            headings={['TotalList', 'Vacation', 'Sickness']}
            active={activeTab}
            onTabClick={tab => setActiveTab(tab)}
          />
        </div>
        <section className={styles.calendarSection}>
          <div>
            Start Date :{' '}
            <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
            />{' '}
          </div>
          <div>
            End Date :{' '}
            <DatePicker
              selected={endDate}
              onChange={date => setEndDate(date)}
            />
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={dateCheckbox}
              onChange={handleChangeChk}
            />
            Consider Date Range
          </div>
        </section>
      </section>
      <section className={styles.contentSection}>
        <ReactTable
          columns={columns}
          data={tableinfo}
          defaultPageSize={10}
          noDataText={'Theres no data in the given date!!'}
          filterable
          pivotBy={['userId']}
        ></ReactTable>
      </section>
    </div>
  );
};
