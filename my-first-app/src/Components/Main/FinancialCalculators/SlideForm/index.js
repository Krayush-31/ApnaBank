import React, { useState, useEffect } from "react";

import SavingsAccount from "../SavingsAccount";
import PersonalLoan from "../PersonalLoan";
import CreditCard from "../CreditCard";
import HomeLoan from "../HomeLoan";
import TwoWheelerLoan from "../TwoWheelerLoan";

const SliderForm = ({ selectedAccount, setSelectedAccount }) => {
  const [activeValue, setActiveValue] = useState(50000);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleAccountChange = (e) => {
    setSelectedAccount(e.target.value);
  };

  const slideLeft = () => {
    const container = document.querySelector(".radio-options");
    const scrollAmount = 200;
    if (scrollPosition > 0) {
      setScrollPosition(scrollPosition - scrollAmount);
      container.scrollTo({
        left: scrollPosition - scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const slideRight = () => {
    const container = document.querySelector(".radio-options");
    const scrollAmount = 200;
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (scrollPosition < maxScroll) {
      setScrollPosition(scrollPosition + scrollAmount);
      container.scrollTo({
        left: scrollPosition + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="lg:w-136 w-80 md:w-185 h-190 mx-auto bg-white rounded-lg shadow-md">
      <div className="relative">
        <button
          className="absolute left-0 top-1 transform -translate-y-1/2 text-xl mb-2"
          onClick={() => slideLeft()}
        >
          &#10094;
        </button>

        <div className="radio-options flex gap-4 overflow-x-auto no-scrollbar p-2 mt-2 text-xl">
          <label
            className={`flex items-center whitespace-nowrap cursor-pointer ${
              selectedAccount === "savings" ? "border-b-4 border-red-800" : ""
            }`}
          >
            <input
              type="radio"
              value="savings"
              checked={selectedAccount === "savings"}
              onChange={handleAccountChange}
              className="mr-1 appearance-none"
            />
            Savings Account
          </label>

          <label
            className={`flex items-center whitespace-nowrap cursor-pointer ${
              selectedAccount === "personalLoan"
                ? "border-b-4 border-blue-500"
                : ""
            }`}
          >
            <input
              type="radio"
              value="personalLoan"
              checked={selectedAccount === "personalLoan"}
              onChange={handleAccountChange}
              className="mr-1 appearance-none"
            />
            Personal Loan
          </label>

          <label
            className={`flex items-center whitespace-nowrap cursor-pointer ${
              selectedAccount === "creditCard"
                ? "border-b-4 border-custom-violet1"
                : ""
            }`}
          >
            <input
              type="radio"
              value="creditCard"
              checked={selectedAccount === "creditCard"}
              onChange={handleAccountChange}
              className="mr-1 appearance-none"
            />
            Credit Card
          </label>

          <label
            className={`flex items-center whitespace-nowrap cursor-pointer ${
              selectedAccount === "homeLoan" ? "border-b-4 border-blue-500" : ""
            }`}
          >
            <input
              type="radio"
              value="homeLoan"
              checked={selectedAccount === "homeLoan"}
              onChange={handleAccountChange}
              className="mr-1 appearance-none"
            />
            Home Loan
          </label>
          <label
            className={`flex items-center whitespace-nowrap cursor-pointer ${
              selectedAccount === "2wheelerLoan"
                ? "border-b-4 border-blue-500"
                : ""
            }`}
          >
            <input
              type="radio"
              value="2wheelerLoan"
              checked={selectedAccount === "2wheelerLoan"}
              onChange={handleAccountChange}
              className="mr-1 appearance-none"
            />
            2-Wheeler Loan
          </label>
        </div>

        <button
          className="absolute right-1 top-1 transform -translate-y-1/2 text-xl"
          onClick={() => slideRight()}
        >
          &#10095;
        </button>
      </div>
    

      <form>
        {selectedAccount === "savings" && (
          <div>
            <SavingsAccount />
          </div>
        )}
        {selectedAccount === "personalLoan" && (
          <div>
            <PersonalLoan />
          </div>
        )}
        {selectedAccount === "creditCard" && (
          <div>
            <CreditCard />
          </div>
        )}
        {selectedAccount === "homeLoan" && (
          <div>
            <HomeLoan />
          </div>
        )}
        {selectedAccount === "2wheelerLoan" && (
          <div>
            <TwoWheelerLoan />
          </div>
        )}
      </form>
    </div>
  );
};

export default SliderForm;
