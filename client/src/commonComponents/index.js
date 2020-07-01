import React from "react";
import DatePicker from "react-datepicker";
import styles from "../styles/home.module.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

export const Button = ({ onClick, text }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export const Input = ({ type, defaultChecked, onChange }) => {
  <input type={type} defaultChecked={defaultChecked} onChange={onChange} />;
};

export const DateSelector = ({ startDate, setDate }) => {
  return <DatePicker selected={startDate} onChange={(date) => setDate(date)} />;
};
