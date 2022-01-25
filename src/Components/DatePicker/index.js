import DatePicker from "react-date-picker";
import React, { Component } from "react";

function PickTheDate({ date, setDate }) {
  return <DatePicker onChange={setDate} value={date} format={"dd-MM-y"} />;
}

export default PickTheDate;
