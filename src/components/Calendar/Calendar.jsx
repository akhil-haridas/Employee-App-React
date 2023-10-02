import React, { useState, useEffect } from "react";

const buttonData = [
  ["Today", "Next Monday"],
  ["Next Tuesday", "After 1 Week"],
];

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const Calendar = ({ onDateSelected, onCloseModal }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentDay, setCurrentDay] = useState(new Date().getDate());
  const [selectedDate, setSelectedDate] = useState("No Date");
  const [clickedButton, setClickedButton] = useState(null);

  useEffect(() => {
    setCurrentDate(new Date(currentYear, currentMonth));
    setCurrentDay(new Date(currentYear, currentMonth, 1).getDay());
  }, [currentYear, currentMonth]);

  console.log(currentDate,currentDay)
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendarData = (year, month) => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = new Date(year, month, 1).getDay();
    const calendarData = [];

    let day = 1;

    for (let week = 0; week < 6; week++) {
      const weekData = [];

      for (let weekday = 0; weekday < 7; weekday++) {
        if ((week === 0 && weekday < firstDay) || day > daysInMonth) {
          weekData.push(null);
        } else {
          weekData.push(day);
          day++;
        }
      }

      calendarData.push(weekData);
    }

    return calendarData;
  };

  const calendarData = generateCalendarData(currentYear, currentMonth);

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  // Function to handle date click
  const handleDateClick = (date) => {
    setClickedButton(null);
    // Format the selected date as "1 Oct 2023"
    const formattedDate = `${date} ${new Date(
      currentYear,
      currentMonth
    ).toLocaleString("default", {
      month: "short",
    })} ${currentYear}`;

    setSelectedDate(formattedDate);
  };

  const formatDate = (day, month, year) => {
    return `${day} ${new Date(year, month).toLocaleString("default", {
      month: "short",
    })} ${year}`;
  };

  const handleButtonClick = (buttonText) => {
    setClickedButton(buttonText);

    const currentDayOfWeek = new Date().getDay();
    const daysUntilMonday = 7 - currentDayOfWeek + 1;
    switch (buttonText) {
      case "Today":
        setSelectedDate(
          formatDate(
            new Date().getDate(),
            new Date().getMonth(),
            new Date().getFullYear()
          )
        );

        break;
      case "Next Monday":
        const nextMondayDate = new Date();
        nextMondayDate.setDate(new Date().getDate() + daysUntilMonday);
        setSelectedDate(
          formatDate(
            nextMondayDate.getDate(),
            nextMondayDate.getMonth(),
            nextMondayDate.getFullYear()
          )
        );
        break;

      case "Next Tuesday":
        const daysUntilTuesday = 7 - currentDayOfWeek + 2;
        const nextTuesdayDate = new Date();
        nextTuesdayDate.setDate(new Date().getDate() + daysUntilTuesday);
        setSelectedDate(
          formatDate(
            nextTuesdayDate.getDate(),
            nextTuesdayDate.getMonth(),
            nextTuesdayDate.getFullYear()
          )
        );
        break;

      case "After 1 Week":
        const daysInAWeek = 0;
        const daysToAdd = daysUntilMonday + daysInAWeek;
        const selectedDate = new Date();
        selectedDate.setDate(new Date().getDate() + daysToAdd);
        setSelectedDate(
          formatDate(
            selectedDate.getDate(),
            selectedDate.getMonth(),
            selectedDate.getFullYear()
          )
        );
        break;
      default:
        break;
    }
  };

  const handleSaveClick = () => {
    // Call the onDateSelected function with the selected date
    onDateSelected(selectedDate);
    onCloseModal();
  };

  const handleCancelClick = () => {
    onDateSelected("");
    onCloseModal(); 
  };

  return (
    <>
      <div className="font-roboto h-[100vh] mx-auto relative w-full">
        <div className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto p-[202px] md:px-10 sm:px-5 w-full bg-black bg-opacity-50">
          <div className="flex flex-col items-start justify-start md:ml-[0] w-auto sm:w-full">
            <div className="bg-white-A700  flex flex-col gap-6 items-center justify-start pb-4 pt-6 px-4 rounded-tl-[16px] rounded-tr-[16px] w-auto md:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                {buttonData.map((buttonRow, index) => (
                  <div
                    key={index}
                    className="flex flex-row gap-4 items-start justify-start w-auto"
                  >
                    {buttonRow.map((text, buttonIndex) => (
                      <button
                        key={buttonIndex}
                        className={`topback font-sans cursor-pointer text-center font-roboto w-[170px] sm:w-[150px] rounded text-sm bg-blue-50 text-blue-500 p-[9px] fill ${
                          clickedButton === text ? "topback-select" : ""
                        }`}
                        onClick={() => handleButtonClick(text)}
                      >
                        {text}
                      </button>
                    ))}
                  </div>
                ))}
              </div>

              <div className="flex flex-row items-center justify-center w-full">
                <div
                  className="ihover cursor-pointer flex flex-col items-center justify-start w-[20%]"
                  onClick={prevMonth}
                >
                  <i className="fa-solid fa-caret-right fa-rotate-180"></i>
                </div>
                <p className="justify-center font-sans font-bold rounded text-blue_gray-900 text-center text-[20px] w-auto">
                  {`${new Date(currentYear, currentMonth).toLocaleString(
                    "default",
                    {
                      month: "long",
                    }
                  )} ${currentYear}`}
                </p>
                <div
                  className="ihover cursor-pointer flex flex-col items-center justify-start w-[20%]"
                  onClick={nextMonth}
                >
                  <i className="fa-solid fa-caret-right"></i>
                </div>
              </div>

              <div className="flex flex-row gap-[25.5px] items-start justify-start w-auto">
                <div className="containerdiv sm:flex-col flex-row gap-[25px] grid grid-cols-7 w-[100%] horizontal">
                  {daysOfWeek.map((day, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-[23px] items-center justify-start w-full"
                    >
                      <p className="font-sans text-[15px] text-blue_gray-900 text-center">
                        {day}
                      </p>

                      <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                        {calendarData.map((week, weekIndex) =>
                          week[index] !== null ? (
                            <div
                              key={weekIndex}
                              className={`custom-circle flex flex-col items-center justify-start w-full ${
                                weekIndex === 0 &&
                                index === new Date().getDay() &&
                                currentMonth === new Date().getMonth()
                                  ? "borderdiv"
                                  : ""
                              } ${
                                formatDate(
                                  week[index],
                                  currentMonth,
                                  currentYear
                                ) === selectedDate
                                  ? "custom-circle-select"
                                  : ""
                              }`}
                              onClick={() => handleDateClick(week[index])}
                            >
                              <p className="textp text-[15px] text-center font-sans">
                                {week[index]}
                              </p>
                            </div>
                          ) : (
                            <div
                              key={weekIndex}
                              className="mb-[23px] flex flex-col items-center justify-start w-full"
                            ></div>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white-A700 border-gray-100 border-solid border-t flex flex-row gap-5 items-center justify-start p-4 rounded-bl-[16px] rounded-br-[16px] w-[100%] md:w-full">
              <div className="bg-white-A700 flex flex-col items-start justify-start w-1/2">
                <div className="flex flex-row gap-3 items-start justify-start w-[70%] md:w-full">
                  <img
                    className="h-[23px]"
                    src="images/img_eventfill0wght300grad0opsz24_1_1.svg"
                    alt="calendar"
                  />
                  <p className="font-sans mt-[3px] text-base text-blue_gray-900 font-medium font-roboto">
                    {selectedDate}
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <div className="flex flex-col items-center justify-start w-[46%]">
                  <button
                    onClick={handleCancelClick}
                    className="font-sans rounded-lg bg-blue-50 text-blue-500 cursor-pointer font-medium font-roboto leading-[normal] min-w-[73px] rounded-md text-center text-sm p-[9px]"
                  >
                    Cancel
                  </button>
                </div>
                <button
                  onClick={handleSaveClick}
                  className="font-sans p-[9px] bg-blue-500 rounded-lg !text-white-A700 cursor-pointer font-medium font-roboto leading-[normal] min-w-[73px] rounded-md text-center text-sm"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
