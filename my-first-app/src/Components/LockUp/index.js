// src/CodeEntry.js
import React, { useState } from 'react';
import Navbar from '../Navbar';
import Shop from '../Shop';

const CodeEntry = () => {
  const [inputPassword, setInputPassword] = useState('');
  const correctPassword = '1234'; 
  const [accessGranted, setAccessGranted] = useState(false);

  const handlePasswordChange = (e) => {
    setInputPassword(e.target.value);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (inputPassword === correctPassword) {
      setAccessGranted(true);
    } else {
      alert('Incorrect password, please try again.');
      setInputPassword('');
    }
  };

  const handleButtonClick = (num) => {
    if (inputPassword.length < 4) {
      setInputPassword((prev) => prev + num);
    }
  };

  const handleClear = () => {
    setInputPassword('');
  };

  if (accessGranted) {

    return (
   
        <div className="flex flex-col h-screen w-full bg-blue-100">
        <Navbar />
        <div className="flex-grow flex items-center justify-center mr-80 md:mr-0">
          <Shop />
        </div>
      </div>
      
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-gray-100 ">
        <p className='  text-xl md:text-5xl font-bold mb-20  text-black'>WELCOME TO THE SAFE</p>
      <h1 className="text-3xl mb-4">Enter The Code</h1>
      <form onSubmit={handlePasswordSubmit} className="mb-10">
        <input
          type="password"
          value={inputPassword}
          onChange={handlePasswordChange}
          className='w-full border rounded bg-transparent border-gray-400 p-3'
          maxLength="4"
          placeholder="Enter 4-digit password"
        />
        
      </form>
      <div className="flex flex-col items-center">
 
  <div className="grid grid-cols-3 gap-4">
    {[...Array(9).keys()].map((num) => (
      <button
        key={num + 1}
        className="bg-blue-500 text-white w-16 font-bold py-2 rounded hover:bg-blue-800"
        onClick={() => handleButtonClick(num + 1)}
      >
        {num + 1}
      </button>
    ))}
  </div>
  <div className="mt-4">
    <button
      className="bg-blue-500 text-white w-16 font-bold py-2 rounded hover:bg-blue-800"
      onClick={() => handleButtonClick(0)}
    >
      0
    </button>
  </div>
</div>

      <button
          type="submit"
          onClick={handlePasswordSubmit}
          className="bg-blue-500 text-white w-24  mt-5 font-bold py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      <button
          className="bg-red-600 text-white  w-16 mt-5 font-bold py-2 rounded hover:bg-red-800"
          
          onClick={handleClear}
        >
          Clear
        </button>
       
    </div>
  );
};

export default CodeEntry;
