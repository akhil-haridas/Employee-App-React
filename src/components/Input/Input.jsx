import React from "react";

const Input = ({ title, placeholder, id, name, value, onChange }) => {
  return (
    <div className="flex flex-col gap-3 justify-start w-full">
      <div className="flex flex-row gap-3 items-center justify-start w-auto">
        <img
          className="h-6 w-6"
          src="images/img_personfill0wg.svg"
          alt="personfill0wg"
        />
        <p className="font-sans text-base text-gray-500 w-auto font-normal">
          {title}
        </p>
      </div>
      <input
        type="text"
        placeholder={placeholder || "Enter text"}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="font-sans border border-gray-300 border-solid h-[38px] md:ml-[0] rounded w-[100%] p-2.5"
      />
    </div>
  );
};

export default Input;
