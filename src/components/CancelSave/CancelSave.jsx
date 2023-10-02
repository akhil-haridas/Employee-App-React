import React from "react";

const CancelSave = ({ onCancel, onSave, cancelLabel, saveLabel }) => {
  return (
    <div className="flex flex-col items-center justify-center md:ml-[0] w-[100%] md:w-full">
      <div className="bg-white-A700 flex flex-row gap-[40px] h-16 md:h-auto items-center justify-end px-4 py-3 w-[463px] sm:w-full">
        <div className="flex flex-col items-center justify-start w-[19%]">
          <button
            onClick={onCancel}
            className="hover:bg-red-300 hover:text-[#fff] p-[9px] font-sans bg-blue-50 text-blue-500 rounded-lg cursor-pointer font-medium font-roboto min-w-[80px] rounded-md text-center text-sm"
          >
            {cancelLabel}
          </button>
        </div>
        <button
          onClick={onSave}
          className="hover:bg-green-300 hover:text-[#fff] p-[9px] font-sans bg-blue-500 text-blue-500 rounded-lg text-white-A700 cursor-pointer font-medium font-roboto min-w-[73px] rounded-md text-center text-sm"
        >
          {saveLabel}
        </button>
      </div>
    </div>
  );
};

export default CancelSave;
