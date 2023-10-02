export const validateEmployeeName = (name) => {
  return name.trim() ? "" : "Employee name is required";
};


export const validateSelectedRole = (role) => {
  return role ? "" : "Employee role is required";
};


export const validateDate = (fromDateString, toDateString = '') => {
  const fromParts = fromDateString.split(' ');
  const toParts = toDateString.split(' ');

  if (fromParts.length !== 3) {
    return "Please select an valid date";
  }

  const fromDay = parseInt(fromParts[0], 10);
  const fromMonth = fromParts[1];
  const fromYear = parseInt(fromParts[2], 10);

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  if (
    isNaN(fromDay) || fromDay < 1 || fromDay > 31 || !months.includes(fromMonth) || isNaN(fromYear) || fromYear < 1000
  ) {
    return "Invalid date format";
  }

  const fromDate = new Date(`${fromMonth} ${fromDay}, ${fromYear}`);

  if (!(fromDate instanceof Date && !isNaN(fromDate))) {
    return "Invalid date format";
  }

  const currentDate = new Date();
  
  if (fromDate > currentDate) {
    return "The 'From' date must be less than or equal to the current date.";
  }

  if (toDateString.trim() !== '') {
    const toDay = parseInt(toParts[0], 10);
    const toMonth = toParts[1];
    const toYear = parseInt(toParts[2], 10);

    if (
      isNaN(toDay) || toDay < 1 || toDay > 31 || !months.includes(toMonth) || isNaN(toYear) || toYear < 1000
    ) {
      return "Invalid date format";
    }

    const toDate = new Date(`${toMonth} ${toDay}, ${toYear}`);

    if (!(toDate instanceof Date && !isNaN(toDate))) {
      return "Invalid date format";
    }

    if (fromDate > toDate) {
      return "The 'From' date must be less than or equal to the 'To' date.";
    }
  }

  return null;
};


