import React from "react";

const InputBox = ({ placeholder, onChange }) => {
  return (
    <div>
      <input
        type="text"
        id={placeholder.slice(-4)}
        class="bg-[#EFEFEF] border border-gray-100 text-lg font-medium rounded-full focus:ring-[#537FF1] focus:border-[#537FF1] outline-none block w-full px-9 py-5"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputBox;
