import React from "react";
import {
  FaArrowRight,
  FaCreditCard,
  FaMobile,
  FaPiggyBank,
} from "react-icons/fa";
import { FaHandsHoldingCircle, FaMessage } from "react-icons/fa6";

const ZeroCharges = () => {
  return (
    <div className="w-full h-fit flex flex-col justify-start items-start py-4 ml-5">
      <div className="flex flex-col lg:justify-start justify-center mb-6">
        <p className="text-5xl text-gray-800 font-serif font-bold mb-2">
          Zero fee banking
        </p>
        <p className="text-2xl text-gray-600">
          The only bank in India to offer zero fee banking on all savings
          account services
        </p>
      </div>
      <div className="flex lg:justify-start lg:items-start justify-center items-center mb-5">
        <p className="text-xl text-red-800 mr-2 font-bold">Know More</p>
        <FaArrowRight size={18} color="maroon" className="mt-2" />
      </div>

      <div className="flex flex-col lg:flex-row items-start">
        <div className="lg:w-64  md:w-180 md:ml-14 w-72 h-72 flex flex-col  justify-center items-center bg-white shadow-lg border-r-4 border-t-2 border-b-2 border-white">
          <p className="text-9xl font-bold ">0</p>
          <p className="text-3xl font-bold mt-4 ml-3">ZERO CHARGES on</p>
        </div>

        <div className="w-full h-72 overflow-x-auto  flex flex-col lg:flex-row  justify-start items-start mr-5 lg:ml-5">
  
  <div className="flex-shrink-0 flex justify-center items-center h-64 w-56 bg-gradient-to-r from-custom-red1 via-custom-red2 to-custom-red3 ml-5 mt-4">
    <div className="flex flex-col justify-center items-center">
      <FaPiggyBank size={48} color="white" />
      <div className="text-white font-bold text-2xl mt-2">IMPS</div>
    </div>
  </div>

 
  <div className="flex-shrink-0 flex justify-center items-center h-64 w-56 bg-gradient-to-r from-custom-red1 via-custom-red2 to-custom-red3 ml-5 mt-4">
    <div className="flex flex-col justify-center items-center">
      <FaHandsHoldingCircle size={48} color="white" />
      <div className="text-white font-bold text-2xl mt-2">NEFT</div>
    </div>
  </div>

  
  <div className="flex-shrink-0 flex justify-center items-center h-64 w-56 bg-gradient-to-r from-custom-red1 via-custom-red2 to-custom-red3 ml-5 mt-4">
    <div className="flex flex-col justify-center items-center">
      <FaMobile size={48} color="white" />
      <div className="text-white font-bold text-2xl mt-2">RTGS</div>
    </div>
  </div>

 
  <div className="flex-shrink-0 flex justify-center items-center h-64 w-56 bg-gradient-to-r from-custom-red1 via-custom-red2 to-custom-red3 ml-5 mt-4">
    <div className="flex flex-col justify-center items-center">
      <FaCreditCard size={48} color="white" />
      <div className="text-white font-bold text-2xl mt-2">Cheque Book</div>
    </div>
  </div>

  
  <div className="flex-shrink-0 flex justify-center items-center h-64 w-56 bg-gradient-to-r from-custom-red1 via-custom-red2 to-custom-red3 ml-5 mt-4">
    <div className="flex flex-col justify-center items-center">
      <FaMessage size={48} color="white" />
      <div className="text-white font-bold text-2xl mt-2">SMS Alert</div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default ZeroCharges;
