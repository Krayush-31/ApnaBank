import React, { useState, useEffect } from "react";
import cr1 from "../Carousel/cr1.jpg";
import c2 from "../Carousel/c2.png";
import c3 from "../Carousel/c3.png";
import c4 from "../Carousel/c4.png";
import c5 from "../Carousel/c5.png";

const Carousel = () => {
  const images = [
    { src: cr1, link: "https://www.idfcfirstbank.com/" },
    { src: c2, link: "https://www.idfcfirstbank.com/" },
    { src: c3, link: "https://www.idfcfirstbank.com/" },
    { src: c4, link: "https://www.idfcfirstbank.com/" },
    { src: c5, link: "https://www.idfcfirstbank.com/" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const interval = setInterval(goToNext, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <a href={images[currentIndex].link} target="_blank" rel="noopener noreferrer">
          <img
            src={images[currentIndex].src}
            alt={`Carousel Slide ${currentIndex + 1}`}
            className="w-full h-max object-cover"
          />
        </a>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
