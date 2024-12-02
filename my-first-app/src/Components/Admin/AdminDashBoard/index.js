import React from "react";
import AdminNavbar from "../AdminNavbar";
import {
  FaPlus,
  FaCloudDownloadAlt,
  FaArrowRight,
  FaExternalLinkAlt,
  FaDesktop,
} from "react-icons/fa";
import chip2 from "../AdminDashBoard/chip.png";
import Carousel from "../Carousel";


const AdminDashBoard = () => {
  return (
    <div className="flex flex-col h-screen">
      <AdminNavbar />

      <div className="flex flex-col lg:flex-row flex-1">
        <div className="flex-1 bg-blue-200 p-8">
          <div className="flex justify-between mt-5 ">
            <p className="text-xl md:text-3xl  font-sans text-white ml-10">
              My Virtual Cards
            </p>

            <button className="items-center bg-indigo-700 text-white px-6 py-3 rounded-full border-2 border-white transition duration-300 hover:bg-white hover:text-black hidden md:flex">
              <p>Add New Card</p>
              <span className="flex items-center justify-center bg-white text-black rounded-full w-5 h-5 ml-4">
                <FaPlus size={20} color="indigo" />
              </span>
            </button>
          </div>
          <div className="flex justify-center items-center mt-5 md:mt-10">
            <div className="bg-gray-700 w-96 md:w-128 h-72 md:h-64 rounded-xl shadow-lg relative overflow-hidden mr-10">
              <div className="absolute top-4 left-4 flex items-center space-x-2">
                <div className="bg-white text-gray-600 rounded-full w-8 h-8 flex justify-center items-center">
                  <span className="font-bold text-xl">v</span>
                </div>
                <span className="text-white text-4xl font-bold">ISA</span>
              </div>

              <div className="absolute top-24 mt-5 left-4 text-white text-3xl font-mono">
                <span>**** **** **** 1234</span>
              </div>

              <div className="absolute bottom-8 left-4 text-white text-sm flex justify-between w-full mt-5 px-4">
                <div className="flex space-x-4 mt-10">
                  <div>
                    <p>EXP</p>
                    <span className="font-semibold">12/25</span>
                  </div>
                  <div>
                    <p>CVV</p>
                    <span className="font-semibold">***</span>
                  </div>
                </div>
                <div className="text-right mt-10 mr-3">
                  <p>CARDHOLDER</p>
                  <span className="font-semibold">ADVYA</span>
                </div>
              </div>

              <div className="absolute top-16 right-4 w-12 h-12">
                <img
                  src={chip2}
                  alt="Chip"
                  className="w-full h-full object-center"
                />
              </div>
            </div>
          </div>

          <div className="flex space-x-4 w-full max-w-2xl mt-10">
            <button className="flex flex-col justify-around bg-blue-500 text-white w-full h-24 rounded-2xl hover:bg-blue-400 transition duration-300">
              <span className="items-center justify-center bg-blue-600 text-black rounded-full w-8 h-8 ml-10 mt-2 hidden md:block">
                <FaArrowRight size={24} color="white" className="mt-1 ml-1" />
              </span>
              <span className="  ml-0 md:ml-10 mb-1 md:mb-3 text-2xl md:text-2xl">
                Top Up Card
              </span>
            </button>

            <button className="flex flex-col justify-around bg-purple-500 text-white w-full h-24 rounded-2xl hover:bg-purple-400 transition duration-300">
              <span className="items-center justify-center bg-purple-600 text-black rounded-full w-9 h-9 ml-10 mt-2 hidden md:block">
                <FaExternalLinkAlt
                  size={24}
                  color="white"
                  className="mt-1 ml-1"
                />
              </span>
              <span className=" ml-0 md:ml-10 mb-1 md:mb-3 text-2xl md:text-2xl">
                Send Money
              </span>
            </button>
          </div>
          <div className="flex space-x-4 w-full max-w-2xl mt-10 ">
            <button className="flex flex-col justify-around bg-violet-500 text-white w-full h-24 rounded-2xl hover:bg-violet-400 transition duration-300">
              <span className="items-center justify-center bg-violet-600 text-black rounded-full w-8 h-8 ml-10 mt-2 hidden md:block">
                <FaCloudDownloadAlt
                  size={24}
                  color="white"
                  className="mt-1 ml-1"
                />
              </span>
              <span className=" ml-0 md:ml-10 mb-1 md:mb-3 text-2xl md:text-2xl">
                Receive Money
              </span>
            </button>

            <button className="flex flex-col justify-around bg-indigo-800 text-white w-full h-24 rounded-2xl hover:bg-indigo-400 transition duration-300">
              <span className="items-center justify-center bg-indigo-600 text-black rounded-full w-8 h-8 ml-10 mt-2 hidden md:block">
                <FaDesktop size={24} color="white" className="mt-1 ml-1" />
              </span>
              <span className=" ml-0 md:ml-10 mb-1 md:mb-3 text-2xl md:text-2xl">
                Withdraw Money
              </span>
            </button>
          </div>
        </div>

        <div className="flex-1 bg-blue-200 p-8">
          <div className="flex flex-col justify-center items-center space-y-4"></div>

          <div className="flex justify-center items-center mt-28">
            <Carousel />
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
