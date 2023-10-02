export const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

export const generateCalendarData = (year, month) => {
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

export const formatDate = (day, month, year) => {
  return `${day} ${new Date(year, month).toLocaleString("default", {
    month: "short",
  })} ${year}`;
};

export const handleButtonClick = (buttonText, currentYear, currentMonth) => {
  const currentDayOfWeek = new Date().getDay();
  const daysUntilMonday = 7 - currentDayOfWeek + 1;
  switch (buttonText) {
    case "Today":
      return formatDate(
        new Date().getDate(),
        new Date().getMonth(),
        new Date().getFullYear()
      );
    case "Next Monday":
      const nextMondayDate = new Date();
      nextMondayDate.setDate(new Date().getDate() + daysUntilMonday);
      return formatDate(
        nextMondayDate.getDate(),
        nextMondayDate.getMonth(),
        nextMondayDate.getFullYear()
      );
    case "Next Tuesday":
      const daysUntilTuesday = 7 - currentDayOfWeek + 2;
      const nextTuesdayDate = new Date();
      nextTuesdayDate.setDate(new Date().getDate() + daysUntilTuesday);
      return formatDate(
        nextTuesdayDate.getDate(),
        nextTuesdayDate.getMonth(),
        nextTuesdayDate.getFullYear()
      );
    case "After 1 Week":
      const daysInAWeek = 0;
      const daysToAdd = daysUntilMonday + daysInAWeek;
      const selectedDate = new Date();
      selectedDate.setDate(new Date().getDate() + daysToAdd);
      return formatDate(
        selectedDate.getDate(),
        selectedDate.getMonth(),
        selectedDate.getFullYear()
      );
    default:
      return null;
  }
};
