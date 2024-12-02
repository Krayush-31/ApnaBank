import React, { useState } from "react";
import {
  FaChevronDown,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaChevronUp,
} from "react-icons/fa";
import data from "../MobileOptView/mData.json";
import styles from "../MobileOptView/MobileOptView.styles.ts";
import L3 from "../Images/L3.png";
import l6 from "../Images/l6.png";

const MobileOptView = () => {
  const [activeSubmenu, setActiveSubmenu] = useState(1);
  const [submenuOpen, setSubmenuOpen] = useState(null);
  const [submenuHeading, setSubmenuHeading] = useState("");

  const handleSubmenuToggle = (index, itemHeading) => {
    setSubmenuHeading(itemHeading);
    setSubmenuOpen(submenuOpen === index ? null : index);
  };

  return (
    <div className="relative">
      <div className={styles.header}>
        {[
          "Personal",
          "Credit Cards",
          "NRI",
          "Wealth",
          "Startup Solution",
          "Corporate",
          "MSME",
          "Gift City",
        ].map((item, index) => (
          <div
            key={index}
            className={styles.headerItems}
            onClick={() => setActiveSubmenu(index + 1)}
          >
            {item}
          </div>
        ))}
      </div>

      <div className={styles.menuContainer}>
        <div className="px-6 py-3 text-xl font-semibold text-red-800">
          {data.exploreHeadings[activeSubmenu - 1]}
        </div>
      </div>

      <div className="mt-0 w-full">
        {activeSubmenu && (
          <div className="submenu bg-gray-200 shadow-md rounded p-4 w-full">
            <ul>
              {data.submenus[activeSubmenu].map((item, index) => (
                <li
                  key={index}
                  className="p-2 border-b-2 border-gray-300 w-full"
                >
                  <div className="flex justify-between items-center w-full">
                    <div
                      onClick={() => handleSubmenuToggle(index, item.heading)}
                      className=" flex cursor-pointer w-full"
                    >
                      {item.name}
                    </div>
                    <div
                      onClick={() => handleSubmenuToggle(index, item.heading)}
                      className="cursor-pointer"
                    >
                      {submenuOpen === index ? (
                        <FaChevronUp size={18} color="maroon" />
                      ) : (
                        <FaChevronDown size={18} color="maroon" />
                      )}
                    </div>
                  </div>

                  <div
                    className={` flex overflow-hidden transition-all duration-300 ease-in-out `}
                    style={{
                      maxHeight:
                        submenuOpen === index
                          ? `${data.submenus[activeSubmenu].length * 40 + 20}px`
                          : "0px",
                    }}
                  >
                    {submenuOpen === index && (
                      <div className=" mt-2  w-full bg-white">
                        <div className="mt-0 w-full h-18 bg-white">
                          <div className="px-6 py-3 text-xl font-semibold text-red-800">
                            {submenuHeading || "Select a submenu"}
                          </div>
                        </div>
                        <div className="mt-2 pl-6 w-full  bg-orange-400">
                          {data.menu2[activeSubmenu]?.map(
                            (subitem, subindex) => (
                              <div
                                key={subindex}
                                className="w-full bg-orange-400 text-black"
                              >
                                {subitem}
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="w-full h-32 bg-gray-300 border-2 flex flex-col justify-between p-4">
        <div className="text-red-900 mb-2">What special about us</div>

        <div className="text-red-900">Customer Support</div>
      </div>
      <div className="w-full h-auto bg-gray-600 flex flex-col justify-between p-4">
        <div className="text-white border-b-2 border-white mb-2 justify-between flex">
          About Us
          <FaChevronDown size={18} color="white" />
        </div>
        <div className="text-white border-b-2 border-white mb-2 justify-between flex">
          Investors
          <FaChevronDown size={18} color="white" />
        </div>
        <div className="text-white border-b-2 border-white mb-2 justify-between flex">
          Carrerries
          <FaChevronDown size={18} color="white" />
        </div>
        <div className="text-white border-b-2 border-white mb-2 justify-between flex">
          ESG
          <FaChevronDown size={18} color="white" />
        </div>
      </div>
      <div className="w-full h-52 bg-red-800 flex flex-col justify-center items-center text-white">
        <div className=" mt-10 text-xl font-semibold">Follow Us On</div>

        <div className="flex space-x-6 mt-5">
          <FaFacebook size={24} />
          <FaTwitter size={24} />
          <FaLinkedin size={24} />
          <FaYoutube size={24} />
        </div>

        <div className="mt-5 text-xl font-semibold ">Download Now</div>

        <div className="flex space-x-6 justify-around">
          <img src={L3} alt="play" className="w-24 h-24 mb-4 " />
          <img src={l6} alt="play" className="w-24 h-24 mb-4 " />
        </div>
      </div>
    </div>
  );
};

export default MobileOptView;
