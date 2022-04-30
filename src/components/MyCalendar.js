import React, { useState } from "react";
import Calendar from "react-calendar";
import { useDispatch } from "react-redux";
import "react-calendar/dist/Calendar.css";
import "./MyCalendar.css";
import { updateData } from "../features/getLocationData/calculatorSlice";

export default function MyCalendar() {
  const [value, onChange] = useState(new Date());
  const dispatch = useDispatch();
  // XXX: Need to click on day twice for it to be correct. Need to find out why
  const changeData = () => {
    dispatch(
      updateData({
        date: Date.parse(value),
      })
    );
  };

  return (
    <div className="Sample">
      <main className="Sample__container__content">
        <Calendar
          onChange={onChange}
          showWeekNumbers
          value={value}
          onClickDay={changeData}
        />
      </main>
    </div>
  );
}
