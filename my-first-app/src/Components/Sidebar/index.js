import React, { useState } from 'react';
import { FaHome, FaUserAlt, FaCog, FaUser, FaBars, FaWallet,FaBullhorn} from 'react-icons/fa';
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeOption, setActiveOption] = useState(null); 
  const options = [
    { label: 'Main', icon: <FaHome size={24} />, path: "./main" },
    { label: 'Notification', icon: <FaBullhorn size={24} />, path: "./notification" },
    { label: 'Profile', icon: <FaUser size={24} />, path: "./profile" },
    { label: 'Wallet', icon: <FaWallet size={24} />, path: "./wallet" },
    { label: 'Setting', icon: <FaCog size={24} />, path: "./setting" },
    { label: 'LogOut', icon: <FaUserAlt size={24} />, path: "/login" },
    
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (path) => {
    setActiveOption(path); 
  };

  return (
    <div className="flex">
      <div className={`fixed inset-y-0 left-0 bg-blue-600 text-white w-20 md:w-60 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:block z-50`}>
        <div className="p-4">
          <h2 className="text-xl font-bold hidden md:block">Menu</h2>
          <ul>
            {options.map((option) => (
              <li key={option.label}>
                <Link 
                  to={option.path} 
                  className={`flex items-center p-4 md:hover:bg-gray-900 cursor-pointer mt-8 ${activeOption === option.path ? 'bg-gray-800' : ''}`} 
                  onClick={() => handleOptionClick(option.path)} 
                >
                  {option.icon}
                  <span className="ml-2 hidden md:block">{option.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        className="fixed top-4 left-4 md:hidden p-2 bg-blue-600 text-white rounded z-50"
        onClick={toggleSidebar}
      >
        {isOpen ? <IoCloseSharp size={24} /> : <FaBars size={18} />}
      </button>
    </div>
  );
};

export default Sidebar;
