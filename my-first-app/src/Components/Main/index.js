import React, { useState } from "react";
import Header from "../Main/Header";
import {
  FaBell,
  FaMobile,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaReddit,
  FaMoneyBill,
  FaCreditCard,
  FaLightbulb,
  FaPercent,
  FaChartArea,
  FaArrowRight,
  FaHandPointer,
} from "react-icons/fa";
import Dropdown2 from "../Main/Dropdown2";
import data from "../Main/dataMain.json";
import C1 from "../Main/Images/C1.png";
import c2 from "../Main/Images/c2.jpg";
import c4 from "../Main/Images/c4.png";
import VScreen from "../Main/VScreen";
import { FaDiamond } from "react-icons/fa6";
import Popular from "../Main/IconButtonView/Popular";
import Accounts from "../Main/IconButtonView/Accounts";
import Loans from "../Main/IconButtonView/Loans";
import Deposits from "../Main/IconButtonView/Deposits";
import CreditCards from "../Main/IconButtonView/CreditCards";
import Insurance from "../Main/IconButtonView/Insurance";
import Investments from "../Main/IconButtonView/Insurance";
import Offers from "../Main/IconButtonView/Offers";

import SlidingCards from "../Main/SlidingCards";
import ZeroCharges from "./ZeroCharges";
import FinancialCalculators from "./FinancialCalculators";
import ProductSelectionBar from "./ProductSelectionBar";

const Main = () => {
  const [isMenu, setisMenu] = useState(false);

  const handleToggle = () => {
    setisMenu(true);
  };

  const closeToggle = () => {
    setisMenu(false);
  };

  const icons = [
    { icon: <FaDiamond size={24} color="white" />, title: "Popular" },
    { icon: <FaReddit size={24} color="white" />, title: "Accounts" },
    { icon: <FaMoneyBill size={24} color="white" />, title: "Deposits" },
    { icon: <FaCreditCard size={24} color="white" />, title: "Credit Cards" },
    { icon: <FaStar size={24} color="white" />, title: "Loans" },
    { icon: <FaChartArea size={24} color="white" />, title: "Investments" },
    { icon: <FaLightbulb size={24} color="white" />, title: "Insurance" },
    { icon: <FaPercent size={24} color="white" />, title: "Offers" },
  ];
  const [selectedIcon, setSelectedIcon] = useState(null);

  const IconButton = ({ icon, title, onClick, isActive }) => (
    <div
      className={`flex flex-col items-center justify-between relative w-36 rounded-lg cursor-pointer transition-all duration-300 ${
        isActive ? "bg-red-800" : "bg-transparent"
      }`}
      onClick={onClick}
    >
      {icon}
      <div
        className={`text-white px-4 py-2 rounded-lg text-center ${
          isActive ? "font-bold" : ""
        }`}
      >
        {title}
      </div>
    </div>
  );

  const handleIconClick = (index) => {
    setSelectedIcon(index);
  };

  const renderComponent = () => {
    switch (selectedIcon) {
      case 0:
        return <Popular />;
      case 1:
        return <Accounts />;
      case 2:
        return <Deposits />;
      case 3:
        return <CreditCards />;
      case 4:
        return <Loans />;

      case 5:
        return <Investments />;
      case 6:
        return <Insurance />;
      case 7:
        return <Offers />;
      default:
        return <Popular />;
    }
  };
  const [openSButton, setopenSButton] = useState(false);

  const handleSButton = () => {
    setopenSButton(!openSButton);
  };

  const closeSButton = () => {
    setopenSButton(!openSButton);
  };
  return (
    <div className="min-h-screen flex flex-col items-center  w-full">
      <div className=" z-40 flex justify-center w-full">
        <Header />
      </div>

      <div className=" z-30  w-full h-16 bg-gray-200 lg:flex justify-between items-center mt-32 hidden md:hidden ">
        <div className="h-full w-fit lg:flex items-center justify-center ml-16 mt-2 hidden md:hidden">
          <Dropdown2
            buttonTitle={data.button1}
            menuItems={data.menuItems}
            heading={data.button1heading}
            heading2={data.button1heading2}
          />
          <Dropdown2
            buttonTitle={data.button2}
            menuItems={data.menuItems2}
            heading={data.button2heading}
            heading2={data.button2heading2}
          />
          <Dropdown2
            buttonTitle={data.button3}
            menuItems={data.menuItems3}
            heading={data.button3heading}
            heading2={data.button3heading2}
          />
          <Dropdown2
            buttonTitle={data.button4}
            menuItems={data.menuItems4}
            heading={data.button4heading}
            heading2={data.button4heading2}
          />
          <Dropdown2
            buttonTitle={data.button5}
            menuItems={data.menuItems5}
            heading={data.button5heading}
            heading2={data.button5heading2}
          />
          <Dropdown2
            buttonTitle={data.button6}
            menuItems={data.menuItems6}
            heading={data.button6heading}
            heading2={data.button6heading2}
          />
        </div>

        <div className="h-full w-fit flex items-center justify-center ml-48">
          <div className="h-full w-16 mt-10 ml-16 cursor-pointer">
            <FaBell size={28} color="black" onClick={handleToggle} />

            {isMenu && (
              <div className=" fixed right-10 w-200 h-fit bg-white border border-black mt-3 z-50 overflow-x-auto">
                <div className="flex w-full justify-between items-center  px-4">
                  <div className="text-black text-4xl mt-5 font-bold ">
                    IDFC FIRST Bulletin
                  </div>
                  <FaTimes
                    size={32}
                    color="maroon"
                    onClick={closeToggle}
                    className="mt-5"
                  />
                </div>
                <div className="mt-5 w-full py-5">
                  <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      <div className="rounded-lg shadow-lg bg-red-800 h-80 ">
                        <img
                          src={C1}
                          className="w-60 h-44 rounded-lg"
                          alt="c1"
                        />

                        <p className="mt-4 text-xl ml-2 text-white">
                          Lifetime FREE Credit Card with 10X rewards
                        </p>

                        <div className="w-56  ml-1 rounded-full h-0.5 mt-3  bg-white"></div>
                        <div className="w-full h-full flex justify-around mt-3 cursor-pointer">
                          <div className="text-sm mr-5 text-white">
                            APPLY NOW
                          </div>
                          <div className="text-sm text-white">KNOW MORE</div>
                        </div>
                      </div>

                      <div className="rounded-lg shadow-lg bg-red-800 h-72">
                        <img
                          src={c2}
                          className="w-60 h-44 rounded-lg"
                          alt="c1"
                        />

                        <p className="mt-4 text-xl ml-2 text-white">
                          CKYC Registry
                        </p>

                        <div className="w-56  ml-1 rounded-full h-0.5 mt-3  bg-white"></div>
                        <div className="w-full h-full flex justify-around mt-3 cursor-pointer">
                          <div className="text-sm mr-5 text-white">
                            KNOW MORE
                          </div>
                          <div className="text-sm text-white">WATCH VIDEO</div>
                        </div>
                      </div>

                      <div className="rounded-lg shadow-lg bg-red-800 h-72 ">
                        <img
                          src={c4}
                          className="w-60 h-44 rounded-lg"
                          alt="c1"
                        />

                        <p className="mt-4 text-xl ml-2 text-white">
                          Send Funds Abroad
                        </p>

                        <div className="w-56  ml-1 rounded-full h-0.5 mt-3  bg-white"></div>
                        <div className="w-full h-full flex justify-around mt-3 cursor-pointer">
                          <div className="text-sm mr-5 text-white">
                            Pay Abroad
                          </div>
                          <div className="text-sm text-white">KNOW MORE</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center ml-136 space-x-4 mb-3">
                  <div className="w-14 h-14 flex items-center justify-center bg-gray-300 rounded-full shadow-lg hover:bg-maroon-dark cursor-pointer">
                    <FaChevronLeft size={32} color="maroon" />
                  </div>

                  <div className="w-14 h-14 flex items-center justify-center bg-gray-300 rounded-full shadow-lg hover:bg-maroon-dark cursor-pointer">
                    <FaChevronRight size={32} color="maroon" />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="h-full w-16 mt-10 z-10 ">
            <FaMobile size={28} color="black" />
          </div>
          <div className="ml-10">
            <div className="text-black flex flex-col ml-2">
              <div className="mr-3 mt-2">Customer Care Hotline</div>
              <p className="ml-8 font-bold">1800 10 18</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" relative w-full h-24 z-10 ">
        <VScreen />
      </div>
      <div>
        <div
          className="fixed top-48 right-0 z-50 w-20 h-16 rounded-lg bg-yellow-600 cursor-pointer"
          onClick={handleSButton}
          style={{
            transform: openSButton ? "translateX(-480px)" : "translateX(0)",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <FaHandPointer size={24} color="white" className="ml-6 mt-2" />
          <p className="text-xs font-bold text-white ml-4">Select a Product</p>
        </div>

        <div
          className="fixed top-0 right-0 lg:w-120 w-80 h-full bg-white shadow-lg z-40 transform transition-transform duration-300"
          style={{
            transform: openSButton ? "translateX(0)" : "translateX(100%)",
          }}
        >
        <ProductSelectionBar openSButton={openSButton} setOpenSButton={setopenSButton} />
        </div>
      </div>

      <div className=" z-20 w-full lg:w-280 bg-transparent h-fit mt-52 md:mt-48 lg:mt-24 rounded-full">
        <div className="w-full h-full bg-black bg-opacity-0 backdrop-blur-lg flex justify-start overflow-x-auto space-x-4 py-2 mx-auto px-3 rounded-lg">
          {icons.map((item, index) => (
            <IconButton
              key={index}
              icon={item.icon}
              title={item.title}
              onClick={() => handleIconClick(index)}
              isActive={selectedIcon === index}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center lg:w-full w-fit lg:ml-5 mt-5">
        {renderComponent()}
      </div>
      <div className="w-full mt-10 ">
        <SlidingCards />
      </div>
      <div className="w-full mt-10 ">
        <ZeroCharges />
      </div>
      <div className="w-full mt-5">
        <FinancialCalculators />
      </div>
    </div>
  );
};

export default Main;
