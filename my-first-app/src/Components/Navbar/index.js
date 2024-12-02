// src/Navbar.js

import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
const amount = useSelector(state => state.amount)
    return (
        <nav className="bg-blue-600 p-4 shadow-md w-80 md:w-full">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <ul className="flex space-x-8">
                    <li>
                        <a href="#balance" className="text-white hover:bg-gray-900 p-2 rounded ml-9 md:ml-24">
                            Balance
                        </a>
                    </li>
                    <li>
                        <a href="#last-transaction" className="text-white hover:bg-gray-900 p-2 rounded">
                            Last Transaction
                        </a>
                    </li>
                </ul>
                <button className="bg-blue-500  text-white py-2 px-4 rounded hidden md:block disabled:true">
                    ACCOUNT BALANCE : ${amount}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
