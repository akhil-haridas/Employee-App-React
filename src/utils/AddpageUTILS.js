import Swal from "sweetalert2";

export const Toast = Swal.mixin({
  toast: true,
  position: "top",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const roleOptions = [
  { value: "fullstack", label: "Full-stack Developer" },
  { value: "uiux", label: "UI/UX Designer" },
  { value: "dataanalyst", label: "Data Analyst" },
  { value: "softwareengineer", label: "Software Engineer" },
  { value: "productmanager", label: "Product Manager" },
];

export const buttonData = [
  ["Today", "Next Monday"],
  ["Next Tuesday", "After 1 Week"],
];

export const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

export const formatDate = (day, year, month) => {
  return `${day} ${new Date(year, month).toLocaleString("default", {
    month: "short",
  })} ${year}`;
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


export const handleButtonDate = (buttonText, currentDate) => {
  const currentDayOfWeek = currentDate.getDay();

  let daysToAdd = 0;
  switch (buttonText) {
    case "Today":
      break;
    case "Next Monday":
      daysToAdd = 7 - currentDayOfWeek + 1;
      break;
    case "Next Tuesday":
      daysToAdd = 7 - currentDayOfWeek + 2;
      break;
    case "After 1 Week":
      daysToAdd = 7 - currentDayOfWeek + 1;
      break;
    default:
      return null;
  }

  const selectedDate = new Date(currentDate);
  selectedDate.setDate(currentDate.getDate() + daysToAdd);

  return formatDate(
    selectedDate.getDate(),
    selectedDate.getFullYear(),
    selectedDate.getMonth()
  );
};
