import React from 'react'
import Select from "react-select";

// Sample role options
const roleOptions = [
  { value: "fullstack", label: "Full-stack Developer" },
  { value: "uiux", label: "UI/UX Designer" },
  { value: "dataanalyst", label: "Data Analyst" },
  { value: "softwareengineer", label: "Software Engineer" },
  { value: "productmanager", label: "Product Manager" },
];

const AddPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex h-[89vh] flex-col font-roboto sm:gap-10 md:gap-10 gap-[25px] items-center justify-start mx-auto w-full">
        <div className="bg-blue-500 flex flex-col h-[69px] md:h-auto sm:gap-10 justify-start p-4 w-[100%]">
          <p className="text-left text-lg text-white-A700 w-auto font-medium font-roboto">
            Add employeee
          </p>
        </div>
        <div className="flex flex-col items-start justify-start max-w-[100%] mx-auto md:px-5 ">
          <div className="flex flex-col gap-3 justify-start w-full">
            <div className="flex flex-row gap-3 items-center justify-start w-auto">
              <img
                className="h-6 w-6"
                src="images/img_personfill0wg.svg"
                alt="personfill0wg"
              />
              <p className="text-base text-gray-500 w-auto font-normal font-roboto">
                Employee name
              </p>
            </div>
            <input
              type="text"
              placeholder="Enter employee name"
              className="border border-gray-300 border-solid h-[46px] md:ml-[0] rounded w-[100%] p-2.5"
            />
          </div>

          <div className="flex flex-col gap-[11px] justify-start md:ml-[0] mt-[20px] sm:mt-[5px] w-[100%]">
            <div className="flex flex-row gap-3 items-center justify-start w-auto">
              <img className="h-6 w-6" src="images/img_bag.svg" alt="bag" />
              <p className="text-base text-gray-500 w-auto font-normal font-roboto">
                Select role
              </p>
            </div>
            <Select
              className=""
              options={roleOptions}
              placeholder="Select a role"
              isSearchable={true}
            />
          </div>
          <div className="flex sm:flex-row flex-row gap-4 items-center justify-start md:ml-[0] sm:mt-[25px] mt-[35px] w-[100%] sm:w-full">
            <div class="flex w-[44%] sm:w-full rounded border border-gray-300 border-solid text-blue_gray-900 xs:p-2">
              <img
                class="h-6 my-auto pl-3"
                src="images/img_eventfill0wght300grad0opsz24_1_1.svg"
                alt="event_FILL0_wght300_GRAD0_opsz24 (1) 1"
              />
              <input
                class="p-2.5placeholder:text-blue_gray-900 text-left text-sm w-full bg-transparent border-0"
                type="text"
                name="today"
                placeholder="Today"
              />
            </div>

            <img
              className="h-5 w-5"
              src="images/img_arrowrightalt.svg"
              alt="arrowrightalt"
            />
            <div class="flex w-[45%] sm:w-full rounded border border-gray-300 border-solid text-blue-gray-500 xs:p-2">
              <img
                class="h-6 my-auto pl-3"
                src="images/img_eventfill0wght300grad0opsz24_1_1.svg"
                alt="event_FILL0_wght300_GRAD0_opsz24 (1) 1"
              />
              <input
                class="p-2.5 placeholder:text-gray-500 text-left text-sm w-full bg-transparent border-0"
                type="text"
                name="nodate"
                placeholder="No date"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center md:ml-[0] w-[100%] md:w-full">
        <div className="bg-white-A700 flex flex-row gap-[135px] h-16 md:h-auto items-center justify-center outline outline-gray-100 px-4 py-3 w-[463px] sm:w-full">
          <div className="flex flex-col items-center justify-start w-[19%]">
            <button className="p-[9px] bg-blue-50 text-blue-500 rounded-lg cursor-pointer font-medium font-roboto min-w-[80px] rounded-md text-center text-sm">
              Cancel
            </button>
          </div>
          <button className="p-[9px] bg-blue-500 text-blue-500 rounded-lg text-white-A700 cursor-pointer font-medium font-roboto min-w-[73px] rounded-md text-center text-sm">
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default AddPage