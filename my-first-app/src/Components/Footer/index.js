// Footer.js
import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <footer className="bg-blue-500 text-white text-center p-4 mt-auto w-full">
    
      <p>{dateTime.toLocaleString()} APNA BANK OF INDIA,GURGAON </p> 

    </footer>
  );
};  

export default Footer;
