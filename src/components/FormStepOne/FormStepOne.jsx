import React from "react";

const FormStepOne = ({ formData, updateFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData("stepOne", name, value);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-1 w-[35%] mx-auto my-4">
        <h3 className="text-sm text-gray-400 text-center">Step 1</h3>
        <h1 className="text-xl md:text-2xl text-gray-700 text-center">
          Your Profile
        </h1>
        <p className="text-md text-gray-500 text-center">
          Enter the login information for your account. You will be able to
          create additional users after registering.
        </p>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-8 w-[80%] mx-auto my-5 pb-7">
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName" className="text-md text-gray-600">
            First Name<span className="text-sm text-blue-500">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            className="px-7 py-2 border-gray-400 placeholder:text-gray-400 rounded-md"
            placeholder="Input Your First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="lastName" className="text-md text-gray-600">
            Last Name<span className="text-sm text-blue-600">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            className="px-7 py-2 border-gray-400 placeholder:text-gray-400 rounded-md"
            placeholder="Input Your Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-md text-gray-600">
            Email<span className="text-sm text-blue-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            className="px-7 py-2 border-gray-400 placeholder:text-gray-400 rounded-md"
            placeholder="Input Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-md text-gray-600">
            Phone Number<span className="text-sm text-blue-500">*</span>
          </label>
          <input
            type="number"
            name="phone"
            className="px-7 py-2 border-gray-400 placeholder:text-gray-400 rounded-md"
            placeholder="Input Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-md text-gray-600">
            Password<span className="text-sm text-blue-500">*</span>
          </label>
          <input
            type="password"
            name="password"
            className="px-7 py-2 border-gray-400 placeholder:text-gray-400 rounded-md"
            placeholder="Create Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="confirmPassword" className="text-md text-gray-600">
            Confirm Password<span className="text-sm text-blue-500">*</span>
          </label>
          <input
            type="password"
            name="confirmPassword"
            className="px-7 py-2 border-gray-400 placeholder:text-gray-400 rounded-md"
            placeholder="Confirm Your Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default FormStepOne;
