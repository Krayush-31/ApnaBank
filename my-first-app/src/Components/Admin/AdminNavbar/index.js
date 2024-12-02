import React, { useState } from 'react';
import { FaUniversity } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <nav className="bg-indigo-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
     
        <div className="flex items-center space-x-2">
          <FaUniversity size={32} color="white" />
          <span className="text-white text-2xl font-bold font-serif">hello, advyaa123</span>
        </div>

        
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl"
          >
            {menuOpen ? <IoClose size={30} /> : 'Menu'}
          </button>
        </div>

      
        <div className="lg:flex space-x-4 hidden mr-96 ">
          <button className="bg-indigo-800 text-white border-white border-2 px-4 py-2 rounded-full hover:bg-white hover:text-black transition duration-300">
            My cards
          </button>
          <button className="bg-indigo-800 text-white border-white border-2 px-4 py-2 rounded-full hover:bg-white hover:text-black transition duration-300">
            Loan
          </button>
          <button className="bg-indigo-800 text-white border-white border-2 px-4 py-2 rounded-full hover:bg-white hover:text-black transition duration-300">
            FAQs
          </button>
        </div>
        <div className='lg:flex hidden mr-20'>
        <button className="bg-indigo-800 text-white border-white border-2 px-4 py-2 rounded-full hover:bg-white hover:text-black transition duration-300" onClick={() =>{navigate("/")}}>
            LogOut
          </button>

        </div>
      </div>

     
      <div className={`${menuOpen ? 'block' : 'hidden'} lg:hidden mt-4`}>
        {menuOpen && (
          <div className="space-y-2">
            <select
              value={selectedOption}
              onChange={handleSelectChange}
              className="bg-indigo-800 text-white border-white border-2 rounded-full w-full px-4 py-2"
            >
              <option value="">Select an Option</option> 
              <option value="my-cards">My Cards</option>
              <option value="loan">Loan</option>
              <option value="faqs">FAQS</option>
              <option value="LogOut">LogOut</option>
            </select>
          </div>
        )}
      </div>
    </nav>
  );
};

export default AdminNavbar;
