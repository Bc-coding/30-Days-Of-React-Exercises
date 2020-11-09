import React from "react";

function DateMsgPosted() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const date = now.getDate();
  const hour = now.getHours();
  const mins = now.getMinutes();

  const dateFormatted = () => {
    return date < 10 ? `0${date}` : date;
  };
  const minsFormatted = () => {
    return mins < 10 ? `0${mins}` : mins;
  };

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const amPm = () => {
    return hour < 12 ? "am" : "pm";
  };

  return (
    <>
      {months[month]} {dateFormatted()}, {year} {hour}:{minsFormatted()}{" "}
      {amPm()}
    </>
  );
}

export default DateMsgPosted;
