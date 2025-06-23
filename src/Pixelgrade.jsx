import React from "react";


const Pixelgrade = ({heading,para ,btn,img}) => {
  return (
    <>
      <div className=" py-20 px-10">
            <div className="flex items-center justify-between max-w-7xl mx-auto flex-wrap md:flex-nowrap gap-10">
        <div className="w-full md:w-[40%]">
          <img src={img} alt="Intro" className="w-full" />
        </div>

    
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-[#4d4d4d] leading-tight">
         {heading}
            </h1>
            <p className="text-gray-500 mt-6 text-sm">
        {para}
            </p>
            <button className="mt-6 px-7 py-4 text-[17px] bg-[#4caf4f] text-white rounded-md font-medium hover:bg-green-600 transition">
       {btn}

            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pixelgrade;
