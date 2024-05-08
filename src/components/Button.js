import React from "react";

const Button = ({ variant, onClick, isDisabled, children }) => {
  if (variant !== "primary" && variant !== "secondary") {
    return undefined;
  }

  return (
    <button
      onClick={onClick ? onClick : null}
      disabled={isDisabled}
      className={`${
        variant === "primary"
          ? "bg-[#1C1C1C] hover:bg-[#4E4E4E] font-semibold text-white"
          : "hover:bg-[#F1F1F1] font-medium border border-[#EAEAEA]"
      } rounded-full text-[18px] px-10 py-6 transform duration-500 w-full disabled:bg-[#C9C9C9]`}
    >
      {children}
    </button>
  );
};

export default Button;
