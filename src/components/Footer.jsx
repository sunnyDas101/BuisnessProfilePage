import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const Footer = ({ onSubmitStepTwo, formData }) => {
  const location = useLocation();

  const handleSubmit = () => {
    if (location.pathname === "/step2") {
      if (
        !formData.stepOne.firstName ||
        !formData.stepOne.lastName ||
        !formData.stepOne.email ||
        !formData.stepOne.phone ||
        !formData.stepOne.password ||
        !formData.stepOne.confirmPassword
      ) {
        toast.error("Please fill out all required fields.");
        return;
      }
      if (!/\S+@\S+\.\S+/.test(formData.stepOne.email)) {
        toast.error("Invalid email address.");
        return;
      }
      if (!/^\d{10}$/.test(formData.stepOne.phone)) {
        toast.error("Invalid phone number.");
        return;
      }
      if (formData.stepOne.password.length < 6) {
        toast.error("Password must be at least 6 characters long.");
        return;
      }
      if (formData.stepOne.password !== formData.stepOne.confirmPassword) {
        toast.error("Passwords do not match.");
        return;
      }
      onSubmitStepTwo();
    }
  };

  const renderPreviousButton = () => {
    if (location.pathname === "/step2") {
      return (
        <Link
          to="/"
          className="flex items-center gap-1 border border-primary p-2 px-8 bg-transparent  rounded-md shadow-md text-primary"
        >
          <IoIosArrowBack /> Previous
        </Link>
      );
    }
    return null;
  };

  return (
    <div className="flex justify-between w-[80%] mx-auto mb-8">
      <button className="flex text-sm items-center gap-1 text-blue-500">
        <IoIosArrowBack /> Back to Login
      </button>
      <div className="flex gap-4">
        {renderPreviousButton()}
        <Link
          to="/step2"
          onClick={handleSubmit}
          className="flex items-center gap-1 p-2 px-8 bg-primary rounded-md shadow-md text-white"
        >
          Next Step <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
