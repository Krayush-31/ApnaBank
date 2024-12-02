import React, { useState, useRef, useEffect } from "react";
import I1 from "./I1.png";
import o2 from "./o2.png";
import o3 from "./o3.png";
import V1 from "../VScreen/V1.mp4";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const VScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef(null);
  const touchStartX = useRef(0);
  const intervalRef = useRef(null);
  const videoEnded = useRef(false);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    const touchEndX = e.touches[0].clientX;
    const swipeDistance = touchStartX.current - touchEndX;
    if (Math.abs(swipeDistance) > 50) {
      if (swipeDistance > 0) {
        nextSlide(); 
      } else {
        prevSlide(); 
      }
      touchStartX.current = 0; 
    }
  };

  const handleTouchEnd = () => {
    touchStartX.current = 0;
  };

  const slides = [
    { type: "image", src: I1, alt: "Image 1" },
    { type: "image", src: o2, alt: "Image 2" },
    { type: "video", src: V1, alt: "Video" },
    { type: "image", src: o3, alt: "Image 3" },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

 
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000); 

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

 
  useEffect(() => {
    if (videoRef.current) {
      if (activeIndex === 2) { 
        videoRef.current.play();
        videoEnded.current = false; 
        videoRef.current.onended = () => {
          videoEnded.current = true;
        };
      } else {
        videoRef.current.pause();
        videoEnded.current = false; 
      }
    }
  }, [activeIndex]);
  return (
    <div className="relative w-full mt-24 md:mt-24 lg:mt-0">
      <div className="w-full relative h-64 md:h-80 lg:h-[400px]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}>
        {slides[activeIndex].type === "image" ? (
          <img
            src={slides[activeIndex].src}
            alt={slides[activeIndex].alt}
            className="w-full h-64 object-fill lg:object-cover md:object-fill"
          />
        ) : (
          <video ref={videoRef} width="100%" height="100%" muted   autoPlay loop preload="none" className="lg:object-cover object-fill md:object-fill h-64"> 
            <source src={slides[activeIndex].src} type="video/mp4"  />
            
          </video>
        )}

        {/* <div className=" top-64 z-50 right-24 lg:flex justify-center ml-136 space-x-4 hidden ">
          <div className="w-7 h-7 flex items-center justify-center bg-gray-300 rounded-full shadow-lg hover:bg-maroon-dark cursor-pointer" onClick={prevSlide}>
            <FaChevronLeft size={16} color="maroon"  />
          </div>

          <div className="w-7 h-7 flex items-center justify-center bg-gray-300 rounded-full shadow-lg hover:bg-maroon-dark cursor-pointer" onClick={nextSlide}>
            <FaChevronRight size={16} color="maroon" />
          </div>
        </div>*/}
      </div> 

     
    </div>
  );
};

export default VScreen;
