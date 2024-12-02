import React, { useEffect, useState } from "react";
import { FaBicycle, FaCar, FaCertificate, FaCoins, FaCreditCard, FaHandsHelping, FaHome, FaIdCard, FaPiggyBank, FaShoppingBag, FaUserGraduate, FaWallet } from "react-icons/fa";
import { FaBagShopping, FaHandsHoldingChild, FaHandsHoldingCircle } from "react-icons/fa6";

const Loans = () => {
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
        
        <div className="bg-gradient-to-r from-custom-blue1 via-custom-blue2 to-custom-blue3 lg:h-44   lg:w-92  md:w-185 w-72 h-56 p-2 rounded-lg shadow-lg flex justify-between items-center">
        <div className="text-white">
            <p className="text-xl mb-5 ">Personal Loans</p>
          <div className=" lg:h-16 flex justify-evenly ">
            <p
              className={`text-xl text-white font-semibold ${animationClass} transition-all duration-1000 ease-in-out shadowPulse`}
            >
              {texts[currentTextIndex]}
            </p>

            <FaPiggyBank size={90} color="white" className="lg:hidden  md:hidden" />
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
          <FaPiggyBank size={90} color="white" className="hidden lg:flex md:flex " />
          </div>
        </div>
        <div className="bg-gradient-to-r from-custom-blue1 via-custom-blue2 to-custom-blue3 lg:h-44   lg:w-92  md:w-185 w-72 h-56 p-2 rounded-lg shadow-lg flex justify-between items-center">
        <div className="text-white">
            <p className="text-xl mb-5 ">Consumer Durable Laon</p>
          <div className=" lg:h-16 flex justify-evenly ">
            <p
              className={`text-xl text-white font-semibold ${animationClass} transition-all duration-1000 ease-in-out shadowPulse`}
            >
              {texts[currentTextIndex]}
            </p>

            <FaHandsHoldingCircle size={90} color="white" className="lg:hidden  md:hidden" />
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
          <FaHandsHoldingCircle size={90} color="white" className="hidden lg:flex md:flex " />
          </div>
        </div>
        <div className="bg-gradient-to-r from-custom-blue1 via-custom-blue2 to-custom-blue3 lg:h-44   lg:w-92  md:w-185 w-72 h-56 p-2 rounded-lg shadow-lg flex justify-between items-center">
        <div className="text-white">
            <p className="text-xl mb-5 ">Home Loans</p>
          <div className=" lg:h-16 flex justify-evenly ">
            <p
              className={`text-xl text-white font-semibold ${animationClass} transition-all duration-1000 ease-in-out shadowPulse`}
            >
              {texts[currentTextIndex]}
            </p>

            <FaHome size={90} color="white" className="lg:hidden  md:hidden" />
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
          <FaHome size={90} color="white" className="hidden lg:flex md:flex " />
          </div>
        </div>
        <div className="bg-gradient-to-r from-custom-blue1 via-custom-blue2 to-custom-blue3 lg:h-44   lg:w-92  md:w-185 w-72 h-56 p-2 rounded-lg shadow-lg flex justify-between items-center">
        <div className="text-white">
            <p className="text-xl mb-5 ">Business Loans</p>
          <div className=" lg:h-16 flex justify-evenly ">
            <p
              className={`text-xl text-white font-semibold ${animationClass} transition-all duration-1000 ease-in-out shadowPulse`}
            >
              {texts[currentTextIndex]}
            </p>

            <FaShoppingBag size={90} color="white" className="lg:hidden  md:hidden" />
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
          <FaShoppingBag size={90} color="white" className="hidden lg:flex md:flex " />
          </div>
        </div>
        <div className="bg-gradient-to-r from-custom-blue1 via-custom-blue2 to-custom-blue3 lg:h-44   lg:w-92  md:w-185 w-72 h-56 p-2 rounded-lg shadow-lg flex justify-between items-center">
        <div className="text-white">
            <p className="text-xl mb-5 ">Professional Loans</p>
          <div className=" lg:h-16 flex justify-evenly ">
            <p
              className={`text-xl text-white font-semibold ${animationClass} transition-all duration-1000 ease-in-out shadowPulse`}
            >
              {texts[currentTextIndex]}
            </p>

            <FaCoins size={90} color="white" className="lg:hidden  md:hidden" />
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
          <FaCoins size={90} color="white" className="hidden lg:flex md:flex " />
          </div>
        </div>
        <div className="bg-gradient-to-r from-custom-blue1 via-custom-blue2 to-custom-blue3 lg:h-44   lg:w-92  md:w-185 w-72 h-56 p-2 rounded-lg shadow-lg flex justify-between items-center">
        <div className="text-white">
            <p className="text-xl mb-5 ">Education Loans</p>
          <div className=" lg:h-16 flex justify-evenly ">
            <p
              className={`text-xl text-white font-semibold ${animationClass} transition-all duration-1000 ease-in-out shadowPulse`}
            >
              {texts[currentTextIndex]}
            </p>

            <FaUserGraduate size={90} color="white" className="lg:hidden  md:hidden" />
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
          <FaUserGraduate size={90} color="white" className="hidden lg:flex md:flex " />
          </div>
        </div>
        <div className="bg-gradient-to-r from-custom-blue1 via-custom-blue2 to-custom-blue3 lg:h-44   lg:w-92  md:w-185 w-72 h-56 p-2 rounded-lg shadow-lg flex justify-between items-center">
        <div className="text-white">
            <p className="text-xl mb-5 ">New Car Loans</p>
          <div className=" lg:h-16 flex justify-evenly ">
            <p
              className={`text-xl text-white font-semibold ${animationClass} transition-all duration-1000 ease-in-out shadowPulse`}
            >
              {texts[currentTextIndex]}
            </p>

            <FaCar size={90} color="white" className="lg:hidden  md:hidden" />
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
          <FaCar size={90} color="white" className="hidden lg:flex md:flex " />
          </div>
        </div>
        <div className="bg-gradient-to-r from-custom-blue1 via-custom-blue2 to-custom-blue3 lg:h-44   lg:w-92  md:w-185 w-72 h-56 p-2 rounded-lg shadow-lg flex justify-between items-center">
        <div className="text-white">
            <p className="text-xl mb-5 ">Pre Owned Car Loans</p>
          <div className=" lg:h-16 flex justify-evenly ">
            <p
              className={`text-xl text-white font-semibold ${animationClass} transition-all duration-1000 ease-in-out shadowPulse`}
            >
              {texts[currentTextIndex]}
            </p>

            <FaCar size={90} color="white" className="lg:hidden  md:hidden" />
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
          <FaCar size={90} color="white" className="hidden lg:flex md:flex " />
          </div>
        </div>
        <div className="bg-gradient-to-r from-custom-blue1 via-custom-blue2 to-custom-blue3 lg:h-44   lg:w-92  md:w-185 w-72 h-56 p-2 rounded-lg shadow-lg flex justify-between items-center">
        <div className="text-white">
            <p className="text-xl mb-5 ">2-Wheeler Loans</p>
          <div className=" lg:h-16 flex justify-evenly ">
            <p
              className={`text-xl text-white font-semibold ${animationClass} transition-all duration-1000 ease-in-out shadowPulse`}
            >
              {texts[currentTextIndex]}
            </p>

            <FaBicycle size={90} color="white" className="lg:hidden  md:hidden" />
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
          <FaBicycle size={90} color="white" className="hidden lg:flex md:flex " />
          </div>
        </div>
        <div className="bg-gradient-to-r from-custom-blue1 via-custom-blue2 to-custom-blue3 lg:h-44   lg:w-92  md:w-185 w-72 h-56 p-2 rounded-lg shadow-lg flex justify-between items-center">
        <div className="text-white">
            <p className="text-xl mb-5 ">Laon Against Property</p>
          <div className=" lg:h-16 flex justify-evenly ">
            <p
              className={`text-xl text-white font-semibold ${animationClass} transition-all duration-1000 ease-in-out shadowPulse`}
            >
              {texts[currentTextIndex]}
            </p>

            <FaIdCard size={90} color="white" className="lg:hidden  md:hidden" />
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
          <FaIdCard size={90} color="white" className="hidden lg:flex md:flex " />
          </div>
        </div>
       
       

       
       
      </div>
    </div>
  );
};

export default Loans;
