import React from "react";
import { FaRegClock } from "react-icons/fa";

function DateJoining() {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <p>
      <small>
        <FaRegClock /> Joined on 1 Oct, {year}
      </small>
    </p>
  );
}

export default DateJoining;
