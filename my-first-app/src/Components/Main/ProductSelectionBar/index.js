import React, { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaBicycle,
  FaBiking,
  FaBriefcase,
  FaCar,
  FaCreditCard,
  FaGlobe,
  FaHome,
  FaIdCard,
  FaLongArrowAltRight,
  FaPiggyBank,
  FaShoppingBag,
  FaTimes,
} from "react-icons/fa";
import { FaHandsHoldingCircle } from "react-icons/fa6";
import LAP from "../ProductSelectionBar/LAP.png";
import POCL from "../ProductSelectionBar/POCL.png";
import CDL from "../ProductSelectionBar/CDL.png";
import FS from "./FS.png";
import FT from "./FT.png";
import POTWL from "./POTWL.png";
import SV1 from "./SV1.png";

const ProductSelectionBar = ({ openSButton, setOpenSButton }) => {
  const closeSButton = () => {
    setOpenSButton(false);
  };

  const [showFirstIcon, setShowFirstIcon] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstIcon((prevState) => !prevState);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col w-full h-full overflow-y-auto">
      <div className="flex justify-around mt-10">
        <div className="lg:text-3xl text-xl font-bold text-black ">
          Apply for a product now
        </div>
        <FaTimes
          size={32}
          color="maroon"
          onClick={closeSButton}
          className="cursor-pointer mt-4"
        />
      </div>

      <div className="flex justify-around text-lg text-gray-500 w-72  lg:ml-7 ml-2">
        On a mission to build the world’s most customer-friendly bank
      </div>
      <div className="h-fit w-full flex flex-col justify-start  ">
        <div className="flex justify-start mt-10 ml-2">
          {showFirstIcon ? (
            <div className="flex justify-start">
              <FaPiggyBank size={32} color="maroon" className="ml-2" />

              <div className="text-lg  text-black ml-5 ">Savings Account</div>
              <FaLongArrowAltRight
                size={24}
                color="maroon"
                onClick={closeSButton}
                className="cursor-pointer lg:ml-52 ml-20 mt-1.5"
              />
            </div>
          ) : (
            <div className="flex justify-start">
              <img src={SV1} className="w-12 h-12 object-contain ml-1" />

              <div className="text-lg  text-black ml-5 mt-2 ">
                Savings Account
              </div>
              <FaLongArrowAltRight
                size={24}
                color="maroon"
                onClick={closeSButton}
                className="cursor-pointer lg:ml-52 ml-20 lg:mt-1.5 mt-2 "
              />
            </div>
          )}
        </div>
        <div className="flex justify-start mt-10 ml-2">
          <FaCreditCard size={32} color="maroon" className="ml-2" />
          <div className="text-lg  text-black ml-5 ">
            FIRST Select Credit Card
          </div>
          <FaLongArrowAltRight
            size={24}
            color="maroon"
            onClick={closeSButton}
            className="cursor-pointer lg:ml-40 ml-5 mt-1.5"
          />
        </div>
        <div className="flex justify-start mt-10 ml-2">
          <FaBriefcase size={32} color="maroon" className="ml-2" />
          <div className="flex flex-col lg:flex-row lg:justify-around items-center">
            <div className="text-lg text-black lg:ml-5 ml-3">
              Corporate Salary Account
            </div>
            <div className="flex justify-center items-center text-sm font-bold w-10 h-5 lg:ml-2 ml-3 mt-1.5 bg-yellow-500 text-red-500 rounded-md">
              NEW
            </div>
          </div>

          <FaLongArrowAltRight
            size={24}
            color="maroon"
            onClick={closeSButton}
            className="cursor-pointer lg:ml-24  ml-5  mt-1.5"
          />
        </div>
        <div className="flex justify-start mt-10 ml-2">
          <FaIdCard size={32} color="maroon" className="ml-2" />
            <div className="flex flex-col lg:flex-row lg:justify-around items-center">
          <div className="text-lg  text-black ml-5">FIRST Wow! Credit Card</div>
          <div
            className=" flex justify-center items-center
           text-sm font-bold w-10 h-5  mt-1.5 ml-2  bg-yellow-500 text-red-500 rounded-md"
          >
            NEW
          </div>
          </div>
          <FaLongArrowAltRight
            size={24}
            color="maroon"
            onClick={closeSButton}
            className="cursor-pointer  mt-1.5 lg:ml-28 ml-10"
          />
        </div>
        <div className="flex justify-start mt-10 ml-2">
          <FaHandsHoldingCircle size={32} color="maroon" className="ml-2" />
          <div className="text-lg  text-black ml-5 ">Personal Loan</div>
          <FaLongArrowAltRight
            size={24}
            color="maroon"
            onClick={closeSButton}
            className="cursor-pointer lg:ml-60 ml-24 mt-1.5"
          />
        </div>
        <div className="flex justify-start mt-10 ml-2">
          <FaHome size={32} color="maroon" className="ml-2" />
          <div className="text-lg text-black ml-5 ">Home Loan</div>

          <FaLongArrowAltRight
            size={24}
            color="maroon"
            onClick={closeSButton}
            className="cursor-pointer lg:ml-64 ml-28 mt-1.5"
          />
        </div>
        <div className="flex justify-start mt-10 ml-2">
          <FaBicycle size={32} color="maroon" className="ml-2" />
          <div className="text-lg  text-black ml-5 ">Two Wheeler Loan</div>
          <FaLongArrowAltRight
            size={24}
            color="maroon"
            onClick={closeSButton}
            className="cursor-pointer lg:ml-52 ml-16 mt-1.5"
          />
        </div>
        <div className="flex justify-start mt-10 ml-2">
          <img src={POTWL} className="w-12 h-12 object-contain ml-1" />
          <div className="text-lg  text-black ml-3 mt-1 ">
            Pre-Owned Two Wheeler Loan
          </div>
          <FaLongArrowAltRight
            size={24}
            color="maroon"
            onClick={closeSButton}
            className="cursor-pointer lg:ml-28 ml-5 mt-1.5"
          />
        </div>
        <div className="flex justify-start mt-10 ml-2">
          <FaGlobe size={32} color="maroon" className="ml-2" />
          <div className="text-lg text-black ml-7 ">NRI Savings Account</div>

          <FaLongArrowAltRight
            size={24}
            color="maroon"
            onClick={closeSButton}
            className="cursor-pointer lg:ml-48 ml-12 mt-1.5"
          />
        </div>
        <div className="flex justify-start mt-10 ml-2">
          <FaShoppingBag size={32} color="maroon" className="ml-2" />
          <div className="text-lg  text-black ml-7 ">Fixed Deposit</div>
          <FaLongArrowAltRight
            size={24}
            color="maroon"
            onClick={closeSButton}
            className="cursor-pointer lg:ml-60 ml-24 mt-1.5"
          />
        </div>
        <div className="flex justify-start mt-10 ml-2">
          <img src={LAP} className="w-12 h-12 object-contain ml-1" />
          <div className="text-lg  text-black ml-5 mt-1 ">
            Loan Against Property
          </div>
          <FaLongArrowAltRight
            size={24}
            color="maroon"
            onClick={closeSButton}
            className="cursor-pointer lg:ml-40 ml-4 mt-1.5"
          />
        </div>
        <div className="flex justify-start mt-10 ml-2">
          <FaCar size={32} color="maroon" className="ml-2" />
          <div className="text-lg text-black ml-8 ">New Car Loan</div>

          <FaLongArrowAltRight
            size={24}
            color="maroon"
            onClick={closeSButton}
            className="cursor-pointer lg:ml-60 ml-24 mt-1.5"
          />
        </div>
        <div className="flex justify-start mt-10 ml-2">
          <img src={POCL} className="w-12 h-12 object-contain ml-1" />
          <div className="text-lg text-black ml-5 ">Pre Owned Car Loan</div>

          <FaLongArrowAltRight
            size={24}
            color="maroon"
            onClick={closeSButton}
            className="cursor-pointer lg:ml-44 ml-8 mt-1.5"
          />
        </div>
        <div className="flex justify-start mt-10 ml-2">
          <img src={CDL} className="w-12 h-12 object-contain ml-1" />
          <div className="text-lg text-black ml-5 mt-1 ">
            Consumer Durable Loan
          </div>

          <FaLongArrowAltRight
            size={24}
            color="maroon"
            onClick={closeSButton}
            className="cursor-pointer lg:ml-36 ml-10 mt-1.5"
          />
        </div>
        <div className="flex justify-start mt-10 ml-2">
          <img src={FT} className="w-12 h-12 object-contain ml-1" />
          <div className="text-lg text-black ml-5  mt-2">Fast Tag</div>

          <FaLongArrowAltRight
            size={24}
            color="maroon"
            onClick={closeSButton}
            className="cursor-pointer lg:ml-64 ml-28 mt-1.5"
          />
        </div>
        <div className="flex justify-start mt-10 ml-2">
          <img src={FS} className="w-12 h-12 object-contain ml-1" />
          <div className="text-lg text-black ml-5 mt-1">Forex Services</div>

          <FaLongArrowAltRight
            size={24}
            color="maroon"
            onClick={closeSButton}
            className="cursor-pointer lg:ml-56 ml-20 mt-1.5"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductSelectionBar;
