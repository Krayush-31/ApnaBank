import React, { useEffect, useState } from "react";
import {
  FaBicycle,
  FaCertificate,
  FaCreditCard,
  FaHandsHelping,
  FaPiggyBank,
  FaShoppingBag,
  FaWallet,
} from "react-icons/fa";
import {
  FaBagShopping,
  FaHandsHoldingChild,
  FaHandsHoldingCircle,
} from "react-icons/fa6";
import cc1 from "../CreditCards/cc1.jpg";
import cc2 from "../CreditCards/cc2.jpg";
import cc3 from "../CreditCards/cc3.jpg";
import cc4 from "../CreditCards/cc4.jpg";
import cc5 from "../CreditCards/cc5.jpg";
import cc6 from "../CreditCards/cc6.jpg";
import cc7 from "../CreditCards/cc7.jpg";

const CreditCards = () => {
  const texts = [
    "Zero Charges on all ATM Transactions",
    "No Fees on International Transfers",
    "Cashback on every purchase",
    "Exclusive Offers for New Users",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("fadeIn");

  useEffect(() => {
    const textChangeInterval = setInterval(() => {
      setAnimationClass("fadeOut");

      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setAnimationClass("fadeIn");
      }, 1000);
    }, 3000);
    return () => clearInterval(textChangeInterval);
  }, [texts.length]);

  return (
    <div className="w-full h-fit p-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1  lg:grid-cols-3 gap-4">
      <div className="bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 lg:h-44   lg:w-92  md:w-185 w-72 h-56 p-2 rounded-lg shadow-lg flex justify-between items-center">
          <div className="text-white">
            <p className="text-xl mb-5 ">Mayur Metal Credit Card</p>
            <div className=" lg:h-16 flex justify-evenly ">
              <p
                className={`text-xl text-white font-semibold ${animationClass} transition-all duration-1000 ease-in-out shadowPulse`}
              >
                {texts[currentTextIndex]}
              </p>

              <img
                src={cc1}
                alt="001"
                className="h-16 w-16 object-contain lg:hidden  md:hidden"
              />
            </div>
            <div className="flex items-start space-x-2 lg:mt-2 mt-2  md:w-60 md:mt-10">
              <div className="w-32 h-10  rounded-3xl border-2 border-white flex justify-center items-center  cursor-pointer hover:bg-white hover:text-black transition-all">
                APPLY NOW
              </div>

              <p className=" text-sm  mt-2 text-white cursor-pointer underline">
                KNOW MORE
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center mb-5 md:ml-88">
            <img
              src={cc1}
              className="h-24 w-24 object-contain hidden lg:flex md:flex"
            />
          </div>
        </div>
        <div className="bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 lg:h-44   lg:w-92  md:w-185 w-72 h-56 p-2 rounded-lg shadow-lg flex justify-between items-center">
          <div className="text-white">
            <p className="text-xl mb-5 ">Ashva Metal Credit Card</p>
            <div className=" lg:h-16 flex justify-evenly ">
              <p
                className={`text-xl text-white font-semibold ${animationClass} transition-all duration-1000 ease-in-out shadowPulse`}
              >
                {texts[currentTextIndex]}
              </p>

              <img
                src={cc2}
                className="h-16 w-16 object-contain lg:hidden  md:hidden"
              />
            </div>
            <div className="flex items-start space-x-2 lg:mt-2 mt-2  md:w-60 md:mt-10">
              <div className="w-32 h-10  rounded-3xl border-2 border-white flex justify-center items-center  cursor-pointer hover:bg-white hover:text-black transition-all">
                APPLY NOW
              </div>

              <p className=" text-sm  mt-2 text-white cursor-pointer underline">
                KNOW MORE
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center mb-5 md:ml-88">
            <img
              src={cc2}
              className="h-24 w-24 object-contain hidden lg:flex md:flex"
            />
          </div>
        </div>
        <div className="bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 lg:h-44   lg:w-92  md:w-185 w-72 h-56 p-2 rounded-lg shadow-lg flex justify-between items-center">
          <div className="text-white">
            <p className="text-xl mb-5 ">FIRST Earn</p>
            <div className=" lg:h-16 flex justify-evenly ">
              <p
                className={`text-xl text-white font-semibold ${animationClass} transition-all duration-1000 ease-in-out shadowPulse`}
              >
                {texts[currentTextIndex]}
              </p>

              <img
                src={cc3}
                className="h-16 w-16 object-contain lg:hidden  md:hidden"
              />
            </div>
            <div className="flex items-start space-x-2 lg:mt-2 mt-2  md:w-60 md:mt-10">
              <div className="w-32 h-10  rounded-3xl border-2 border-white flex justify-center items-center  cursor-pointer hover:bg-white hover:text-black transition-all">
                APPLY NOW
              </div>

              <p className=" text-sm  mt-2 text-white cursor-pointer underline">
                KNOW MORE
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center mb-5 md:ml-88">
            <img
              src={cc3}
              className="h-24 w-24 object-contain hidden lg:flex md:flex"
            />
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 lg:h-44   lg:w-92  md:w-185 w-72 h-56 p-2 rounded-lg shadow-lg flex justify-between items-center">
          <div className="text-white">
            <p className="text-xl mb-5 ">FIRST Power and Power+</p>
            <div className=" lg:h-16 flex justify-evenly ">
              <p
                className={`text-xl text-white font-semibold ${animationClass} transition-all duration-1000 ease-in-out shadowPulse`}
              >
                {texts[currentTextIndex]}
              </p>

              <img
                src={cc4}
                className="h-16 w-16 object-contain lg:hidden  md:hidden"
              />
            </div>
            <div className="flex items-start space-x-2 lg:mt-2 mt-2  md:w-60 md:mt-10">
              <div className="w-32 h-10  rounded-3xl border-2 border-white flex justify-center items-center  cursor-pointer hover:bg-white hover:text-black transition-all">
                APPLY NOW
              </div>

              <p className=" text-sm  mt-2 text-white cursor-pointer underline">
                KNOW MORE
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center mb-5 md:ml-88">
            <img
              src={cc4}
              className="h-24 w-24 object-contain hidden lg:flex md:flex"
            />
          </div>
        </div>
        <div className="bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 lg:h-44   lg:w-92  md:w-185 w-72 h-56 p-2 rounded-lg shadow-lg flex justify-between items-center">
          <div className="text-white">
            <p className="text-xl mb-5 ">FIRST SMWYP</p>
            <div className=" lg:h-16 flex justify-evenly ">
              <p
                className={`text-xl text-white font-semibold ${animationClass} transition-all duration-1000 ease-in-out shadowPulse`}
              >
                {texts[currentTextIndex]}
              </p>

              <img
                src={cc5}
                className="h-16 w-16 object-contain lg:hidden  md:hidden"
              />
            </div>
            <div className="flex items-start space-x-2 lg:mt-2 mt-2  md:w-60 md:mt-10">
              <div className="w-32 h-10  rounded-3xl border-2 border-white flex justify-center items-center  cursor-pointer hover:bg-white hover:text-black transition-all">
                APPLY NOW
              </div>

              <p className=" text-sm  mt-2 text-white cursor-pointer underline">
                KNOW MORE
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center mb-5 md:ml-88">
            <img
              src={cc5}
              className="h-24 w-24 object-contain hidden lg:flex md:flex"
            />
          </div>
        </div>
        <div className="bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 lg:h-44   lg:w-92  md:w-185 w-72 h-56 p-2 rounded-lg shadow-lg flex justify-between items-center">
          <div className="text-white">
            <p className="text-xl mb-5 ">Activate UPI</p>
            <div className=" lg:h-16 flex justify-evenly ">
              <p
                className={`text-xl text-white font-semibold ${animationClass} transition-all duration-1000 ease-in-out shadowPulse`}
              >
                {texts[currentTextIndex]}
              </p>

              <img
                src={cc6}
                className="h-16 w-16 object-contain lg:hidden  md:hidden"
              />
            </div>
            <div className="flex items-start space-x-2 lg:mt-2 mt-2  md:w-60 md:mt-10">
              <div className="w-32 h-10  rounded-3xl border-2 border-white flex justify-center items-center  cursor-pointer hover:bg-white hover:text-black transition-all">
                APPLY NOW
              </div>

              <p className=" text-sm  mt-2 text-white cursor-pointer underline">
                KNOW MORE
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center mb-5 md:ml-88">
            <img
              src={cc6}
              className="h-24 w-24 object-contain hidden lg:flex md:flex"
            />
          </div>
        </div>
        <div className="bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 lg:h-44   lg:w-92  md:w-185 w-72 h-56 p-2 rounded-lg shadow-lg flex justify-between items-center">
          <div className="text-white">
            <p className="text-xl mb-5 ">FIRST WOW</p>
            <div className=" lg:h-16 flex justify-evenly ">
              <p
                className={`text-xl text-white font-semibold ${animationClass} transition-all duration-1000 ease-in-out shadowPulse`}
              >
                {texts[currentTextIndex]}
              </p>

              <img
                src={cc7}
                className="h-16 w-16 object-contain lg:hidden  md:hidden"
              />
            </div>
            <div className="flex items-start space-x-2 lg:mt-2 mt-2  md:w-60 md:mt-10">
              <div className="w-32 h-10  rounded-3xl border-2 border-white flex justify-center items-center  cursor-pointer hover:bg-white hover:text-black transition-all">
                APPLY NOW
              </div>

              <p className=" text-sm  mt-2 text-white cursor-pointer underline">
                KNOW MORE
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center mb-5 md:ml-88">
            <img
              src={cc7}
              className="h-24 w-24 object-contain hidden lg:flex md:flex"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCards;
