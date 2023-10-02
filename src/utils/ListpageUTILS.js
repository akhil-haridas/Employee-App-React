export const splitEmployeesByDate = (data) => {
  const currentEmployees = [];
  const previousEmployees = [];

  data.forEach((employee) => {
    if (employee.from && employee.to) {
      currentEmployees.push(employee);
    } else {
      previousEmployees.push(employee);
    }
  });

  return { previousEmployees, currentEmployees };
};
