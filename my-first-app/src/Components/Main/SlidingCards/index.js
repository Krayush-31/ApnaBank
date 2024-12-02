import React, { useRef, useState } from "react";
import {
  FaArrowRight,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
  FaCreditCard,
  FaPiggyBank,
  FaPlus,
} from "react-icons/fa";
import RotatingCircle from "../SlidingCards/RotatingCircle";
import MovingCoins from "../SlidingCards/MovingCoins";
import { BiToggleLeft } from "react-icons/bi";

const SlidingCards = () => {
  const [isOpen, setisOpen] = useState(false);

  const handleToggle = () => {
    setisOpen(true);
  };

  const closeToggle = () => {
    setisOpen(false);
  };
  const containerRef = useRef();

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="w-full h-fit flex flex-col justify-start items-start py-4 ml-5">
      <div className="flex flex-col lg:justify-start justify-center mb-6">
        <p className="text-5xl text-gray-800 font-serif font-bold mb-2">
          What makes us special?
        </p>
        <p className="text-2xl text-gray-600 ">
          We truly mean it when we say we want to be the most customer-friendly
          bank
        </p>
      </div>

      <div className="flex lg:justify-start lg:items-start justify-center items-center mb-5">
        <p className="text-xl text-red-800 mr-2 font-bold">Know More</p>
        <FaArrowRight size={18} color="maroon" className="mt-2" />
      </div>

      <div
        ref={containerRef}
        className="w-full h-80 overflow-x-auto no-scrollbar  flex sjustify-center items-center lg:flex-row flex-col"
      >
        <button
          onClick={scrollLeft}
          className="absolute left-5 top-104 transform -translate-y-1/2 bg-white p-2 rounded-full hidden lg:flex"
        >
          <FaChevronLeft size={18} color="maroon" />
        </button>

        <div className="flex-shrink-0 cursor-pointer flex-col lg:w-72 w-64 lg:h-72 h-80 bg-red-800 text-white flex justify-start items-start  rounded-lg shadow-lg lg:ml-10 ml-0 mr-10 lg:mr-0 md:w-full">
          <div className="flex justify-center ml-5 mt-2 md:ml-5 md:mt-5">
            <div className="h-20 w-20 rounded-full bg-red-900 flex justify-center items-center">
              <p className="text-white text-2xl">&#x20B9;0</p>
            </div>
          </div>
          <div className="text-white font-bold text-2xl ml-5 mt-5 lg:mt-2 md:ml-5 md:mt-8">
            ZERO Charges on services like IMPS,RTGS,NEFT & ATM transaction
          </div>
          <div className="text-white font-semibold font-xl ml-5 mt-10 lg:mt-3  flex justify-around md:ml-5 md:mt-12">
            Know More
            <FaChevronDown
              size={20}
              color="white"
              className="ml-2 mt-1"
              onClick={handleToggle}
            />
          </div>
        </div>
        <div className="flex justify-center  mt-5 mb-5 lg:ml-5">
          <div className="h-12 w-12 rounded-full border-2 border-red-800 flex items-center justify-center">
            <FaPlus size={32} color="maroon" />
          </div>
        </div>
        <div className="flex-shrink-0 flex justify-start items-start cursor-pointer flex-col lg:w-72 w-64 lg:h-72 h-80 bg-gradient-to-r from-custom-blue1 via-custom-blue2 to-custom-blue3 text-white  rounded-lg shadow-lg lg:ml-10 ml-0 mr-10 lg:mr-0 md:w-full">
          <div className="flex flex-col h-full md:ml-10 md:mt-5">
            <div className="flex justify-start items-start mt-12">
              <MovingCoins />
            </div>
            <div className="text-white font-bold text-2xl ml-3 mt-24">
              Monthly Interest credit on Savings Account
            </div>

            <div className="text-white font-semibold font-xl ml-3 mt-8 flex justify-start mr-32">
              Know More
              <FaChevronDown
                size={20}
                color="white"
                className="ml-2 mt-1"
                onClick={handleToggle}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center  mt-5 mb-5 lg:ml-5">
          <div className="h-12 w-12 rounded-full border-2 border-red-800 flex items-center justify-center">
            <FaPlus size={32} color="maroon" />
          </div>
        </div>
        <div className="flex-shrink-0 cursor-pointer flex-col lg:w-72 w-64 lg:h-72 h-80 bg-gradient-to-r from-custom-orange1 via-custom-orange2 to-custom-orange3 text-white flex justify-start items-start  rounded-lg shadow-lg lg:ml-10 ml-0 mr-10 lg:mr-0 md:w-full">
          <div className="flex justify-center ml-5 mt-2 md:ml-10 md:mt-5">
            <div className="h-20 w-20 rounded-full bg-custom-orange1 flex justify-center items-center">
              <FaPiggyBank size={44} color="white" />
            </div>
          </div>
          <div className="text-white font-bold text-2xl ml-3 mt-5 md:m-10 md:mt-8">
            Upto 7.25% interest p.a. on Savings Account
          </div>
          <div className="text-white font-semibold font-xl ml-5 mt-14 flex justify-around md:ml-10 md:mt-10">
            Know More
            <FaChevronDown
              size={20}
              color="white"
              className="ml-2 mt-1"
              onClick={handleToggle}
            />
          </div>
        </div>
        <div className="flex justify-center  mt-5 mb-5 lg:ml-5">
          <div className="h-12 w-12 rounded-full border-2 border-red-800 flex items-center justify-center">
            <FaPlus size={32} color="maroon" />
          </div>
        </div>
        <div className="flex-shrink-0 cursor-pointer flex-col lg:w-72 w-64 lg:h-72 h-80 bg-black text-white flex justify-start items-start  rounded-lg shadow-lg lg:ml-10 ml-0 mr-10 lg:mr-0 md:w-full">
          <div className="flex justify-center ml-5 mt-2 md:ml-10 md:mt-5">
            <div className="h-20 w-20 rounded-full border-2 border-white flex justify-center items-center animate-spin">
              <p className="text-white text-2xl">&#x20B9;0</p>
            </div>
          </div>
          <div className="text-white font-bold text-2xl ml-5 mt-5 md:ml-10 md:mt-8 ">
            ZERO Charges on non-home branches transactions
          </div>
          <div className="text-white font-semibold font-xl ml-5 mt-8 flex justify-around md:ml-10 md:mt-10">
            Know More
            <FaChevronDown
              size={20}
              color="white"
              className="ml-2 mt-1"
              onClick={handleToggle}
            />
          </div>
        </div>
        <div className="flex justify-center  mt-5 mb-5 lg:ml-5">
          <div className="h-12 w-12 rounded-full border-2 border-red-800 flex items-center justify-center">
            <FaPlus size={32} color="maroon" />
          </div>
        </div>
        <div className="flex-shrink-0 flex justify-start items-start cursor-pointer flex-col lg:w-72 w-64 lg:h-72 h-80 bg-gradient-to-r from-custom-blue1 via-custom-blue2 to-custom-blue3 text-white  rounded-lg shadow-lg lg:ml-10 ml-0 mr-10 lg:mr-0 md:w-full">
          <div className="flex flex-col h-full md:ml-10 md:mt-5">
            <div className="flex justify-start items-start mt-12">
              <MovingCoins />
            </div>
            <div className="text-white font-bold text-2xl ml-3 mt-24">
              Monthly Interest credit on Savings Account
            </div>

            <div className="text-white font-semibold font-xl ml-3 mt-8 flex justify-start mr-32">
              Know More
              <FaChevronDown
                size={20}
                color="white"
                className="ml-2 mt-1"
                onClick={handleToggle}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center  mt-5 mb-5 lg:ml-5">
          <div className="h-12 w-12 rounded-full border-2 border-red-800 flex items-center justify-center">
            <FaPlus size={32} color="maroon" />
          </div>
        </div>
        <div className="flex-shrink-0 cursor-pointer flex-col lg:w-72 w-64 lg:h-72 h-80 bg-gradient-to-r from-pink-800 via-pink-700 to-pink-600 text-white flex justify-start items-start  rounded-lg shadow-lg lg:ml-10 ml-0 mr-10 lg:mr-0 md:w-full">
          <div className="flex justify-center ml-5 mt-2 md:ml-10 md:mt-8 ">
            <div className="h-20 w-20 rounded-full bg-transparent flex justify-center items-center border-2 border-pink-500">
              <FaCreditCard size={44} color="white" />
            </div>
          </div>
          <div className="text-white font-bold text-2xl ml-5 mt-5 md:ml-10 md:mt-12">
            Premium credit cards free for life
          </div>
          <div className="text-white font-semibold font-xl ml-5 mt-16 flex justify-around md:ml-10 md:mt-16">
            Know More
            <FaChevronDown
              size={20}
              color="white"
              className="ml-2 mt-1"
              onClick={handleToggle}
            />
          </div>
        </div>

        <div className="flex justify-center  mt-5 mb-5 lg:ml-5">
          <div className="h-12 w-12 rounded-full border-2 border-red-800 flex items-center justify-center">
            <FaPlus size={32} color="maroon" />
          </div>
        </div>
        <div className="flex-shrink-0 cursor-pointer flex-col lg:w-72 w-64 lg:h-72 h-80 bg-red-800 text-white flex justify-start items-start  rounded-lg shadow-lg lg:ml-10 ml-0 mr-10 lg:mr-0 md:w-full">
          <div className="flex justify-center ml-5 mt-2 md:ml-5 md:mt-5">
            <div className="h-20 w-20 rounded-full bg-red-900 flex justify-center items-center">
              <p className="text-white text-2xl">&#x20B9;0</p>
            </div>
          </div>
          <div className="text-white font-bold text-2xl ml-5 mt-5 lg:mt-2 md:ml-5 md:mt-8">
            ZERO Charges on services like IMPS,RTGS,NEFT & ATM transaction
          </div>
          <div className="text-white font-semibold font-xl ml-5 mt-10 lg:mt-3  flex justify-around md:ml-5 md:mt-12">
            Know More
            <FaChevronDown
              size={20}
              color="white"
              className="ml-2 mt-1"
              onClick={handleToggle}
            />
          </div>
        </div>

        <div className="flex justify-center  mt-5 mb-5 lg:ml-5">
          <div className="h-12 w-12 rounded-full border-2 border-red-800 flex items-center justify-center">
            <FaPlus size={32} color="maroon" />
          </div>
        </div>
        <div className="flex-shrink-0 flex justify-start items-start cursor-pointer flex-col lg:w-72 w-64 lg:h-72 h-80 bg-gradient-to-r from-custom-blue1 via-custom-blue2 to-custom-blue3 text-white  rounded-lg shadow-lg lg:ml-10 ml-0 mr-10 lg:mr-0 md:w-full">
          <div className="flex flex-col h-full md:ml-10 md:mt-5">
            <div className="flex justify-start items-start mt-12">
              <MovingCoins />
            </div>
            <div className="text-white font-bold text-2xl ml-3 mt-24">
              Monthly Interest credit on Savings Account
            </div>

            <div className="text-white font-semibold font-xl ml-3 mt-8 flex justify-start mr-32">
              Know More
              <FaChevronDown
                size={20}
                color="white"
                className="ml-2 mt-1"
                onClick={handleToggle}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center  mt-5 mb-5 lg:ml-5">
          <div className="h-12 w-12 rounded-full border-2 border-red-800 flex items-center justify-center">
            <FaPlus size={32} color="maroon" />
          </div>
        </div>
        <div className="flex-shrink-0 cursor-pointer flex-col lg:w-72 w-64 lg:h-72 h-80 bg-black text-white flex justify-start items-start  rounded-lg shadow-lg lg:ml-10 ml-0 mr-10 lg:mr-0 md:w-full">
          <div className="flex justify-center ml-5 mt-2 md:ml-10 md:mt-5">
            <div className="h-20 w-20 rounded-full border-2 border-white flex justify-center items-center animate-spin">
              <p className="text-white text-2xl">&#x20B9;0</p>
            </div>
          </div>
          <div className="text-white font-bold text-2xl ml-5 mt-5 md:ml-10 md:mt-8 ">
            ZERO Charges on non-home branches transactions
          </div>
          <div className="text-white font-semibold font-xl ml-5 mt-8 flex justify-around md:ml-10 md:mt-10">
            Know More
            <FaChevronDown
              size={20}
              color="white"
              className="ml-2 mt-1"
              onClick={handleToggle}
            />
          </div>
        </div>

        <div className="flex justify-center  mt-5 mb-5 lg:ml-5">
          <div className="h-12 w-12 rounded-full border-2 border-red-800 flex items-center justify-center">
            <FaPlus size={32} color="maroon" />
          </div>
        </div>

        <div className="flex-shrink-0 cursor-pointer flex-col lg:w-72 w-64 lg:h-72 h-80 bg-red-800 text-white flex justify-start items-start  rounded-lg shadow-lg lg:ml-10 ml-0 mr-10 lg:mr-0 md:w-full">
          <div className="flex justify-center ml-5 mt-2 md:ml-10 md:mt-5">
            <div className="h-20 w-20 rounded-full bg-red-900 flex justify-center items-center">
              <p className="text-white text-2xl">&#x20B9;0</p>
            </div>
          </div>
          <div className="text-white font-bold text-2xl ml-5 mt-5 lg:mt-0 md:ml-10 md:mt-8">
            ZERO Charges on services like IMPS,RTGS,NEFT & ATM transaction
          </div>
          <div className="text-white font-semibold font-xl ml-5 mt-10 lg:mt-0  flex justify-around md:ml-10 md:mt-10">
            Know More
            <FaChevronDown
              size={20}
              color="white"
              className="ml-2 mt-1"
              onClick={handleToggle}
            />
          </div>
        </div>

       
        <button
          onClick={scrollRight}
          className="absolute right-5 top-104 transform -translate-y-1/2 bg-white p-2 rounded-full hidden lg:flex"
        >
          <FaChevronRight size={18} color="maroon" />
        </button>
      </div>
      {isOpen && (
        <div className=" flex flex-col w-280 ml-5 bg-gray-300 h-36 rounded-2xl mt-2 justify-start">
          <div className="text-black text-xl ml-5 mt-5">
            IDFC FIRST Bank recognized for its fairness in service charges on
            Savings Account by Moneylife Foundation & IIT Bombay
          </div>
          <div className="flex justify-start ml-5 mt-10 cursor-pointer">
            <div className="w-32 h-10 rounde rounded-full bg-red-800 font-bold text-white flex justify-center items-center">
              Know More
            </div>
            <div className="text-black font-semibold font-xl ml-7 mt-2 flex justify-around">
              Read less
              <FaChevronUp
                size={20}
                color="black"
                className="ml-2 mt-1"
                onClick={closeToggle}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SlidingCards;
