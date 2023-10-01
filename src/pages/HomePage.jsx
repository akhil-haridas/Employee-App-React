import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-roboto sm:gap-10 md:gap-10y justify-start mx-auto w-full h-[100vh]">
        <div className="bg-blue-500 flex flex-col h-[69px] md:h-auto sm:gap-10 justify-start p-4 w-full">
          <p className="text-left text-lg text-white-A700 w-auto font-medium font-roboto">
            Employee List
          </p>
        </div>
        <div className="flex flex-col md:gap-[10rem] justify-center h-[80%] gap-[100px] items-center w-full">
          <div className="flex flex-col items-center justify-start md:px-5 w-auto">
            <div className="flex flex-col gap-1.5 items-center justify-start w-full">
              <img
                className="h-[218px]"
                src="images/img_group5363.svg"
                alt="group5363"
              />
              <p className="text-blue_gray-900 text-center text-lg font-medium font-roboto">
                No employee records found
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end md:px-10 sm:pr[2.25rem] px-[80px] mt-[-50px] w-full">
          <button
            className="flex h-[50px] items-center justify-center w-[50px] rounded-lg bg-blue-500 p-4"
          >
            <img className="h-[18px]" src="images/img_plus.svg" alt="plus" />
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
