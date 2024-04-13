import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import StepTwoFooter from "./StepTwoFooter";

const FormStepTwo = ({ formData, updateFormData, onSubmit }) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData("stepTwo", name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-1 w-[35%] mx-auto my-4">
        <h3 className="text-sm text-gray-400 text-center">Step 2</h3>
        <h1 className="text-xl md:text-2xl text-gray-700 text-center">
          Buisness Information
        </h1>
        <p className="text-md text-gray-500 text-center">
          Please, enter information about your company
        </p>
      </div>

      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-x-8 w-[60%] mx-auto my-6 pb-7 relative"
        onSubmit={handleSubmit}
      >
        <h3 className="absolute text-[12px] top-[-20px] text-blue-500">
          GENERAL INFORMATION
        </h3>
        <div className="flex flex-col gap-1">
          <label htmlFor="brandName" className="text-sm text-gray-600">
            Brand Name<span className="text-sm text-blue-500">*</span>
          </label>
          <input
            type="text"
            name="brandName"
            className="px-5 py-2 border-gray-400 placeholder:text-gray-400 text-sm rounded-md"
            placeholder="Input Your Brand Name"
            value={formData.brandName}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-1 relative">
          <label htmlFor="brandType" className="text-sm text-gray-600">
            Brand Type<span className="text-sm text-blue-600">*</span>
          </label>
          <span
            className="absolute left-[100px] top-1 text-gray-600 text-[12px] cursor-pointer"
            onMouseEnter={toggleInfo}
            onMouseLeave={toggleInfo}
          >
            <FaQuestionCircle />
            {showInfo && (
              <div className="flex flex-col gap-5 absolute top-[-20px] left-5 bg-black text-white bg-opacity-70 p-3 px-6 w-[360px] border border-gray-300 rounded-lg shadow-lg">
                <p>
                  Local: Brands with distribution in 3 divisions or less OR
                  multiple divisions but a total of 150 stores or less.
                </p>
                <p>
                  National: Brands with distribution in 4 or more divisions or
                  in more than 150 stores.
                </p>
              </div>
            )}
          </span>
          <select
            name="brandType"
            className="px-5 py-2 border-gray-400 text-sm text-gray-400 rounded-md"
            value={formData.brandType}
            onChange={handleChange}
          >
            <option>Select Type of your Brand</option>
            <option>Product brands</option>
            <option>Service brands</option>
            <option>Corporate brands</option>
            <option>Personal brands</option>
            <option>Retailer brands</option>
            <option>Other</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="address" className="text-sm text-gray-600">
            Street Address<span className="text-sm text-blue-500">*</span>
          </label>
          <input
            type="text"
            name="address"
            className="px-5 py-2 border-gray-400 placeholder:text-gray-400 text-sm rounded-md"
            placeholder="Input Your Street Address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="city" className="text-sm text-gray-600">
            City<span className="text-sm text-blue-500">*</span>
          </label>
          <input
            type="text"
            name="city"
            className="px-5 py-2 border-gray-400 placeholder:text-gray-400 text-sm rounded-md"
            placeholder="Input city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="zipcode" className="text-sm text-gray-600">
            Zip Code<span className="text-sm text-blue-500">*</span>
          </label>
          <input
            type="number"
            name="zipcode"
            className="px-5 py-2 border-gray-400 placeholder:text-gray-400 text-sm rounded-md"
            placeholder="Input Zip Code"
            value={formData.zipcode}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="tax" className="text-sm text-gray-600">
            Tax ID Number<span className="text-sm text-blue-500">*</span>
          </label>
          <input
            type="text"
            name="tax"
            className="px-5 py-2 border-gray-400 placeholder:text-gray-400 placeholder:normal-case text-sm rounded-md uppercase"
            placeholder="Input Tax ID Number"
            value={formData.tax}
            onChange={handleChange}
          />
        </div>
      </form>
      <StepTwoFooter />
    </div>
  );
};

export default FormStepTwo;
