import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center px-[75px] pt-2">
      <div className="w-[50px] h-[50px] rounded-full items-center justify-center overflow-hidden blur-sm md:block hidden">
        <img src={logo} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative">
        <h1 className="text-sm text-white md:text-xl">Create New Account</h1>
      </div>

      <div className="relative">
        <button className="text-white text-sm md:text-md">Contact Us</button>
      </div>
    </div>
  );
};

export default Header;
