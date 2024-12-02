import React, { useState } from "react";
import { FaBars,FaTimes,FaHeadphones,FaFemale, FaPhoneSquare} from "react-icons/fa";
import styles from "../Main/Header/header.styles.ts";
import data from '../Main/Header/Data.json';
import L1 from '../Main/Images/L1.png';

const Dialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenHeadphon, setIsOpenHeadphon] = useState(false);

  const toggleView = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => setIsOpenHeadphon(!isOpenHeadphon);

  return (
    <div className=" fixed top-0  h-2 w-20 bg-gray-100  justify-center items-center flex lg:hidden z-50" >
      <button
        onClick={toggleView}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none"
      >
      <FaBars size={24} color="black" />
      </button>

      <div
        className={`fixed top-0 z-50 left-0 right-0 bg-white shadow-xl h-full transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full "
        }`}
      >
        
        <div className="p-4">

        <div className={styles.logoContainer}>
          <img src={L1} alt={data.logoAltText} className={styles.logo} />
        

          <div
          className="w-36 border border-black  rounded-full relative flex justify-around  cursor-pointer h-10 ml-3"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
         
          <p className="text-sm text-black mt-2">{data.headphoneText}</p>

          {isOpenHeadphon && (
            <div className={styles.headphonedropDown}>
              <ul className={styles.headphonedropDownul}>
                <li className={styles.hdl1}>
                  <div className={styles.hdl1outer}>
                    <FaFemale size={32} color="maroon" />
                    <div className={styles.hdl1inner}>
                      <h2 className={styles.hdl1innertext}>
                        {data.headphoneText2}
                      </h2>
                      <p className={styles.hdl1innertext2}>
                        {data.headphoneText3}
                      </p>
                    </div>
                  </div>
                </li>

                <li className={styles.hdl2}>
                  <div className={styles.hdl2outer}>
                    <FaHeadphones size={32} color="maroon" />
                    <div className={styles.hdl2inner}>
                      <h2 className={styles.hdl2innertext}>
                        {data.headphoneText4}
                      </h2>
                      <p className={styles.hdl1innertext2}>
                        {data.headphoneText5}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>

        <button
       
          className="px-1 py-1 text-white rounded-lg focus:outline-none ml-5"
        >
            <FaPhoneSquare size={32} color="black" />
        </button>

          <button
          onClick={toggleView}
          className="px-1 py-1 text-white rounded-lg focus:outline-none ml-2"
        >
            <FaTimes size={32} color="maroon" />
        </button>
        </div>
         
    </div>
    </div>
    </div>
  );
};

export default Dialog;
