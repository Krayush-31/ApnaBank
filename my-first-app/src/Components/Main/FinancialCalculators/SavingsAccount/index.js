import React, { useState, useEffect, useRef } from "react";
import styles from "../SavingsAccount/styles.module.css";

const SavingsAccount = () => {
  const [selectedAccount, setSelectedAccount] = useState("savings");
  const [sliderValues, setSliderValues] = useState({
    savingsOption1: 10000,
    savingsOption2: 30,
    savingsOption3: 70,
    loanOption1: 5,
    loanOption2: 10,
    loanOption3: 15,
    homeLoanOption1: 20,
    homeLoanOption2: 30,
    homeLoanOption3: 50,
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
      savingsOption1: value,
    }));
    setActiveValue(value);
  };

  const calculateInterest = (value) => {
    const result = (value * 3.76 * 2) / 100;
    return result.toFixed(3);
  };

  useEffect(() => {
    setActiveValue(sliderValues.savingsOption1);
  }, [sliderValues.savingsOption1]);

  return (
    <div className="mb-6">
      <div className="h-fit block lg:hidden">
        <div className="text-lg text-black mt-5 ml-1 font-sans font-bold ">
          Simulation Results (for a period of 1 year)
        </div>
        <div className=" flex flex-col  w-72 md:w-152 h-44 bg-red-800 mt-10 ml-5 rounded-lg animate-slidefade">
          <div className="text-white text-2xl mt-5 ml-2 ">
            &#8377;{calculateInterest(activeValue)}*
          </div>
          <div className="text-white text-xl mt-2 ml-2 ">
            {" "}
            Earn additional {activeValue - calculateInterest(activeValue)} with
            IDFC FIRST Bank (competitive interest rates ranging from 3% to
            7.25%)
          </div>
        </div>

        <div className=" flex flex-col  w-56 md:w-96 h-24 bg-gradient-to-t from-white to-red-800 mt-5 ml-5 rounded-lg">
          <div className="text-white text-2xl mt-3 ml-10 ">
            {" "}
            &#8377;{activeValue % 10000}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-1  lg:mt-10 mt-16 mb-2">
        <span className="text-lg text-gray-800 ml-5">
          Account Balance:{" "}
          <span className="font-semibold lg:ml-72 ml-5 underline">
            ₹{sliderValues.savingsOption1.toLocaleString()}
          </span>
        </span>
      </div>

      <div className="relative">
        <input
          type="range"
          id="savingsOption1"
          name="savingsOption1"
          min="10000"
          max="1000000000"
          value={sliderValues.savingsOption1}
          onChange={(e) => handleSliderChange(e, "savingsOption1")}
          className="lg:w-152  h-2 bg-gray-300 rounded-lg lg:ml-2 ml-1.5"
        />

        <span className="absolute left-0 top-7 font-semibold text-sm text-gray-500 ml-2">
          ₹10K
        </span>

        <p className="absolute right-2 top-7 font-semibold text-sm text-gray-500">
          ₹100 Cr
        </p>
      </div>
      <div className="flex lg:space-x-8 space-x-16 mt-10 lg:ml-5 ml-3 mr-2 overflow-x-auto no-scrollbar">
        <div
          onClick={() => handleValueSelect(50000)}
          className={`cursor-pointer px-4 py-2 rounded-full transition ${
            activeValue === 50000
              ? "bg-red-800 text-white"
              : "bg-gray-200 text-gray-700"
          } `}
        >
          50K
        </div>
        <div
          onClick={() => handleValueSelect(100000)}
          className={`cursor-pointer px-4 py-2 rounded-full transition ${
            activeValue === 100000
              ? "bg-red-800 text-white"
              : "bg-gray-200 text-gray-700"
          } `}
        >
          1L
        </div>
        <div
          onClick={() => handleValueSelect(500000)}
          className={`cursor-pointer px-4 py-2 rounded-full transition ${
            activeValue === 500000
              ? "bg-red-800 text-white"
              : "bg-gray-200 text-gray-700"
          } `}
        >
          5L
        </div>
        <div
          onClick={() => handleValueSelect(1000000)}
          className={`cursor-pointer px-4 py-2 rounded-full transition ${
            activeValue === 1000000
              ? "bg-red-800 text-white"
              : "bg-gray-200 text-gray-700"
          } hover:bg-blue-400`}
        >
          10L
        </div>
        <div
          onClick={() => handleValueSelect(2500000)}
          className={`cursor-pointer px-4 py-2 rounded-full transition ${
            activeValue === 2500000
              ? "bg-red-800 text-white"
              : "bg-gray-200 text-gray-700"
          } `}
        >
          25L
        </div>
        <div
          onClick={() => handleValueSelect(5000000)}
          className={`cursor-pointer px-4 py-2 rounded-full transition ${
            activeValue === 5000000
              ? "bg-red-800 text-white"
              : "bg-gray-200 text-gray-700"
          } `}
        >
          50L
        </div>
      </div>
      <div className="w-full h-fit mt-5 bg-gradient-to-t from-white to-gray-300 flex flex-col">
        <div className=" hidden lg:block">
          <div className="text-xl text-black mt-5 ml-10 font-sans font-bold ">
            Simulation Results (for a period of 1 year)
          </div>
          <div className=" flex flex-col  w-104 h-44 bg-red-800 mt-5 ml-14 rounded-lg animate-slidefade">
            <div className="text-white text-2xl mt-5 ml-10 ">
              &#8377;{calculateInterest(activeValue)}*
            </div>
            <div className="text-white text-xl mt-2 ml-10 ">
              {" "}
              Earn additional {activeValue -
                calculateInterest(activeValue)}{" "}
              with IDFC FIRST Bank (competitive interest rates ranging from 3%
              to 7.25%)
            </div>
          </div>

          <div className=" flex flex-col  w-56 h-16 bg-gradient-to-t from-white to-red-800 mt-5 ml-14 rounded-lg">
            <div className="text-white text-2xl mt-3 ml-10 ">
              {" "}
              &#8377;{activeValue % 10000}
            </div>
          </div>
        </div>
        <div className="flex justify-around cursor-pointer md:mb-5  lg:mb-0 lg:mt-8">
          <div className="  w-48 text-white font-bold flex justify-center items-center h-10 bg-red-800 mt-10  md:mt-5 ml-3 md:ml-0 rounded-lg">
            Open Savings Account
          </div>
          <div className="flex justify-start ml-5 h-20 w-36 md:w-80 md:mb-5 ">
            <p className="text-red-800 mt-10 font-bold text-lg">
              View Savings Account Interest rate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SavingsAccount;
