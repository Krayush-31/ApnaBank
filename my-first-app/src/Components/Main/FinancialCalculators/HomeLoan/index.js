import React, { useState, useEffect, useRef } from "react";

const HomeLoan = () => {
  const [selectedAccount, setSelectedAccount] = useState("homeLoan");
  const [sliderValues, setSliderValues] = useState({
    personalLoanOption1: 100000, 
    personalLoanOption2: 12,   
    personalLoanOption3: 8,   
  });
  const [activeValue, setActiveValue] = useState(50000);
  const [scrollPosition, setScrollPosition] = useState(0);

  
  const handleAccountChange = (e) => {
    setSelectedAccount(e.target.value);
  };

  
  const handleSliderChange = (e, option) => {
    const value = parseInt(e.target.value, 10);
    setSliderValues((prevState) => ({
      ...prevState,
      [option]: value,
    }));
  };

  
  const handleInputChange = (e, option) => {
    const value = e.target.value;
    if (!isNaN(value) && value >= 0 && value <= 1000000000) {
      setSliderValues((prevState) => ({
        ...prevState,
        [option]: value,
      }));
    }
  };

  
  const handleValueSelect = (value) => {
    setSliderValues((prevState) => ({
      ...prevState,
      personalLoanOption1: value,
      personalLoanOption2: value,
      personalLoanOption3: value,
    }));
    setActiveValue(value); 
  };

  
  const calculateLoanInterest = (loanAmount, interestRate, tenureMonths) => {
    const monthlyInterestRate = interestRate / 12 / 100; 
    const numberOfMonths = tenureMonths;
    const monthlyEMI =
      (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
      (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);
    const totalPayment = monthlyEMI * numberOfMonths;
    const totalInterest = totalPayment - loanAmount;
    return totalInterest.toFixed(2);
  };

  
  useEffect(() => {
    setActiveValue(sliderValues.personalLoanOption1);
  }, [sliderValues.personalLoanOption1]);


  return (
    <div className="mb-6">
      <div className="flex items-center justify-between px-1 mt-10">
      
        <span className="text-lg font-bold text-gray-800 ml-2">
           Amount:           {" "}
          <span className="font-semibold lg:ml-80 ml-5 underline">
            ₹{sliderValues.personalLoanOption1.toLocaleString()}
          </span>
        </span>
      </div>

      <div className="relative">
      
        <input
          type="range"
          id="personalLoanOption1"
          name="personalLoanOption1"
          min="100000"
          max="100000000"
          value={sliderValues.personalLoanOption1}
          onChange={(e) => handleSliderChange(e, "personalLoanOption1")}
          className="w-152 h-2 bg-gray-300 rounded-lg ml-2"
         
        />
      
        <span className="absolute left-0 top-7 text-sm font-semibold text-gray-500 ml-2">
          ₹1L
        </span>
        
        <span className="absolute right-2 top-7 text-sm font-semibold text-gray-500">
          ₹100 Cr
        </span>
      </div>
      <div className="flex items-center justify-between px-1 mt-10 mb-1">
      
        <span className="text-lg  font-bold text-gray-800 ml-1">
          Period {" "}
          <span className="font-semibold lg:ml-80 ml-5 underline">
            {sliderValues.personalLoanOption2.toLocaleString()} Months
          </span>
        </span>
      </div>

      <div className="relative">
      
        <input
          type="range"
          id="personalLoanOption2"
          name="personalLoanOption2"
          min="12"
          max="360"
          value={sliderValues.personalLoanOption2}
          onChange={(e) => handleSliderChange(e, "personalLoanOption2")}
          className="w-152 h-2 bg-gray-300 rounded-lg ml-2"
         
        />
      
        <span className="absolute left-0 top-7 text-sm font-semibold text-gray-500 ml-2">
          12
        </span>
        
        <span className="absolute right-2 top-7 text-sm font-semibold text-gray-500">
          360
        </span>
      </div>
      <div className="flex items-center justify-between px-1 mt-10 mb-2">
      
        <span className="text-lg  font-bold text-gray-800 ml-1">
          Interest Rate {" "}
          <span className="font-semibold lg:ml-96 ml-5 underline">
            {sliderValues.personalLoanOption3.toLocaleString()}%
          </span>
        </span>
      </div>

      <div className="relative">
      
        <input
          type="range"
          id="personalLoanOption3"
          name="personalLoanOption3"
          min="8"
          max="10"
          value={sliderValues.personalLoanOption3}
          onChange={(e) => handleSliderChange(e, "personalLoanOption3")}
          className="w-152 h-2 bg-gray-300 rounded-lg ml-2"
         
        />
      
        <span className="absolute left-0 top-7 text-sm font-semibold text-gray-500 ml-2">
          8.75%
        </span>
        
        <span className="absolute right-2 top-7 text-sm font-semibold text-gray-500">
        10.50%
        </span>
      </div>
     
    

      <div className="w-full h-fit mt-16 bg-gradient-to-t from-white to-gray-300 flex flex-col">
      
        <div className="flex flex-col lg:w-104 md:w-160 w-72 h-24 bg-gradient-to-r from-custom-blue1 via-custom-blue2 to-custom-blue3 mt-14 lg:ml-14 ml-5 rounded-lg animate-slidefade">
          
          <div className="text-white text-xl mt-2 ml-10 ">
            {" "}
            You will pay EMI of only
          </div>
          <div className="text-white text-2xl mt-5 ml-10 ">
            &#8377;{calculateLoanInterest(sliderValues.personalLoanOption1, sliderValues.personalLoanOption2, sliderValues.personalLoanOption3)}
          </div>
        </div>
       

        <div className="flex justify-around cursor-pointer lg:mt-10 mt-6">
          <div className=" w-56 text-white font-bold flex justify-center items-center h-10 bg-red-800 mt-10  rounded-full">
            Apply for Home Loan
          </div>

          <div className="flex justify-start ml-5 h-20 w-36 md:w-72">
            <p className="text-red-800 mt-10 font-bold text-lg">
              View Home Loan Interest rate
            </p>
          </div>
         
        </div>
      </div>
    </div>
  );
};
export default HomeLoan;
