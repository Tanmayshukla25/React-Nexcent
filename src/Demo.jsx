import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const Demo = () => {
  return (
    <div className="bg-gray-100 py-20 flex flex-col items-center text-center">
      <h2 className="text-5xl font-bold text-gray-800 mb-8 leading-tight">
        Pellentesque suscipit <br /> fringilla libero eu.
      </h2>
      <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-md flex items-center gap-2 transition">
        Get a Demo <span className="text-lg"><FaArrowRightLong /></span>
      </button>
    </div>
  );
};

export default Demo;
