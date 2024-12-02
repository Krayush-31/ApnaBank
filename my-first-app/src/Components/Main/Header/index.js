import React, { useState } from "react";
import L1 from "../Images/L1.png";
import data from "./Data.json";
import Dropdown from "../Dropdown";
import styles from "../Header/header.styles.ts";
import { useNavigate } from "react-router-dom";
import {FaSearch,
  FaStar,
  FaHeadphones,FaSignOutAlt,FaFemale,FaChevronRight,FaPhoneSquare,FaBars,FaTimes,
} from "react-icons/fa";

import MobileOptView from "../MobileOptView";

const Header = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenlogin, setIsOpenlogin] = useState(false);

  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const toggleView = () => {
    setIsOpenDialog(!isOpenDialog);
  };
  const toggleDropdown = () => setIsOpen(!isOpen);
  

  return (
    <nav className={styles.navbar}>
      <div className={styles.floor1}>
        <div className={styles.logoContainer}>
          <img src={L1} alt={data.logoAltText} className={styles.logo} />
          <span className={styles.logoText}>{data.heading}</span>

          <div
            className="w-44 border border-black md:border-red-800  rounded-full relative flex lg:hidden justify-around  cursor-pointer h-10  ml-3 md:ml-60"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <p className="text-sm text-black md:text-red-800 mt-2">
              {data.headphoneText}
            </p>

            {isOpen && (
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

          <button className="px-1 py-1 text-white rounded-lg focus:outline-none ml-5 lg:hidden">
            <FaPhoneSquare size={32} color="black" />
          </button>

          <div className="relative h-2 w-20 bg-gray-100  justify-center items-center flex lg:hidden">
            <button onClick={toggleView} className=" mr-5">
              <FaBars size={24} color="maroon" />
            </button>

            <div
              className={`fixed top-0 left-0 right-0 bg-white shadow-xl h-full transform transition-transform duration-500 ease-in-out ${
                isOpenDialog ? "translate-y-0" : "-translate-y-full z-50"
              }`}
            >
              <div className="p-4">
                <div className={styles.logoContainer}>
                  <img
                    src={L1}
                    alt={data.logoAltText}
                    className={styles.logo}
                  />

                  <button
                    onClick={toggleView}
                    className="px-1 py-1 text-white rounded-lg focus:outline-none ml-52"
                  >
                    <FaTimes size={32} color="maroon" />
                  </button>
                </div>
          </div>
      
          <MobileOptView />
            </div>
          </div>
        </div>

        <div className={styles.dropdownContainer}>
          
          <Dropdown buttonTitle={data.buttonTitle}
           menuItems={data.menuItems} />
          <Dropdown
            buttonTitle={data.buttonTitle2}
            menuItems={data.buttonItems1}
          />
          <Dropdown
            buttonTitle={data.buttonTitle3}
            menuItems={data.buttonItems2}
          />
          <Dropdown
            buttonTitle={data.buttonTitle4}
            menuItems={data.buttonItems3}
          />
          <Dropdown
            buttonTitle={data.buttonTitle5}
            menuItems={data.buttonItems4}
          />
        </div>
      </div>

      <div className={styles.floor2}>
        <div className={styles.searchBar}>
          <FaSearch size={20} color="black" className={styles.search} />
          <input
            type="text"
            placeholder="Search..."
            className={styles.searchInput}
          />
        </div>
        <div
          className={styles.star}
         
        >
          <FaStar size={18} color="gray" className={styles.starIcon} />
          <p className={styles.starText}>{data.starText}</p>
        </div>
        <div
          className={styles.headphone}
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <FaHeadphones
            size={18}
            color="gray"
            className={styles.headphpneIcon}
          />
          <p className={styles.headphoneText}>{data.headphoneText}</p>

          {isOpen && (
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
        <div
          className={styles.login}
          onMouseEnter={() => setIsOpenlogin(true)}
          onMouseLeave={() => setIsOpenlogin(false)}
        >
          <div className="flex items-center cursor-pointer">
            <FaSignOutAlt
              size={18}
              color="white"
              className={styles.loginIcon}
            />
            <button className={styles.loginText}>{data.loginText}</button>
          </div>

          {isOpenlogin && (
            <div className={styles.logindropDown}>
              <div className={styles.ldouter}>
                <h2 className={styles.ldoutertext}>{data.loginText2}</h2>
                <h3 className={styles.ldoutertext2}>{data.loginText3}</h3>
                <div className={styles.ldinner}>
                  <FaSignOutAlt
                    size={18}
                    color="white"
                    className={styles.ldinnerIcon}
                  />
                  <button className={styles.ldinnerIconbutton}>
                    {data.loginText4}
                  </button>
                </div>
              </div>
              <ul className={styles.ldul}>
                <li className={styles.ldl1}>
                  <div className={styles.ldl1outer}>
                    <div className={styles.ldl1inner}>
                      <h2 className={styles.ldl1innertext}>
                        {data.loginText5}
                      </h2>
                      <p className={styles.ldl1innertext2}>{data.loginText6}</p>
                    </div>
                    <FaChevronRight
                      size={32}
                      color="maroon"
                      className={styles.ldl1Icon}
                    />
                  </div>
                </li>
                <li className={styles.ldl2}>
                  <div className={styles.ldl2outer}>
                    <div className={styles.ldl2inner}>
                      <h2 className={styles.ldl2innertext}>
                        {data.loginText7}
                      </h2>
                      <p className={styles.ldl2innertext2}>{data.loginText8}</p>
                    </div>
                    <FaChevronRight
                      size={32}
                      color="maroon"
                      className={styles.ldl2Icon}
                    />
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>

        
      </div>

      
    </nav>
  );
};

export default Header;
