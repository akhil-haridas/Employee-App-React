import React from "react";
const employeeData = [
  {
    id: 1,
    name: "Samantha Lee",
    jobTitle: "Full-stack Developer",
    startDate: "21 Sep, 2022",
    endDate: "21 Sep, 2023",
  },
  {
    id: 2,
    name: "John Smith",
    jobTitle: "UI/UX Designer",
    startDate: "15 Aug, 2021",
    endDate: "15 Aug, 2022",
  },
  {
    id: 3,
    name: "Emily Johnson",
    jobTitle: "Data Analyst",
    startDate: "10 Jan, 2023",
    endDate: "10 Jan, 2024",
  },
  {
    id: 4,
    name: "Michael Davis",
    jobTitle: "Software Engineer",
    startDate: "05 Mar, 2022",
    endDate: "05 Mar, 2023",
  },
  {
    id: 5,
    name: "Sarah Miller",
    jobTitle: "Product Manager",
    startDate: "30 Nov, 2021",
    endDate: "30 Nov, 2022",
  },
];

const ListPage = () => {
  return (
    <>
      <div className="bg-gray-100 h-[100vh] flex flex-col font-roboto sm:gap-10 md:gap-10 gap-[124px] items-start justify-start mx-auto pb-6 w-full">
        <div className="flex flex-col gap-[30px] items-center w-full">
          <div className="bg-blue-500 flex flex-col h-[69px] md:h-auto sm:gap-10 justify-start p-4 w-[100%]">
            <p className="text-left text-lg text-white-A700 w-auto font-medium font-roboto">
              List all employeess
            </p>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-col items-center justify-center p-4 md:px-5">
              <p className="font-sans font-bold text-2xl text-base text-blue-500 w-auto font-medium font-roboto">
                Current employees
              </p>
            </div>
            {employeeData.map((employee) => (
              <div className="flex flex-row gap-[0.5px] items-start w-[100%] vertical mb-1">
                <div className="bg-white-A700 flex flex-row sm:flex-col sm:items-start gap-[15rem] md:gap-[7rem] sm:gap-[0rem] items-center justify-start my-0 p-4 w-full">
                  <div className="flex flex-col items-start justify-start min-w-[15%]">
                    <p className="font-sans font-bold text-gray-500 text-xs w-auto font-medium font-roboto">
                      {employee.name}
                    </p>
                  </div>
                  <div className="flex flex-col items-start justify-start min-w-[15%]">
                    <p className="font-sans font-bold text-gray-500 text-xs w-auto font-medium font-roboto">
                      {employee.jobTitle}
                    </p>
                  </div>
                  <div className="flex flex-col items-start justify-start min-w-[15%]">
                    <p className="font-sans font-bold text-gray-500 text-xs w-auto font-medium font-roboto">
                      {`${employee.startDate}-${employee.endDate}`}
                    </p>
                  </div>
                </div>
                <div className="trash bg-red-600 w-[15%] h-[100%] flex items-center justify-center text-2xl">
                  <button className="hover:rotate-90 transition-transform duration-500">
                    <i
                      class="fa-solid fa-trash-can"
                      style={{ color: "#ffffff" }}
                    ></i>
                    {/* fa-bounce */}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListPage;
