import React, { useState } from "react";
import FormStepOne from "./components/FormStepOne/FormStepOne";
import FormStepTwo from "./components/FormStepTwo/FormStepTwo";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({
    stepOne: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    stepTwo: {
      brandName: "",
      brandType: "",
      address: "",
      city: "",
      zipcode: "",
      tax: "",
    },
  });

  const navigate = useNavigate()

  const updateFormData = (step, field, value) => {
    setFormData({
      ...formData,
      [step]: {
        ...formData[step],
        [field]: value,
      },
    });
  };

  const handleSubmitStepTwo = () => {
    localStorage.setItem("formData", JSON.stringify(formData));

    setFormData({
      stepOne: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      },
      stepTwo: {
        brandName: "",
        brandType: "",
        address: "",
        city: "",
        zipcode: "",
        tax: "",
      },
    });
    navigate('/')
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={2000} />
      <div className="absolute bg-primary h-[60%] w-full"></div>
      <div className="absolute bg-primary h-[40%] w-full"></div>
      <Header />
      <div className="bg-white w-[80%] h-auto mx-auto my-[20px] rounded-xl shadow-xl relative">
        <Navbar />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <FormStepOne
                formData={formData.stepOne}
                updateFormData={updateFormData}
              />
            }
          />
          <Route
            path="/step2"
            element={
              <FormStepTwo
                formData={formData.stepTwo}
                updateFormData={updateFormData}
                onSubmit={handleSubmitStepTwo}
              />
            }
          />
        </Routes>
      </div>
      <Footer onSubmitStepTwo={handleSubmitStepTwo} formData={formData} />
    </>
  );
};

export default App;
