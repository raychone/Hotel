import React, { useState } from "react";
// datepicker
import DatePicker from "react-datepicker";
// datepicker css
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";
// icons
import { BsCalendar } from "react-icons/bs";

const CheckIn = () => {
  const [startDate, setStartDate] = useState(false);

  return (
    <div className="relative flex  items-center h-full justify-end">
      {/* icon */}
      <div className="absolute z-10 pr-8">
        <div>
          <BsCalendar className="text-accent text-base" />
        </div>
      </div>
      <DatePicker
        className="w-full h-full"
        selected={startDate}
        placeholderText="Check In"
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};

export default CheckIn;
