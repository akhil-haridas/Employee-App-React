import React, { useEffect, useState } from "react";
import Head from "../components/Head/Head";
import Input from "../components/Input/Input";
import SelectInput from "../components/Select/SelectInput";
import DatePicker from "../components/DatePicker/DatePicker";
import CancelSave from "../components/CancelSave/CancelSave";
import Calendar from "../components/Calendar/Calendar";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getAllEmployees, updateEmployee } from "../database/indexDB";
import { Toast, roleOptions } from "../utils/AddpageUTILS";
import {
  validateDate,
  validateEmployeeName,
  validateSelectedRole,
} from "../utils/ValidationUTILS";

const EditPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const employeeId = searchParams.get("employeeId");

  const [employeeName, setEmployeeName] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
  const [selectedFromDate, setSelectedFromDate] = useState(null);
  const [selectedToDate, setSelectedToDate] = useState(null);
  const [clickedDatePicker, setClickedDatePicker] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [nameError, setNameError] = useState("");
  const [roleError, setRoleError] = useState("");
  const [dateError, setDateError] = useState("");
  const [employeeData, setEmployeeData] = useState({
    id: employeeId,
    name: "",
    role: "",
    from: "",
    to: "",
  });

  useEffect(() => {
    getAllEmployees((data) => {
      const employee = data.find((emp) => emp.id === employeeId);
      if (employee) {
        setEmployeeData(employee);
        setEmployeeName(employee.name);
        setSelectedRole(roleOptions.find((opt) => opt.label === employee.role));
        setSelectedFromDate(employee.from);
        setSelectedToDate(employee.to);
      }
    });
  }, [employeeId]);

  const openCalendarModal = (datePickerName) => {
    if (selectedFromDate && datePickerName === "From") {
      setSelectedDate(selectedFromDate);
    } else if (selectedToDate && datePickerName === "To") {
      setSelectedDate(selectedToDate);
    } else {
      setSelectedDate("");
    }
    setClickedDatePicker(datePickerName);
    setIsCalendarModalOpen(true);
  };

  const closeCalendarModal = () => {
    setIsCalendarModalOpen(false);
  };

  const handleCalendarDateSelected = (date) => {
    setIsCalendarModalOpen(false);

    if (clickedDatePicker === "From") {
      setEmployeeData({ ...employeeData, from: date });
      setSelectedFromDate(date || "");
    } else if (clickedDatePicker === "To") {
      setEmployeeData({ ...employeeData, to: date });
      setSelectedToDate(date || "");
    }
  };

  const handleRoleSelect = (selectedOption) => {
    setSelectedRole(selectedOption);
    setRoleError(validateSelectedRole(selectedOption));
    setEmployeeData({ ...employeeData, role: selectedOption.label });
  };

  const handleUpdate = () => {
    const nameValidationResult = validateEmployeeName(employeeName);
    const roleValidationResult = validateSelectedRole(selectedRole);

    setNameError(nameValidationResult);
    setRoleError(roleValidationResult);

    const dateValidationResult = validateDate(selectedFromDate, selectedToDate);

    if (dateValidationResult) {
      setDateError(dateValidationResult);
    } else {
      setDateError("");
    }

    if (
      !nameValidationResult &&
      !roleValidationResult &&
      !dateValidationResult
    ) {
      updateEmployee(employeeData);
      Toast.fire({
        icon: "success",
        title: "Employee updated successfully",
      });
      navigate("/employees");
    } else {
      Toast.fire({
        icon: "warning",
        title: "Something went wrong.",
      });
    }
  };
  const handleNameChange = (name) => {
    setEmployeeName(name);
    setNameError(validateEmployeeName(name));
    setEmployeeData({ ...employeeData, name: name });
  };

  return (
    <>
      <div className="bg-white-A700 flex h-[85vh] flex-col font-roboto sm:gap-10 md:gap-10 gap-[25px] items-center justify-start mx-auto w-full">
        <Head title={"Edit Employee Details"} />

        <div className="flex flex-col items-start justify-start max-w-[100%] mx-auto md:px-5 ">
          <Input
            title="Employee Name"
            placeholder="Enter employee name"
            id="employeeName"
            name="employeeName"
            value={employeeName}
            onChange={(e) => handleNameChange(e.target.value)}
          />
          {nameError && (
            <p className="font-sans text-[14px] text-red-600">{nameError}</p>
          )}
          <SelectInput
            label="Employee Role"
            placeholder="Select a role"
            options={roleOptions}
            isSearchable={true}
            id="roleSelect"
            name="roleSelect"
            value={selectedRole}
            onChange={(selectedOption) => handleRoleSelect(selectedOption)}
          />
          {roleError && (
            <p className="font-sans text-[14px] text-red-600">{roleError}</p>
          )}
          <div className="flex sm:flex-row flex-row gap-4 items-center justify-center md:ml-[0] sm:mt-[25px] mt-[35px] w-[100%] sm:w-full">
            <DatePicker
              placeholder="Today"
              name="From"
              onDateSelected={() => openCalendarModal("From")}
              selectedDate={selectedFromDate}
            />
            <img
              className="h-5 w-5"
              src="images/img_arrowrightalt.svg"
              alt="arrowrightalt"
            />
            <DatePicker
              placeholder="No Date"
              name="To"
              onDateSelected={() => openCalendarModal("To")}
              selectedDate={selectedToDate}
            />
          </div>
          {dateError && (
            <p className="font-sans text-[14px] text-red-600">{dateError}</p>
          )}
        </div>
      </div>
      <CancelSave
        onCancel={() => navigate("/employees")}
        onSave={handleUpdate}
        cancelLabel="Cancel"
        saveLabel="Update"
      />
      {isCalendarModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <Calendar
              onDateSelected={handleCalendarDateSelected}
              onCloseModal={closeCalendarModal}
              selectedDates={selectedDate}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default EditPage;
