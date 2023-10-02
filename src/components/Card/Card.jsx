import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { deleteEmployee } from "../../database/indexDB";

const Card = ({ employeeData, title, onEmployeeDeleted }) => {
  const handleDelete = (employeeId) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Delete!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteEmployee(employeeId);
        onEmployeeDeleted();
      }
    });
  };

  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-start justify-start w-full mt-5 mb-5">
      <div className="flex flex-col items-start justify-center p-4 md:px-5 w-full">
        <p className="font-sans font-bold text-[22px] text-base text-blue-500 w-auto font-medium font-roboto">
          {title}
        </p>
      </div>
      {employeeData.map((employee) => (
        <div
          key={employee.id}
          className="flex flex-row gap-[0.5px] items-start w-[100%] vertical mb-1 mt-1 cursor-pointer"
        >
          <div
            onClick={() => navigate(`/edit?employeeId=${employee.id}`)}
            className="edit-cursor bg-white-A700 flex flex-row sm:flex-col sm:items-start gap-[15rem] md:gap-[7rem] sm:gap-[0rem] items-center justify-start my-0 p-4 w-full"
          >
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
                {employee.to
                  ? `${employee.from} - ${employee.to}`
                  : employee.from}
              </p>
            </div>
          </div>
          <div
            onClick={() => handleDelete(employee.id)}
            className="trash bg-red-500 hover:bg-red-600 w-[10%] h-[100%] sm:min-w-[20%] flex items-center justify-center text-2xl"
          >
            <button className="hover:rotate-90 transition-transform duration-500">
              <i class="fa-solid fa-trash-can" style={{ color: "#ffffff" }}></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
