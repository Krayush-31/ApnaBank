import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaChevronRight } from "react-icons/fa";

const Dropdown2 = ({ buttonTitle, menuItems, heading, heading2 }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const chunkArray = (arr, chunkSize) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };

  const menuChunks = chunkArray(menuItems, 3);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsDropdownOpen(true)} // Open on hover
      onMouseLeave={() => setIsDropdownOpen(false)} // Close on hover out
    >
      <button
        className="flex items-center bg-transparent py-2 px-4 w-fit cursor-pointer text-gray-800 hover:bg-gray-100"
        onClick={handleToggle} // Toggle on click as well
      >
        {buttonTitle}
      </button>

      {isDropdownOpen && (
        <div
          className="absolute left-0 w-fit bg-white border shadow-lg z-40 max-h-80 overflow-y-auto mt-3 rounded-lg"
          onMouseEnter={() => setIsDropdownOpen(true)} 
          onMouseLeave={() => setIsDropdownOpen(false)} 
        >
          <div className="p-2 text-black font-bold flex justify-between items-center ml-5">
            <div className="text-gray-400">{heading}</div>
            <div className="flex justify-between mr-5">
              <div className="text-red-800">{heading2}</div>
              <FaChevronRight size={12} color="maroon" className="mt-2 ml-2" />
            </div>
          </div>

          <div className="flex flex-col overflow-x-auto overflow-scroll w-fit">
            {menuChunks.map((chunk, rowIndex) => (
              <div
                key={rowIndex}
                className={`flex flex-row justify-start ${
                  rowIndex === menuChunks.length - 1 ? "mb-5" : ""
                }`}
              >
                {chunk.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-start bg-gradient-to-t from-pink-200 to-yellow-50 mt-3 rounded-md w-60 ml-5 h-16 mr-5 items-center"
                  >
                    <button
                      onClick={() => (window.location.href = item.href)}
                      className="flex justify-between items-center w-full px-3 py-2 hover:text-red-800"
                    >
                      <span className="flex flex-col text-left font-bold">{item.text}</span>
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white">
                        <FaChevronRight size={14} color="red" />
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

Dropdown2.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  heading2: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Dropdown2;
