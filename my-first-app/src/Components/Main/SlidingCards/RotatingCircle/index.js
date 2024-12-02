import React from "react";

const RotatingCircle = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* Outer circle with rotating animation */}
      <div className="w-20 h-20 border-2 border-red-900 rounded-full  flex justify-center items-center relative">
        
        {/* Inner circle with text, fixed in center */}
        <div className="w-14 h-14 border-2 border-white border-t-transparent animate-spin rounded-full flex justify-center items-center absolute">
          <div className="transform-none fixed"> 
            &#x20B9;5
          </div>
        </div>
      </div>
    </div>
  );
};

export default RotatingCircle;
