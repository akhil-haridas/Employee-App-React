import React, { useEffect, useState } from "react";
import Head from "../components/Head/Head";
import Card from "../components/Card/Card";
import AddButton from "../components/AddButton/AddButton";
import Empty from "../components/Empty/Empty";
import { getAllEmployees } from "../database/indexDB";
import { splitEmployeesByDate } from "../utils/ListpageUTILS.js";

const ListPage = () => {
  const [previousEmployees, setPreviousEmployees] = useState([]);
  const [currentEmployees, setCurrentEmployees] = useState([]);

  const fetchEmployees = () => {
    getAllEmployees((data) => {
      const { previousEmployees, currentEmployees } =
        splitEmployeesByDate(data);
      setPreviousEmployees(previousEmployees);
      setCurrentEmployees(currentEmployees);
    });
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleEmployeeDeleted = () => {
    fetchEmployees();
  };

  return (
    <>
      <div className="h-[100vh] flex flex-col font-roboto items-start justify-start mx-auto w-full">
        {previousEmployees.length > 0 || currentEmployees.length > 0 ? (
          <div className="bg-gray-100 flex flex-col items-center w-full h-full">
            <Head title={"Employee List"} />
            {previousEmployees.length > 0 && (
              <Card
                title={"Current Employees"}
                employeeData={previousEmployees}
                onEmployeeDeleted={handleEmployeeDeleted}
              />
            )}
            {currentEmployees.length > 0 && (
              <Card
                title={"Previous Employees"}
                employeeData={currentEmployees}
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
