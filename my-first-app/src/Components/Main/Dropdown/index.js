import React, { useState } from "react";
import PropTypes from "prop-types";

const Dropdown = ({ buttonTitle, menuItems }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

 
  const handleToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsDropdownOpen(true)} 
      onMouseLeave={() => setIsDropdownOpen(false)} 
    >
      <button
        className="flex items-center bg-transparent py-2 px-4 cursor-pointer text-gray-800 hover:bg-gray-100 "
        onClick={handleToggle} 
      >
        {buttonTitle}
      </button>

    
      {isDropdownOpen && (
        <div
          className="absolute left-0 w-80  bg-white border shadow-lg z-10"
        >
          <ul className="space-y-2 p-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="block text-gray-800 hover:bg-gray-100 py-1 px-2 rounded border-b-2  hover:text-red-800"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Dropdown;