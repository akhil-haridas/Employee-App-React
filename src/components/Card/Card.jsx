import React from 'react'
import { useNavigate } from 'react-router-dom';
import { deleteEmployee } from '../../database/indexDB';

const Card = ({ employeeData, title }) => {

  const handleDelete = (employeeId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );
    if (confirmDelete) {
      deleteEmployee(employeeId);
    }
  };

  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-start justify-start w-full mt-5 mb-5">
      <div className="flex flex-col items-start justify-center p-4 md:px-5 w-full">
        <p className="font-sans font-bold text-[22px] text-base text-blue-500 w-auto font-medium font-roboto">
          {title}
        </p>
      </div>
      {employeeData.map((employee) => (
        <div
          className="flex flex-row gap-[0.5px] items-start w-[100%] vertical mb-1 mt-1 cursor-pointer"
          onClick={() => navigate("/edit")}
        >
          <div className="bg-white-A700 flex flex-row sm:flex-col sm:items-start gap-[15rem] md:gap-[7rem] sm:gap-[0rem] items-center justify-start my-0 p-4 w-full">
            <div className="flex flex-col items-start justify-start min-w-[15%]">
              <p className="font-sans font-bold text-gray-700 text-lg w-auto">
                {employee.name}
              </p>
            </div>
            <div className="flex flex-col items-start justify-start min-w-[15%]">
              <p className="font-sans font-bold text-gray-600 text-md w-auto font-medium font-roboto">
                {employee.role}
              </p>
            </div>
            <div className="flex flex-col items-start justify-start min-w-[15%]">
              <p className="font-sans font-bold text-gray-600 text-sm w-auto font-medium font-roboto">
               {employee.to ? `${employee.from} - ${employee.to}` : employee.from}
              </p>
            </div>
          </div>
          <div className="trash bg-red-600 w-[15%] h-[100%] flex items-center justify-center text-2xl">
            <button
              onClick={()=>handleDelete(employee.id)}
              className="hover:rotate-90 transition-transform duration-500"
            >
              <i class="fa-solid fa-trash-can" style={{ color: "#ffffff" }}></i>
              {/* fa-bounce */}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card