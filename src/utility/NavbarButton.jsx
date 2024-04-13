import React from "react";

const HeaderButton = ({ number, children, isActive, isZeroBorder }) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 mx-auto text-sm md:text-lg text-gray-400 font-[400] flex-1 transition-colors duration-300  ${isActive ? "md:active smActive" : ""} ${isZeroBorder ? "zero-border" : ""}`}
    >
      <span className="bg-indexBg text-white text-sm rounded-full h-[20px] w-[20px] justify-center items-center hidden md:inline">
        {number}
      </span>
      {children}
    </button>
  );
};

export default HeaderButton;
