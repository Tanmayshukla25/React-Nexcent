import React, { useState, useEffect } from "react";
import IntroImg from "./Images/InteroImages.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
const IntroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="relative overflow-hidden">
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
     
        <div className="w-full flex-shrink-0 bg-gray-100 py-20 px-10">
          <div className="flex items-center justify-between max-w-7xl mx-auto flex-wrap md:flex-nowrap gap-10">
            <div className="max-w-xl">
              <h1 className="text-5xl font-bold text-gray-800 leading-tight">
                Lessons and insights <br />
                <span className="text-green-500">from 8 years</span>
              </h1>
              <p className="text-gray-500 mt-6 text-sm">
                Where to grow your business as a photographer: site or social media?
              </p>
              <button className="mt-6 px-6 py-2 bg-green-500 text-white rounded-md font-medium hover:bg-green-600 transition">
                Register
              </button>
            </div>
            <div className="w-full md:w-[30%]">
              <img 
                src={IntroImg}
                alt="Photography" 
                className="w-full rounded-lg" 
              />
            </div>
          </div>
        </div>

       
      <div className="w-full flex-shrink-0 bg-gray-100 py-20 px-10">
          <div className="flex items-center justify-between max-w-7xl mx-auto flex-wrap md:flex-nowrap gap-10">
            <div className="max-w-xl">
              <h1 className="text-5xl font-bold text-gray-800 leading-tight">
                Lessons and insights <br />
                <span className="text-green-500">from 8 years</span>
              </h1>
              <p className="text-gray-500 mt-6 text-sm">
                Where to grow your business as a photographer: site or social media?
              </p>
              <button className="mt-6 px-6 py-2 bg-green-500 text-white rounded-md font-medium hover:bg-green-600 transition">
                Register
              </button>
            </div>
            <div className="w-full md:w-[30%]">
              <img 
                src={IntroImg}
                alt="Photography" 
                className="w-full rounded-lg" 
              />
            </div>
          </div>
        </div>

  
       <div className="w-full flex-shrink-0 bg-gray-100 py-20 px-10">
          <div className="flex items-center justify-between max-w-7xl mx-auto flex-wrap md:flex-nowrap gap-10">
            <div className="max-w-xl">
              <h1 className="text-5xl font-bold text-gray-800 leading-tight">
                Lessons and insights <br />
                <span className="text-green-500">from 8 years</span>
              </h1>
              <p className="text-gray-500 mt-6 text-sm">
                Where to grow your business as a photographer: site or social media?
              </p>
              <button className="mt-6 px-6 py-2 bg-green-500 text-white rounded-md font-medium hover:bg-green-600 transition">
                Register
              </button>
            </div>
            <div className="w-full md:w-[30%]">
              <img 
                src={IntroImg}
                alt="Photography" 
                className="w-full rounded-lg" 
              />
            </div>
          </div>
        </div>
      </div>

   
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full shadow-lg hover:bg-gray-50 text-2xl"
      >
 <FaArrowLeftLong />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full shadow-lg hover:bg-gray-50 text-2xl"
      >
      <FaArrowRightLong />
      </button>

    
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-green-500' : 'bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default IntroCarousel;