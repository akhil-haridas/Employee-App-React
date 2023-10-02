import React, { useState } from "react";
import Head from "../components/Head/Head";
import Input from "../components/Input/Input";
import SelectInput from "../components/Select/SelectInput";
import DatePicker from "../components/DatePicker/DatePicker";
import CancelSave from "../components/CancelSave/CancelSave";
import Calendar from "../components/Calendar/Calendar";
import { Toast, roleOptions } from "../utils/AddpageUTILS";
import { useNavigate } from "react-router-dom";
import { addEmployee } from "../database/indexDB";
import { v4 as uuidv4 } from "uuid";
import {
  validateEmployeeName,
  validateSelectedRole,
  validateDate,
} from "../utils/ValidationUTILS";

const AddPage = () => {
  const navigate = useNavigate();

  // State for form fields
  const [employeeName, setEmployeeName] = useState("");
  const [selectedRole, setSelectedRole] = useState(null);
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
  const [selectedFromDate, setSelectedFromDate] = useState("");
  const [selectedToDate, setSelectedToDate] = useState("");
  const [clickedDatePicker, setClickedDatePicker] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  // State for validation errors
  const [nameError, setNameError] = useState("");
  const [roleError, setRoleError] = useState("");
  const [dateError, setDateError] = useState("");

  const openCalendarModal = (datePickerName) => {
    if (selectedFromDate && datePickerName === "From") {
      setSelectedDate(selectedFromDate);
    } else if (selectedToDate && datePickerName === "To") {
      setSelectedDate(selectedToDate);
    } else {
      setSelectedDate("")
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
    setSelectedFromDate(date || "");
  } else if (clickedDatePicker === "To") {
    setSelectedToDate(date || "");
  }
};


  const handleEmployeeNameChange = (e) => {
    setEmployeeName(e.target.value);
    setNameError(validateEmployeeName(e.target.value));
  };

  const handleSelectedRoleChange = (selectedOption) => {
    setSelectedRole(selectedOption);
    setRoleError(validateSelectedRole(selectedOption));
  };

  const handleSave = () => {
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
      const uniqueId = uuidv4();
      const employee = {
        id: uniqueId,
        name: employeeName,
        role: selectedRole.label,
        from: selectedFromDate,
        to: selectedToDate,
      };
      addEmployee(employee);
      navigate("/employees");
    } else {
      Toast.fire({
        icon: "warning",
        title: "Please fill the fields properly",
      });
    }
  };

  return (
    <>
      <div className="bg-white-A700 flex h-[85vh] flex-col font-roboto sm:gap-10 md:gap-10 gap-[25px] items-center justify-start mx-auto w-full">
        <Head title={"Add Employee Details"} />

        <div className="flex flex-col items-start justify-start max-w-[100%] mx-auto md:px-5 ">
          <Input
            title="Employee Name"
            placeholder="Enter employee name"
            id="employeeName"
            name="employeeName"
            value={employeeName}
            onChange={handleEmployeeNameChange}
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
            onChange={(selectedOption) =>
              handleSelectedRoleChange(selectedOption)
            }
          />
          {roleError && (
            <p className="font-sans text-[14px] text-red-600">{roleError}</p>
          )}
          <div className="flex sm:flex-row flex-row gap-4 items-center justify-center md:ml-[0] sm:mt-[25px] mt-[35px] w-[100%] sm:w-full">
            <DatePicker
              placeholder="From"
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
              placeholder="To"
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
        onSave={handleSave}
        cancelLabel="Cancel"
        saveLabel="Save"
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

export default AddPage;
