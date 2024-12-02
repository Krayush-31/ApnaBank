import React from "react";
import { FaHandsHolding } from "react-icons/fa6";

const MovingCoins = () => {
  return (
    <div className="flex justify-center items-center relative">
      <div className="relative">
        <div className="flex justify-center items-center coin1 w-5 h-5 bg-transparent border-2 border-white text-white rounded-full absolute top-0 left-10 animate-moveupdown">
          &#x20B9;
        </div>

        <div className="flex justify-center items-center coin1 w-5 h-5 bg-transparent border-2 border-white text-white rounded-full absolute top-0 left-14 animate-moveupdown">
          &#x20B9;
        </div>

        <FaHandsHolding
          size={72}
          color="white"
          className="absolute top-0 left-14  transform -translate-x-1/2"
        />
      </div>
    </div>
  );
};

export default MovingCoins;
