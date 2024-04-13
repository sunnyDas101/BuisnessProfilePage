import React from "react";
import HeaderButton from "../utility/NavbarButton";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isProfileActive = location.pathname === "/" || location.pathname === "/step2";
  const isBuisnessInfoActive = location.pathname === "/step2";

  return (
    <div className="flex flex-col md:flex-row justify-between bg-navBg h-[100px] md:h-[60px] rounded-md relative">
      <HeaderButton isActive={isProfileActive} isZeroBorder={isBuisnessInfoActive} number="1">Your Profile</HeaderButton>
      <HeaderButton isActive={isBuisnessInfoActive} number="2">Business Information</HeaderButton>
      <HeaderButton number="3">Additional Users</HeaderButton>
    </div>
  );
};

export default Navbar;
