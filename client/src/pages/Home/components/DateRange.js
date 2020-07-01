import React from "react";
import { DateSelector } from "../../../commonComponents";

export const DateRange = ({ selected, setDate }) => {
  return <DateSelector selected={selected} setDate={(date) => setDate(date)} />;
};
