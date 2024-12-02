import React from "react";
import { FaArrowRight, FaPlus } from "react-icons/fa";

const ViewCard = () => {
  return (
    <div className="w-full flex flex-col items-start mt-10">
      <div className="flex flex-col items-start mb-4">
        <p className="text-4xl text-gray-800 font-serif font-bold ml-5 mb-4">
          What makes us special?
        </p>
        <p className="text-xl text-gray-800 font-serif ml-5 mt-2">
          We truly mean it when we say we want to be the most customer-friendly bank
        </p>
        <div className="flex items-center mt-2 ml-5">
          <p className="text-xl text-red-800 font-serif">Know more</p>
          <FaArrowRight size={16} color="maroon" className="ml-2" />
        </div>
      </div>

      {/* The sliding container */}
      <div className="flex flex-col lg:flex-col mt-4 ml-10 overflow-y-auto w-280">
        <div className="flex flex-nowrap space-x-5 overflow-y-auto">
          {/* Repeating cards with plus buttons */}
          <div className="bg-red-800 w-152 h-60 ml-5 mb-4 sm:mb-4 lg:mb-0 rounded-lg"></div>
          <div className="flex justify-center ml-4 mb-4 sm:mb-4 lg:mb-0">
            <div className="h-12 w-12 rounded-full border-2 border-red-800 flex items-center justify-center">
              <FaPlus size={32} color="maroon" />
            </div>
          </div>
          <div className="bg-red-800 w-152 h-60 ml-5 mb-4 sm:mb-4 lg:mb-0 rounded-lg"></div>
          <div className="flex justify-center ml-4 mb-4 sm:mb-4 lg:mb-0">
            <div className="h-12 w-12 rounded-full border-2 border-red-800 flex items-center justify-center">
              <FaPlus size={32} color="maroon" />
            </div>
          </div>
          <div className="bg-red-800 w-152 h-60 ml-5 mb-4 sm:mb-4 lg:mb-0 rounded-lg"></div>
          <div className="flex justify-center ml-4 mb-4 sm:mb-4 lg:mb-0">
            <div className="h-12 w-12 rounded-full border-2 border-red-800 flex items-center justify-center">
              <FaPlus size={32} color="maroon" />
            </div>
          </div>
          <div className="bg-red-800 w-152 h-60 ml-5 mb-4 sm:mb-4 lg:mb-0 rounded-lg"></div>
          <div className="flex justify-center ml-4 mb-4 sm:mb-4 lg:mb-0">
            <div className="h-12 w-12 rounded-full border-2 border-red-800 flex items-center justify-center">
              <FaPlus size={32} color="maroon" />
            </div>
          </div>
          <div className="bg-red-800 w-152 h-60 ml-5 mb-4 sm:mb-4 lg:mb-0 rounded-lg"></div>
          <div className="flex justify-center ml-4 mb-4 sm:mb-4 lg:mb-0">
            <div className="h-12 w-12 rounded-full border-2 border-red-800 flex items-center justify-center">
              <FaPlus size={32} color="maroon" />
            </div>
          </div>
          <div className="bg-red-800 w-152 h-60 ml-5 mb-4 sm:mb-4 lg:mb-0 rounded-lg"></div>
          <div className="flex justify-center ml-4 mb-4 sm:mb-4 lg:mb-0">
            <div className="h-12 w-12 rounded-full border-2 border-red-800 flex items-center justify-center">
              <FaPlus size={32} color="maroon" />
            </div>
          </div>
          <div className="bg-red-800 w-152 h-60 ml-5 mb-4 sm:mb-4 lg:mb-0 rounded-lg"></div>
          <div className="flex justify-center ml-4 mb-4 sm:mb-4 lg:mb-0">
            <div className="h-12 w-12 rounded-full border-2 border-red-800 flex items-center justify-center">
              <FaPlus size={32} color="maroon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCard;
