import React, { useState, useEffect, useRef } from "react";

const CreditCard = () => {
  const [selectedAccount, setSelectedAccount] = useState("savings");
  const [sliderValues, setSliderValues] = useState({
    principalAmount: 2500,
    tenure: 3,
    
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
      principalAmount: value,
      tenure: value,

    }));
    setActiveValue(value);
  };

  const calculateInterest = (value,tenure) => {
    const result = (value * 3.76 * tenure) / 100;
    return result.toFixed(3);
  };

  useEffect(() => {
    setActiveValue(sliderValues.principalAmount);
  }, [sliderValues.principalAmount]);

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between px-1  mt-10 mb-1">
        <span className="text-lg text-custom-violet1 ml-5 font-bold">
          Principal Amount:{" "}
          <span className="font-semibold lg:ml-64 ml-5 underline">
            ₹{sliderValues.principalAmount.toLocaleString()}
          </span>
        </span>
      </div>

      <div className="relative">
        <input
          type="range"
          id="principalAmount"
          name="principalAmount"
          min="2500"
          max="1000000"
          value={sliderValues.principalAmount}
          onChange={(e) => handleSliderChange(e, "principalAmount")}
          className="w-152 h-2 bg-gray-300 rounded-lg ml-2"
        />

        <span className="absolute left-0 top-7 text-sm text-gray-500 ml-2">
        ₹2.5K
        </span>

        <span className="absolute right-2 top-7 text-sm text-gray-500">
          ₹10L
        </span>
      </div>

      <div className="flex items-center justify-between px-1  mt-10 mb-1">
        <span className="text-lg text-custom-violet1 ml-5 font-bold">
          Tenure(months):{" "}
          <span className="font-semibold lg:ml-64 ml-5 underline">
            {sliderValues.tenure.toLocaleString()} Months
          </span>
        </span>
      </div>

      <div className="relative">
        <input
          type="range"
          id="tenure"
          name="tenure"
          min="3"
          max="36"
          value={sliderValues.tenure}
          onChange={(e) => handleSliderChange(e, "tenure")}
          className="w-152 h-2 bg-gray-300 rounded-lg ml-2"
        />

        <span className="absolute left-0 top-7 text-sm text-gray-600 ml-2 font-semibold">
        3 Months
        </span>

        <span className="absolute right-2 top-7 text-sm text-gray-600 font-semibold">
          36 Months
        </span>
      </div>
     
      <div className="w-full h-fit mt-24 bg-gradient-to-t from-white to-gray-300 flex flex-col ">
      <div className="flex flex-col lg:w-104 md:w-152 w-72 h-24 bg-gradient-to-r from-custom-violet1 via-custom-violet2 to-custom-violet3 mt-14 lg:ml-14 ml-3 rounded-lg animate-slidefade">
          
          <div className="text-white text-xl mt-2 ml-10 ">
            {" "}
            You will pay EMI of only
          </div>
          <div className="text-white text-2xl mt-5 ml-10 ">
            &#8377;{calculateInterest(sliderValues.principalAmount, sliderValues.tenure)}
          </div>
        </div>
        <div className="text-lg text-gray-600 w-104 lg:ml-14 ml-3 mt-5 md:w-128">
        Big purchases, small EMIs! 
        EMIfy your spends easily, 
        with interest rates starting as low as 1% p.m., 
        only with your IDFC FIRST Bank Credit Card.
        </div>
     
        <div className="flex justify-start cursor-pointer">
          <div className=" w-52 lg:ml-14 ml-5 text-white font-bold flex justify-center items-center h-10 bg-red-800 mt-10 rounded-full">
            Apply for a Credit card
          </div>
         
        </div>
      </div>
    </div>
  );
};
export default CreditCard;
