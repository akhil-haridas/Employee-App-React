import React, { useEffect, useState } from "react";
import Head from "../components/Head/Head";
import Card from "../components/Card/Card";
import AddButton from "../components/AddButton/AddButton";
import Empty from "../components/Empty/Empty";
import { getAllEmployees } from "../database/indexDB";

const ListPage = () => {
  const [employeesWithDates, setEmployeesWithDates] = useState([]);
  const [employeesWithoutDates, setEmployeesWithoutDates] = useState([]);

  useEffect(() => {
    getAllEmployees((data) => {
      splitEmployeesByDate(data);
    });
  }, []);

  // Function to split employees based on date presence
  const splitEmployeesByDate = (data) => {
    const withDates = [];
    const withoutDates = [];

    data.forEach((employee) => {
      if (employee.from && employee.to) {
        withDates.push(employee);
      } else {
        withoutDates.push(employee);
      }
    });

    setEmployeesWithDates(withDates);
    setEmployeesWithoutDates(withoutDates);
  };

  const handleEmployeeDeleted = () => {
    // Fetch the updated list of employees and re-split them by date
    getAllEmployees((data) => {
      splitEmployeesByDate(data);
    });
  };

  return (
    <>
      <div className="h-[100vh] flex flex-col font-roboto sm:gap-10 md:gap-10 items-start justify-start mx-auto w-full">
        {employeesWithDates.length > 0 || employeesWithoutDates.length > 0 ? (
          <div className="bg-gray-100 flex flex-col items-center w-full h-full">
            <Head title={"Employee List"} />
            {employeesWithDates.length > 0 && (
              <Card
                title={"Current Employees"}
                employeeData={employeesWithDates}
                onEmployeeDeleted={handleEmployeeDeleted}
              />
            )}
            {employeesWithoutDates.length > 0 && (
              <Card
                title={"Previous Employees"}
                employeeData={employeesWithoutDates}
                onEmployeeDeleted={handleEmployeeDeleted}
              />
            )}
          </div>
        ) : (
          <>
            <div className="flex flex-col items-center w-full">
              <Head title={"Employee List"} />
            </div>
            <Empty />
          </>
        )}
      </div>
      <AddButton />
    </>
  );
};

export default ListPage;
