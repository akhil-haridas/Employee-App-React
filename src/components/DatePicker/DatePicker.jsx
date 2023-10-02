import React from "react";

const DatePicker = ({ placeholder, name, onDateSelected, selectedDate }) => {
  const handleDateClick = () => {
    onDateSelected();
  };

  return (
    <div className="flex w-[50%] sm:w-full rounded border border-gray-300 border-solid text-blue_gray-900 xs:p-2">
      <img
        className="h-6 my-auto pl-3"
        src="images/img_eventfill0wght300grad0opsz24_1_1.svg"
        alt="event_FILL0_wght300_GRAD0_opsz24 (1) 1"
      />
      <input
        className="cursor-pointer font-sans p-2.5 placeholder:text-blue_gray-900 text-left text-sm w-full bg-transparent border-0"
        type="text"
        name={name || "datepicker"}
        value={selectedDate || placeholder}
        onClick={() => handleDateClick()}
      />
    </div>
  );
};

export default DatePicker;
