import React, { useState } from "react";
import W1 from "../FinancialCalculators/W1.png";
import W2 from "../FinancialCalculators/W2.png";
import W3 from "../FinancialCalculators/W3.png";
import SliderForm from "./SlideForm";

const FinancialCalculators = () => {
  const [selectedAccount, setSelectedAccount] = useState("savings");

  // Function to dynamically change background color based on selected account
  const getBackgroundClass = () => {
    switch (selectedAccount) {
      case "savings":
        return "bg-custom-red1";

      case "personalLoan":
        return "bg-gradient-to-r from-custom-blue1 via-custom-blue2 to-custom-blue3"; // Personal Loan color scheme
      case "creditCard":
        return "bg-gradient-to-r from-custom-violet1 via-custom-violet2 to-custom-violet3"; // Credit Card color scheme
      case "homeLoan":
        return "bg-gradient-to-r from-custom-blue1 via-custom-blue2 to-custom-blue3"; // Home Loan color scheme
      case "2wheelerLoan":
        return "bg-gradient-to-r from-custom-blue1 via-custom-blue2 to-custom-blue3"; // Default background
    }
  };
  const getImageSrc = () => {
    switch (selectedAccount) {
      case "savings":
        return W1;
      case "personalLoan":
        return W2;
      case "creditCard":
        return W3; // Credit Card image
      case "homeLoan":
        return W2; // Home Loan image
      case "2wheelerLoan":
        return W2; // Default image
    }
  };
  return (
    <div className={`w-full h-200 ${getBackgroundClass()}`}>
      <div className="flex flex-col lg:flex-row h-full">
        <div className="flex-1 lg:flex flex-row lg:flex-col hidden">
          <div className="flex flex-col justify-start lg:mr-10">
            <p className="lg:text-5xl text-2xl font-serif text-white font-bold mt-10">
              Financial Calculator
            </p>
            <p className="text-2xl text-white mt-2">
              Hassle-free financial planning with IDFC FIRST Bank
            </p>
          </div>
          <div className="flex justify-center items-center mt-5 lg:mt-0">
            <img
              src={getImageSrc()}
              alt="OO1"
              className="w-96 h-136 object-contain"
            />
          </div>
        </div>

        <div className="w-fit flex justify-around lg:hidden">
        <div className=" w-32 md:w-96 flex flex-col justify-start lg:mr-10 ml-4">
            <p className="lg:text-2xl text-2xl text-white font-bold mt-10">
              Financial Calculator
            </p>
            <p className="text-xl text-white mt-2">
              Hassle-free financial planning with IDFC FIRST Bank
            </p>
          </div>


          <div className="flex justify-center items-center mt-5 lg:mt-0 ml-5">
            <img
              src={getImageSrc()}
              alt="OO1"
              className="w-32 md:w-72 h-64 object-contain"
            />
          </div>

        </div>
        <div className="flex-1">
          <div className="mt-7 mb-7 flex items-center justify-center">
            <SliderForm
              selectedAccount={selectedAccount}
              setSelectedAccount={setSelectedAccount}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialCalculators;
