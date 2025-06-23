import React from "react";
import teslaLogo from "./Images/tesla.png";
import Image1 from "./Images/OurImagefirst.svg"
import Image2 from "./Images/ourImageSecond.svg"
import Image3 from "./Images/Ourthird.svg"
import Image4 from "./Images/Four.svg"
import Image5 from "./Images/ourFive.svg"
import Image6 from "./Images/OurSix.svg"
import { FaArrowRightLong } from "react-icons/fa6";
const Customer = () => {
  return (
    <section className="bg-gray-100 px-10 py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
  
        <div className="md:w-1/2">
          <img src={teslaLogo} alt="Tesla" className="rounded-xl w-full max-w-sm mx-auto" />
        </div>

  
        <div className="md:w-1/2">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. 
            Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, 
            nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. 
            Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. 
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>

          <h3 className="text-green-600 font-bold text-xl">Tim Smith</h3>
          <p className="text-gray-400 mb-8">British Dragon Boat Racing Association</p>

         
          <div className="flex flex-wrap gap-6 items-center mb-6">
            <img src={Image1} alt="brand1" className="w-10 h-10 " />
            <img src={Image2} alt="brand2" className="w-10 h-10" />
            <img src={Image3} alt="brand3" className="w-10 h-10" />
            <img src={Image4} alt="brand4" className="w-10 h-10" />
            <img src={Image5} alt="brand5" className="w-10 h-10" />
            <img src={Image6} alt="brand6" className="w-10 h-10" />
    

          <a href="#" className="text-green-600 font-bold text-[23px] flex items-center gap-2">
            Meet all customers <span className="text-xl"><FaArrowRightLong /></span>
          </a>
                </div>
        </div>
      </div>
    </section>
  );
};

export default Customer;
